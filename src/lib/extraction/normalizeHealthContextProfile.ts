import type { HealthContextProfile } from "@/lib/types";
import { detectUnknowns } from "@/lib/extraction/detectUnknowns";

export function normalizeHealthContextProfile(profile: Partial<HealthContextProfile>): HealthContextProfile {
  const now = new Date().toISOString();
  const unknowns = detectUnknowns(profile);
  const knownCount = [
    profile.condition,
    profile.age,
    profile.location,
    profile.stageOrSeverity,
    profile.priorTreatments?.length,
    profile.currentMedications?.length,
    profile.biomarkers?.length ?? profile.geneticMarkers?.length
  ].filter(Boolean).length;

  return {
    id: profile.id ?? `case-${Date.now()}`,
    createdAt: profile.createdAt ?? now,
    updatedAt: now,
    condition: profile.condition ?? "Unspecified condition",
    age: profile.age,
    location: profile.location,
    travelRadiusMiles: profile.travelRadiusMiles ?? profile.preferences?.maxTravelMiles ?? 100,
    diagnosisDate: profile.diagnosisDate,
    stageOrSeverity: profile.stageOrSeverity,
    subtype: profile.subtype,
    biomarkers: profile.biomarkers ?? [],
    geneticMarkers: profile.geneticMarkers ?? [],
    priorTreatments: profile.priorTreatments ?? [],
    currentTreatments: profile.currentTreatments ?? [],
    currentMedications: profile.currentMedications ?? [],
    functionalStatus: profile.functionalStatus,
    labs: profile.labs ?? {},
    comorbidities: profile.comorbidities ?? [],
    exclusionsKnown: profile.exclusionsKnown ?? [],
    unknowns,
    preferences: {
      recruitingOnly: profile.preferences?.recruitingOnly ?? true,
      maxTravelMiles: profile.preferences?.maxTravelMiles ?? profile.travelRadiusMiles ?? 100,
      language: profile.preferences?.language ?? "English",
      remoteOrHybridPreferred: profile.preferences?.remoteOrHybridPreferred ?? false,
      communityOptIn: profile.preferences?.communityOptIn ?? true
    },
    sourceDocuments: profile.sourceDocuments ?? [],
    sourceReferences: profile.sourceReferences ?? [],
    dataQuality: profile.dataQuality ?? (knownCount >= 6 ? "rich" : knownCount >= 3 ? "moderate" : "sparse")
  };
}
