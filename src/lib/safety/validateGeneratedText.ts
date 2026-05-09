import { UNSAFE_PHRASES } from "@/lib/safety/safetyRules";

export function validateGeneratedText(text: string): {
  passed: boolean;
  issues: string[];
} {
  const lower = text.toLowerCase();
  const issues = UNSAFE_PHRASES.filter((phrase) => lower.includes(phrase));
  return {
    passed: issues.length === 0,
    issues
  };
}
