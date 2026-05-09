import type { HealthContextProfile, TrialRecord } from "@/lib/types";
import { findNearestTrialLocation } from "@/lib/matching/findNearestTrialLocation";
import { isRecruitingStatus } from "@/lib/trials/trialStatus";

export function detectPossibleBlockers(profile: HealthContextProfile, trial: TrialRecord): string[] {
  const blockers: string[] = [];
  const criteria = trial.eligibilityCriteria.toLowerCase();
  const nearest = findNearestTrialLocation(trial);

  if (!isRecruitingStatus(trial.status)) {
    blockers.push(`Trial status is listed as "${trial.status}".`);
  }
  if (profile.age && trial.minimumAge && Number.parseInt(trial.minimumAge, 10) > profile.age) {
    blockers.push("Age may be below the listed minimum.");
  }
  if (profile.age && trial.maximumAge && Number.parseInt(trial.maximumAge, 10) < profile.age) {
    blockers.push("Age may be above the listed maximum.");
  }
  if (nearest?.distanceMiles !== undefined && nearest.distanceMiles > (profile.preferences.maxTravelMiles ?? profile.travelRadiusMiles ?? 100)) {
    blockers.push("Nearest listed site appears outside the stated travel range.");
  }
  if (criteria.includes("no prior immunotherapy") && profile.priorTreatments?.some((treatment) => treatment.name.toLowerCase().includes("immunotherapy"))) {
    blockers.push("Prior immunotherapy appears in the profile and the criteria mention no prior immunotherapy.");
  }
  if (criteria.includes("high-dose steroids") && profile.priorTreatments?.some((treatment) => treatment.name.toLowerCase().includes("steroid"))) {
    blockers.push("Steroid dose needs review because the criteria mention high-dose steroid exclusions.");
  }
  profile.exclusionsKnown?.forEach((exclusion) => {
    if (criteria.includes(exclusion.toLowerCase())) blockers.push(`Known exclusion may overlap: ${exclusion}.`);
  });

  return blockers;
}
