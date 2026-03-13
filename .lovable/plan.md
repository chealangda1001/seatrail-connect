

## Plan: Add Founder Origin Story section + Omio-inspired improvements

### New component: `FounderStorySection.tsx`
A warm, narrative section placed after HeroSection and before SolutionSection. Content:

- **Heading**: "How BookMeBus Started"
- **Narrative paragraphs**: The provided founder story about Langda Chea founding BookMeBus in 2015, the problem of fragmented intercity travel in Cambodia, and the evolution into a digital mobility platform.
- **Mission & Vision**: Displayed as two side-by-side cards with subtle icon accents.

**Design**: Clean two-column or centered single-column layout. Left-aligned storytelling text with generous spacing. Mission/Vision in a 2-col card grid. Uses `ScrollReveal` for entrance animation. Warm, human tone — inspired by Omio's conversational style.

### Update `Index.tsx`
Add `FounderStorySection` between `HeroSection` and `SolutionSection`:

```
Hero → FounderStory → Solution → Trust → SaaS → Impact → CTA
```

### Files
| File | Action |
|------|--------|
| `src/components/FounderStorySection.tsx` | Create — founder narrative + mission/vision cards |
| `src/pages/Index.tsx` | Add import and place after HeroSection |

