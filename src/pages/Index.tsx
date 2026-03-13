import { Navbar, Footer } from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import TrustSection from "@/components/TrustSection";
import SaaSSection from "@/components/SaaSSection";
import EcosystemSection from "@/components/EcosystemSection";
import ImpactSection from "@/components/ImpactSection";
import VisionSection from "@/components/VisionSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <TrustSection />
        <SaaSSection />
        <EcosystemSection />
        <ImpactSection />
        <VisionSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
