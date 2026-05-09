"use client";

import type { CommunityProfile } from "@/lib/types";

export function CommunityProfileCard({ profile, onMessage }: { profile: CommunityProfile; onMessage: (profile: CommunityProfile) => void }) {
  return (
    <article className="card rounded-[2rem] p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">{profile.displayName}</h3>
          <p className="mt-1 text-sm capitalize text-secondary">{profile.status} • synthetic demo profile</p>
        </div>
        <span className="rounded-full bg-teal/10 px-3 py-1 text-xs font-semibold text-teal">{profile.openToConnect ? "Open to connect" : "Not open now"}</span>
      </div>
      <p className="mt-4 leading-7 text-secondary">“{profile.quote}”</p>
      <button disabled={!profile.openToConnect} onClick={() => onMessage(profile)} className="mt-5 rounded-full bg-teal px-4 py-2 text-sm font-semibold text-white disabled:bg-secondary/30">
        Request conversation
      </button>
    </article>
  );
}
