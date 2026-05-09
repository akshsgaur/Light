export function matchStrength(score: number, blockersCount: number): "strong" | "good" | "possible" {
  if (score >= 72 && blockersCount === 0) return "strong";
  if (score >= 55 && blockersCount <= 1) return "good";
  return "possible";
}
