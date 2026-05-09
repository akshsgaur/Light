import type { HealthContextProfile } from "@/lib/types";

export function ProfileFieldGrid({ profile }: { profile: HealthContextProfile }) {
  const fields = [
    ["Condition", profile.condition],
    ["Age", profile.age],
    ["Location", profile.location],
    ["Current status", profile.stageOrSeverity],
    ["Biomarkers", profile.biomarkers?.join(", ")],
    ["Prior treatments", profile.priorTreatments?.map((treatment) => treatment.name).join(", ")]
  ];
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {fields.map(([label, value]) => (
        <div key={String(label)} className="rounded-2xl border border-border bg-white p-4">
          <p className="text-xs uppercase tracking-wide text-secondary">{label}</p>
          <p className="mt-1 font-semibold">{value || "Needs confirmation"}</p>
        </div>
      ))}
    </div>
  );
}
