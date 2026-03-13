

## Plan: Add "We are featured on" and "Transport Operators we are empowering" sections

### Placement

Based on the page flow (Hero → Founder Story → What We Do → Trust → SaaS Tools → Impact → CTA):

1. **"We are featured on"** — Place after TrustSection (social proof reinforces the trust/stats just shown) and before SaaSSection
2. **"Transport Operators we are empowering"** — Place after SaaSSection (directly follows the operator tools pitch, showing real results) and before ImpactSection

### Section 1: FeaturedOnSection

- Centered heading following existing section title style (`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold`)
- Row of media logos: CNN, Forbes, Inc., Red Herring — rendered as text-based logos using bold typography (no external images needed, keeps it clean and fast-loading)
- Wrapped in `ScrollReveal`

### Section 2: OperatorShowcaseSection (Carousel)

- Centered heading: "Transport operators we are **empowering**"
- Auto-scrolling carousel using Embla (already installed) with `autoplay` plugin
- Each slide shows an uploaded app mockup image with the operator name below
- Operators from the uploaded images:
  - GTVC Speed Boat
  - Emerald Express (EV Go Express)
  - BookMeBus (ABA Mini App)
  - BS Transportation
  - Big Bus Angkor
  - iBus
  - Oudong Transport
  - Mekong Express (HangMeas app appears to be entertainment, not transport — will exclude)
  - BookMe+ (the super app)
- Copy all uploaded mockup images to `src/assets/operators/`
- Carousel config: `loop: true`, autoplay interval ~4 seconds, show 1 slide on mobile, 3 on tablet, 4 on desktop using `slidesToScroll` and CSS basis classes
- Pause on hover for better UX

### Implementation

1. Copy 9 operator mockup images to `src/assets/operators/`
2. Install `embla-carousel-autoplay` package
3. Create `src/components/FeaturedOnSection.tsx`
4. Create `src/components/OperatorShowcaseSection.tsx`
5. Update `src/pages/Index.tsx` to add both sections in the correct positions

