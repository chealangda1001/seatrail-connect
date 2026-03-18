import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import bs from "@/assets/trust-logos/bs.png";
import ebooking from "@/assets/trust-logos/ebooking.png";
import gtvcLogo from "@/assets/trust-logos/gtvc-logo.png";
import ibus from "@/assets/trust-logos/ibus.png";
import kimseng from "@/assets/trust-logos/kimseng_express_logo.png";
import salyVip from "@/assets/trust-logos/saly-vip.png";
import seila from "@/assets/trust-logos/Seila-logo.png";
import cambolink from "@/assets/trust-logos/Tran-Cambolink-app-icon.png";
import vetLogo from "@/assets/trust-logos/VET-logo.png";
import vetNew from "@/assets/trust-logos/vet-new-logo.png";

const logos = [
  { name: "BS Transportation", image: bs },
  { name: "eBooking", image: ebooking },
  { name: "GTVC", image: gtvcLogo },
  { name: "iBus", image: ibus },
  { name: "Kim Seng Express", image: kimseng },
  { name: "Saly VIP", image: salyVip },
  { name: "Seila", image: seila },
  { name: "Cambolink", image: cambolink },
  { name: "VET", image: vetLogo },
  { name: "VET Express", image: vetNew },
];

const TrustLogosCarousel = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true },
    [Autoplay({ delay: 2500, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  return (
    <div className="overflow-hidden mt-8 max-w-4xl mx-auto" ref={emblaRef}>
      <div className="flex -ml-3">
        {logos.map((logo, i) => (
          <div
            key={i}
            className="min-w-0 shrink-0 grow-0 basis-[20%] sm:basis-[14%] lg:basis-[10%] pl-3"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white border border-border/50 flex items-center justify-center p-3 shadow-sm mx-auto">
              <img
                src={logo.image}
                alt={logo.name}
                className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustLogosCarousel;
