import { DataQualityIndicator } from "@/components/profile/DataQualityIndicator";
import { MissingInfoPanel } from "@/components/profile/MissingInfoPanel";
import { ProfileFieldGrid } from "@/components/profile/ProfileFieldGrid";
import { SourceBadge } from "@/components/shared/SourceBadge";
import type { HealthContextProfile } from "@/lib/types";

export function ProfileSummaryCard({ profile }: { profile: HealthContextProfile }) {
  return (
    <section className="card rounded-[2rem] p-6">
      <div className="grid gap-5 lg:grid-cols-[1fr_16rem]">
        <div>
          <p className="text-sm font-semibold text-teal">Extracted health profile</p>
          <h1 className="serif mt-2 text-4xl font-semibold">{profile.condition}</h1>
        </div>
        <DataQualityIndicator value={profile.dataQuality} />
      </div>
      <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_22rem]">
        <ProfileFieldGrid profile={profile} />
        <MissingInfoPanel unknowns={profile.unknowns} />
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {profile.sourceReferences?.map((source) => <SourceBadge key={source.id} source={source} />)}
      </div>
    </section>
  );
}
