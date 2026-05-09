import type { CommunityProfile } from "@/lib/types";

export const demoCommunityProfiles: CommunityProfile[] = [
  {
    id: "peer-nsclc-maya",
    displayName: "Maya, caregiver",
    condition: "Non-small cell lung cancer",
    trialId: "trial-nsclc-egfr-targeted",
    status: "caregiver",
    quote: "The most useful first step was gathering the biomarker report and a clean treatment timeline.",
    openToConnect: true,
    source: "synthetic_demo"
  },
  {
    id: "peer-nsclc-jon",
    displayName: "Jon",
    condition: "Non-small cell lung cancer",
    status: "screening",
    quote: "I wish I had asked about scan timing and travel support earlier.",
    openToConnect: false,
    source: "synthetic_demo"
  },
  {
    id: "peer-pd-ruth",
    displayName: "Ruth",
    condition: "Parkinson's disease",
    trialId: "trial-pd-motor-fluctuation",
    status: "considering",
    quote: "Visit timing mattered as much as the study itself because my best mobility window is in the morning.",
    openToConnect: true,
    source: "synthetic_demo"
  },
  {
    id: "peer-pd-alex",
    displayName: "Alex, caregiver",
    condition: "Parkinson's disease",
    status: "caregiver",
    quote: "Medication diaries were easier when we started tracking a week before calls.",
    openToConnect: true,
    source: "synthetic_demo"
  },
  {
    id: "peer-lupus-ina",
    displayName: "Ina",
    condition: "Lupus",
    trialId: "trial-lupus-nephritis",
    status: "completed",
    quote: "Having labs, medication doses, and flare notes in one folder made conversations less stressful.",
    openToConnect: true,
    source: "synthetic_demo"
  },
  {
    id: "peer-lupus-sam",
    displayName: "Sam, advocate",
    condition: "Lupus",
    status: "advocate",
    quote: "Ask what information the study needs before sharing personal details.",
    openToConnect: false,
    source: "synthetic_demo"
  }
];
