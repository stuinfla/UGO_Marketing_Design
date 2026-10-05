---
name: ugo-university-design
description: U-GO University brand design system. Use for ANY U-GO branded output, or whenever the user says "U-GO", "our brand", "my design system" or "on-brand" — PowerPoint decks, websites/landing pages, one-pagers, PDFs, Word docs, social posts, emails, posters. Contains the real fonts, logos, watercolour profile silhouettes, colour/type tokens, slide layouts and helper scripts that produce finished files.
---

# U-GO University design system

You are producing work for U-GO University, a non-profit that funds higher-education scholarships for talented young women in low-income countries (Pakistan, India, Bangladesh, Cambodia, Vietnam, the Philippines, Indonesia, Nepal, Tanzania). Tagline: **"Talent is universal, opportunity is not."** Site: ugouniversity.org · contact@ugouniversity.org.

Always deliver a finished FILE (.pptx, .html, .pdf, .docx, .png), not a description. Do not ask the user to install anything. Read `reference/brand-guide.md` for full voice and visual rules when the task involves writing more than a few lines of copy.

## Files in this skill
- `brand/styles.css` (+ colors/typography/spacing/fonts/base.css) — tokens and real @font-face rules.
- `assets/fonts/*.woff2` — MD IO Black/Ultra, Simula Book/Italic, David ExtraLight/Regular.
- `assets/logos/` — `UGO_Logo_horizontal.png` (on light), `UGO_Logo_horizontal_light.png` (on Royal Blue), square mark, favicon. The `*_trim.png` versions have the transparent margin removed — use them when you size the logo by height (slides, documents).
- `assets/profiles/` — the signature watercolour profile silhouettes: `p01–p05.png` (colour), `inv02/inv06.png` (solid beige-white silhouettes for Royal Blue backgrounds — always use them faint, 12–18% opacity).
- `assets/textures/wc_cornflower.png`, `assets/stickers/tagline_silhouette.png`.
- `assets/photos/ph_*.jpg` — abstract placeholder portraits. Replace with real scholar photos when the user provides them; never present placeholders as real people.
- `examples/*.html` — 1280×720 reference slides (Title, Section, Stat, Quote, Scholar). Copy their structure.
- `scripts/ugo_pptx.py` — builds on-brand .pptx decks (python-pptx).
- `scripts/inline_html.py` — turns an HTML file that links brand/styles.css + assets into ONE self-contained .html with fonts and images embedded.

## Rules (non-negotiable)
- **Colours only:** Beige `#F1F1EC` (default background), White `#FFFFFF`, Royal Blue `#1C3B40` (headings, logo, buttons, dark sections), body text `#34403F`, muted `#6F7A79`. Accents for shapes/highlights/charts only: Dark Teal `#4F9EB0`, Light Teal `#80DEBA`, Dark Green `#6B7D08`, Lime `#BAD626`, Orange `#FFBA29`, Cornflower `#94B2FF`, Pink `#FFA3E5`. No gradients. Backgrounds are Beige, White or Royal Blue.
- The CSS also defines deep shades (`--ugo-*-deep`, `--ugo-black`) and a hover tint. Use them only for text on light accent fills or for hover states, never as backgrounds.
- **Three fonts only:** MD IO Black = headlines (MD IO Ultra is just its heaviest cut, for poster-size numbers), labels, buttons, big numbers, ALWAYS UPPERCASE. Simula = editorial headlines, quotes, names, sentence case, often italic. David ExtraLight = body (Regular for small text/emphasis).
- **Stat numbers inside silhouettes:** Royal Blue numbers on the light silhouettes (p01 light teal, p02 orange, p03 cornflower, p05 pink); white numbers on p04 (dark teal).
- **Motif:** use a watercolour profile silhouette on most pages/slides — overlapping pairs, a big stat inside one, or a large faint white one on Royal Blue. Never draw your own faces/people.
- **Logo** on every deck/page (title + closing slide; site header/footer).
- **Voice:** warm, dignified, optimistic; lead with talent, not pity; real numbers; no emoji, no exclamation marks, no hype. Never invent statistics; use [STAT] placeholders. Approved stats: 98% of U-GO scholars advance to the next grade · 90% of a woman's income is invested back into her family · 96% of women in Cambodia do not attend university · 48% of women in Nepal won't have access to a university education.
- **Shape:** rounded cards (22px), pill buttons/tags, soft teal-tinted shadows, generous whitespace.

## Workflow: PowerPoint
1. `pip install python-pptx` if missing. The script reads assets relative to itself, so it can be imported straight from the skill folder.
2. Write a short Python script that imports `scripts/ugo_pptx.py` and calls its slide functions (see the docstring at the top of that file). Mix layouts; max 2 background colours.
3. Save to the outputs folder and give the user the .pptx.
Fonts in PowerPoint: the script uses Arial Black / Georgia / Calibri Light by default, because PowerPoint can't embed the .woff2 brand fonts. If the user says MD IO, Simula and David are installed on their computer, set `UGO_BRAND_FONTS=1` in the environment before importing (or `ugo_pptx.USE_FALLBACK_FONTS = False` before creating the Deck) to use the real font names.

## Workflow: website / landing page / one-pager (HTML)
1. The skill folder is read-only, so first copy it somewhere writable (e.g. `cp -r <skill folder> /tmp/ugo`). Write the page in `/tmp/ugo/examples/` so `../brand/styles.css` and `../assets/...` paths resolve. Use the CSS variables (`var(--ugo-royal-blue)`, `var(--font-display)`, etc.).
2. Structure for a site: sticky beige header (logo, MD IO nav, Royal Blue pill "DONATE") → hero (eyebrow, Simula headline, body, two pill buttons, overlapping silhouettes) → white stats band (numbers inside silhouettes) → "WHERE WE WORK" country tags with coloured dots → "MEET THE SCHOLARS" (photo cropped into silhouette with CSS mask, Simula name, italic country, field) → Royal Blue CTA band → beige footer.
3. Run `python /tmp/ugo/scripts/inline_html.py /tmp/ugo/examples/yourpage.html /mnt/user-data/outputs/yourpage.html` to embed fonts and images, then deliver that single file. The script shrinks images to at most 600px, so the file stays small enough to email (pass `--max-px 0` to keep full size).

## Workflow: PDF / poster / social image
Build it as HTML (above) at the exact pixel size, inline it, then render to PDF/PNG (e.g. with playwright/chromium if available, otherwise deliver the HTML and say so). Social: one message, huge type, Beige or Royal Blue background, silhouette, logo.

## Workflow: Word document
Use python-docx: headings in "MD IO" (fallback Arial Black) uppercase Royal Blue, body "David" (fallback Calibri Light) 11pt #34403F, pull quotes in Simula/Georgia italic, logo in header, silhouette image on the cover page.

## Final check before delivering
Only listed colours · only three fonts · display text uppercase · logo present · silhouette present · no emoji/exclamation marks · no invented stats · generous whitespace.
