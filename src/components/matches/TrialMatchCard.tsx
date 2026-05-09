"use client";

import Link from "next/link";
import { CommunitySnippet } from "@/components/matches/CommunitySnippet";
import { EligibilityGapPanel } from "@/components/matches/EligibilityGapPanel";
import { SourceBadge } from "@/components/shared/SourceBadge";
import { StatusBadge } from "@/components/shared/StatusBadge";
import type { TrialMatch } from "@/lib/types";

export function TrialMatchCard({ match, onSave }: { match: TrialMatch; onSave?: (trialId: string) => void }) {
  return (
    <article className="card rounded-[2rem] p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="flex flex-wrap gap-2">
            <StatusBadge status={match.status} />
            <span className="rounded-full bg-teal/10 px-3 py-1 text-xs font-semibold capitalize text-teal">{match.matchStrength} match</span>
            <span className="rounded-full bg-background px-3 py-1 text-xs font-semibold text-secondary">Score {match.evidenceStrengthScore}</span>
          </div>
          <h2 className="mt-4 text-2xl font-semibold">{match.title}</h2>
          <p className="mt-2 text-sm text-secondary">{match.nearestSite ?? "Site details need confirmation"}{match.distanceMiles !== undefined ? ` • ${match.distanceMiles} miles` : ""}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button onClick={() => onSave?.(match.trialId)} className="rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold text-teal">
            {match.saved ? "Saved" : "Save"}
          </button>
          <Link href={`/trial/${match.trialId}`} className="rounded-full bg-teal px-4 py-2 text-sm font-semibold text-white">
            View details
          </Link>
          <Link href={`/outreach/${match.trialId}`} className="rounded-full bg-text px-4 py-2 text-sm font-semibold text-white">
            Prepare outreach
          </Link>
          <Link href={`/community/${match.trialId}`} className="rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold text-text">
            Talk to someone
          </Link>
        </div>
      </div>
      <div className="mt-6">
        <EligibilityGapPanel match={match} />
      </div>
      <div className="mt-5">
        <CommunitySnippet insight={match.communityInsights[0]} />
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {match.sourceReferences.map((source) => <SourceBadge key={source.id} source={source} />)}
      </div>
    </article>
  );
}
