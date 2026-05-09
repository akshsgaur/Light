import { extractFromDemoCase } from "@/lib/extraction/extractFromDemoCase";
import { normalizeHealthContextProfile } from "@/lib/extraction/normalizeHealthContextProfile";
import { buildManualSourceReference } from "@/lib/extraction/sourceAttribution";
import type { HealthContextProfile, TreatmentHistory } from "@/lib/types";

function extractAge(text: string): number | undefined {
  const ageMatch = text.match(/\b(?:age|aged|patient is)\s*(\d{1,3})\b/i) ?? text.match(/\b(\d{2})-year-old\b/i);
  return ageMatch ? Number(ageMatch[1]) : undefined;
}

function extractCondition(text: string): string | undefined {
  const lower = text.toLowerCase();
  if (lower.includes("non-small cell") || lower.includes("nsclc")) return "Non-small cell lung cancer";
  if (lower.includes("parkinson")) return "Parkinson's disease";
  if (lower.includes("lupus") || lower.includes("sle")) return "Lupus";
  return undefined;
}

function extractLocation(text: string): string | undefined {
  const known = ["San Francisco, CA", "Boston, MA", "Austin, TX", "Houston, TX", "Dallas, TX"];
  return known.find((location) => text.toLowerCase().includes(location.toLowerCase()));
}

function extractTreatments(text: string): TreatmentHistory[] {
  const lower = text.toLowerCase();
  const treatments: TreatmentHistory[] = [];
  if (lower.includes("chemotherapy")) treatments.push({ name: "Chemotherapy" });
  if (lower.includes("immunotherapy")) treatments.push({ name: "Immunotherapy" });
  if (lower.includes("levodopa")) treatments.push({ name: "Levodopa" });
  if (lower.includes("hydroxychloroquine")) treatments.push({ name: "Hydroxychloroquine" });
  if (lower.includes("steroid")) treatments.push({ name: "Steroids" });
  return treatments;
}

export async function extractHealthContextProfile(input: {
  caseId?: string;
  noteText?: string;
  manualFields?: Partial<HealthContextProfile>;
  demoCaseId?: string;
}): Promise<HealthContextProfile> {
  if (input.demoCaseId) {
    return extractFromDemoCase(input.demoCaseId);
  }

  const noteText = input.noteText ?? "";
  const lower = noteText.toLowerCase();
  const condition = input.manualFields?.condition ?? extractCondition(noteText);
  const priorTreatments = input.manualFields?.priorTreatments ?? extractTreatments(noteText);
  const biomarkers = lower.includes("egfr") ? ["EGFR exon 19 deletion"] : input.manualFields?.biomarkers;

  return normalizeHealthContextProfile({
    ...input.manualFields,
    id: input.caseId ?? input.manualFields?.id,
    condition,
    age: input.manualFields?.age ?? extractAge(noteText),
    location: input.manualFields?.location ?? extractLocation(noteText),
    biomarkers,
    geneticMarkers: input.manualFields?.geneticMarkers ?? biomarkers,
    priorTreatments,
    currentMedications: input.manualFields?.currentMedications ?? priorTreatments.map((treatment) => treatment.name).filter((name) => lower.includes(name.toLowerCase())),
    sourceReferences: [buildManualSourceReference(noteText.slice(0, 220))]
  });
}
