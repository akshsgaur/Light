export function DocumentPasteBox({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-text">Paste medical context</span>
      <textarea
        className="mt-2 min-h-44 w-full rounded-2xl border border-border bg-white p-4 leading-7 outline-none focus:border-teal"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Paste a clinic note, portal summary, or treatment timeline..."
      />
    </label>
  );
}
