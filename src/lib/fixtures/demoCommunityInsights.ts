import type { CommunityInsight } from "@/lib/types";

export const demoCommunityInsights: CommunityInsight[] = [
  {
    id: "insight-nsclc-docs",
    condition: "Non-small cell lung cancer",
    trialId: "trial-nsclc-egfr-targeted",
    insightType: "question_to_ask",
    text: "Patients discussing biomarker-driven studies often reported that coordinators asked for the original genetic testing report before pre-screening.",
    sourceLabel: "Synthetic community demo",
    safetyLabel: "community_experience",
    helpfulCount: 18
  },
  {
    id: "insight-nsclc-imaging",
    condition: "Non-small cell lung cancer",
    insightType: "screening_document",
    text: "Several caregivers mentioned having recent scan reports and treatment dates ready made the first coordinator call more concrete.",
    sourceLabel: "Synthetic community demo",
    safetyLabel: "community_experience",
    helpfulCount: 11
  },
  {
    id: "insight-pd-logistics",
    condition: "Parkinson's disease",
    trialId: "trial-pd-motor-fluctuation",
    insightType: "logistics",
    text: "Several participants in movement disorder studies mentioned that visit frequency and caregiver transportation were the biggest planning questions.",
    sourceLabel: "Synthetic community demo",
    safetyLabel: "community_experience",
    helpfulCount: 21
  },
  {
    id: "insight-pd-medication",
    condition: "Parkinson's disease",
    insightType: "question_to_ask",
    text: "People comparing Parkinson's studies often asked whether medication timing diaries were needed before screening.",
    sourceLabel: "Synthetic community demo",
    safetyLabel: "community_experience",
    helpfulCount: 14
  },
  {
    id: "insight-lupus-labs",
    condition: "Lupus",
    trialId: "trial-lupus-nephritis",
    insightType: "screening_document",
    text: "Patients discussing autoimmune studies often mentioned needing recent lab results and medication history before screening.",
    sourceLabel: "Synthetic community demo",
    safetyLabel: "community_experience",
    helpfulCount: 16
  },
  {
    id: "insight-lupus-burden",
    condition: "Lupus",
    insightType: "experience_burden",
    text: "Caregivers said it helped to ask early about lab visit frequency, flare policies, and what happens if steroid doses change.",
    sourceLabel: "Synthetic community demo",
    safetyLabel: "community_experience",
    helpfulCount: 9
  }
];
