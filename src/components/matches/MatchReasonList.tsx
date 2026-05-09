export function MatchReasonList({ title, items, tone = "teal" }: { title: string; items: string[]; tone?: "teal" | "amber" | "red" }) {
  const color = tone === "red" ? "text-red" : tone === "amber" ? "text-amber" : "text-teal";
  return (
    <div>
      <h4 className={`text-sm font-semibold ${color}`}>{title}</h4>
      <ul className="mt-2 space-y-2 text-sm leading-6 text-secondary">
        {(items.length ? items : ["No clear item from available context."]).map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}
