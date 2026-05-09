export function HeroSection() {
  return (
    <section className="grid gap-8 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <div>
        <p className="mb-4 inline-flex rounded-full border border-border bg-white/80 px-4 py-2 text-sm font-medium text-teal">
          Patient-first trial matching
        </p>
        <h1 className="serif max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
          Your health context. Your trial options. One place to start.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-secondary">
          Upload notes, reports, or summaries. Light helps match your context to potentially relevant trials and shows what to ask next.
        </p>
      </div>
      <div className="card rounded-[2rem] p-6">
        <p className="text-sm font-semibold text-teal">Golden path</p>
        <div className="mt-5 space-y-3 text-sm text-secondary">
          {["Extract profile", "Explain potential matches", "Surface missing information", "Add community context", "Prepare outreach"].map((item) => (
            <div key={item} className="rounded-2xl bg-background px-4 py-3">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
