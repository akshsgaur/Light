import { NextResponse } from "next/server";
import { extractHealthContextProfile } from "@/lib/extraction/extractHealthContextProfile";

export async function POST(request: Request) {
  const body = await request.json();
  const profile = await extractHealthContextProfile(body);
  return NextResponse.json({ profile, status: "profile_ready" });
}
