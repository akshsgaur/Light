import type { TrialLocation, TrialRecord } from "@/lib/types";

export function findNearestTrialLocation(trial: TrialRecord): TrialLocation | undefined {
  return [...trial.locations].sort((a, b) => (a.distanceMiles ?? 99999) - (b.distanceMiles ?? 99999))[0];
}
