import { NextResponse } from "next/server";
import { memoryStore } from "@/lib/memory";
import type { CaseState } from "@/lib/types";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const caseId = url.searchParams.get("caseId");
  const caseState = caseId ? await memoryStore.getCase(caseId) : null;
  return NextResponse.json({ caseState });
}

export async function POST(request: Request) {
  const body = (await request.json()) as { caseState: CaseState };
  await memoryStore.saveCase(body.caseState);
  return NextResponse.json({ ok: true });
}
