import ScrollReveal from "@/components/ScrollReveal";
import { Route, LayoutGrid, BarChart3, Globe, Palette, Eye, Database } from "lucide-react";

const features = [
  { icon: Route, title: "Route & schedule management", desc: "Create, update, and manage routes with granular control over stops, pricing, and availability." },
  { icon: LayoutGrid, title: "Seat inventory & layout management", desc: "Visual seat maps, real-time inventory tracking, and automated capacity optimization." },
  { icon: BarChart3, title: "Ticket sales analytics", desc: "Comprehensive dashboards with booking trends, revenue metrics, and performance insights." },
  { icon: Globe, title: "Multi-channel distribution", desc: "Distribute tickets across web, mobile, agents, and partner platforms simultaneously." },
  { icon: Palette, title: "White-label solutions", desc: "Custom-branded web and mobile booking experiences for your transport company." },
  { icon: Eye, title: "Operational visibility & control", desc: "End-to-end oversight of fleet operations, staff performance, and service quality." },
];

const SaaSSection = () => {
  return (
    <section className="section-padding gradient-section-bg" aria-labelledby="saas-heading">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
              For Transport Operators & Partners
            </div>
            <h2 id="saas-heading" className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Tools to help you{" "}
              <span className="text-secondary">grow your business</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We provide transport operators with the digital tools they need to sell more tickets,
              manage operations efficiently, and reach new customers.
            </p>
          </div>
        </ScrollReveal>

        {/* Dashboard preview */}
        <ScrollReveal delay={0.1}>
          <div className="relative max-w-4xl mx-auto mb-16">
            <div className="bg-card rounded-3xl p-6 lg:p-8 elevated-shadow border border-border/50">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-accent/60" />
                <div className="w-3 h-3 rounded-full bg-primary/60" />
                <span className="ml-3 text-xs text-muted-foreground font-mono">operator-dashboard.bookmebus.com</span>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {["Today's Bookings", "Revenue (MTD)", "Active Routes"].map((label, i) => (
                  <div key={i} className="bg-muted rounded-2xl p-4">
                    <p className="text-xs text-muted-foreground mb-1">{label}</p>
                    <div className="h-4 w-20 bg-primary/15 rounded" />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-4 gap-3">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="h-8 bg-muted rounded-xl" />
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((f, i) => (
            <ScrollReveal key={i} delay={0.1 + i * 0.06}>
              <div className="bg-card rounded-3xl p-7 card-shadow border border-border/50 hover:border-secondary/20 hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center mb-5">
                  <f.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* GTFS callout */}
        <ScrollReveal delay={0.5}>
          <div className="bg-secondary/5 rounded-3xl p-8 lg:p-10 border border-secondary/10 max-w-4xl mx-auto flex items-start gap-5">
            <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center mt-1">
              <Database className="w-6 h-6 text-secondary" />
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

export default SaaSSection;
