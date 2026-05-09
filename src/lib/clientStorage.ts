"use client";

import type { CaseState, HealthContextProfile, PatientActionPlan, TrialMatch, TrialRecord } from "@/lib/types";

const CASE_KEY = "light.caseState";

export function readCaseState(): CaseState | null {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(CASE_KEY);
  return raw ? (JSON.parse(raw) as CaseState) : null;
}

export function writeCaseState(caseState: CaseState) {
  window.localStorage.setItem(CASE_KEY, JSON.stringify(caseState));
}

export function buildCaseState(input: {
  profile: HealthContextProfile;
  trials?: TrialRecord[];
  matches?: TrialMatch[];
  savedTrialIds?: string[];
  actionPlan?: PatientActionPlan;
  status: CaseState["status"];
}): CaseState {
  const existing = readCaseState();
  const now = new Date().toISOString();
  return {
    id: input.profile.id,
    createdAt: existing?.createdAt ?? now,
    updatedAt: now,
    profile: input.profile,
    trials: input.trials ?? existing?.trials ?? [],
    matches: input.matches ?? existing?.matches ?? [],
    savedTrialIds: input.savedTrialIds ?? existing?.savedTrialIds ?? [],
    actionPlan: input.actionPlan ?? existing?.actionPlan,
    status: input.status
  };
}
