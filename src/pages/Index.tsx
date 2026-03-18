import { Navbar, Footer } from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import FounderStorySection from "@/components/FounderStorySection";
import SolutionSection from "@/components/SolutionSection";
import TrustSection from "@/components/TrustSection";
import FeaturedOnSection from "@/components/FeaturedOnSection";

import OperatorShowcaseSection from "@/components/OperatorShowcaseSection";
import ImpactSection from "@/components/ImpactSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FounderStorySection />
        <SolutionSection />
        <ImpactSection />
        <TrustSection />
        <SaaSSection />
        <OperatorShowcaseSection />
        <FeaturedOnSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
