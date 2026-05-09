import type { MemoryStore } from "@/lib/memory/memoryStore";
import type { CaseState } from "@/lib/types";

const cases = new Map<string, CaseState>();

export const localMemoryStore: MemoryStore = {
  async getCase(caseId: string) {
    return cases.get(caseId) ?? null;
  },
  async saveCase(caseState: CaseState) {
    cases.set(caseState.id, caseState);
  }
};
