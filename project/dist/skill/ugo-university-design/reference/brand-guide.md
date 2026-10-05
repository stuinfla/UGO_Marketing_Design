# U-GO University — Design System

> The brand engine for **U-GO University**. Load this system, say *"build me a landing page / app / deck / one-pager,"* and produce work that is unmistakably U-GO — same fonts, colours, voice, motif and components every time.

U-GO University is a non-profit that partners with ambitious donors **at scale to fund higher-education scholarships for talented young women in low-income countries** — currently Pakistan, India, Bangladesh, Cambodia, Vietnam, the Philippines, Indonesia, Nepal and Tanzania. The single idea behind everything: **"Talent is universal, opportunity is not."** Web: ugouniversity.org.

This repo holds the foundations (colour, type, spacing), real brand assets (logos, watercolour profile silhouettes, fonts), reusable React components, a website UI kit, and sample presentation slides.

---

## Sources
Everything here is derived from the official U-GO brand package (Saboteur, 2024) and the live site. Stored under `_ref/` where small enough to keep:
- **U-GO Brand Guidelines** — `FINAL U-GO_Brand_Guidelines_250113.pdf` (in the original package; too large to copy here).
- **Colour palette** — `_ref/color_palette.pdf` (exact CMYK/RGB/HEX, both light & dark cuts).
- **Event collateral** — `_ref/event_collateral.pdf` (FT Event 2024 — tone of voice, poster stats).
- **Live site screenshot** — the home page (hero, stats, "Where we work" map, "Meet the scholars").
- **Fonts** — MD IO, Simula, David webfonts (shipped in `assets/fonts/`).
- **Imagery** — watercolour profile silhouettes, logos, stickers (shipped in `assets/`).

---

## CONTENT FUNDAMENTALS — how U-GO writes

**Voice:** warm, plain-spoken, dignified and quietly urgent. It advocates *for* talent, never pities. The subject is always the young woman and her potential — donors are the multiplier, not the hero.

**Person:** speaks about scholars in the third person ("when a girl can't afford a SIM card…"), and to the donor/reader in the second ("Make opportunity as universal as talent"). Collective "we" for U-GO's own work ("Where we work").

**Casing:**
- **MD IO is always UPPERCASE** — headlines, nav, labels, stat numbers, CTAs ("DONATE", "MEET THE SCHOLARS", "WHERE WE WORK").
- **Simula is sentence case**, frequently italic, for editorial headlines, the tagline and scholar names ("Talent is universal, *opportunity is not.*").
- **David is sentence case** for all body copy.

**Sentence style:** short declaratives, often built on a turn or contrast. The signature rhetorical move is *universal vs. not*: "Talent is universal, opportunity is not." Lists of roles humanise the mission — "Dreamers, Students, Makers, Doctors, Teachers, and Leaders." Real numbers carry weight ("48% of women in Nepal won't have access to a university education"; "90% of a woman's income is invested back into her family").

**Tone do / don't:**
- DO lead with talent and possibility; cite concrete stats; name scholars, countries and fields.
- DON'T use charity-of-pity language, jargon, exclamation marks, or hype.

**Emoji:** never. The brand's "emoji" is the watercolour profile silhouette.

**Sample copy (reusable):**
- Tagline: *Talent is universal, opportunity is not.*
- Mission: *Where talent meets opportunity we find Dreamers, Students, Makers, Doctors, Teachers, and Leaders. But when a girl can't afford a SIM card to study, or a young woman stops school to work two jobs — talent is universal, but opportunity is not.*
- Close: *Make opportunity as universal as talent.*

---

## VISUAL FOUNDATIONS

**Overall feeling:** editorial, optimistic, human, print-rooted. A calm beige canvas, deep teal ink, and bursts of watercolour colour through the profile silhouettes. Lots of air.

**Colour** (full tokens in `tokens/colors.css`):
- **Canvas** is **Beige `#F1F1EC`** (`--surface-page`) — the default background for almost everything. White (`#FFFFFF`) for cards and alternating sections.
- **Primary ink** is **Royal Blue `#1C3B40`** (a deep teal-navy) — headlines, nav, logo, body emphasis, and dark sections/footers.
- **Eight campaign hues**, each with a vibrant ("light") and deep ("dark") cut: Royal Blue, Dark Teal `#4F9EB0`, Light Teal `#80DEBA`, Dark Green/olive `#6B7D08`, Lime `#BAD626`, Orange `#FFBA29`, Cornflower `#94B2FF`, Pink `#FFA3E5`. Used full-strength as the watercolour fill of silhouettes, chart/legend colours and tags — **not** as large flat backgrounds (except Royal Blue).
- Body text is a softened near-black `#34403F`.

**Type** (full tokens in `tokens/typography.css`): three voices, never more.
- **MD IO** (Black/Ultra) — display. UPPERCASE, tight. Headlines, nav, labels, stat numbers, buttons, the wordmark.
- **Simula** (Book + Italic) — serif. Editorial headlines, the tagline, scholar names, pull quotes. Provides the warmth that MD IO doesn't.
- **David** (ExtraLight default, Regular for emphasis/small sizes) — humanist sans body copy.

**The motif — profile silhouettes.** The brand's signature is a **watercolour-textured profile silhouette of a young woman**, facing right. They come in every campaign hue (`assets/profiles/p01–p05.png`) and inverted/white (`assets/profiles/inv*.png`). Uses: overlap two facing each other (talent meeting opportunity); set a big stat number inside one; crop a scholar's photo into one; tint a slide with a faint oversized one. This is the #1 way to make something look U-GO.

