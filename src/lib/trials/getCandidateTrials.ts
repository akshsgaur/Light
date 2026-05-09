import { demoTrials } from "@/lib/fixtures/demoTrials";
import { searchClinicalTrialsGov } from "@/lib/trials/clinicalTrialsGovAdapter";
import { searchTrialsWithNia } from "@/lib/trials/niaTrialSearchAdapter";
import type { HealthContextProfile, TrialRecord } from "@/lib/types";

function fixtureCandidates(profile: HealthContextProfile): TrialRecord[] {
  const condition = profile.condition.toLowerCase();
  const matches = demoTrials.filter((trial) =>
    trial.conditions.some((trialCondition) => condition.includes(trialCondition.toLowerCase()) || trialCondition.toLowerCase().includes(condition))
  );
  return matches.length ? matches : demoTrials;
}

export async function getCandidateTrials(profile: HealthContextProfile): Promise<TrialRecord[]> {
  const fixtures = fixtureCandidates(profile);

  const niaTrials = await searchTrialsWithNia({ query: profile.condition, profile });
  if (niaTrials.length) return [...niaTrials, ...fixtures].slice(0, 12);

  if (process.env.CTGOV_ENABLED === "true") {
    const ctGovTrials = await searchClinicalTrialsGov({
      condition: profile.condition,
      recruitingOnly: profile.preferences.recruitingOnly,
      pageSize: 6
    });
    if (ctGovTrials.length) return [...fixtures, ...ctGovTrials].slice(0, 12);
  }

  return fixtures;
}
