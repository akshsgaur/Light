import { SavedTrialRow } from "@/components/saved/SavedTrialRow";
import type { CaseState } from "@/lib/types";

export function SavedTrialsDashboard({ caseState }: { caseState: CaseState }) {
  const savedMatches = caseState.matches.filter((match) => caseState.savedTrialIds.includes(match.trialId));
  return (
    <section className="card rounded-[2rem] p-6">
      <h1 className="serif text-4xl font-semibold">Saved trials</h1>
      <p className="mt-2 text-secondary">Use this dashboard to track next steps and contact status.</p>
      <div className="mt-6 space-y-3">
        {savedMatches.map((match) => <SavedTrialRow key={match.trialId} match={match} />)}
        {!savedMatches.length ? <p className="text-secondary">No saved trials yet.</p> : null}
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl bg-amber/10 p-4">
          <h2 className="font-semibold text-amber">Missing info checklist</h2>
          <ul className="mt-3 space-y-2 text-sm text-secondary">
            {caseState.profile?.unknowns.map((unknown) => <li key={unknown}>• {unknown}</li>)}
          </ul>
        </div>
        <div className="rounded-2xl bg-background p-4">
          <h2 className="font-semibold">Contact status</h2>
          <p className="mt-3 text-sm text-secondary">Not contacted yet. Prepare outreach drafts before sending anything to a coordinator.</p>
        </div>
      </div>
    </section>
  );
}
