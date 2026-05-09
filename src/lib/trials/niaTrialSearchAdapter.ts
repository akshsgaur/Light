import type { HealthContextProfile, TrialRecord } from "@/lib/types";

export async function searchTrialsWithNia(input: {
  query: string;
  profile: HealthContextProfile;
}): Promise<TrialRecord[]> {
  if (!process.env.NIA_API_KEY) return [];
  console.warn("Nia trial search adapter is a demo stub.", input.query);
  return [];
}
