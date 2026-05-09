"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AppShell } from "@/components/layout/AppShell";
import { ProfileSummaryCard } from "@/components/profile/ProfileSummaryCard";
import { EmptyState } from "@/components/shared/EmptyState";
import { ProgressSteps } from "@/components/shared/ProgressSteps";
import { buildCaseState, readCaseState, writeCaseState } from "@/lib/clientStorage";
import type { CaseState, TrialMatch, TrialRecord } from "@/lib/types";

export default function ProfilePage() {
  const router = useRouter();
  const [caseState, setCaseState] = useState<CaseState | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setCaseState(readCaseState());
  }, []);

  async function findMatches() {
    if (!caseState?.profile) return;
    setLoading(true);
    const response = await fetch("/api/match", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ caseId: caseState.id, profile: caseState.profile })
    });
    const data = (await response.json()) as { trials: TrialRecord[]; matches: TrialMatch[] };
    const next = buildCaseState({
      profile: caseState.profile,
      trials: data.trials,
      matches: data.matches,
      savedTrialIds: caseState.savedTrialIds,
      status: "matches_ready"
    });
    writeCaseState(next);
    setLoading(false);
    router.push("/matches");
  }

  if (!caseState?.profile) {
    return (
      <AppShell>
        <EmptyState title="No profile yet" text="Start with a demo case or paste patient context to build a profile." href="/" action="Start a case" />
      </AppShell>
    );
  }

  return (
    <AppShell>
      <ProgressSteps current="Profile" />
      <div className="mt-8 space-y-6">
        <ProfileSummaryCard profile={caseState.profile} />
        <button onClick={findMatches} disabled={loading} className="rounded-full bg-teal px-6 py-3 font-semibold text-white disabled:opacity-60">
          {loading ? "Finding trials..." : "Find Potential Trials"}
        </button>
      </div>
    </AppShell>
  );
}
