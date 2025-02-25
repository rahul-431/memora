import CardPage from "@/components/Card/CardPage";
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
      </section>
    </Suspense>
  );
}
