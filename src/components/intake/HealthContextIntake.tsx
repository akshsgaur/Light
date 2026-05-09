"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { DemoCaseSelector } from "@/components/intake/DemoCaseSelector";
import { DocumentPasteBox } from "@/components/intake/DocumentPasteBox";
import { PrivacyNote } from "@/components/intake/PrivacyNote";
import { getDemoCase } from "@/lib/fixtures/demoCases";
import { buildCaseState, writeCaseState } from "@/lib/clientStorage";
import type { HealthContextProfile } from "@/lib/types";

export function HealthContextIntake() {
  const router = useRouter();
  const [demoCaseId, setDemoCaseId] = useState("oncology-egfr-nsclc");
  const [noteText, setNoteText] = useState(getDemoCase("oncology-egfr-nsclc").noteText);
  const [condition, setCondition] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);

  function selectDemoCase(nextId: string) {
    setDemoCaseId(nextId);
    setNoteText(getDemoCase(nextId).noteText);
  }

  async function submit() {
    setLoading(true);
    const manualFields: Partial<HealthContextProfile> = {
      condition: condition || undefined,
      location: location || undefined
    };
    const response = await fetch("/api/extract", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ demoCaseId, noteText, manualFields })
    });
    const data = (await response.json()) as { profile: HealthContextProfile };
    writeCaseState(buildCaseState({ profile: data.profile, status: "profile_ready" }));
    setLoading(false);
    router.push("/profile");
  }

  return (
    <section className="card rounded-[2rem] p-6">
      <div className="grid gap-5 lg:grid-cols-2">
        <div className="space-y-5">
          <DemoCaseSelector value={demoCaseId} onChange={selectDemoCase} />
          <label className="block">
            <span className="text-sm font-semibold text-text">Condition override</span>
            <input className="mt-2 w-full rounded-2xl border border-border bg-white p-3" value={condition} onChange={(event) => setCondition(event.target.value)} placeholder="Optional" />
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-text">Location override</span>
            <input className="mt-2 w-full rounded-2xl border border-border bg-white p-3" value={location} onChange={(event) => setLocation(event.target.value)} placeholder="Optional" />
          </label>
          <PrivacyNote />
        </div>
        <DocumentPasteBox value={noteText} onChange={setNoteText} />
      </div>
      <button onClick={submit} disabled={loading} className="mt-6 rounded-full bg-teal px-6 py-3 font-semibold text-white disabled:opacity-60">
        {loading ? "Building profile..." : "Find Potential Trials"}
      </button>
    </section>
  );
}
