import type { HealthContextProfile, TrialMatch } from "@/lib/types";

export function generateCoordinatorEmail(input: {
  profile: HealthContextProfile;
  match: TrialMatch;
}): string {
  const profileFacts = [
    input.profile.condition,
    input.profile.age ? `${input.profile.age} years old` : undefined,
    input.profile.location ? `located near ${input.profile.location}` : undefined,
    input.profile.biomarkers?.length ? `biomarkers/genetic markers noted: ${input.profile.biomarkers.join(", ")}` : undefined,
    input.profile.priorTreatments?.length ? `prior treatments noted: ${input.profile.priorTreatments.map((treatment) => treatment.name).join(", ")}` : undefined
  ].filter(Boolean);

  return `Hello,

I am exploring whether "${input.match.title}" may be relevant and would like to understand what information is needed for pre-screening.

Context I can share for review:
${profileFacts.map((fact) => `- ${fact}`).join("\n")}

Questions:
- What records should I send before a pre-screening conversation?
- Are there specific labs, imaging, medication details, or treatment dates you need?
- Are there visit frequency, travel, or remote participation details I should understand?

I understand that only the trial team can confirm whether this study is appropriate to discuss further or whether pre-screening can proceed.

Thank you.`;
}
