# U-GO University brand kit for Claude

You have been pointed at the official U-GO University brand. Follow it exactly for whatever the user asks you to build: a web page, landing page, one-pager, PowerPoint, Word document, PDF, poster, social post, email or app. Everything you need is on this page or linked from it. All links are public and need no login.

U-GO University is a non-profit that partners with ambitious donors at scale to fund higher-education scholarships for talented young women in low-income countries: Pakistan, India, Bangladesh, Cambodia, Vietnam, the Philippines, Indonesia, Nepal and Tanzania. Tagline: **"Talent is universal, opportunity is not."** Website: ugouniversity.org · Contact: contact@ugouniversity.org.

## 1. Non-negotiable rules
- **Colours only:** Beige `#F1F1EC` (default background), White `#FFFFFF`, Royal Blue `#1C3B40` (headings, logo, buttons, dark sections), body text `#34403F`, muted text `#6F7A79`. Accents, for shapes, highlights, charts and tags only: Dark Teal `#4F9EB0`, Light Teal `#80DEBA`, Dark Green `#6B7D08`, Lime `#BAD626`, Orange `#FFBA29`, Cornflower `#94B2FF`, Pink `#FFA3E5`. No gradients. Backgrounds are Beige, White or Royal Blue. (The stylesheet also defines deep shades such as `--ugo-black` and `--ugo-*-deep`; use them only for text on light accent fills, never as backgrounds.)
- **Three fonts only:**
  - **MD IO Black** for headlines, labels, buttons, nav and big numbers. ALWAYS UPPERCASE. ("MD IO Ultra" in the stylesheet is its heaviest cut, for poster-size numbers; it counts as MD IO.)
  - **Simula** for editorial headlines, quotes, the tagline and scholar names. Sentence case, often italic.
  - **David ExtraLight** for body text (David Regular for small text and emphasis).
