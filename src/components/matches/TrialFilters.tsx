export function TrialFilters() {
  return (
    <div className="flex flex-wrap gap-2">
      {["Recruiting first", "Within travel range", "Community insights", "Needs fewer confirmations"].map((filter) => (
        <span key={filter} className="rounded-full border border-border bg-white px-3 py-2 text-sm text-secondary">
          {filter}
        </span>
      ))}
    </div>
  );
}
