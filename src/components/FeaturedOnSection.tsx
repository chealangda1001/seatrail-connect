import ScrollReveal from "@/components/ScrollReveal";
import cnnLogo from "@/assets/media/cnn.jpg";
import forbesLogo from "@/assets/media/forbes.png";
import incSeaLogo from "@/assets/media/inc-sea.png";
import lonelyPlanetLogo from "@/assets/media/lonely-planet.png";
import voaLogo from "@/assets/media/voa.png";
import witLogo from "@/assets/media/wit.svg";

const mediaOutlets = [
  {
    name: "CNN",
    logo: cnnLogo,
    href: "https://edition.cnn.com/videos/world/2017/04/21/road-to-asean-cambodia-bookmebus-stout-pkg.cnn",
  },
  {
    name: "Forbes",
    logo: forbesLogo,
    href: "http://www.forbes.com/sites/greenbrandon/2016/10/20/how-cambodias-startups-are-shifting-from-bootstrapping-to-angels/2/#508b9555117e",
  },
  {
    name: "Inc Southeast Asia",
    logo: incSeaLogo,
    href: "http://inc-asean.com/editor-picks/vroom-grow-cambodian-start-enables-seamless-transit-southeast-asia",
  },
  {
    name: "Lonely Planet",
    logo: lonelyPlanetLogo,
    href: "https://www.lonelyplanet.com/articles/getting-around-cambodia",
  },
  {
    name: "VOA",
    logo: voaLogo,
    href: "https://khmer.voanews.com/a/3456077.html",
  },
];

const FeaturedOnSection = () => {
  return (
    <section className="section-padding" aria-labelledby="featured-heading">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p id="featured-heading" className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-10">
              We are featured on
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
              {mediaOutlets.map((outlet, i) => (
                <a
                  key={i}
                  href={outlet.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  title={outlet.name}
                >
                  <img
                    src={outlet.logo}
                    alt={outlet.name}
                    className="h-8 sm:h-10 lg:h-12 w-auto object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FeaturedOnSection;
