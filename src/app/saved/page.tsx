"use client";

import { useEffect, useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { SavedTrialsDashboard } from "@/components/saved/SavedTrialsDashboard";
import { EmptyState } from "@/components/shared/EmptyState";
import { ProgressSteps } from "@/components/shared/ProgressSteps";
import { readCaseState } from "@/lib/clientStorage";
import type { CaseState } from "@/lib/types";

export default function SavedPage() {
  const [caseState, setCaseState] = useState<CaseState | null>(null);

  useEffect(() => {
    setCaseState(readCaseState());
  }, []);

  if (!caseState) {
    return (
      <AppShell>
        <EmptyState title="No saved trials yet" text="Start the golden path and save trial cards for outreach prep." href="/" action="Start a case" />
      </AppShell>
    );
  }

  return (
    <AppShell>
      <ProgressSteps current="Saved" />
      <div className="mt-8">
        <SavedTrialsDashboard caseState={caseState} />
      </div>
    </AppShell>
  );
}
