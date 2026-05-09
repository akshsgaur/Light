import type { HealthContextProfile } from "@/lib/types";

export function detectUnknowns(profile: Partial<HealthContextProfile>): string[] {
  const unknowns = new Set(profile.unknowns ?? []);
  const condition = profile.condition?.toLowerCase() ?? "";

  if (!profile.location) unknowns.add("Location and travel preference");
  if (!profile.currentMedications?.length) unknowns.add("Current medications");
  if (!profile.priorTreatments?.length) unknowns.add("Prior treatment history and dates");
  if (!profile.stageOrSeverity) unknowns.add("Disease severity or current status");
  if (!profile.diagnosisDate) unknowns.add("Diagnosis confirmation and date");

  if (condition.includes("lung") || condition.includes("cancer")) {
    if (!profile.biomarkers?.length && !profile.geneticMarkers?.length) unknowns.add("Biomarker or genetic testing report");
    unknowns.add("Updated imaging or metastasis status");
    unknowns.add("Performance status");
    unknowns.add("Prior treatment lines and dates");
  }

  if (condition.includes("parkinson")) {
    unknowns.add("Disease severity score");
    unknowns.add("Mobility status");
    unknowns.add("Cognitive status");
    unknowns.add("Medication response details");
  }

  if (condition.includes("lupus") || condition.includes("rheumatoid")) {
    unknowns.add("Organ involvement details");
    unknowns.add("Latest labs");
    unknowns.add("Autoantibody status");
    unknowns.add("Current steroid or immunosuppressive dose");
  }

  return Array.from(unknowns);
}
