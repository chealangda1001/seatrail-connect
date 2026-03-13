import ScrollReveal from "@/components/ScrollReveal";
import { Sparkles, CalendarHeart, Ticket, Globe } from "lucide-react";

const futureItems = [
  { icon: Sparkles, label: "Travel experiences" },
  { icon: CalendarHeart, label: "Event ticketing" },
  { icon: Ticket, label: "Lifestyle services" },
  { icon: Globe, label: "Deeper regional connectivity" },
];

const VisionSection = () => {
  return (
    <section className="section-padding" aria-labelledby="vision-heading">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 id="vision-heading" className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Building the future of travel{" "}
              <span className="text-primary">beyond transportation</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              BookMeBus is evolving into a broader travel and lifestyle ecosystem — extending naturally
              from transportation into the experiences that make every journey meaningful.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-14">
            {futureItems.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-6 py-4 bg-card rounded-2xl card-shadow border border-border/50"
              >
                <item.icon className="w-5 h-5 text-primary" />
                <span className="font-medium text-foreground text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="bg-primary/5 rounded-3xl p-10 lg:p-14 border border-primary/10 max-w-4xl mx-auto text-center">
            <p className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-foreground leading-snug">
              From transportation booking to connected travel experiences,{" "}
              <span className="text-primary">BookMeBus is building the digital layer</span>{" "}
              for how the region moves.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default VisionSection;
