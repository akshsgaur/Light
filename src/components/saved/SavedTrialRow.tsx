import Link from "next/link";
import { StatusBadge } from "@/components/shared/StatusBadge";
import type { TrialMatch } from "@/lib/types";

export function SavedTrialRow({ match }: { match: TrialMatch }) {
  return (
    <div className="rounded-2xl border border-border bg-white p-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <StatusBadge status={match.status} />
          <h3 className="mt-3 font-semibold">{match.title}</h3>
          <p className="mt-1 text-sm text-secondary">{match.nearestSite ?? "Site details need confirmation"}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link href={`/trial/${match.trialId}`} className="rounded-full border border-border px-4 py-2 text-sm font-semibold">Details</Link>
          <Link href={`/outreach/${match.trialId}`} className="rounded-full bg-teal px-4 py-2 text-sm font-semibold text-white">Outreach</Link>
        </div>
      </div>
    </div>
  );
}
