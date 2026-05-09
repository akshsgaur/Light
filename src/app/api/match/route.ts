import { NextResponse } from "next/server";
import { getCommunityInsights } from "@/lib/community/getCommunityInsights";
import { buildTrialMatches } from "@/lib/matching/buildTrialMatches";
import { memoryStore } from "@/lib/memory";
import { getCandidateTrials } from "@/lib/trials/getCandidateTrials";
import type { HealthContextProfile } from "@/lib/types";

export async function POST(request: Request) {
  const body = (await request.json()) as { caseId: string; profile: HealthContextProfile };
  const trials = await getCandidateTrials(body.profile);
  const communityInsights = (
    await Promise.all(trials.map((trial) => getCommunityInsights({ profile: body.profile, trial })))
  ).flat();
  const matches = buildTrialMatches({ profile: body.profile, trials, communityInsights });
  const existing = await memoryStore.getCase(body.caseId);
  await memoryStore.saveCase({
    id: body.caseId,
    createdAt: existing?.createdAt ?? new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    profile: body.profile,
    trials,
    matches,
    savedTrialIds: existing?.savedTrialIds ?? [],
    actionPlan: existing?.actionPlan,
    status: "matches_ready"
  });

  return NextResponse.json({ trials, matches, status: "matches_ready" });
}
