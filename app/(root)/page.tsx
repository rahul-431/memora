import CardExclusive from "@/components/Card/CardExclusive";
import CardPage from "@/components/Card/CardPage";
import CardPage1 from "@/components/Card/CardPage1";
import { HeroSection } from "@/components/ui/HeroSection";
import ProductCategory from "@/components/ui/ProductCategory";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense>
      <section>
        <HeroSection />
        <ProductCategory />
        <CardPage />
        <CardPage1 />
        <CardExclusive />
      </section>
    </Suspense>
  );
}
