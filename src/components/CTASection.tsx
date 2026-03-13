import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight, Handshake } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding" aria-labelledby="cta-heading">
      <div className="section-container">
        <ScrollReveal>
          <div className="gradient-cta-bg rounded-3xl p-10 sm:p-14 lg:p-20 text-center elevated-shadow">
            <h2 id="cta-heading" className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Ready to start your journey?
            </h2>
            <p className="text-lg text-primary-foreground/85 max-w-2xl mx-auto mb-10 leading-relaxed">
              Whether you're planning your next trip or looking to modernize your transport operations,
              BookMeBus connects you to the tools and services that make travel easier.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://bookmebus.com" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-card text-foreground hover:bg-card/90 font-semibold text-base px-8 py-6 rounded-2xl shadow-lg"
                >
                  Search Routes <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </a>
              <a href="mailto:partner@bookmebus.com">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary-foreground/30 text-foreground hover:bg-primary-foreground/10 hover:text-foreground font-semibold text-base px-8 py-6 rounded-2xl"
                >
                  <Handshake className="w-4 h-4 mr-1" /> Become a Partner
                </Button>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
