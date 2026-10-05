# Slides UI Kit — U-GO presentation

Sample 1280×720 (16:9) slides in the U-GO brand, derived from the U-GO presentation template and event collateral. Each is a standalone HTML file linking `styles.css` and the shared assets (no bundle needed).

## Slide types
- **TitleSlide** — beige, Simula tagline headline, logo, overlapping watercolour profiles.
- **SectionSlide** — Royal-Blue divider, big MD IO section title + number, faint inverted silhouette.
- **StatSlide** — three impact stats set inside watercolour silhouettes (the `StatSilhouette` pattern, in plain HTML).
- **QuoteSlide** — large Simula italic pull-quote beside a profile silhouette.
- **ScholarSlide** — scholar feature: portrait masked into the silhouette on a Royal-Blue panel + bio.

## Build more
Reuse the patterns: beige or Royal-Blue background, MD IO uppercase headings, Simula for quotes/names, David for body, and a watercolour profile somewhere. To assemble into a deck, drop the slide markup as sibling `<section>`s inside the `deck_stage.js` starter component.
