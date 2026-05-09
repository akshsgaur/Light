import type { TrialRecord } from "@/lib/types";

export async function searchClinicalTrialsGov(input: {
  condition: string;
  recruitingOnly?: boolean;
  pageSize?: number;
}): Promise<TrialRecord[]> {
  try {
    const status = input.recruitingOnly ? "&filter.overallStatus=RECRUITING" : "";
    const url = `https://clinicaltrials.gov/api/v2/studies?query.cond=${encodeURIComponent(input.condition)}${status}&pageSize=${input.pageSize ?? 10}`;
    const response = await fetch(url, { next: { revalidate: 3600 } });
    if (!response.ok) return [];
    const payload = (await response.json()) as { studies?: Array<Record<string, any>> };

    return (payload.studies ?? []).map((study, index) => {
      const protocol = study.protocolSection ?? {};
      const identification = protocol.identificationModule ?? {};
      const statusModule = protocol.statusModule ?? {};
      const conditionModule = protocol.conditionsModule ?? {};
      const designModule = protocol.designModule ?? {};
      const eligibilityModule = protocol.eligibilityModule ?? {};
      const contactsLocationsModule = protocol.contactsLocationsModule ?? {};

      return {
        id: identification.nctId ?? `ctgov-${index}`,
        nctId: identification.nctId,
        title: identification.briefTitle ?? "ClinicalTrials.gov study",
        officialTitle: identification.officialTitle,
        status: statusModule.overallStatus ?? "Unknown",
        phase: designModule.phases?.[0],
        conditions: conditionModule.conditions ?? [],
        interventions: protocol.armsInterventionsModule?.interventions?.map((item: any) => item.name) ?? [],
        eligibilityCriteria: eligibilityModule.eligibilityCriteria ?? "Eligibility criteria available in registry record.",
        minimumAge: eligibilityModule.minimumAge,
        maximumAge: eligibilityModule.maximumAge,
        locations:
          contactsLocationsModule.locations?.map((location: any) => ({
            facility: location.facility ?? "Clinical site",
            city: location.city ?? "",
            state: location.state,
            country: location.country
          })) ?? [],
        sponsor: protocol.sponsorCollaboratorsModule?.leadSponsor?.name,
        briefSummary: protocol.descriptionModule?.briefSummary,
        sourceUrl: identification.nctId ? `https://clinicaltrials.gov/study/${identification.nctId}` : undefined,
        lastUpdated: statusModule.lastUpdatePostDateStruct?.date,
        sourceReferences: [
          {
            id: `src-${identification.nctId ?? index}`,
            label: "ClinicalTrials.gov registry",
            sourceType: "trial_registry",
            url: identification.nctId ? `https://clinicaltrials.gov/study/${identification.nctId}` : undefined
          }
        ]
      };
    });
  } catch (error) {
    console.warn("ClinicalTrials.gov adapter failed; using fallback data.", error);
    return [];
  }
}
