export function MissingInfoPanel({ unknowns }: { unknowns: string[] }) {
  return (
    <div className="rounded-3xl border border-amber/20 bg-amber/10 p-5">
      <h3 className="font-semibold text-amber">Information to confirm</h3>
      <ul className="mt-3 space-y-2 text-sm text-secondary">
        {unknowns.map((unknown) => (
          <li key={unknown}>• {unknown}</li>
        ))}
      </ul>
    </div>
  );
}
