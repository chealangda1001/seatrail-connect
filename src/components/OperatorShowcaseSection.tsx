import ScrollReveal from "@/components/ScrollReveal";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";

import bigbus from "@/assets/operators/bigbus.png";
import bookmeplus from "@/assets/operators/bookmeplus.png";
import abaMini from "@/assets/operators/aba_mini.png";
import bsTransport from "@/assets/operators/bs_transport.png";
import evExpress from "@/assets/operators/ev_express.png";
import gtvc from "@/assets/operators/gtvc.png";
import hangmeas from "@/assets/operators/hangmeas.png";
import ibus from "@/assets/operators/ibus.png";
import oudong from "@/assets/operators/oudong.png";

const operators = [
  { name: "GTVC Speed Boat", image: gtvc },
  { name: "EV Go Express", image: evExpress },
  { name: "BookMeBus ABA Mini App", image: abaMini },
  { name: "BS Transportation", image: bsTransport },
  { name: "Big Bus Angkor", image: bigbus },
  { name: "iBus", image: ibus },
  { name: "Oudong Transport", image: oudong },
  { name: "HangMeas Express", image: hangmeas },
  { name: "BookMe+", image: bookmeplus },
];

const OperatorShowcaseSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true },
    [Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <section className="section-padding" aria-labelledby="operators-heading">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2
              id="operators-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            >
              Transport operators we are{" "}
              <span className="text-primary">empowering</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We build custom-branded mobile apps for transport operators — helping them digitize ticketing and reach more travelers.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {operators.map((op, i) => (
                <div
                  key={i}
                  className="min-w-0 shrink-0 grow-0 basis-[75%] sm:basis-[40%] lg:basis-[25%] pl-4"
                >
                  <div className="bg-card rounded-3xl p-4 card-shadow border border-border/50 hover:border-primary/20 transition-all duration-300">
                    <div className="aspect-[9/16] rounded-2xl overflow-hidden mb-4 bg-muted">
                      <img
                        src={op.image}
                        alt={`${op.name} app built by BookMeBus`}
                        className="w-full h-full object-cover object-top"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-sm font-medium text-foreground text-center truncate">
                      {op.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {scrollSnaps.map((_, i) => (
              <button
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === selectedIndex
                    ? "bg-primary w-6"
                    : "bg-border hover:bg-muted-foreground/30"
                }`}
                onClick={() => emblaApi?.scrollTo(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default OperatorShowcaseSection;