**Backgrounds & texture:** flat beige or white, *or* watercolour. Real watercolour washes (`assets/textures/`) carry a subtle paper grain — never use a CSS gradient where a watercolour wash belongs. No photographic backgrounds except full-bleed documentary hero photos (warm, real, on-location — never stocky).

**Imagery vibe:** warm, natural-light documentary photography of scholars and their environments; full colour. Photos are frequently masked into the silhouette shape.

**Corners & cards:** soft. Cards are white, rounded `--radius-lg` (22px), with a quiet `--shadow-md` (warm-tinted, low spread). Buttons/tags/chips are **pills** (`--radius-pill`). Avoid hard 0-radius boxes and avoid heavy/black drop shadows.

**Borders:** hairline `rgba(28,59,64,.14)` for dividers; 1.5px solid Royal Blue for outlined (secondary) buttons and inputs.

**Shadows:** three steps only — `sm` hairline lift, `md` cards, `lg` overlays. All tinted toward the teal ink, never neutral grey/black.

**Motion:** gentle and confident. Fades and short ease-out moves (`--ease-out`, 140–480ms). **No bounce, no spring, no parallax gimmicks.** Hover = slight darken (primary) or fill-in (ghost) or a 1px lift; press = settle, no shrink. Respect `prefers-reduced-motion`.

**Transparency / blur:** sparingly — the sticky header uses an 86% beige with a 10px backdrop blur. Otherwise surfaces are opaque.

**Layout:** generous margins (`--gutter` clamps 20→64px), max content width `--container` 1200px, reading measure ≤ 68ch. Centre section headings ("WHERE WE WORK", "MEET THE SCHOLARS"). Print heritage shows in the comfortable whitespace.

---

## ICONOGRAPHY

U-GO's brand package is **illustration-led, not icon-led** — there is no proprietary icon font or icon set. The expressive "iconography" is the **watercolour profile silhouette** (and the country legend **dots** on the map). 

- **Emoji:** never.
- **Unicode glyphs as icons:** avoid; prefer a labelled `Tag`, a silhouette, or a dot.
- **When UI genuinely needs functional icons** (chevrons, arrows, social, menu, close): use **[Lucide](https://lucide.dev)** via CDN at a **2px stroke**, coloured `currentColor` / Royal Blue. This is a **substitution** — Lucide is *not* part of the official package; flag it if delivering to brand owners. Keep icons small and secondary; the silhouette always leads.
- **Logo & mark:** `assets/logos/` — horizontal lockup (profile + MD IO "U-GO") in dark (`UGO_Logo_horizontal.png`) and beige (`UGO_Logo_horizontal_light.png`, for dark sections), a square mark, an "AI" sub-brand lockup, and a favicon.

---

## What's in here (index / manifest)

**Root**
- `styles.css` — the single entry point consumers link. `@import`s everything below.
- `readme.md` — this guide. · `SKILL.md` — Agent-Skill wrapper for Claude Code.

**`tokens/`** (all `@import`ed by `styles.css`)
- `fonts.css` — `@font-face` for MD IO, MD IO Ultra, Simula, David.
- `colors.css` — palette + semantic aliases (`--surface-*`, `--text-*`, `--accent`, `--cat-1…8`).
- `typography.css` — font stacks, scale, weights, helper classes (`.ugo-display`, `.ugo-serif`, `.ugo-body`, `.ugo-eyebrow`).
- `spacing.css` — spacing scale, radii, shadows, motion easings/durations.
- `base.css` — reset + on-brand element defaults (beige body, MD IO headings).

**`components/`** — reusable React primitives (`export function`, styled via tokens)
- `core/` — **Button**, **Tag**, **Card**, **Eyebrow**, **Field**.
- `brand/` — **StatSilhouette** (number in a silhouette), **ScholarCard** (photo cropped to silhouette).
- Each has `.jsx`, `.d.ts` (props + `@startingPoint`), `.prompt.md` (usage), and the directory's `*.card.html` specimen.

**`ui_kits/website/`** — click-through recreation of ugouniversity.org: `index.html` (router) + `Header/Footer/HomeScreen/ScholarsScreen/DonateScreen.jsx`. See its `README.md`.

**`ui_kits/slides/`** — sample 1280×720 deck slides: Title, Section divider, Impact stats, Big quote, Scholar feature.

**`guidelines/`** — foundation specimen cards shown in the Design System tab (Type, Colors, Spacing, Brand).

**`assets/`** — `fonts/`, `logos/`, `profiles/` (p01–p05 colour + inv white), `textures/` (watercolour), `stickers/`, `photos/` (placeholder portraits — swap for real ones).

> **Using the components:** in a card or kit HTML, load `_ds_bundle.js` (auto-generated) and read `const { Button, StatSilhouette, … } = window.UGOUniversityDesignSystem_5d28d6`. In raw HTML/CSS work, just link `styles.css` and use the tokens + helper classes directly (the slides do this).

---

## Caveats
- The **brand guidelines PDF** and the live site's **hero photo** and **watercolour world map** exceeded the copy limit / weren't in the asset package — placeholders are clearly marked in the website kit. Drop real imagery into `assets/photos/` & `assets/textures/` to finish those.
- **Scholar portraits** are abstract duotone placeholders. Replace with real photography.
- **Functional icons** use Lucide (CDN) as a documented substitution; the official package ships no icon set.
