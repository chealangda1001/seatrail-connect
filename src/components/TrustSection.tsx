import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight, Calendar, Lock, Ticket, ShieldCheck } from "lucide-react";

const routes = [
  { from: "Phnom Penh", to: "Siem Reap", href: "https://bookmebus.com/en/search/bus/phnom-penh/siem-reap" },
  { from: "Phnom Penh", to: "Sihanoukville", href: "https://bookmebus.com/en/search/bus/phnom-penh/sihanoukville" },
  { from: "Phnom Penh", to: "Bangkok", href: "https://bookmebus.com/en/search/bus/phnom-penh/bangkok" },
  { from: "Phnom Penh", to: "Ho Chi Minh City", href: "https://bookmebus.com/en/search/bus/phnom-penh/ho-chi-minh" },
  { from: "Phnom Penh", to: "Vientiane, Laos PDR", href: "https://bookmebus.com/en/search/bus/phnom-penh/vientiane" },
];

const features = [
  { icon: Calendar, title: "Compare schedules", desc: "View and compare departure times across multiple operators" },
  { icon: Lock, title: "Book securely", desc: "Safe, encrypted payment processing for every transaction" },
  { icon: Ticket, title: "Receive digital tickets", desc: "Instant e-tickets delivered to your device" },
  { icon: ShieldCheck, title: "Travel with trusted operators", desc: "Vetted and verified transport partners" },
];

const TrustSection = () => {
  return (
    <section className="section-padding" aria-labelledby="trust-heading">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="trust-heading" className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Powering journeys across{" "}
              <span className="text-primary">Southeast Asia</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              From popular intercity routes to cross-border connections, BookMeBus makes regional travel accessible and reliable.
            </p>
          </div>
        </ScrollReveal>

        {/* Routes */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-16">
            {routes.map((r, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-2 px-5 py-3 bg-card rounded-2xl card-shadow border border-border/50 text-sm font-medium text-foreground"
              >
                {r.from}
                <ArrowRight className="w-4 h-4 text-primary" />
                {r.to}
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((f, i) => (
            <ScrollReveal key={i} delay={0.1 + i * 0.08}>
              <div className="bg-card rounded-3xl p-7 card-shadow border border-border/50 hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrustSection;
