import type { HealthContextProfile, TrialRecord } from "@/lib/types";
import { findNearestTrialLocation } from "@/lib/matching/findNearestTrialLocation";
import { isRecruitingStatus } from "@/lib/trials/trialStatus";

function includesAny(text: string, values: string[] = []) {
  return values.some((value) => text.includes(value.toLowerCase()));
}

export function detectKnownFit(profile: HealthContextProfile, trial: TrialRecord): string[] {
  const criteria = `${trial.conditions.join(" ")} ${trial.eligibilityCriteria}`.toLowerCase();
  const knownFit: string[] = [];
  const nearest = findNearestTrialLocation(trial);

  if (trial.conditions.some((condition) => profile.condition.toLowerCase().includes(condition.toLowerCase()) || condition.toLowerCase().includes(profile.condition.toLowerCase()))) {
    knownFit.push("Condition appears in the trial focus.");
  }
  if (profile.age && (!trial.minimumAge || Number.parseInt(trial.minimumAge, 10) <= profile.age) && (!trial.maximumAge || Number.parseInt(trial.maximumAge, 10) >= profile.age)) {
    knownFit.push("Age appears within the listed range.");
  }
  if (isRecruitingStatus(trial.status)) {
    knownFit.push("Trial status is currently recruiting or active for review.");
  }
  if (nearest?.distanceMiles !== undefined && nearest.distanceMiles <= (profile.preferences.maxTravelMiles ?? profile.travelRadiusMiles ?? 100)) {
    knownFit.push("Nearest listed site appears within the stated travel range.");
  }
  if (includesAny(criteria, [...(profile.biomarkers ?? []), ...(profile.geneticMarkers ?? [])])) {
    knownFit.push("A biomarker or genetic marker from the profile appears relevant.");
  }
  if (profile.priorTreatments?.some((treatment) => criteria.includes(treatment.name.toLowerCase()))) {
    knownFit.push("Prior treatment history is mentioned in the criteria and should be reviewed.");
  }

  return knownFit;
}
