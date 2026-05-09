import { findNearestTrialLocation } from "@/lib/matching/findNearestTrialLocation";
import { detectKnownFit } from "@/lib/matching/detectKnownFit";
import { detectNeedsConfirmation } from "@/lib/matching/detectNeedsConfirmation";
import { detectPossibleBlockers } from "@/lib/matching/detectPossibleBlockers";
import { scoreTrialMatch } from "@/lib/matching/scoreTrialMatch";
import { matchStrength } from "@/lib/matching/matchStrength";
import type { CommunityInsight, HealthContextProfile, TrialMatch, TrialRecord } from "@/lib/types";

export function buildTrialMatch(input: {
  profile: HealthContextProfile;
  trial: TrialRecord;
  communityInsights?: CommunityInsight[];
}): TrialMatch {
  const knownFit = detectKnownFit(input.profile, input.trial);
  const needsConfirmation = detectNeedsConfirmation(input.profile, input.trial);
  const possibleBlockers = detectPossibleBlockers(input.profile, input.trial);
  const score = scoreTrialMatch(input.profile, input.trial);
  const nearest = findNearestTrialLocation(input.trial);

  return {
    trialId: input.trial.id,
    title: input.trial.title,
    status: input.trial.status,
    nearestSite: nearest ? `${nearest.facility}, ${nearest.city}${nearest.state ? `, ${nearest.state}` : ""}` : undefined,
    distanceMiles: nearest?.distanceMiles,
    matchStrength: matchStrength(score, possibleBlockers.length),
    evidenceStrengthScore: score,
    knownFit,
    needsConfirmation,
    possibleBlockers,
    sourceReferences: [
      ...(input.trial.sourceReferences ?? []),
      {
        id: `src-match-${input.trial.id}`,
        label: "Light deterministic matching explanation",
        sourceType: "demo_fixture",
        excerpt: "Generated from profile facts, trial fixture criteria, and safety rules."
      }
    ],
    communityInsights: input.communityInsights ?? []
  };
}
