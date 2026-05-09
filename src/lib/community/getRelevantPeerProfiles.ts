import { demoCommunityProfiles } from "@/lib/fixtures/demoCommunityProfiles";
import type { CommunityProfile, HealthContextProfile } from "@/lib/types";

export async function getRelevantPeerProfiles(input: {
  profile: HealthContextProfile;
  trialId?: string;
}): Promise<CommunityProfile[]> {
  const condition = input.profile.condition.toLowerCase();

  return demoCommunityProfiles
    .map((profile) => {
      const sameTrial = input.trialId && profile.trialId === input.trialId ? 3 : 0;
      const sameCondition = condition.includes(profile.condition.toLowerCase()) || profile.condition.toLowerCase().includes(condition) ? 2 : 0;
      const general = profile.status === "caregiver" || profile.status === "advocate" ? 1 : 0;
      return { profile, score: sameTrial + sameCondition + general };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((item) => item.profile)
    .slice(0, 4);
}
