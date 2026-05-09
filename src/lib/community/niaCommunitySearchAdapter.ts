import type { CommunityInsight } from "@/lib/types";

export async function searchCommunityWithNia(input: {
  query: string;
  condition?: string;
  trialId?: string;
}): Promise<CommunityInsight[]> {
  if (!process.env.NIA_API_KEY) return [];
  console.warn("Nia community adapter is a demo stub.", input.query);
  return [];
}
