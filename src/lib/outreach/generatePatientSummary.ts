import type { HealthContextProfile } from "@/lib/types";

export function generatePatientSummary(profile: HealthContextProfile): string {
  return [
    `Condition: ${profile.condition}`,
    profile.age ? `Age: ${profile.age}` : undefined,
    profile.location ? `Location: ${profile.location}` : undefined,
    profile.stageOrSeverity ? `Current status: ${profile.stageOrSeverity}` : undefined,
    profile.biomarkers?.length ? `Biomarkers/genetic markers: ${profile.biomarkers.join(", ")}` : undefined,
    profile.priorTreatments?.length ? `Prior treatments: ${profile.priorTreatments.map((treatment) => treatment.name).join(", ")}` : undefined,
    profile.currentMedications?.length ? `Current medications: ${profile.currentMedications.join(", ")}` : undefined,
    `Information to confirm: ${profile.unknowns.join(", ")}`
  ]
    .filter(Boolean)
    .join("\n");
}
