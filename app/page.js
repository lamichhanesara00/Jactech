// import { CtaBand, HeroSection, ServicesPreview } from "@/components/HomeSections";

import { HeroSection } from "@/components/HomeComponents/HeroSection";
import { OurProjects } from "@/components/HomeComponents/OurProjects";
import { OurServices } from "@/components/HomeComponents/OurServices";
import { PartnersSliders } from "@/components/HomeComponents/PartnersSliders";
import { Testimonials } from "@/components/HomeComponents/Testimonials";
import { WhoWeAre } from "@/components/HomeComponents/WhoWeAre";

export const metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <PartnersSliders />
      <WhoWeAre />
      <OurServices />
      <OurProjects />
      <Testimonials />

      {/* <ServicesPreview /> */}
      {/* <CtaBand /> */}
    </main>
  );
}
