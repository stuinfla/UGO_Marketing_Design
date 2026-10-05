---
name: ugo-university-design
description: Use this skill to generate well-branded interfaces and assets for U-GO University (a non-profit funding higher-education scholarships for young women in low-income countries), either for production or throwaway prototypes/mocks/decks. Contains essential design guidelines, colours, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Fast orientation
- **Brand idea:** *"Talent is universal, opportunity is not."* Warm, dignified, optimistic, print-rooted.
- **Canvas:** Beige `#F1F1EC`. **Ink:** Royal Blue `#1C3B40`. Colour comes through watercolour **profile silhouettes** in 8 campaign hues.
- **Type:** MD IO (UPPERCASE display/nav/labels/stats), Simula (serif headlines, quotes, names — sentence case, often italic), David (light body). Fonts are in `assets/fonts/` with `@font-face` in `tokens/fonts.css`.
- **The motif:** the watercolour profile silhouette (`assets/profiles/`). Overlap them, set stats inside them, crop photos into them. Use it to make anything instantly U-GO.
- **No emoji. No bouncy motion. No CSS gradients where a watercolour wash belongs. Three fonts only.**

## How to build
- **Quick HTML / slides / docs:** link `styles.css`, use the CSS variables and helper classes (`.ugo-display`, `.ugo-serif`, `.ugo-body`, `.ugo-eyebrow`). Copy the assets you reference. See `ui_kits/slides/*.html` for the pattern.
- **React / apps:** use the components in `components/` (Button, Tag, Card, Eyebrow, Field, StatSilhouette, ScholarCard). Read each component's `.prompt.md` for usage. Style via tokens, never hard-coded hexes.
- **Recreating the site:** start from `ui_kits/website/`.

## Tone reference
Lead with talent and possibility, not pity. Cite real stats. Name scholars, countries, fields. Second person to the donor, third person about scholars, "we" for U-GO. Full content rules and reusable copy are in `readme.md` → CONTENT FUNDAMENTALS.
