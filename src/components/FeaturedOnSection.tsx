import ScrollReveal from "@/components/ScrollReveal";

const mediaOutlets = [
  { name: "CNN", style: "font-serif italic" },
  { name: "Forbes", style: "font-serif" },
  { name: "Inc.", style: "font-serif italic" },
  { name: "Red Herring", style: "font-sans tracking-tight" },
  { name: "e27", style: "font-mono font-black" },
  { name: "Geeks in Cambodia", style: "font-sans tracking-tight" },
];

const FeaturedOnSection = () => {
  return (
    <section className="section-padding" aria-labelledby="featured-heading">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p id="featured-heading" className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-8">
              We are featured on
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
              {mediaOutlets.map((outlet, i) => (
                <span
                  key={i}
                  className={`text-2xl sm:text-3xl font-bold text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors duration-300 select-none ${outlet.style}`}
                >
                  {outlet.name}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FeaturedOnSection;
