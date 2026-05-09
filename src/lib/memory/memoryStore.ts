import type { CaseState } from "@/lib/types";

export type MemoryStore = {
  getCase(caseId: string): Promise<CaseState | null>;
  saveCase(caseState: CaseState): Promise<void>;
};
