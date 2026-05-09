import type { TrialRecord } from "@/lib/types";

const lastUpdated = "2026-05-09";

function source(id: string, label: string) {
  return [
    {
      id,
      label,
      sourceType: "demo_fixture" as const,
      lastUpdated,
      excerpt: "Synthetic trial fixture for deterministic hackathon demo."
    }
  ];
}

export const demoTrials: TrialRecord[] = [
  {
    id: "trial-nsclc-egfr-targeted",
    nctId: "DEMO-NSCLC-001",
    title: "Targeted Study for EGFR-Mutated Non-Small Cell Lung Cancer",
    officialTitle: "Synthetic Phase 2 Study of a Targeted Therapy Strategy in EGFR-Mutated NSCLC",
    status: "Recruiting",
    phase: "Phase 2",
    conditions: ["Non-small cell lung cancer", "EGFR-mutated lung cancer"],
    interventions: ["Targeted therapy strategy"],
    eligibilityCriteria:
      "Adults 18 years and older with non-small cell lung cancer and EGFR mutation. Requires measurable disease, recent organ function labs, and review of prior systemic therapy. Excludes uncontrolled brain metastases and unresolved severe toxicity.",
    minimumAge: "18 Years",
    maximumAge: "80 Years",
    locations: [{ facility: "UCSF Helen Diller Family Comprehensive Cancer Center", city: "San Francisco", state: "CA", country: "US", distanceMiles: 4 }],
    sponsor: "Light Demo Oncology Network",
    briefSummary: "Synthetic biomarker-driven oncology trial fixture for patients exploring EGFR-mutated NSCLC studies.",
    sourceUrl: "https://example.org/demo/nsclc-egfr",
    lastUpdated,
    sourceReferences: source("src-trial-nsclc-1", "Synthetic NSCLC targeted trial fixture")
  },
  {
    id: "trial-nsclc-immunotherapy-exclusion",
    nctId: "DEMO-NSCLC-002",
    title: "First-Line Immunotherapy Combination Study for Advanced NSCLC",
    status: "Recruiting",
    phase: "Phase 1/2",
    conditions: ["Non-small cell lung cancer"],
    interventions: ["Immunotherapy combination"],
    eligibilityCriteria:
      "Adults with untreated advanced NSCLC. Requires no prior immunotherapy for metastatic disease, performance status review, recent imaging, and adequate blood counts.",
    minimumAge: "18 Years",
    maximumAge: "75 Years",
    locations: [{ facility: "Stanford Cancer Institute", city: "Palo Alto", state: "CA", country: "US", distanceMiles: 34 }],
    sponsor: "Light Demo Cancer Consortium",
    briefSummary: "Synthetic trial demonstrating how prior treatment history may create a possible blocker.",
    sourceUrl: "https://example.org/demo/nsclc-immunotherapy",
    lastUpdated,
    sourceReferences: source("src-trial-nsclc-2", "Synthetic NSCLC immunotherapy trial fixture")
  },
  {
    id: "trial-nsclc-observation-closed",
    nctId: "DEMO-NSCLC-003",
    title: "Remote Symptom Observation Study for Lung Cancer Survivors",
    status: "Completed",
    phase: "Observational",
    conditions: ["Lung cancer", "Non-small cell lung cancer"],
    interventions: ["Remote symptom survey"],
    eligibilityCriteria:
      "Adults with lung cancer history. Remote participation. Study status is completed and no longer accepting new participants.",
    minimumAge: "18 Years",
    locations: [{ facility: "Remote", city: "Remote", country: "US", distanceMiles: 0 }],
    sponsor: "Light Demo Digital Health Group",
    briefSummary: "Synthetic non-recruiting trial fixture to surface status concerns.",
    sourceUrl: "https://example.org/demo/nsclc-remote",
    lastUpdated,
    sourceReferences: source("src-trial-nsclc-3", "Synthetic NSCLC completed trial fixture")
  },
  {
    id: "trial-pd-motor-fluctuation",
    nctId: "DEMO-PD-001",
    title: "Movement Fluctuation Study for Parkinson's Disease",
    status: "Recruiting",
    phase: "Phase 2",
    conditions: ["Parkinson's disease"],
    interventions: ["Medication timing support", "Wearable movement monitoring"],
    eligibilityCriteria:
      "Adults 45 to 75 with Parkinson's disease and motor fluctuations while using levodopa. Requires movement assessment, medication schedule review, and cognitive screening.",
    minimumAge: "45 Years",
    maximumAge: "75 Years",
    locations: [{ facility: "Massachusetts General Hospital Movement Disorders Program", city: "Boston", state: "MA", country: "US", distanceMiles: 3 }],
    sponsor: "Light Demo Neurology Collaborative",
    briefSummary: "Synthetic Parkinson's trial fixture focused on motor fluctuations and medication timing.",
    sourceUrl: "https://example.org/demo/pd-fluctuation",
    lastUpdated,
    sourceReferences: source("src-trial-pd-1", "Synthetic Parkinson's movement trial fixture")
  },
  {
    id: "trial-pd-cognitive-screen",
    nctId: "DEMO-PD-002",
    title: "Cognitive and Mobility Screening Study in Parkinson's Disease",
    status: "Recruiting",
    phase: "Observational",
    conditions: ["Parkinson's disease"],
    interventions: ["Cognitive assessment", "Mobility assessment"],
    eligibilityCriteria:
      "Adults with Parkinson's disease. Requires cognitive status, mobility assessment, and stable medication regimen for four weeks before screening.",
    minimumAge: "40 Years",
    maximumAge: "85 Years",
    locations: [{ facility: "Beth Israel Deaconess Medical Center", city: "Boston", state: "MA", country: "US", distanceMiles: 5 }],
    sponsor: "Light Demo Brain Health Group",
    briefSummary: "Synthetic trial fixture that depends on missing severity and cognitive information.",
    sourceUrl: "https://example.org/demo/pd-cognitive",
    lastUpdated,
    sourceReferences: source("src-trial-pd-2", "Synthetic Parkinson's screening trial fixture")
  },
  {
    id: "trial-pd-device-distance",
    nctId: "DEMO-PD-003",
    title: "Device-Assisted Parkinson's Study With Weekly Visits",
    status: "Active, not recruiting",
    phase: "Phase 3",
    conditions: ["Parkinson's disease"],
    interventions: ["Device-assisted therapy"],
    eligibilityCriteria:
      "Adults with Parkinson's disease and advanced motor symptoms. Weekly in-person visits required. Currently active but not recruiting new participants.",
    minimumAge: "50 Years",
    maximumAge: "80 Years",
    locations: [{ facility: "Demo Midwest Neurology Center", city: "Chicago", state: "IL", country: "US", distanceMiles: 980 }],
    sponsor: "Light Demo Device Study Group",
    briefSummary: "Synthetic trial fixture with status and travel concerns.",
    sourceUrl: "https://example.org/demo/pd-device",
    lastUpdated,
    sourceReferences: source("src-trial-pd-3", "Synthetic Parkinson's device trial fixture")
  },
  {
    id: "trial-lupus-nephritis",
    nctId: "DEMO-SLE-001",
    title: "Lupus Kidney Involvement Treatment Strategy Study",
    status: "Recruiting",
    phase: "Phase 2",
    conditions: ["Lupus", "Systemic lupus erythematosus", "Lupus nephritis"],
    interventions: ["Immunomodulatory treatment strategy"],
    eligibilityCriteria:
      "Adults 18 to 65 with systemic lupus erythematosus and kidney involvement. Requires recent kidney labs, urine protein assessment, autoantibody review, and medication history.",
    minimumAge: "18 Years",
    maximumAge: "65 Years",
    locations: [{ facility: "Dell Medical School Clinical Research Unit", city: "Austin", state: "TX", country: "US", distanceMiles: 6 }],
    sponsor: "Light Demo Autoimmune Network",
    briefSummary: "Synthetic lupus kidney involvement trial fixture with local site.",
    sourceUrl: "https://example.org/demo/lupus-kidney",
    lastUpdated,
    sourceReferences: source("src-trial-sle-1", "Synthetic lupus nephritis trial fixture")
  },
  {
    id: "trial-lupus-labs-needed",
    nctId: "DEMO-SLE-002",
    title: "Biomarker Monitoring Study for Systemic Lupus",
    status: "Recruiting",
    phase: "Observational",
    conditions: ["Lupus", "Systemic lupus erythematosus"],
    interventions: ["Blood and urine biomarker monitoring"],
    eligibilityCriteria:
      "Adults with lupus. Requires recent CBC, kidney function, complement levels, anti-dsDNA status, and stable medication record.",
    minimumAge: "18 Years",
    maximumAge: "70 Years",
    locations: [{ facility: "Baylor College of Medicine", city: "Houston", state: "TX", country: "US", distanceMiles: 165 }],
    sponsor: "Light Demo Autoimmune Registry",
    briefSummary: "Synthetic autoimmune fixture that highlights missing labs and travel distance.",
    sourceUrl: "https://example.org/demo/lupus-biomarker",
    lastUpdated,
    sourceReferences: source("src-trial-sle-2", "Synthetic lupus biomarker trial fixture")
  },
  {
    id: "trial-lupus-steroid-exclusion",
    nctId: "DEMO-SLE-003",
    title: "Steroid-Taper Study in Stable Lupus",
    status: "Recruiting",
    phase: "Phase 2",
    conditions: ["Lupus"],
    interventions: ["Steroid taper protocol"],
    eligibilityCriteria:
      "Adults with stable lupus. Requires prednisone dose below 10 mg daily for at least four weeks and no active severe kidney flare. Excludes high-dose steroids or unstable organ involvement.",
    minimumAge: "18 Years",
    maximumAge: "65 Years",
    locations: [{ facility: "UT Southwestern Autoimmune Clinic", city: "Dallas", state: "TX", country: "US", distanceMiles: 195 }],
    sponsor: "Light Demo Immunology Group",
    briefSummary: "Synthetic trial fixture demonstrating possible medication and disease activity blockers.",
    sourceUrl: "https://example.org/demo/lupus-steroid",
    lastUpdated,
    sourceReferences: source("src-trial-sle-3", "Synthetic lupus steroid trial fixture")
  }
];
