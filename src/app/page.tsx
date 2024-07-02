import AboutSection from "@/components/about/about-section";
import HeroBanner from "@/components/hero-banner/hero-banner";
import ServiceSection from "@/components/services/service-section";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <ServiceSection />
      <AboutSection />
    </div>
  );
}
