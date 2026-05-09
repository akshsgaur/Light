import type { SourceReference } from "@/lib/types";

export function buildManualSourceReference(excerpt?: string): SourceReference {
  return {
    id: `src-manual-${Date.now()}`,
    label: "Patient-provided context",
    sourceType: "manual_input",
    excerpt,
    lastUpdated: new Date().toISOString()
  };
}
