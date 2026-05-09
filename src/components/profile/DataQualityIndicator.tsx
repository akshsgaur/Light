import type { HealthContextProfile } from "@/lib/types";

export function DataQualityIndicator({ value }: { value: HealthContextProfile["dataQuality"] }) {
  return (
    <div className="rounded-2xl bg-background p-4">
      <p className="text-sm text-secondary">Data quality</p>
      <p className="mt-1 text-2xl font-semibold capitalize text-teal">{value}</p>
    </div>
  );
}
