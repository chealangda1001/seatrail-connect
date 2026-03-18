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
import buvaSea from "@/assets/trust-logos/buva_sea.png";
import capitol from "@/assets/trust-logos/capitol.png";
import evgo from "@/assets/trust-logos/evgo.png";
import evtaxi from "@/assets/trust-logos/evtaxi.png";
import larryta from "@/assets/trust-logos/larryta.png";
import meko from "@/assets/trust-logos/meko.png";
import meyhong from "@/assets/trust-logos/meyhong.png";
import oudong from "@/assets/trust-logos/oudong.png";
import royalRailway from "@/assets/trust-logos/royal-railway.png";
import tct from "@/assets/trust-logos/tct.png";
import chanMolyRoth from "@/assets/trust-logos/chan-moly-roth.png";
import kohRong from "@/assets/trust-logos/koh-rong.png";
import ratanakSambath from "@/assets/trust-logos/ratanak-sambath.png";
import rithTravel from "@/assets/trust-logos/rith-travel.png";
import rithya from "@/assets/trust-logos/rithya.png";
import sovanRithy from "@/assets/trust-logos/sovan-rithy.png";
import srlTransport from "@/assets/trust-logos/srl-transport.png";
import thaiduong from "@/assets/trust-logos/thaiduong.png";
import travelMart from "@/assets/trust-logos/travel-mart.png";
import vibolExpress from "@/assets/trust-logos/vibol-express.png";
import goHo from "@/assets/trust-logos/go-ho.png";
import kampot from "@/assets/trust-logos/kampot.png";
import kohrongCambodia from "@/assets/trust-logos/kohrong-cambodia.png";
import kumhoSamco from "@/assets/trust-logos/kumho-samco.png";
import kLana from "@/assets/trust-logos/k-lana.png";
import raExpress from "@/assets/trust-logos/ra-express.png";
import rally from "@/assets/trust-logos/rally.png";
import rithiyaExpress from "@/assets/trust-logos/rithiya-express.png";
import riverExpress from "@/assets/trust-logos/river-express.png";
import romnyTour from "@/assets/trust-logos/romny-tour.png";
import sakuraBus from "@/assets/trust-logos/sakura-bus.png";
import yellowBus from "@/assets/trust-logos/yellow-bus.png";

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
  { name: "Buva Sea", image: buvaSea },
  { name: "Capitol Tours", image: capitol },
  { name: "EVGo Express", image: evgo },
  { name: "EV Taxi", image: evtaxi },
  { name: "Larryta", image: larryta },
  { name: "Meko Limousine", image: meko },
  { name: "Mey Hong", image: meyhong },
  { name: "Oudong Express", image: oudong },
  { name: "Royal Railway", image: royalRailway },
  { name: "TCT Express", image: tct },
  { name: "Chan Moly Roth", image: chanMolyRoth },
  { name: "Koh Rong Star Express", image: kohRong },
  { name: "Ratanak Sambath", image: ratanakSambath },
  { name: "Rith Travel", image: rithTravel },
  { name: "Rithya Mondolkiri Express", image: rithya },
  { name: "Sovan Rithy Express", image: sovanRithy },
  { name: "SRL Transport", image: srlTransport },
  { name: "Thai Duong Limousine", image: thaiduong },
  { name: "Travel Mart Bangkok", image: travelMart },
  { name: "Vibol Express", image: vibolExpress },
  { name: "Go Ho Travel", image: goHo },
  { name: "Kampot Transports", image: kampot },
  { name: "Koh Rong Cambodia", image: kohrongCambodia },
  { name: "Kumho Samco Bus", image: kumhoSamco },
  { name: "K-Lana Transportation", image: kLana },
  { name: "RA Express VIP", image: raExpress },
  { name: "Rally Tour & Travel", image: rally },
  { name: "Rithiya Express", image: rithiyaExpress },
  { name: "Cambodia River Express", image: riverExpress },
  { name: "Romny Tour", image: romnyTour },
  { name: "Sakura Bus", image: sakuraBus },
  { name: "Yellow Bus Cambodia", image: yellowBus },
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
