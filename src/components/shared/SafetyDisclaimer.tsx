import { SAFETY_DISCLAIMER } from "@/lib/constants";

export function SafetyDisclaimer() {
  return (
    <div className="rounded-3xl border border-border bg-white/70 p-4 text-sm leading-6 text-secondary">
      <strong className="text-text">Safety note:</strong> {SAFETY_DISCLAIMER}
    </div>
  );
}
