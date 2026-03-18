import ScrollReveal from "@/components/ScrollReveal";
import { Route, LayoutGrid, BarChart3, Globe, Palette, Eye } from "lucide-react";

const features = [
  { icon: Route, title: "Route & schedule management", desc: "Create, update, and manage routes with granular control over stops, pricing, and availability." },
  { icon: LayoutGrid, title: "Seat inventory & layout management", desc: "Visual seat maps, real-time inventory tracking, and automated capacity optimization." },
  { icon: BarChart3, title: "Ticket sales analytics", desc: "Comprehensive dashboards with booking trends, revenue metrics, and performance insights." },
  { icon: Globe, title: "Multi-channel distribution", desc: "Distribute tickets across web, mobile, agents, and partner platforms simultaneously." },
  { icon: Palette, title: "White-label solutions", desc: "Custom-branded web and mobile booking experiences for your transport company." },
  { icon: Eye, title: "Operational visibility & control", desc: "End-to-end oversight of fleet operations, staff performance, and service quality." },
];

const GTFSMapIllustration = () => (
  <svg viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
    {/* Map background */}
    <rect width="800" height="450" rx="16" fill="#2EBAE2" />
    <rect width="800" height="450" rx="16" fill="url(#mapGrad)" />
    <defs>
      <linearGradient id="mapGrad" x1="0" y1="0" x2="800" y2="450">
        <stop stopColor="#2EBAE2" />
        <stop offset="1" stopColor="#18A1CF" />
      </linearGradient>
    </defs>

    {/* Road grid lines */}
    {[80, 200, 320, 440, 560, 680].map((x) => (
      <line key={`v${x}`} x1={x} y1="0" x2={x} y2="450" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
    ))}
    {[90, 180, 270, 360].map((y) => (
      <line key={`h${y}`} x1="0" y1={y} x2="800" y2={y} stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
    ))}

    {/* Terrain patches */}
    <rect x="50" y="30" width="120" height="80" rx="12" fill="rgba(255,255,255,0.06)" />
    <rect x="600" y="300" width="150" height="100" rx="12" fill="rgba(255,255,255,0.06)" />
    <rect x="350" y="50" width="100" height="60" rx="10" fill="rgba(255,255,255,0.05)" />

    {/* Route 1 — orange polyline */}
    <path
      d="M100 380 C180 340, 220 200, 320 180 S480 220, 550 120 S650 80, 720 100"
      stroke="#EC5D24" strokeWidth="4" strokeLinecap="round" fill="none" strokeDasharray="0"
    />

    {/* Route 2 — lighter orange polyline */}
    <path
      d="M80 300 C160 280, 200 350, 340 310 S500 340, 620 260 S700 200, 750 220"
      stroke="#F4894A" strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.85"
    />

    {/* Stop markers — Route 1 */}
    {[
      { cx: 100, cy: 380, label: "A" },
      { cx: 320, cy: 180, label: "B" },
      { cx: 550, cy: 120, label: "C" },
      { cx: 720, cy: 100, label: "D" },
    ].map((s) => (
      <g key={s.label}>
        <circle cx={s.cx} cy={s.cy} r="14" fill="white" stroke="#EC5D24" strokeWidth="3" />
        <text x={s.cx} y={s.cy + 5} textAnchor="middle" fontSize="11" fontWeight="700" fill="#EC5D24">{s.label}</text>
      </g>
    ))}

    {/* Stop markers — Route 2 */}
    {[
      { cx: 80, cy: 300 },
      { cx: 340, cy: 310 },
      { cx: 620, cy: 260 },
      { cx: 750, cy: 220 },
    ].map((s, i) => (
      <g key={`r2-${i}`}>
        <circle cx={s.cx} cy={s.cy} r="10" fill="white" stroke="#F4894A" strokeWidth="2.5" />
        <circle cx={s.cx} cy={s.cy} r="4" fill="#F4894A" />
      </g>
    ))}

    {/* Bus icon on Route 1 */}
    <g transform="translate(430, 192)">
      <rect x="-16" y="-12" width="32" height="24" rx="6" fill="#EC5D24" />
      <rect x="-12" y="-9" width="24" height="12" rx="3" fill="white" opacity="0.9" />
      <circle cx="-8" cy="14" r="3.5" fill="white" stroke="#EC5D24" strokeWidth="1.5" />
      <circle cx="8" cy="14" r="3.5" fill="white" stroke="#EC5D24" strokeWidth="1.5" />
    </g>

    {/* Google Maps-style info card */}
    <g transform="translate(460, 40)">
      <rect x="0" y="0" width="220" height="110" rx="12" fill="white" />
      <rect x="0" y="0" width="220" height="110" rx="12" fill="white" filter="url(#cardShadow)" />
      {/* Triangle pointer */}
      <polygon points="40,110 55,125 70,110" fill="white" />

      <text x="16" y="28" fontSize="13" fontWeight="700" fill="#1a1a1a">Phnom Penh → Siem Reap</text>
      <text x="16" y="46" fontSize="11" fill="#666">BookMeBus Express</text>
      <text x="16" y="64" fontSize="11" fill="#666">Departs 7:30 AM · 6h</text>
      <text x="16" y="82" fontSize="14" fontWeight="700" fill="#EC5D24">$12.00</text>
      <rect x="140" y="68" width="64" height="28" rx="6" fill="#EC5D24" />
      <text x="172" y="87" textAnchor="middle" fontSize="12" fontWeight="600" fill="white">Book</text>
    </g>

    {/* GTFS badge */}
    <g transform="translate(16, 400)">
      <rect width="80" height="30" rx="8" fill="rgba(255,255,255,0.2)" />
      <text x="12" y="20" fontSize="11" fontWeight="700" fill="white" letterSpacing="1">GTFS</text>
      <circle cx="64" cy="15" r="6" fill="none" stroke="white" strokeWidth="1.5" />
      <path d="M62 12 L62 18 M62 15 L66 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </g>

    {/* Shadow filter */}
    <defs>
      <filter id="cardShadow" x="-10" y="-5" width="240" height="140">
        <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.15" />
      </filter>
    </defs>
  </svg>
);

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
              <GTFSMapIllustration />
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
