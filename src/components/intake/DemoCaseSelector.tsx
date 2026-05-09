import { demoCases } from "@/lib/fixtures/demoCases";

export function DemoCaseSelector({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-text">Demo case</span>
      <select className="mt-2 w-full rounded-2xl border border-border bg-white p-3" value={value} onChange={(event) => onChange(event.target.value)}>
        {demoCases.map((demoCase) => (
          <option key={demoCase.id} value={demoCase.id}>
            {demoCase.label}
          </option>
        ))}
      </select>
      <p className="mt-2 text-sm text-secondary">{demoCases.find((demoCase) => demoCase.id === value)?.summary}</p>
    </label>
  );
}
