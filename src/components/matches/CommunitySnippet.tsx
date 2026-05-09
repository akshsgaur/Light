import type { CommunityInsight } from "@/lib/types";

export function CommunitySnippet({ insight }: { insight?: CommunityInsight }) {
  if (!insight) return null;
  return (
    <div className="rounded-2xl bg-teal/10 p-4 text-sm leading-6 text-teal">
      <p className="font-semibold">Community experience</p>
      <p className="mt-1">{insight.text}</p>
    </div>
  );
}
