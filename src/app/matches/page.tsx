"use client";

import { useEffect, useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { MatchDashboardHeader } from "@/components/matches/MatchDashboardHeader";
import { TrialMatchCard } from "@/components/matches/TrialMatchCard";
import { EmptyState } from "@/components/shared/EmptyState";
import { ProgressSteps } from "@/components/shared/ProgressSteps";
import { readCaseState, writeCaseState } from "@/lib/clientStorage";
import type { CaseState } from "@/lib/types";

export default function MatchesPage() {
  const [caseState, setCaseState] = useState<CaseState | null>(null);

  useEffect(() => {
    setCaseState(readCaseState());
  }, []);

  async function saveTrial(trialId: string) {
    if (!caseState) return;
    const savedTrialIds = Array.from(new Set([...caseState.savedTrialIds, trialId]));
    const next = {
      ...caseState,
      savedTrialIds,
      matches: caseState.matches.map((match) => ({ ...match, saved: savedTrialIds.includes(match.trialId) }))
    };
    writeCaseState(next);
    setCaseState(next);
    await fetch("/api/save-trial", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ caseId: caseState.id, trialId })
    });
  }

  if (!caseState?.matches.length) {
    return (
      <AppShell>
        <EmptyState title="No matches yet" text="Build a profile first, then ask Light to search deterministic trial fixtures." href="/profile" action="Review profile" />
      </AppShell>
    );
  }

  return (
    <AppShell>
      <ProgressSteps current="Matches" />
      <div className="mt-8 space-y-5">
        <MatchDashboardHeader trialsCount={caseState.trials.length} matchesCount={caseState.matches.length} />
        {caseState.matches.map((match) => (
          <TrialMatchCard key={match.trialId} match={match} onSave={saveTrial} />
        ))}
      </div>
    </AppShell>
  );
}
