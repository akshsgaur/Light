import type { CommunityProfile, HealthContextProfile } from "@/lib/types";

export function createCommunityMessage(input: {
  profile: HealthContextProfile;
  peerProfile: CommunityProfile;
}): string {
  return `Hi ${input.peerProfile.displayName}, I am exploring a trial or care path related to a similar condition. I would appreciate hearing about your experience if you are comfortable sharing. No pressure at all.`;
}
