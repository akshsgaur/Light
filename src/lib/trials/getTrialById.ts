import { demoTrials } from "@/lib/fixtures/demoTrials";

export function getTrialById(trialId: string) {
  return demoTrials.find((trial) => trial.id === trialId) ?? null;
}
