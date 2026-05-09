# Light Build Progress

## Current Demo Goal

Build the golden-path demo:
intake → profile extraction → trial matching → community insights → saved trials → outreach prep → return memory.

## Global Status

- Overall status: In progress
- Last updated by: Codex full-stack scaffold
- Last updated at: 2026-05-09 12:35 America/Los_Angeles
- Current demo branch: unavailable - workspace was not initialized as a git repository
- Live Vercel URL:

## Shared Contracts

- `src/lib/types.ts` status: Created from shared prompt
- Last contract change: Initial shared contract creation
- Breaking changes: None

## Agent 1 — Design and Frontend

### Done
- Initial patient-facing app shell, golden-path pages, and reusable UI components scaffolded.
- Home/intake, profile, matches, saved, trial detail, community, and outreach pages implemented.
- Safety disclaimer is rendered globally in the app shell.

### In Progress
- Dependency installation and build validation are blocked by hanging `npm install` attempts.

### Blocked
- Could not pull latest GitHub code because `/Users/akshitgaur/hackathon/Light` is not a git repository.

### Files Touched
- `src/app/page.tsx`
- `src/app/profile/page.tsx`
- `src/app/matches/page.tsx`
- `src/app/saved/page.tsx`
- `src/app/trial/[trialId]/page.tsx`
- `src/app/community/[trialId]/page.tsx`
- `src/app/outreach/[trialId]/page.tsx`
- `src/components/**`
- `src/app/globals.css`
- `src/app/layout.tsx`

### Notes for Other Agents
- Frontend uses API routes first and deterministic local fixture/service fallback through shared modules.

## Agent 2 — Backend

### Done
- Fixture-backed API routes, memory abstraction, safety validation, and action-plan generation scaffolded.
- `/api/extract`, `/api/match`, `/api/save-trial`, `/api/action-plan`, and `/api/memory` implemented.

### In Progress
- Route/build validation once dependencies install successfully.

### Blocked
- Could not pull latest GitHub code because workspace is not a git repository.

### Files Touched
- `src/app/api/**/route.ts`
- `src/lib/pipeline/runLightPipeline.ts`
- `src/lib/memory/**`
- `src/lib/safety/**`
- `src/lib/outreach/**`
- `.env.example`

### Notes for Other Agents
- External adapters are optional and return deterministic fallback data when credentials are absent.

## Agent 3 — Data and Trial Context

### Done
- Disease-agnostic trial fixtures and deterministic matching engine scaffolded.
- Nine synthetic trial fixtures added across oncology, neurology, and autoimmune demo areas.
- Optional ClinicalTrials.gov and Nia adapter stubs added behind fixture fallback.

### In Progress
- Adapter hardening for real external trial APIs.

### Blocked
- None for demo path.

### Files Touched
- `src/lib/fixtures/demoTrials.ts`
- `src/lib/trials/**`
- `src/lib/matching/**`

### Notes for Other Agents
- Matching outputs use safe language: known fit, needs confirmation, possible blockers.

## Agent 4 — Patient Context and Community Context

### Done
- Demo cases, extraction rules, unknown detection, community insights, and peer profiles scaffolded.
- Three deterministic demo cases and six synthetic peer profiles added.

### In Progress
- Additional extraction heuristics for richer free-text notes.

### Blocked
- None for demo path.

### Files Touched
- `src/lib/fixtures/demoCases.ts`
- `src/lib/fixtures/demoCommunityInsights.ts`
- `src/lib/fixtures/demoCommunityProfiles.ts`
- `src/lib/extraction/**`
- `src/lib/community/**`

### Notes for Other Agents
- Community profiles are synthetic demo data and should be labeled as such in UI.

## Integration Checklist

- [ ] Shared types compile
- [x] Frontend can call `/api/extract`
- [x] Frontend can call `/api/match`
- [x] Frontend can save trials
- [x] Frontend can generate action plan
- [x] Demo fixtures load
- [x] Community profiles load
- [x] Safety disclaimer visible
- [x] No unsafe eligibility claims
- [ ] Vercel deploy works

## Known Issues

- Workspace was empty and not a git repository, so GitHub pull/push workflow could not be performed.
- `npm run typecheck` failed because `tsc` was not installed.
- Both sandboxed and escalated `npm install` attempts hung without output, so dependency-based validation could not complete in this environment.
- Manual unsafe-language scan only found banned phrases inside `src/lib/safety/safetyRules.ts`.

## Next Integration Priorities

1. Install dependencies and run `npm run typecheck`.
2. Initialize or connect the GitHub repository, then create the required agent branches.
3. Deploy to Vercel and update the live URL.
