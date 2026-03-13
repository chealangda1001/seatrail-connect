import ScrollReveal from "@/components/ScrollReveal";
import { Globe } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="section-container flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Globe className="w-7 h-7 text-primary" />
          <span className="font-heading text-xl font-bold text-foreground">BookMeBus</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">Routes</a>
          <a href="#" className="hover:text-primary transition-colors">For Operators</a>
          <a href="#" className="hover:text-primary transition-colors">About</a>
          <a href="#" className="px-4 py-2 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors">
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-border/50 section-padding py-12 lg:py-16">
      <div className="section-container">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Globe className="w-6 h-6 text-primary" />
              <span className="font-heading text-lg font-bold text-foreground">BookMeBus</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Southeast Asia's digital mobility platform connecting travelers and transport operators.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">For Travelers</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Search Routes</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Popular Destinations</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Travel Guides</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">For Operators</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Partner With Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Operator Dashboard</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">API Documentation</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} BookMeBus. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export { Navbar, Footer };
