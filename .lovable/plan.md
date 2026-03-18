

## Plan: Add Operator Logo Carousel to Hero Section

### What
Add an auto-scrolling logo carousel beneath the "Trusted by travelers and transport operators across Southeast Asia" text in the Hero section. Display the 10 uploaded operator logos in uniform circular containers with a white background, creating a clean trust-bar appearance.

### Display Recommendation
- **Uniform circular containers** (e.g., `w-20 h-20` rounded-full with white background and subtle border) to normalize all differently-sized logos into a consistent shape
- Logos rendered with `object-contain` and padding inside the circle so they breathe
- Grayscale by default, full color on hover (like the FeaturedOn section pattern) to keep the section visually clean
- Subtle card shadow on each circle for depth
- No operator names shown — logos only, for a clean trust strip

### Implementation

**1. Copy 10 logo images to `src/assets/trust-logos/`**
- bs.png, ebooking.png, gtvc-logo.png, ibus.png, kimseng_express_logo.png, saly-vip.png, Seila-logo.png, Tran-Cambolink-app-icon.png, VET-logo.png, vet-new-logo.png

**2. Create `src/components/TrustLogosCarousel.tsx`**
- Import all 10 logos
- Use Embla Carousel with Autoplay plugin (same config as `OperatorShowcaseSection`: `loop: true, align: "start", dragFree: true`, Autoplay `delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true`)
- Each slide: a `w-20 h-20 rounded-full bg-white border border-border/50 flex items-center justify-center p-3` container with the logo as `object-contain max-w-full max-h-full`
- Apply `grayscale hover:grayscale-0 transition-all` on each logo for the trust-bar aesthetic
- Basis: `basis-[20%] sm:basis-[14%] lg:basis-[10%]` to show multiple logos per row
- No dot navigation needed — continuous scroll is sufficient for a trust strip

**3. Update `src/components/HeroSection.tsx`**
- Import and render `<TrustLogosCarousel />` right after the "Trusted by travelers..." `<motion.p>` tag (after line 76)
- Wrap in a `ScrollReveal` or `motion.div` with slight delay

### Files changed
- **Create** `src/assets/trust-logos/` — 10 logo files copied from uploads
- **Create** `src/components/TrustLogosCarousel.tsx`
- **Edit** `src/components/HeroSection.tsx` — add the carousel component

