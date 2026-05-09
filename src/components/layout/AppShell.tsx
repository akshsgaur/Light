import { Header } from "@/components/layout/Header";
import { SafetyDisclaimer } from "@/components/shared/SafetyDisclaimer";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto w-full max-w-7xl px-5 pb-12">{children}</main>
      <footer className="mx-auto w-full max-w-7xl px-5 pb-8">
        <SafetyDisclaimer />
      </footer>
    </div>
  );
}
