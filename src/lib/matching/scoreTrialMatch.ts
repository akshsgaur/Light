import type { HealthContextProfile, TrialRecord } from "@/lib/types";
import { detectKnownFit } from "@/lib/matching/detectKnownFit";
import { detectPossibleBlockers } from "@/lib/matching/detectPossibleBlockers";
import { isRecruitingStatus } from "@/lib/trials/trialStatus";

export function scoreTrialMatch(profile: HealthContextProfile, trial: TrialRecord): number {
  const knownFit = detectKnownFit(profile, trial).length;
  const blockers = detectPossibleBlockers(profile, trial).length;
  const statusBoost = isRecruitingStatus(trial.status) ? 15 : -15;
  return Math.max(0, Math.min(100, 35 + knownFit * 12 + statusBoost - blockers * 18));
}
