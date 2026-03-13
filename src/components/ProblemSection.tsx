import ScrollReveal from "@/components/ScrollReveal";
import { Search, Clock, Eye, Smartphone, Settings, BarChart3, Package, Wifi } from "lucide-react";

const travelerPains = [
  { icon: Search, text: "Difficult route comparison across operators" },
  { icon: Clock, text: "Inconsistent schedules and limited availability info" },
  { icon: Eye, text: "Limited booking transparency and pricing clarity" },
  { icon: Smartphone, text: "Heavy dependence on offline ticketing" },
];

const operatorPains = [
  { icon: Settings, text: "Manual ticketing and paper-based operations" },
  { icon: Wifi, text: "Limited digital distribution reach" },
  { icon: Package, text: "Fragmented inventory and seat management" },
  { icon: BarChart3, text: "Lack of analytics, reporting, and digital tools" },
];

const ProblemSection = () => {
  return (
    <section className="section-padding" aria-labelledby="problem-heading">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="problem-heading" className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Travel in Southeast Asia is still{" "}
              <span className="text-primary">too fragmented</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Millions of travelers and hundreds of transport operators face the same challenge:
              a disconnected, analog transportation ecosystem.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          <ScrollReveal delay={0.1}>
            <div className="bg-card rounded-3xl p-8 lg:p-10 card-shadow border border-border/50">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                For Travelers
              </div>
              <ul className="space-y-5">
                {travelerPains.map((pain, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <pain.icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-foreground pt-2">{pain.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="bg-card rounded-3xl p-8 lg:p-10 card-shadow border border-border/50">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
                For Operators
              </div>
              <ul className="space-y-5">
                {operatorPains.map((pain, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                      <pain.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <p className="text-foreground pt-2">{pain.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.3}>
          <p className="text-center text-xl sm:text-2xl font-heading font-semibold text-foreground">
            BookMeBus was built to{" "}
            <span className="text-primary">bridge both sides</span> of this gap.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProblemSection;
