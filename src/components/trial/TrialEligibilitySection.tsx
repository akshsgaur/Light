import { EligibilityGapPanel } from "@/components/matches/EligibilityGapPanel";
import type { TrialMatch, TrialRecord } from "@/lib/types";

export function TrialEligibilitySection({ trial, match }: { trial: TrialRecord; match?: TrialMatch }) {
  return (
    <section className="card rounded-[2rem] p-6">
      <h2 className="text-2xl font-semibold">Eligibility context</h2>
      <p className="mt-3 whitespace-pre-line leading-7 text-secondary">{trial.eligibilityCriteria}</p>
      {match ? (
        <div className="mt-6">
          <EligibilityGapPanel match={match} />
        </div>
      ) : null}
    </section>
  );
}
