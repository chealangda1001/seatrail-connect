import ScrollReveal from "@/components/ScrollReveal";
import { Database } from "lucide-react";
import cambodiaMap from "@/assets/cambodia.png";
import thailandMap from "@/assets/thailand.png";
import vietnamMap from "@/assets/vietnam.png";

const countries = [
  { name: "Cambodia", operators: 54, map: cambodiaMap },
  { name: "Thailand", operators: 2, map: thailandMap },
  { name: "Vietnam", operators: 5, map: vietnamMap },
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
          <div className="mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
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
          </div>
        </ScrollReveal>

        {/* GTFS callout */}
        <ScrollReveal delay={0.2}>
          <div className="bg-primary/5 rounded-3xl p-8 lg:p-10 border border-primary/10 max-w-4xl mx-auto flex items-start gap-5">
            <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mt-1">
              <Database className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-foreground mb-2">Built on open standards</h3>
              <p className="text-muted-foreground leading-relaxed">
                BookMeBus leverages the General Transit Feed Specification (GTFS), an open transit data
                standard introduced by Google, to structure and distribute transport routes, schedules,
                and service information across its platform.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ImpactSection;
