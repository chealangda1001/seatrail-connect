import { BookOpen, Compass } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const FounderStorySection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              How BookMeBus <span className="text-primary">Started</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              BookMeBus was founded in 2015 by Langda Chea after recognizing how difficult it was
              to plan intercity travel across Cambodia. At the time, travelers often had to visit
              ticket counters or call operators individually to secure seats. BookMeBus was created
              to simplify this experience — enabling travelers to search routes, compare schedules,
              and book tickets online through a single platform. What started as a bus booking
              marketplace has evolved into a digital mobility platform connecting travelers and
              transport operators across Southeast Asia.
            </p>
          </div>
        </ScrollReveal>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-14">
          <ScrollReveal delay={0.3}>
            <div className="rounded-xl border border-border bg-card p-8 shadow-[var(--shadow-card)] h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Compass className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Our Mission
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To make travel across Southeast Asia simpler, more transparent,
                and accessible through digital technology.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.35}>
            <div className="rounded-xl border border-border bg-card p-8 shadow-[var(--shadow-card)] h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Our Vision
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To build the digital infrastructure that powers how people
                discover, book, and experience travel across the region.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default FounderStorySection;
