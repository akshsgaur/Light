import { TrialFilters } from "@/components/matches/TrialFilters";

export function MatchDashboardHeader({ trialsCount, matchesCount }: { trialsCount: number; matchesCount: number }) {
  return (
    <section className="card rounded-[2rem] p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold text-teal">Potential trial matches</p>
          <h1 className="serif mt-2 text-4xl font-semibold">{matchesCount} potentially relevant trials</h1>
          <p className="mt-2 text-secondary">{trialsCount} trial records searched in deterministic demo fixtures.</p>
        </div>
        <TrialFilters />
      </div>
    </section>
  );
}
