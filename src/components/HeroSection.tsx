import { motion } from "framer-motion";
import { Globe, MapPin, Wifi } from "lucide-react";
import bmbServices from "@/assets/BMB_services.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden gradient-hero-bg section-padding pt-24 lg:pt-32">
      {/* Abstract network background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute top-20 right-0 w-[600px] h-[600px] opacity-[0.06]" viewBox="0 0 600 600" fill="none">
          <circle cx="300" cy="300" r="200" stroke="hsl(var(--primary))" strokeWidth="1" />
          <circle cx="300" cy="300" r="280" stroke="hsl(var(--primary))" strokeWidth="0.5" />
          <circle cx="150" cy="200" r="6" fill="hsl(var(--primary))" />
          <circle cx="450" cy="150" r="6" fill="hsl(var(--primary))" />
          <circle cx="400" cy="400" r="6" fill="hsl(var(--primary))" />
          <circle cx="200" cy="420" r="6" fill="hsl(var(--primary))" />
          <circle cx="350" cy="250" r="4" fill="hsl(var(--accent))" />
          <line x1="150" y1="200" x2="350" y2="250" stroke="hsl(var(--primary))" strokeWidth="0.5" />
          <line x1="450" y1="150" x2="350" y2="250" stroke="hsl(var(--primary))" strokeWidth="0.5" />
          <line x1="400" y1="400" x2="350" y2="250" stroke="hsl(var(--primary))" strokeWidth="0.5" />
          <line x1="200" y1="420" x2="350" y2="250" stroke="hsl(var(--primary))" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
              <Globe className="w-4 h-4" />
              About BookMeBus
            </div>
          </motion.div>

          <motion.h1
            className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-foreground leading-tight tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Connecting Southeast Asia Through{" "}
            <span className="text-primary">Smarter Travel</span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            BookMeBus is a digital mobility platform that helps travelers discover and book
            transportation across Southeast Asia — while empowering transport operators with
            modern ticketing and distribution technology.
          </motion.p>

          <motion.div
            className="flex items-center justify-center gap-6 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-primary" />
              Multiple countries
            </span>
            <span className="flex items-center gap-1.5">
              <Wifi className="w-4 h-4 text-primary" />
              Digital-first platform
            </span>
          </motion.div>

          <motion.p
            className="mt-12 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Trusted by travelers and transport operators across Southeast Asia
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
