import ScrollReveal from "@/components/ScrollReveal";
import { TrendingUp, Plane, MapPin, Wifi } from "lucide-react";

const points = [
  { icon: TrendingUp, title: "Rising mobility demand", desc: "Growing middle class and increasing urbanization drive demand for reliable intercity and cross-border transport." },
  { icon: Plane, title: "Tourism and domestic travel growth", desc: "Southeast Asia remains one of the world's fastest-growing tourism regions, with domestic travel expanding rapidly." },
  { icon: MapPin, title: "Transport accessibility gaps", desc: "Millions still lack convenient access to reliable transport booking, especially in secondary cities and rural corridors." },
  { icon: Wifi, title: "Digital infrastructure opportunity", desc: "The region's rapid smartphone adoption creates an unprecedented opportunity to digitize ground transportation." },
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
