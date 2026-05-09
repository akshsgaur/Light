export function DocumentsChecklist({ documents }: { documents: string[] }) {
  return (
    <section className="card rounded-[2rem] p-6">
      <h2 className="text-2xl font-semibold">Documents checklist</h2>
      <div className="mt-4 space-y-3">
        {documents.map((document) => (
          <label key={document} className="flex items-center gap-3 rounded-2xl bg-background p-3 text-sm text-secondary">
            <input type="checkbox" />
            {document}
          </label>
        ))}
      </div>
    </section>
  );
}
