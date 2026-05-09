"use client";

import { useEffect, useMemo, useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { CommunityProfileCard } from "@/components/community/CommunityProfileCard";
import { ContributionPrompt } from "@/components/community/ContributionPrompt";
import { TalkToSomeoneModal } from "@/components/community/TalkToSomeoneModal";
import { EmptyState } from "@/components/shared/EmptyState";
import { createCommunityMessage } from "@/lib/community/createCommunityMessage";
import { demoCommunityProfiles } from "@/lib/fixtures/demoCommunityProfiles";
import { readCaseState } from "@/lib/clientStorage";
import type { CaseState, CommunityProfile } from "@/lib/types";

export default function CommunityPage({ params }: { params: { trialId: string } }) {
  const [caseState, setCaseState] = useState<CaseState | null>(null);
  const [selected, setSelected] = useState<CommunityProfile | null>(null);

  useEffect(() => {
    setCaseState(readCaseState());
  }, []);

  const profiles = useMemo(() => {
    if (!caseState?.profile) return [];
    const condition = caseState.profile.condition.toLowerCase();
    return demoCommunityProfiles
      .filter((profile) => profile.trialId === params.trialId || condition.includes(profile.condition.toLowerCase()) || profile.condition.toLowerCase().includes(condition))
      .slice(0, 4);
  }, [caseState, params.trialId]);

  if (!caseState?.profile) {
    return (
      <AppShell>
        <EmptyState title="No profile for community matching" text="Build a profile before viewing peer context." href="/" action="Start a case" />
      </AppShell>
    );
  }

  return (
    <AppShell>
      <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_24rem]">
        <section className="space-y-4">
          <div className="card rounded-[2rem] p-6">
            <p className="text-sm font-semibold text-teal">Community context</p>
            <h1 className="serif mt-2 text-4xl font-semibold">People and practical experience</h1>
            <p className="mt-3 text-secondary">Synthetic peer profiles show how consent-based community support can work. Community content is not medical advice.</p>
          </div>
          {profiles.map((profile) => (
            <CommunityProfileCard key={profile.id} profile={profile} onMessage={setSelected} />
          ))}
        </section>
        <ContributionPrompt />
      </div>
      <TalkToSomeoneModal
        profile={selected}
        message={selected ? createCommunityMessage({ profile: caseState.profile, peerProfile: selected }) : ""}
        onClose={() => setSelected(null)}
      />
    </AppShell>
  );
}
