import ScrollReveal from "@/components/ScrollReveal";
import { Route, LayoutGrid, BarChart3, Globe, Palette, Eye } from "lucide-react";
import gtfsImage from "@/assets/gtfs_by_google.png";

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
              manage operations efficiently, and reach new customers — built on the General Transit
              Feed Specification (GTFS), an open transit data standard by Google, to structure and
              distribute routes, schedules, and services across the platform.
            </p>
          </div>
        </ScrollReveal>

        {/* GTFS map illustration */}
        <ScrollReveal delay={0.1}>
          <div className="relative max-w-4xl mx-auto mb-16">
            <div className="bg-card rounded-3xl p-6 lg:p-8 elevated-shadow border border-border/50 overflow-hidden">
              <img
                src={gtfsImage}
                alt="GTFS transit data visualization on Google Maps showing bus routes and stops"
                className="w-full h-auto rounded-2xl"
              />
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
      </div>
    </section>
  );
};

export default SaaSSection;
