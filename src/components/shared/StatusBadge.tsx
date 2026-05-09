export function StatusBadge({ status }: { status: string }) {
  const lower = status.toLowerCase();
  const color = lower.includes("recruiting") && !lower.includes("not recruiting") ? "bg-green/10 text-green" : lower.includes("completed") || lower.includes("not recruiting") ? "bg-amber/10 text-amber" : "bg-teal/10 text-teal";
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ${color}`}>{status}</span>;
}
