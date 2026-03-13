

## Plan: Update sections with real data and embed uploaded artwork

Based on the uploaded images, I'll update the placeholder content with real company data and integrate the provided artwork assets.

### Data updates from company profile images

**TrustSection stats** (currently placeholder XX+, XXX+, etc.) -- replace with real data:
- "60+" operators connected (from "60+ transport operators in the Mekong region")
- "1,000+" trips processed daily
- "2M+" travelers served annually
- "3" markets reached (Cambodia, Thailand, Vietnam)

### Artwork integration

1. **BMB_services.png** -- Copy to `src/assets/` and use in the **SolutionSection** as a visual banner showing the transport modes (bus, ferry, car, private transfer, train), replacing or complementing the icon-only transport mode row.

2. **Country map images** (cambodia@2x.png, Thailand@2x.png, Vietnam@2x.png) -- Copy to `src/assets/` and create a new **regional presence visual** in the **ImpactSection** or a new subsection, showing the three country maps with operator counts:
   - Cambodia: 54 Operators
   - Thailand: 2 Operators
   - Vietnam: 5 Operators

### Files to modify

| File | Change |
|------|--------|
| `src/components/TrustSection.tsx` | Replace placeholder stats with real numbers (60+, 1,000+, 2M+, 3 countries) |
| `src/components/SolutionSection.tsx` | Add BMB_services.png as a visual banner above/below the transport mode cards |
| `src/components/ImpactSection.tsx` | Add an "Expanding to ASEAN" subsection with the three country maps and operator counts |
| Asset copies | Copy `BMB_services.png`, `cambodia@2x.png`, `Thailand@2x.png`, `Vietnam@2x.png` to `src/assets/` |

### Technical approach
- Import images as ES6 modules from `@/assets/`
- Use responsive `<img>` tags with appropriate alt text
- Country maps displayed in a horizontal row (3 columns on desktop, stacked on mobile) with country name and operator count labels
- Services image displayed full-width with subtle rounded corners, matching existing card aesthetic

