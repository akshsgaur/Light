import type { HealthContextProfile } from "@/lib/types";

export function generateDoctorQuestions(profile: HealthContextProfile): string[] {
  return [
    `Which parts of my ${profile.condition} history should I confirm before contacting trial coordinators?`,
    "Do I have recent labs, imaging, or reports that trial teams usually request?",
    "Are there current medications or comorbidities I should ask coordinators about?",
    "How should I summarize prior treatments and dates accurately?",
    "Are there travel, visit frequency, or safety monitoring questions I should prioritize?"
  ];
}
