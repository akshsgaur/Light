import { StatusBadge } from "@/components/shared/StatusBadge";
import type { TrialRecord } from "@/lib/types";

export function TrialDetailHeader({ trial }: { trial: TrialRecord }) {
  return (
    <section className="card rounded-[2rem] p-6">
      <StatusBadge status={trial.status} />
      <h1 className="serif mt-4 text-4xl font-semibold">{trial.title}</h1>
      <p className="mt-3 max-w-3xl leading-7 text-secondary">{trial.briefSummary}</p>
      <div className="mt-4 flex flex-wrap gap-2 text-sm text-secondary">
        <span>{trial.phase}</span>
        <span>•</span>
        <span>{trial.sponsor}</span>
      </div>
    </section>
  );
}
