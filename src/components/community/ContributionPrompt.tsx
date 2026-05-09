"use client";

import { useState } from "react";

export function ContributionPrompt() {
  const [accepted, setAccepted] = useState(false);
  return (
    <section className="card rounded-[2rem] p-6">
      <h2 className="text-2xl font-semibold">Share community experience</h2>
      <p className="mt-2 text-secondary">For the demo, contributions are local and labeled as community experience, not clinical truth.</p>
      <textarea className="mt-4 min-h-28 w-full rounded-2xl border border-border p-4" placeholder="What practical question helped you prepare?" />
      <label className="mt-3 flex items-center gap-2 text-sm text-secondary">
        <input type="checkbox" checked={accepted} onChange={(event) => setAccepted(event.target.checked)} />
        I consent to share this as demo community context.
      </label>
      <button disabled={!accepted} className="mt-4 rounded-full bg-teal px-4 py-2 text-sm font-semibold text-white disabled:bg-secondary/30">
        Add demo contribution
      </button>
    </section>
  );
}