- **Motif:** most pages and slides use a watercolour profile silhouette of a young woman facing right. Overlap two, put a big stat inside one, crop a photo into one, or use a large faint white one on Royal Blue. Never draw your own faces or people. Use the images below.
- **Logo:** web pages: header and footer. Decks: title and closing slide (inner slides don't need it).
- **Shape:** white cards with 22px corners and a soft teal-tinted shadow (`0 6px 20px rgba(28,59,64,.08)`). Pill-shaped buttons and tags. Lots of whitespace.
- **Voice:** warm, dignified, optimistic. Lead with talent, never pity. Short sentences. No emoji, no exclamation marks, no hype.
- **Statistics:** use only these approved figures. Never invent numbers; write `[STAT]` where one is needed.
  - 98% of U-GO scholars advance to the next grade
  - 90% of a woman's income is invested back into her family
  - 96% of women in Cambodia do not attend university
  - 48% of women in Nepal won't have access to a university education

## 2. Hosted assets (use these exact URLs)
**Stylesheet (fonts, colours, spacing; one line, works in any HTML page):**
`<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/stuinfla/UGO_Marketing_Design@main/kit/ugo.css">`

It provides CSS variables (`--ugo-beige`, `--ugo-royal-blue`, `--ugo-dark-teal`, `--ugo-light-teal`, `--ugo-lime`, `--ugo-orange`, `--ugo-cornflower`, `--ugo-pink`, `--font-display`, `--font-serif`, `--font-body`, `--radius-lg`, `--shadow-md` …), on-brand defaults (beige page, MD IO uppercase headings), and helper classes `.ugo-display`, `.ugo-eyebrow`, `.ugo-serif`, `.ugo-serif-italic`, `.ugo-body`.

**Logos**
- On light backgrounds: https://cdn.jsdelivr.net/gh/stuinfla/UGO_Marketing_Design@main/project/dist/skill/ugo-university-design/assets/logos/UGO_Logo_horizontal_trim.png
- On Royal Blue: https://cdn.jsdelivr.net/gh/stuinfla/UGO_Marketing_Design@main/project/dist/skill/ugo-university-design/assets/logos/UGO_Logo_horizontal_light_trim.png
- Square mark: https://cdn.jsdelivr.net/gh/stuinfla/UGO_Marketing_Design@main/project/dist/skill/ugo-university-design/assets/logos/UGO_Square.png · Favicon: https://cdn.jsdelivr.net/gh/stuinfla/UGO_Marketing_Design@main/project/dist/skill/ugo-university-design/assets/logos/UGO_Favicon.png

**Watercolour silhouettes (transparent PNG, facing right)**
- https://cdn.jsdelivr.net/gh/stuinfla/UGO_Marketing_Design@main/project/dist/skill/ugo-university-design/assets/profiles/p01.png (light teal)
- https://cdn.jsdelivr.net/gh/stuinfla/UGO_Marketing_Design@main/project/dist/skill/ugo-university-design/assets/profiles/p02.png (orange)
- https://cdn.jsdelivr.net/gh/stuinfla/UGO_Marketing_Design@main/project/dist/skill/ugo-university-design/assets/profiles/p03.png (cornflower)
- https://cdn.jsdelivr.net/gh/stuinfla/UGO_Marketing_Design@main/project/dist/skill/ugo-university-design/assets/profiles/p04.png (dark teal)
- https://cdn.jsdelivr.net/gh/stuinfla/UGO_Marketing_Design@main/project/dist/skill/ugo-university-design/assets/profiles/p05.png (pink)
- White, for Royal Blue backgrounds (always faint: CSS `opacity: .16`, i.e. 84% see-through): https://cdn.jsdelivr.net/gh/stuinfla/UGO_Marketing_Design@main/project/dist/skill/ugo-university-design/assets/profiles/inv02.png and https://cdn.jsdelivr.net/gh/stuinfla/UGO_Marketing_Design@main/project/dist/skill/ugo-university-design/assets/profiles/inv06.png

**Other**
- Watercolour wash: https://cdn.jsdelivr.net/gh/stuinfla/UGO_Marketing_Design@main/project/dist/skill/ugo-university-design/assets/textures/wc_cornflower.png
- Tagline sticker: https://cdn.jsdelivr.net/gh/stuinfla/UGO_Marketing_Design@main/project/dist/skill/ugo-university-design/assets/stickers/tagline_silhouette.png
- Placeholder portraits (replace with real photos when the user supplies them; never present them as real people): https://cdn.jsdelivr.net/gh/stuinfla/UGO_Marketing_Design@main/project/dist/skill/ugo-university-design/assets/photos/ph_teal.jpg, ph_orange.jpg, ph_blue.jpg
- Fonts, if you need the files themselves (.woff2): https://cdn.jsdelivr.net/gh/stuinfla/UGO_Marketing_Design@main/project/dist/skill/ugo-university-design/assets/fonts/MDIO-Black.woff2, Simula-Book.woff2, Simula-Italic.woff2, David-ExtraLight.woff2, David-Regular.woff2

**Reference layouts to copy (1280×720 slides, view source).** They use relative paths: replace `../brand/styles.css` with the stylesheet link above and `../assets/` with the asset address shown above.
https://cdn.jsdelivr.net/gh/stuinfla/UGO_Marketing_Design@main/project/dist/skill/ugo-university-design/examples/TitleSlide.html · SectionSlide.html · StatSlide.html · QuoteSlide.html · ScholarSlide.html

**Reference website:** https://ugo-brand.netlify.app/site/ (home, scholars, donate)

## 3. How to build each kind of output

### Web page, landing page, one-pager, email (HTML)
Start from this skeleton and keep the structure:

```html
<!doctype html>
<html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>U-GO University</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/stuinfla/UGO_Marketing_Design@main/kit/ugo.css">
</head><body>
<!-- Sticky beige header: logo left; MD IO uppercase nav; Royal Blue pill "DONATE" button -->
<!-- Hero: small MD IO eyebrow with a 28px rule; big Simula headline (second line italic); David body; two pill buttons; 2–3 overlapping silhouettes on the right -->
<!-- White band: stats, each a big MD IO number inside a silhouette image with a short David caption. Royal Blue numbers on p01/p02/p03/p05; white numbers on p04 (dark teal) -->
<!-- Beige section: centred MD IO heading, content, coloured-dot tags -->
<!-- Royal Blue band: centred Simula line in beige + beige pill button -->
<!-- Beige footer: "GET IN TOUCH:" + contact@ugouniversity.org in MD IO, links, logo -->
</body></html>
```

Buttons: `font-family: var(--font-display); text-transform: uppercase; letter-spacing: .09em; border-radius: 999px; padding: 13px 26px;` Royal Blue fill with beige text (primary), or a 1.5px Royal Blue outline (secondary).

### PowerPoint (.pptx)
16:9. Mix these layouts. Use Beige for most slides and Royal Blue for section dividers and the closing slide:
1. **Title:** beige; logo top-left; small dark-teal uppercase label; large Simula title (second line italic); two overlapping silhouettes bottom-right; "ugouniversity.org" bottom-left.
2. **Section divider:** Royal Blue; light-teal number; huge beige MD IO uppercase title; short lime rule; faint white silhouette (inv02 at about 16% opacity, so mostly see-through) on the right.
3. **Content:** beige; eyebrow; MD IO uppercase heading; 3–5 short David bullets; one silhouette or photo on the right.
4. **Stats:** beige; 2–3 silhouettes side by side with a big number centred on each and a short caption (Royal Blue numbers; white on the dark-teal p04).
5. **Quote:** beige; large Simula italic quote; uppercase dark-teal attribution; silhouette on the right.
6. **Closing:** Royal Blue; centred beige Simula line "Make opportunity as universal as talent."; contact line in light teal; light logo.

Download the logo and silhouette PNGs from the URLs above and place them as pictures. PowerPoint can't embed web fonts, so use MD IO / Simula / David if installed, otherwise Arial Black / Georgia / Calibri Light. If you can't download files in your environment, tell the user to install the U-GO skill instead (https://ugo-brand.netlify.app/use-with-claude.html). It contains every asset and a PowerPoint builder script.

### Word document or PDF
Headings in MD IO (fallback Arial Black), uppercase, Royal Blue. Body in David (fallback Calibri Light), 11pt, `#34403F`. Pull quotes in Simula italic (fallback Georgia). Logo in the header; a silhouette on the cover. For a PDF, build the HTML version above and print it to PDF.

### Social post or poster
One message, huge type, Beige or Royal Blue background, one silhouette, logo. Square 1080×1080 or 1080×1350.

## 4. Sample copy
- Tagline: *Talent is universal, opportunity is not.*
- Mission: *Where talent meets opportunity we find Dreamers, Students, Makers, Doctors, Teachers, and Leaders. But when a girl can't afford a SIM card to study, or a young woman stops school to work two jobs, talent is universal, but opportunity is not.*
- Close: *Make opportunity as universal as talent.*
- Speak about scholars in the third person, to the reader in the second, and about U-GO as "we".

## 5. Final check before you deliver
Only the listed colours · only the three fonts · MD IO text in uppercase · logo present · a silhouette present · no emoji or exclamation marks · no invented statistics · generous whitespace.
