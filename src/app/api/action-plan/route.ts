import { NextResponse } from "next/server";
import { generateActionPlan } from "@/lib/outreach/generateActionPlan";
import { memoryStore } from "@/lib/memory";
import type { HealthContextProfile, TrialMatch } from "@/lib/types";

export async function POST(request: Request) {
  const body = (await request.json()) as {
    caseId: string;
    profile: HealthContextProfile;
    savedTrialIds: string[];
    matches: TrialMatch[];
  };
  const actionPlan = generateActionPlan(body);
  const existing = await memoryStore.getCase(body.caseId);
  if (existing) {
    await memoryStore.saveCase({
      ...existing,
      updatedAt: new Date().toISOString(),
      actionPlan,
      status: "action_plan_ready"
    });
  }

  return NextResponse.json({ actionPlan });
}
