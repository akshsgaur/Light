import { demoCommunityInsights } from "@/lib/fixtures/demoCommunityInsights";
import type { CommunityInsight, HealthContextProfile, TrialRecord } from "@/lib/types";

export async function getCommunityInsights(input: {
  profile: HealthContextProfile;
  trial?: TrialRecord;
}): Promise<CommunityInsight[]> {
  const condition = input.profile.condition.toLowerCase();
  const trialId = input.trial?.id;

  return demoCommunityInsights
    .filter((insight) => {
      const sameTrial = trialId && insight.trialId === trialId;
      const sameCondition = insight.condition && condition.includes(insight.condition.toLowerCase());
      const trialCondition = input.trial?.conditions.some((trialCondition) => condition.includes(trialCondition.toLowerCase()) || trialCondition.toLowerCase().includes(condition));
      return sameTrial || sameCondition || trialCondition;
    })
    .slice(0, 3);
}
