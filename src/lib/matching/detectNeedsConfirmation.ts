import type { HealthContextProfile, TrialRecord } from "@/lib/types";

export function detectNeedsConfirmation(profile: HealthContextProfile, trial: TrialRecord): string[] {
  const criteria = trial.eligibilityCriteria.toLowerCase();
  const confirmations = new Set<string>();

  profile.unknowns.forEach((unknown) => confirmations.add(unknown));
  if (criteria.includes("lab") || criteria.includes("blood") || criteria.includes("organ function")) confirmations.add("Latest labs and organ function criteria");
  if (criteria.includes("performance") || criteria.includes("functional")) confirmations.add("Functional or performance status");
  if (criteria.includes("imaging") || criteria.includes("measurable")) confirmations.add("Recent imaging or measurable disease status");
  if (criteria.includes("cognitive")) confirmations.add("Cognitive screening status");
  if (criteria.includes("mobility")) confirmations.add("Mobility assessment");
  if (criteria.includes("stable medication") || criteria.includes("dose")) confirmations.add("Current medication compatibility and dose");
  if (criteria.includes("biopsy")) confirmations.add("Biopsy or pathology documentation");

  return Array.from(confirmations).slice(0, 6);
}
