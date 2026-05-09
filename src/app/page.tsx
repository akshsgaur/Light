import { AppShell } from "@/components/layout/AppShell";
import { HeroSection } from "@/components/intake/HeroSection";
import { HealthContextIntake } from "@/components/intake/HealthContextIntake";
import { ProgressSteps } from "@/components/shared/ProgressSteps";

export default function HomePage() {
  return (
    <AppShell>
      <ProgressSteps current="Intake" />
      <HeroSection />
      <HealthContextIntake />
    </AppShell>
  );
}
