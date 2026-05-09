export type SourceReference = {
  id: string;
  label: string;
  sourceType:
    | "patient_document"
    | "trial_registry"
    | "community_experience"
    | "manual_input"
    | "sponsor_context"
    | "demo_fixture";
  url?: string;
  excerpt?: string;
  lastUpdated?: string;
};

export type TreatmentHistory = {
  name: string;
  startDate?: string;
  endDate?: string;
  response?: string;
  notes?: string;
};

export type SourceDocument = {
  id: string;
  filename: string;
  type: "pdf" | "image" | "text" | "portal_export" | "manual";
  extractedText?: string;
  uploadedAt: string;
};

export type HealthContextProfile = {
  id: string;
  createdAt: string;
  updatedAt: string;
  condition: string;
  age?: number;
  location?: string;
  travelRadiusMiles?: number;
  diagnosisDate?: string;
  stageOrSeverity?: string;
  subtype?: string;
  biomarkers?: string[];
  geneticMarkers?: string[];
  priorTreatments?: TreatmentHistory[];
  currentTreatments?: string[];
  currentMedications?: string[];
  functionalStatus?: string;
  labs?: Record<string, string>;
  comorbidities?: string[];
  exclusionsKnown?: string[];
  unknowns: string[];
  preferences: {
    recruitingOnly?: boolean;
    maxTravelMiles?: number;
    language?: string;
    remoteOrHybridPreferred?: boolean;
    communityOptIn?: boolean;
  };
  sourceDocuments?: SourceDocument[];
  sourceReferences?: SourceReference[];
  dataQuality: "rich" | "moderate" | "sparse";
};

export type TrialLocation = {
  facility: string;
  city: string;
  state?: string;
  country?: string;
  distanceMiles?: number;
};

export type TrialRecord = {
  id: string;
  nctId?: string;
  title: string;
  officialTitle?: string;
  status: string;
  phase?: string;
  conditions: string[];
  interventions?: string[];
  eligibilityCriteria: string;
  minimumAge?: string;
  maximumAge?: string;
  locations: TrialLocation[];
  sponsor?: string;
  briefSummary?: string;
  sourceUrl?: string;
  lastUpdated?: string;
  sourceReferences?: SourceReference[];
};

export type CommunityInsight = {
  id: string;
  condition?: string;
  trialId?: string;
  insightType:
    | "patient_story"
    | "caregiver_tip"
    | "screening_document"
    | "logistics"
    | "question_to_ask"
    | "common_blocker"
    | "experience_burden"
    | "emotional_support";
  text: string;
  sourceLabel: string;
  safetyLabel: "community_experience" | "needs_clinician_confirmation";
  helpfulCount?: number;
};

export type CommunityProfile = {
  id: string;
  displayName: string;
  condition: string;
  trialId?: string;
  status: "considering" | "screening" | "enrolled" | "completed" | "caregiver" | "advocate";
  quote: string;
  openToConnect: boolean;
  source: "synthetic_demo" | "user_opt_in" | "partner_community";
};

export type TrialMatch = {
  trialId: string;
  title: string;
  status: string;
  nearestSite?: string;
  distanceMiles?: number;
  matchStrength: "strong" | "good" | "possible";
  evidenceStrengthScore: number;
  knownFit: string[];
  needsConfirmation: string[];
  possibleBlockers: string[];
  sourceReferences: SourceReference[];
  communityInsights: CommunityInsight[];
  saved?: boolean;
};

export type PatientActionPlan = {
  savedTrialIds: string[];
  nextSteps: string[];
  doctorQuestions: string[];
  coordinatorQuestions: string[];
  documentsToCollect: string[];
  outreachDrafts: Record<string, string>;
};

export type CaseState = {
  id: string;
  createdAt: string;
  updatedAt: string;
  profile?: HealthContextProfile;
  trials: TrialRecord[];
  matches: TrialMatch[];
  savedTrialIds: string[];
  actionPlan?: PatientActionPlan;
  status:
    | "idle"
    | "extracting_profile"
    | "profile_ready"
    | "matching_trials"
    | "matches_ready"
    | "saving_trial"
    | "action_plan_ready"
    | "error";
};
