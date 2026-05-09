"use client";

import type { CommunityProfile } from "@/lib/types";

export function TalkToSomeoneModal({ profile, message, onClose }: { profile: CommunityProfile | null; message: string; onClose: () => void }) {
  if (!profile) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-text/40 p-5">
      <div className="max-w-xl rounded-[2rem] bg-white p-6 shadow-soft">
        <h2 className="text-2xl font-semibold">Consent-based message draft</h2>
        <p className="mt-2 text-sm text-secondary">This draft avoids sensitive medical details unless the user chooses to add them later.</p>
        <textarea className="mt-4 min-h-40 w-full rounded-2xl border border-border p-4 text-sm leading-6" readOnly value={message} />
        <div className="mt-4 flex justify-end gap-2">
          <button onClick={onClose} className="rounded-full border border-border px-4 py-2 text-sm font-semibold">
            Close
          </button>
          <button onClick={onClose} className="rounded-full bg-teal px-4 py-2 text-sm font-semibold text-white">
            Save draft
          </button>
        </div>
      </div>
    </div>
  );
}
