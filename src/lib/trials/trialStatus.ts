export function isRecruitingStatus(status: string): boolean {
  const lower = status.toLowerCase();
  return lower.includes("recruiting") && !lower.includes("not recruiting") && !lower.includes("completed");
}
