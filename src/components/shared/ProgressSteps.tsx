const steps = ["Intake", "Profile", "Matches", "Saved", "Outreach"];

export function ProgressSteps({ current }: { current: string }) {
  const currentIndex = steps.indexOf(current);
  return (
    <div className="grid gap-2 rounded-3xl border border-border bg-white/70 p-3 md:grid-cols-5">
      {steps.map((step, index) => (
        <div key={step} className={`rounded-2xl px-4 py-3 text-sm ${index <= currentIndex ? "bg-teal text-white" : "bg-background text-secondary"}`}>
          {step}
        </div>
      ))}
    </div>
  );
}
