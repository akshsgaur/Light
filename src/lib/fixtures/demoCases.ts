import type { HealthContextProfile } from "@/lib/types";

export type DemoCase = {
  id: string;
  label: string;
  category: "Oncology" | "Neurology" | "Autoimmune";
  summary: string;
  noteText: string;
  profile: HealthContextProfile;
};

const now = "2026-05-09T12:00:00.000Z";

export const demoCases: DemoCase[] = [
  {
    id: "oncology-egfr-nsclc",
    label: "Oncology: EGFR lung cancer",
    category: "Oncology",
    summary: "47-year-old in San Francisco with EGFR exon 19 deletion NSCLC and prior chemo-immunotherapy.",
    noteText:
      "Patient is 47, located in San Francisco, CA. Diagnosis: non-small cell lung cancer, EGFR exon 19 deletion, stage IV. Prior treatments include platinum chemotherapy and immunotherapy. Looking for trials within about 100 miles. Needs updated imaging status and recent trial-specific labs.",
    profile: {
      id: "case-oncology-egfr-nsclc",
      createdAt: now,
      updatedAt: now,
      condition: "Non-small cell lung cancer",
      age: 47,
      location: "San Francisco, CA",
      travelRadiusMiles: 100,
      diagnosisDate: "2024",
      stageOrSeverity: "Stage IV",
      subtype: "Adenocarcinoma",
      biomarkers: ["EGFR exon 19 deletion"],
      geneticMarkers: ["EGFR exon 19 deletion"],
      priorTreatments: [
        { name: "Platinum chemotherapy", response: "partial response", notes: "Dates need confirmation" },
        { name: "Immunotherapy", notes: "Prior exposure noted in records" }
      ],
      currentTreatments: [],
      currentMedications: [],
      functionalStatus: "Independent with daily activities",
      unknowns: ["Updated imaging status", "Recent organ function labs", "Trial-specific washout period", "Coordinator confirmation"],
      preferences: {
        recruitingOnly: true,
        maxTravelMiles: 100,
        language: "English",
        remoteOrHybridPreferred: true,
        communityOptIn: true
      },
      sourceReferences: [
        {
          id: "src-oncology-demo-note",
          label: "Synthetic oncology demo note",
          sourceType: "demo_fixture",
          excerpt: "EGFR exon 19 deletion; prior chemotherapy and immunotherapy",
          lastUpdated: now
        }
      ],
      dataQuality: "rich"
    }
  },
  {
    id: "neurology-parkinsons",
    label: "Neurology: Parkinson's disease",
    category: "Neurology",
    summary: "58-year-old in Boston with Parkinson's disease, levodopa use, and motor fluctuations.",
    noteText:
      "Patient is 58 in Boston, MA with Parkinson's disease and increasing motor fluctuations. Current treatment includes levodopa. Interested in movement disorder studies. Disease severity score, medication timing, cognitive status, and mobility assessment need confirmation.",
    profile: {
      id: "case-neurology-parkinsons",
      createdAt: now,
      updatedAt: now,
      condition: "Parkinson's disease",
      age: 58,
      location: "Boston, MA",
      travelRadiusMiles: 75,
      diagnosisDate: "2018",
      stageOrSeverity: "Motor fluctuations",
      priorTreatments: [{ name: "Levodopa", response: "wearing-off episodes" }],
      currentTreatments: ["Levodopa"],
      currentMedications: ["Levodopa"],
      functionalStatus: "Ambulatory; needs timing assessment",
      unknowns: ["Disease severity score", "Medication timing", "Cognitive status", "Mobility assessment"],
      preferences: {
        recruitingOnly: true,
        maxTravelMiles: 75,
        language: "English",
        remoteOrHybridPreferred: false,
        communityOptIn: true
      },
      sourceReferences: [
        {
          id: "src-neuro-demo-note",
          label: "Synthetic neurology demo note",
          sourceType: "demo_fixture",
          excerpt: "Parkinson's disease with motor fluctuations and levodopa use",
          lastUpdated: now
        }
      ],
      dataQuality: "moderate"
    }
  },
  {
    id: "autoimmune-lupus-kidney",
    label: "Autoimmune: lupus kidney involvement",
    category: "Autoimmune",
    summary: "34-year-old in Austin with lupus, kidney involvement, hydroxychloroquine, and steroid history.",
    noteText:
      "Patient is 34 in Austin, TX with lupus and kidney involvement. Prior treatments include hydroxychloroquine and steroids. Current steroid dose is unclear. Latest kidney labs, autoantibody status, and biopsy status need confirmation.",
    profile: {
      id: "case-autoimmune-lupus-kidney",
      createdAt: now,
      updatedAt: now,
      condition: "Lupus",
      age: 34,
      location: "Austin, TX",
      travelRadiusMiles: 125,
      stageOrSeverity: "Kidney involvement reported",
      priorTreatments: [
        { name: "Hydroxychloroquine", notes: "History noted" },
        { name: "Steroids", notes: "Current dose needs confirmation" }
      ],
      currentTreatments: ["Hydroxychloroquine"],
      currentMedications: ["Hydroxychloroquine"],
      labs: {},
      unknowns: ["Latest kidney labs", "Autoantibody status", "Current steroid dose", "Biopsy status"],
      preferences: {
        recruitingOnly: true,
        maxTravelMiles: 125,
        language: "English",
        remoteOrHybridPreferred: true,
        communityOptIn: true
      },
      sourceReferences: [
        {
          id: "src-lupus-demo-note",
          label: "Synthetic autoimmune demo note",
          sourceType: "demo_fixture",
          excerpt: "Lupus with kidney involvement and steroid history",
          lastUpdated: now
        }
      ],
      dataQuality: "moderate"
    }
  }
];

export function getDemoCase(caseId?: string) {
  return demoCases.find((demoCase) => demoCase.id === caseId) ?? demoCases[0];
}
