import { Navbar, Footer } from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import FounderStorySection from "@/components/FounderStorySection";
import TrustSection from "@/components/TrustSection";
import FeaturedOnSection from "@/components/FeaturedOnSection";
import SaaSSection from "@/components/SaaSSection";
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
        <TrustSection />
        <ImpactSection />
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
