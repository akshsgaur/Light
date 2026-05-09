import { localMemoryStore } from "@/lib/memory/localMemoryStore";
import type { MemoryStore } from "@/lib/memory/memoryStore";

export function getHyperspellMemoryStore(): MemoryStore {
  if (!process.env.HYPERSPELL_API_KEY) {
    return localMemoryStore;
  }

  console.warn("Hyperspell adapter is configured as a demo stub; using local memory fallback.");
  return localMemoryStore;
}
