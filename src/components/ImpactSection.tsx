import ScrollReveal from "@/components/ScrollReveal";
import cambodiaMap from "@/assets/cambodia.png";
import thailandMap from "@/assets/thailand.png";
import vietnamMap from "@/assets/vietnam.png";
import { Users, Route, Search, Globe } from "lucide-react";

const countries = [
  { name: "Cambodia", operators: 54, map: cambodiaMap },
  { name: "Thailand", operators: 2, map: thailandMap },
  { name: "Vietnam", operators: 5, map: vietnamMap },
];

const stats = [
  { icon: Users, label: "Operators connected", value: "60+" },
  { icon: Route, label: "Daily trips processed", value: "1,000+" },
  { icon: Search, label: "Annual travelers", value: "2M+" },
  { icon: Globe, label: "Markets reached", value: "3" },
];

const ImpactSection = () => {
  return (
    <section className="section-padding" aria-labelledby="impact-heading">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="impact-heading" className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our presence across{" "}
              <span className="text-primary">the region</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              BookMeBus is building the digital infrastructure for ground transportation across Southeast Asia.
            </p>
          </div>
        </ScrollReveal>

        {/* Regional presence */}
        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto mb-20">
            {countries.map((c, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <img
                  src={c.map}
                  alt={`${c.name} map`}
                  className="w-28 h-28 object-contain mb-4"
                />
                <h4 className="font-heading font-bold text-foreground text-lg">{c.name}</h4>
                <p className="text-primary font-semibold">{c.operators} Operators</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Our Impact stats */}
        <ScrollReveal delay={0.2}>
          <div className="text-center mb-8">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
              Our <span className="text-primary">Impact</span>
            </h3>
          </div>
          <div className="bg-card rounded-3xl p-8 lg:p-10 card-shadow border border-border/50 max-w-3xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((s, i) => (
                <div key={i} className="text-center">
                  <s.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-1">{s.value}</div>
                  <p className="text-sm text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ImpactSection;
