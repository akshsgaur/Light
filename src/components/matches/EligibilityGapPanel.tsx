import { MatchReasonList } from "@/components/matches/MatchReasonList";
import type { TrialMatch } from "@/lib/types";

export function EligibilityGapPanel({ match }: { match: TrialMatch }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <MatchReasonList title="Known fit" items={match.knownFit} />
      <MatchReasonList title="Needs confirmation" items={match.needsConfirmation} tone="amber" />
      <MatchReasonList title="Possible blockers" items={match.possibleBlockers} tone="red" />
    </div>
  );
}
