# Website UI Kit — ugouniversity.org

A click-through recreation of the U-GO University marketing site, built entirely from the design-system primitives.

## Screens
- **HomeScreen** — hero (serif headline + overlapping watercolour profiles), impact stats (`StatSilhouette`), "Where we work" country legend (`Tag` dots), "Meet the scholars" (`ScholarCard`), and a Royal-Blue CTA band.
- **ScholarsScreen** — responsive grid of `ScholarCard`s.
- **DonateScreen** — gift form with frequency toggle, preset amounts, and `Field` inputs in a `Card`.
- **Header / Footer** — MD IO nav, logo lockup, donate CTA.

## Run
Open `index.html`. It loads React + Babel, the compiled `_ds_bundle.js`, then the screen files (which assign components to `window`, so they are NOT bundled as DS components). Navigation is in-memory via `onNav`.

## Notes / omissions
- The hero **photo + selfie-frame** and the **watercolour region map** from the live site were not in the asset package; the hero uses the profile-silhouette motif instead, and the map is a labelled placeholder over the cornflower watercolour. Drop real imagery into `assets/photos/` and `assets/textures/` to complete them.
- Scholar portraits use abstract duotone placeholders (`assets/photos/ph_*.png`) cropped into the silhouette via `ScholarCard`'s `maskSrc`. Swap in real portraits.
