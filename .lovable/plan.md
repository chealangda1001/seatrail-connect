

## Plan

**Remove** the `SolutionSection` ("What we do") from `Index.tsx` and **reorder** sections so `TrustSection` ("Powering journeys across Southeast Asia") comes right after `FounderStorySection` (which contains "Our Mission" and "Our Vision").

### Changes to `src/pages/Index.tsx`

New section order:
1. HeroSection
2. FounderStorySection (Mission & Vision)
3. **TrustSection** (moved up)
4. ImpactSection
5. SaaSSection
6. OperatorShowcaseSection
7. FeaturedOnSection
8. CTASection

- Remove `SolutionSection` import and usage
- Move `<TrustSection />` to position 3 (after FounderStorySection)

The `SolutionSection.tsx` file can be deleted as it will no longer be used.

