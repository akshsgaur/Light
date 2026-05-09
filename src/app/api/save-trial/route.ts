import { NextResponse } from "next/server";
import { memoryStore } from "@/lib/memory";

export async function POST(request: Request) {
  const body = (await request.json()) as { caseId: string; trialId: string };
  const existing = await memoryStore.getCase(body.caseId);
  const savedTrialIds = Array.from(new Set([...(existing?.savedTrialIds ?? []), body.trialId]));

  if (existing) {
    await memoryStore.saveCase({
      ...existing,
      updatedAt: new Date().toISOString(),
      savedTrialIds,
      matches: existing.matches.map((match) => ({ ...match, saved: savedTrialIds.includes(match.trialId) })),
      status: "saving_trial"
    });
  }

  return NextResponse.json({ savedTrialIds });
}
