import { Navbar, Footer } from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import FounderStorySection from "@/components/FounderStorySection";
import SolutionSection from "@/components/SolutionSection";
import TrustSection from "@/components/TrustSection";
import SaaSSection from "@/components/SaaSSection";
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
        <TrustSection />
        <SaaSSection />
        <ImpactSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
