import { getCommunityInsights } from "@/lib/community/getCommunityInsights";
import { extractHealthContextProfile } from "@/lib/extraction/extractHealthContextProfile";
import { buildTrialMatches } from "@/lib/matching/buildTrialMatches";
import { memoryStore } from "@/lib/memory";
import { validateGeneratedText } from "@/lib/safety/validateGeneratedText";
import { getCandidateTrials } from "@/lib/trials/getCandidateTrials";
import type { CaseState, HealthContextProfile } from "@/lib/types";

export async function runLightPipeline(input: {
  caseId?: string;
  noteText?: string;
  manualFields?: Partial<HealthContextProfile>;
  demoCaseId?: string;
}): Promise<CaseState> {
  const profile = await extractHealthContextProfile(input);
  const trials = await getCandidateTrials(profile);
  const allInsights = (
    await Promise.all(
      trials.map((trial) =>
        getCommunityInsights({
          profile,
          trial
        })
      )
    )
  ).flat();
  const matches = buildTrialMatches({
    profile,
    trials,
    communityInsights: allInsights
  });
  const textToValidate = [
    ...matches.flatMap((match) => [...match.knownFit, ...match.needsConfirmation, ...match.possibleBlockers]),
    ...allInsights.map((insight) => insight.text)
  ].join("\n");
  const safety = validateGeneratedText(textToValidate);
  if (!safety.passed) {
    console.warn("Safety validation warnings", safety.issues);
  }

  const now = new Date().toISOString();
  const existing = await memoryStore.getCase(profile.id);
  const caseState: CaseState = {
    id: profile.id,
    createdAt: existing?.createdAt ?? now,
    updatedAt: now,
    profile,
    trials,
    matches,
    savedTrialIds: existing?.savedTrialIds ?? [],
    actionPlan: existing?.actionPlan,
    status: "matches_ready"
  };

  await memoryStore.saveCase(caseState);
  return caseState;
}
