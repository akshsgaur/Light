import { buildTrialMatch } from "@/lib/matching/buildTrialMatch";
import type { CommunityInsight, HealthContextProfile, TrialMatch, TrialRecord } from "@/lib/types";

export function buildTrialMatches(input: {
  profile: HealthContextProfile;
  trials: TrialRecord[];
  communityInsights?: CommunityInsight[];
}): TrialMatch[] {
  return input.trials
    .map((trial) =>
      buildTrialMatch({
        profile: input.profile,
        trial,
        communityInsights: input.communityInsights?.filter((insight) => insight.trialId === trial.id || !insight.trialId).slice(0, 2)
      })
    )
    .sort((a, b) => b.evidenceStrengthScore - a.evidenceStrengthScore);
}
