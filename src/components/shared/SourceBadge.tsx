import type { SourceReference } from "@/lib/types";

export function SourceBadge({ source }: { source: SourceReference }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-secondary">
      {source.label}
    </span>
  );
}
