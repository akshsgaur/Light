import type { HealthContextProfile } from "@/lib/types";

export function PatientSummaryCard({ profile }: { profile: HealthContextProfile }) {
  return (
    <section className="card rounded-[2rem] p-6">
      <h2 className="text-2xl font-semibold">Patient summary</h2>
      <div className="mt-4 space-y-3 text-sm text-secondary">
        <p><strong className="text-text">Condition:</strong> {profile.condition}</p>
        <p><strong className="text-text">Location:</strong> {profile.location ?? "Needs confirmation"}</p>
        <p><strong className="text-text">Prior treatments:</strong> {profile.priorTreatments?.map((treatment) => treatment.name).join(", ") || "Needs confirmation"}</p>
        <p><strong className="text-text">To confirm:</strong> {profile.unknowns.join(", ")}</p>
      </div>
    </section>
  );
}
