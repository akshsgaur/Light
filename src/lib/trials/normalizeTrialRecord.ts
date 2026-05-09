import type { TrialRecord } from "@/lib/types";

export function normalizeTrialRecord(trial: TrialRecord): TrialRecord {
  return {
    ...trial,
    sourceReferences: trial.sourceReferences ?? [
      {
        id: `src-${trial.id}`,
        label: "Trial registry record",
        sourceType: "trial_registry",
        url: trial.sourceUrl,
        lastUpdated: trial.lastUpdated
      }
    ]
  };
}
