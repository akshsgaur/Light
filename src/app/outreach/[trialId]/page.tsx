"use client";

import { useEffect, useMemo, useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { CoordinatorEmailDraft } from "@/components/outreach/CoordinatorEmailDraft";
import { DoctorQuestionsPanel } from "@/components/outreach/DoctorQuestionsPanel";
import { DocumentsChecklist } from "@/components/outreach/DocumentsChecklist";
import { PatientSummaryCard } from "@/components/outreach/PatientSummaryCard";
import { EmptyState } from "@/components/shared/EmptyState";
import { ProgressSteps } from "@/components/shared/ProgressSteps";
import { readCaseState, writeCaseState } from "@/lib/clientStorage";
import type { CaseState, PatientActionPlan } from "@/lib/types";

export default function OutreachPage({ params }: { params: { trialId: string } }) {
  const [caseState, setCaseState] = useState<CaseState | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setCaseState(readCaseState());
  }, []);

  const draft = useMemo(() => caseState?.actionPlan?.outreachDrafts[params.trialId] ?? "", [caseState, params.trialId]);

  async function generatePlan() {
    if (!caseState?.profile) return;
    setLoading(true);
    const savedTrialIds = caseState.savedTrialIds.includes(params.trialId) ? caseState.savedTrialIds : [...caseState.savedTrialIds, params.trialId];
    const response = await fetch("/api/action-plan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ caseId: caseState.id, profile: caseState.profile, savedTrialIds, matches: caseState.matches })
    });
    const data = (await response.json()) as { actionPlan: PatientActionPlan };
    const next = { ...caseState, savedTrialIds, actionPlan: data.actionPlan, status: "action_plan_ready" as const };
    writeCaseState(next);
    setCaseState(next);
    setLoading(false);
  }

  if (!caseState?.profile) {
    return (
      <AppShell>
        <EmptyState title="No outreach context yet" text="Build a profile and match trials before preparing coordinator outreach." href="/" action="Start a case" />
      </AppShell>
    );
  }

  return (
    <AppShell>
      <ProgressSteps current="Outreach" />
      <div className="mt-8 space-y-5">
        <div className="card rounded-[2rem] p-6">
          <h1 className="serif text-4xl font-semibold">Outreach prep</h1>
          <p className="mt-2 text-secondary">Generate questions, documents, and a coordinator-ready message using safe language.</p>
          <button onClick={generatePlan} disabled={loading} className="mt-5 rounded-full bg-teal px-5 py-3 font-semibold text-white disabled:opacity-60">
            {loading ? "Preparing..." : draft ? "Refresh action plan" : "Generate action plan"}
          </button>
        </div>
        {caseState.actionPlan ? (
          <div className="grid gap-5 lg:grid-cols-[1fr_24rem]">
            <div className="space-y-5">
              <CoordinatorEmailDraft draft={draft || "Generate an action plan to create this draft."} />
              <DoctorQuestionsPanel questions={caseState.actionPlan.doctorQuestions} />
            </div>
            <div className="space-y-5">
              <PatientSummaryCard profile={caseState.profile} />
              <DocumentsChecklist documents={caseState.actionPlan.documentsToCollect} />
            </div>
          </div>
        ) : null}
      </div>
    </AppShell>
  );
}
