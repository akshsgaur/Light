"use client";

export function CoordinatorEmailDraft({ draft }: { draft: string }) {
  return (
    <section className="card rounded-[2rem] p-6">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-2xl font-semibold">Coordinator email draft</h2>
        <button onClick={() => navigator.clipboard?.writeText(draft)} className="rounded-full bg-teal px-4 py-2 text-sm font-semibold text-white">
          Copy
        </button>
      </div>
      <textarea className="mt-4 min-h-80 w-full rounded-2xl border border-border bg-white p-4 text-sm leading-6" readOnly value={draft} />
    </section>
  );
}
