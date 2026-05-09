import { getDemoCase } from "@/lib/fixtures/demoCases";
import type { HealthContextProfile } from "@/lib/types";

export function extractFromDemoCase(demoCaseId?: string): HealthContextProfile {
  const demoCase = getDemoCase(demoCaseId);
  return {
    ...demoCase.profile,
    updatedAt: new Date().toISOString()
  };
}
