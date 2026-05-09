import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { ExperienceBurdenPanel } from "@/components/trial/ExperienceBurdenPanel";
import { TrialDetailHeader } from "@/components/trial/TrialDetailHeader";
import { TrialEligibilitySection } from "@/components/trial/TrialEligibilitySection";
import { TrialSourcePanel } from "@/components/trial/TrialSourcePanel";
import { demoCommunityInsights } from "@/lib/fixtures/demoCommunityInsights";
import { getTrialById } from "@/lib/trials/getTrialById";

export default function TrialDetailPage({ params }: { params: { trialId: string } }) {
  const trial = getTrialById(params.trialId);
  if (!trial) {
    return (
      <AppShell>
        <div className="card rounded-[2rem] p-8">Trial not found.</div>
      </AppShell>
    );
  }
  const insights = demoCommunityInsights.filter((insight) => insight.trialId === trial.id || trial.conditions.some((condition) => insight.condition === condition)).slice(0, 3);

  return (
    <AppShell>
      <div className="mt-8 space-y-5">
        <TrialDetailHeader trial={trial} />
        <TrialEligibilitySection trial={trial} />
        <ExperienceBurdenPanel trial={trial} insights={insights} />
        <TrialSourcePanel trial={trial} />
        <div className="flex flex-wrap gap-3">
          <Link href={`/community/${trial.id}`} className="rounded-full border border-border bg-white px-5 py-3 font-semibold">
            View community context
          </Link>
          <Link href={`/outreach/${trial.id}`} className="rounded-full bg-teal px-5 py-3 font-semibold text-white">
            Prepare outreach
          </Link>
        </div>
      </div>
    </AppShell>
  );
}
