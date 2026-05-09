import type { CommunityInsight, HealthContextProfile } from "@/lib/types";

export function createCommunityContribution(input: {
  profile: HealthContextProfile;
  text: string;
  consentToShare: boolean;
}): {
  accepted: boolean;
  safetyLabel: string;
  storedContribution?: CommunityInsight;
} {
  if (!input.consentToShare) {
    return { accepted: false, safetyLabel: "not_stored_without_consent" };
  }

  return {
    accepted: true,
    safetyLabel: "community_experience",
    storedContribution: {
      id: `contribution-${Date.now()}`,
      condition: input.profile.condition,
      insightType: "patient_story",
      text: input.text,
      sourceLabel: "Local demo contribution",
      safetyLabel: "community_experience"
    }
  };
}
