import ScrollReveal from "@/components/ScrollReveal";
import { MapPin, Calendar, Ticket, Shield, Route, Package, Globe, Settings } from "lucide-react";
import bmbServices from "@/assets/BMB_services.png";


const travelerFeatures = [
  { icon: MapPin, title: "Discover routes", desc: "Search across operators and modes in one place" },
  { icon: Calendar, title: "Compare schedules", desc: "View real-time availability and departure times" },
  { icon: Ticket, title: "Book digitally", desc: "Secure your seat with instant confirmation" },
  { icon: Shield, title: "Travel with confidence", desc: "Trusted operators, verified services" },
];

const operatorFeatures = [
  { icon: Route, title: "Manage routes", desc: "Create and update routes with full control" },
  { icon: Package, title: "Control seat inventory", desc: "Real-time seat maps and availability" },
  { icon: Globe, title: "Distribute tickets online", desc: "Reach travelers through multiple channels" },
  { icon: Settings, title: "Modernize operations", desc: "Digital tools for the modern transport company" },
];

const SolutionSection = () => {
  return (
    <section className="section-padding gradient-section-bg" aria-labelledby="solution-heading">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="solution-heading" className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              A unified platform for{" "}
              <span className="text-primary">travelers and transport operators</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              BookMeBus brings together multiple modes of transport in one connected platform,
              serving both sides of the mobility equation.
            </p>
          </div>
        </ScrollReveal>

        {/* Transport modes */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-20">
            {modes.map((mode, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-6 py-4 bg-card rounded-2xl card-shadow border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              >
                <mode.icon className="w-6 h-6 text-primary" />
                <span className="font-heading font-semibold text-foreground">{mode.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Traveler side */}
          <ScrollReveal delay={0.15}>
            <div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-8">
                For <span className="text-primary">Travelers</span>
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {travelerFeatures.map((f, i) => (
                  <div key={i} className="group">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <f.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-heading font-semibold text-foreground mb-1">{f.title}</h4>
                    <p className="text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Operator side */}
          <ScrollReveal delay={0.25}>
            <div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-8">
                For <span className="text-secondary">Operators</span>
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {operatorFeatures.map((f, i) => (
                  <div key={i} className="group">
                    <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                      <f.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <h4 className="font-heading font-semibold text-foreground mb-1">{f.title}</h4>
                    <p className="text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
