import ScrollReveal from "@/components/ScrollReveal";
import { TrendingUp, Plane, MapPin, Wifi } from "lucide-react";
import cambodiaMap from "@/assets/cambodia.png";
import thailandMap from "@/assets/thailand.png";
import vietnamMap from "@/assets/vietnam.png";

const points = [
  { icon: TrendingUp, title: "Rising mobility demand", desc: "Growing middle class and increasing urbanization drive demand for reliable intercity and cross-border transport." },
  { icon: Plane, title: "Tourism and domestic travel growth", desc: "Southeast Asia remains one of the world's fastest-growing tourism regions, with domestic travel expanding rapidly." },
  { icon: MapPin, title: "Transport accessibility gaps", desc: "Millions still lack convenient access to reliable transport booking, especially in secondary cities and rural corridors." },
  { icon: Wifi, title: "Digital infrastructure opportunity", desc: "The region's rapid smartphone adoption creates an unprecedented opportunity to digitize ground transportation." },
];

const countries = [
  { name: "Cambodia", operators: 54, map: cambodiaMap },
  { name: "Thailand", operators: 2, map: thailandMap },
  { name: "Vietnam", operators: 5, map: vietnamMap },
];

const ImpactSection = () => {
  return (
    <section className="section-padding gradient-section-bg" aria-labelledby="impact-heading">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="impact-heading" className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Supporting the region's growing{" "}
              <span className="text-primary">travel economy</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Southeast Asia's transportation landscape is transforming. BookMeBus is building the digital
              infrastructure to support this evolution.
            </p>
          </div>
        </ScrollReveal>

        {/* Regional presence */}
        <ScrollReveal delay={0.1}>
          <div className="mb-16">
            <h3 className="font-heading text-2xl font-bold text-foreground text-center mb-10">
              Expanding across <span className="text-primary">ASEAN</span>
            </h3>
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

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {points.map((p, i) => (
            <ScrollReveal key={i} delay={0.1 + i * 0.08}>
              <div className="bg-card rounded-3xl p-7 card-shadow border border-border/50 h-full">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                  <p.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
