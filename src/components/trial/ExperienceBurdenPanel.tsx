import type { CommunityInsight, TrialRecord } from "@/lib/types";

export function ExperienceBurdenPanel({ trial, insights }: { trial: TrialRecord; insights: CommunityInsight[] }) {
  return (
    <section className="card rounded-[2rem] p-6">
      <h2 className="text-2xl font-semibold">Experience and logistics</h2>
      <p className="mt-2 text-secondary">Use these as planning prompts, not clinical facts.</p>
      <div className="mt-4 space-y-3">
        {trial.locations.map((location) => (
          <div key={`${location.facility}-${location.city}`} className="rounded-2xl bg-background p-4 text-sm text-secondary">
            {location.facility}, {location.city}{location.state ? `, ${location.state}` : ""}{location.distanceMiles !== undefined ? ` • ${location.distanceMiles} miles` : ""}
          </div>
        ))}
        {insights.map((insight) => (
          <div key={insight.id} className="rounded-2xl bg-teal/10 p-4 text-sm leading-6 text-teal">
            {insight.text}
          </div>
        ))}
      </div>
    </section>
  );
}
