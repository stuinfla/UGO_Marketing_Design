# U-GO University: brand system, Claude skill and website

Built from the Claude Design handoff (`HANDOFF.md`, `chats/`). `project/` holds the design system and is the single source of truth.

| Path | What it is |
|---|---|
| `project/` | Design system: tokens (`styles.css` → `tokens/`), fonts, logos, silhouettes, React components, foundation cards, slide layouts, website UI kit. `project/readme.md` is the brand guide. |
| `release/ugo-university-design.zip` | **The file to send colleagues.** A Claude skill: upload it under Customize → Skills. Setup steps are in `release/U-GO SETUP - read me first.txt`. |
| `site/` | Production React + Vite build of ugouniversity.org (Home, Meet the Scholars, Donate). Imports components and tokens straight from `project/`. |
| `tools/build_skill.py` | Smoke-tests the skill's PowerPoint and HTML scripts, then rebuilds the release zip. |
| `tools/build_showcase.py` | Builds `showcase-dist/`, a static gallery of every card, slide and the website, ready for any static host. |

## Commands

```sh
# Skill (needs python-pptx and Pillow)
pip install python-pptx pillow
python tools/build_skill.py            # -> release/ugo-university-design.zip

# Website
cd site && npm install
npm run dev                            # local dev server
npm run build                          # -> site/dist (static, hash routes, works on any host)
python scripts/optimize_images.py      # after replacing an image in project/assets

# Showcase (after building the site)
python tools/build_showcase.py         # -> showcase-dist/
```

## Known gaps
- **Scholar portraits** are abstract placeholders, and the scholar names and quotes come from the design mockups. Confirm them with the charity, or replace them with real scholars' details and consent, before publishing.
- **The watercolour region map** wasn't in the asset package. The "Where we work" panel shows the cornflower texture instead.
- **Donate form** isn't connected to a payment provider. "100% of your gift funds scholarships" is copied from the mockup and needs checking before going live.
- **Fonts:** MD IO, Simula and David are licensed fonts and ship in the zip, the site and the showcase. Check the licence covers sharing and web hosting.
- **PowerPoint** uses Arial Black, Georgia and Calibri Light by default, because .pptx files can't embed the web fonts. Set `UGO_BRAND_FONTS=1` for machines that have the brand fonts installed.
