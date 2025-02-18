import { HeroSection } from "@/components/ui/HeroSection";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense>
      <section>
        <HeroSection />
      </section>
    </Suspense>
  );
}
