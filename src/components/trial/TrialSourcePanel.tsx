import { SourceBadge } from "@/components/shared/SourceBadge";
import type { TrialRecord } from "@/lib/types";

export function TrialSourcePanel({ trial }: { trial: TrialRecord }) {
  return (
    <section className="card rounded-[2rem] p-6">
      <h2 className="text-2xl font-semibold">Sources</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {trial.sourceReferences?.map((source) => <SourceBadge key={source.id} source={source} />)}
      </div>
      <p className="mt-4 text-sm text-secondary">Synthetic fixtures are used for demo reliability and should not be treated as live registry records.</p>
    </section>
  );
}
