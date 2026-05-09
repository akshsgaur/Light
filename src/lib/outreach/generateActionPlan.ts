import { generateCoordinatorEmail } from "@/lib/outreach/generateCoordinatorEmail";
import { generateDoctorQuestions } from "@/lib/outreach/generateDoctorQuestions";
import type { HealthContextProfile, PatientActionPlan, TrialMatch } from "@/lib/types";

export function generateActionPlan(input: {
  profile: HealthContextProfile;
  savedTrialIds: string[];
  matches: TrialMatch[];
}): PatientActionPlan {
  const savedMatches = input.matches.filter((match) => input.savedTrialIds.includes(match.trialId));
  const outreachDrafts = Object.fromEntries(
    savedMatches.map((match) => [
      match.trialId,
      generateCoordinatorEmail({
        profile: input.profile,
        match
      })
    ])
  );

  return {
    savedTrialIds: input.savedTrialIds,
    nextSteps: [
      "Review saved trials with your care team before contacting coordinators.",
      "Collect the documents most likely to be requested for pre-screening.",
      "Ask each coordinator what information is needed before sharing detailed records.",
      "Track responses, visit expectations, and unresolved questions in one place."
    ],
    doctorQuestions: generateDoctorQuestions(input.profile),
    coordinatorQuestions: [
      "What records are needed for pre-screening?",
      "Which criteria require coordinator or clinician confirmation?",
      "Are remote, hybrid, or local visits available?",
      "What is the expected visit frequency and screening timeline?",
      "Are current medications or prior treatment dates important to review?"
    ],
    documentsToCollect: [
      "Diagnosis summary or pathology report",
      "Recent clinic note",
      "Medication list with doses",
      "Prior treatment timeline",
      "Recent labs",
      "Recent imaging or disease activity reports",
      "Insurance and preferred contact information"
    ],
    outreachDrafts
  };
}
