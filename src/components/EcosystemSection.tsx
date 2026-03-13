import ScrollReveal from "@/components/ScrollReveal";
import { Users, Layers, Bus, Ship, Route, Ticket, Globe, Sparkles } from "lucide-react";

const EcosystemSection = () => {
  return (
    <section className="section-padding" aria-labelledby="ecosystem-heading">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="ecosystem-heading" className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              A connected{" "}
              <span className="text-primary">travel ecosystem</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              BookMeBus sits at the center of a dual-engine model — connecting marketplace demand
              with SaaS-powered supply infrastructure.
            </p>
          </div>
        </ScrollReveal>

        {/* Ecosystem diagram */}
        <ScrollReveal delay={0.15}>
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative">
              {/* Traveler side */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div className="space-y-4">
                  <div className="bg-card rounded-2xl p-5 card-shadow border border-border/50 text-center">
                    <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="font-heading font-semibold text-foreground text-sm">Travelers</p>
                    <p className="text-xs text-muted-foreground mt-1">Search, compare, book</p>
                  </div>
                  <div className="hidden md:flex justify-center">
                    <div className="flex flex-col items-center gap-1 text-xs text-muted-foreground">
                      <Route className="w-4 h-4 text-primary" />
                      <span>Travel routes</span>
                    </div>
                  </div>
                </div>

                {/* Center - Platform */}
                <div className="bg-primary/5 rounded-3xl p-8 border-2 border-primary/20 text-center relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary rounded-full text-primary-foreground text-xs font-semibold">
                    Platform
                  </div>
                  <Layers className="w-12 h-12 text-primary mx-auto mb-3" />
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">BookMeBus</h3>
                  <p className="text-sm text-muted-foreground">Marketplace + SaaS Infrastructure</p>
                  <div className="flex justify-center gap-4 mt-4">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Ticket className="w-4 h-4 text-primary" />
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Globe className="w-4 h-4 text-primary" />
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                </div>

                {/* Operator side */}
                <div className="space-y-4">
                  <div className="bg-card rounded-2xl p-5 card-shadow border border-border/50 text-center">
                    <Bus className="w-8 h-8 text-secondary mx-auto mb-2" />
                    <p className="font-heading font-semibold text-foreground text-sm">Bus Operators</p>
                    <p className="text-xs text-muted-foreground mt-1">Routes, inventory, sales</p>
                  </div>
                  <div className="bg-card rounded-2xl p-5 card-shadow border border-border/50 text-center">
                    <Ship className="w-8 h-8 text-secondary mx-auto mb-2" />
                    <p className="font-heading font-semibold text-foreground text-sm">Ferry Operators</p>
                    <p className="text-xs text-muted-foreground mt-1">Ticketing, distribution</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-card rounded-3xl p-7 card-shadow border border-border/50">
              <h3 className="font-heading font-bold text-foreground mb-2 text-primary">Marketplace Demand Side</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Travelers discover, compare, and book transport services through a unified digital experience.
              </p>
            </div>
            <div className="bg-card rounded-3xl p-7 card-shadow border border-border/50">
              <h3 className="font-heading font-bold text-foreground mb-2 text-secondary">SaaS Supply Side</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Operators manage inventory, distribute tickets, and modernize operations through BookMeBus infrastructure.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default EcosystemSection;
