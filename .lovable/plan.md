

## Plan: Restructure into a concise About Us page

### Current issues
The page reads like an investor pitch deck with 9 heavy sections. The user wants a shorter, trust-focused About Us page targeting travelers, OTAs, and corporate partners — not investors.

### Changes overview

**1. Remove sections** (delete components + remove from Index.tsx):
- `ProblemSection` — investor-style problem framing, not needed
- `VisionSection` — future vision is investor-speak
- `EcosystemSection` — dual-engine diagram feels like a pitch deck slide

**2. Simplify HeroSection**
- Remove the first CTA buttons ("Explore Routes" / "Partner With Us") as requested
- Rewrite headline/subheadline to be About Us tone: "About BookMeBus" with a warm, trust-building description rather than pitch-style positioning
- Keep the trust line and platform badge

**3. Restructure remaining sections into a shorter flow:**

| Order | Section | Purpose | Tone change |
|-------|---------|---------|-------------|
| 1 | **Hero** (simplified) | Who we are | Warm, trustworthy intro — no CTAs |
| 2 | **SolutionSection** (renamed: "What We Do") | Platform overview with BMB_services.png | Keep but trim — focus on what travelers/partners get |
| 3 | **TrustSection** | Routes, features, stats | Already trust-focused — keep as-is |
| 4 | **SaaSSection** (retoned) | Operator tools | Soften from "infrastructure pitch" to "how we help partners" |
| 5 | **ImpactSection** | Regional presence + GTFS mention | Add GTFS paragraph here alongside the country maps |
| 6 | **CTASection** | Final call to action | Keep |

**4. Add GTFS content**
Insert into the ImpactSection after the country maps: "BookMeBus leverages the General Transit Feed Specification (GTFS), an open transit data standard introduced by Google, to structure and distribute transport routes, schedules, and service information across its platform." — presented as a trust/credibility callout card with a subtle icon.

**5. Update Index.tsx**
Remove imports for ProblemSection, VisionSection, EcosystemSection. Update section order.

### Files to modify
| File | Action |
|------|--------|
| `src/pages/Index.tsx` | Remove 3 sections, reorder |
| `src/components/HeroSection.tsx` | Remove CTA buttons, rewrite copy to About Us tone |
| `src/components/SolutionSection.tsx` | Minor copy tweaks for About Us framing |
| `src/components/SaaSSection.tsx` | Soften tone from investor to partner-facing |
| `src/components/ImpactSection.tsx` | Add GTFS callout card |
| Delete: `src/components/ProblemSection.tsx`, `src/components/VisionSection.tsx`, `src/components/EcosystemSection.tsx` | Remove unused components |

