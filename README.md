# UGO_Marketing_Design

The U-GO University brand, in one place: design branding guidelines to be used for creation of tools. It holds the brand guide, fonts, logos, watercolour silhouettes, colour and type tokens, React components, slide layouts, a Claude skill and the website.

Anyone with access to this repository has everything. No Claude workspace or organisation account is needed.

## How to use it: pick the line that fits you

| You use… | Do this |
|---|---|
| **Claude chat or Cowork** (claude.ai / desktop app) | Download [`release/ugo-university-design.zip`](release/ugo-university-design.zip) (open it, then click **Download raw file**). In Claude: **Settings → Capabilities**, turn on *Code execution and file creation*. Then **Customize → Skills → Upload skill** and choose the zip. Now start any request with **"U-GO:"**, e.g. *"U-GO: make a 6-slide PowerPoint for donors about our Nepal programme."* Full steps: [`release/U-GO SETUP - read me first.txt`](release/U-GO%20SETUP%20-%20read%20me%20first.txt). |
| **Claude Design** | Start a new **design system** and import this GitHub repository (or upload the `project/` folder). Tell Claude: *"Create our design system from the `project/` folder. `project/readme.md` is the brand guide."* |
| **Claude Code** | Clone this repo and open it. The skill is already linked at `.claude/skills/ugo-university-design`, and `CLAUDE.md` tells Claude how to use the brand. Ask *"Build me a landing page for our 2027 appeal"* and it comes out on-brand. To use the brand in another repo, copy `project/dist/skill/ugo-university-design/` into that repo's `.claude/skills/`. |
| **Any designer or developer** | Link `project/styles.css` for every colour, font and spacing token. Reuse the React components in `project/components/`. Read `project/readme.md` for voice, colour and layout rules. |
| **Just want to look** | Build the showcase (below) and open `showcase-dist/index.html`. It shows every colour, type and component card, every slide, and the website. |

**Giving someone access:** this repository is private. Add each person under **Settings → Collaborators → Add people** on GitHub (a free GitHub account is enough). Anyone who only needs the skill can be sent the zip directly.

## What's in here

| Path | What it is |
|---|---|
| `project/` | The design system, and the single source of truth: tokens (`styles.css` → `tokens/`), fonts, logos, silhouettes, React components, foundation cards, slide layouts and the website UI kit. `project/readme.md` is the brand guide. |
| `release/ugo-university-design.zip` | The Claude skill, tested and ready to upload. |
| `site/` | Production React + Vite build of ugouniversity.org (Home, Meet the Scholars, Donate). Imports components and tokens straight from `project/`. |
| `tools/build_skill.py` | Smoke-tests the skill's PowerPoint and HTML scripts, then rebuilds the release zip. |
| `tools/build_showcase.py` | Builds `showcase-dist/`, a static gallery of every card, slide and the website, ready for any static host. |
| `HANDOFF.md`, `chats/` | The original Claude Design export and its conversation, kept for reference. |

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

**Updating the brand:** change the files in `project/` (and in `project/dist/skill/ugo-university-design/` for the skill). Run `python tools/build_skill.py`, commit, and push. Everyone with repo access gets the update on their next pull. Skill users need the new zip re-uploaded.

## Known gaps
- **Scholar portraits** are abstract placeholders, and the scholar names and quotes come from the design mockups. Confirm them with the charity, or replace them with real scholars' details and consent, before publishing.
- **The watercolour region map** wasn't in the asset package. The "Where we work" panel shows the cornflower texture instead.
- **Donate form** isn't connected to a payment provider. "100% of your gift funds scholarships" is copied from the mockup and needs checking before going live.
- **Fonts:** MD IO, Simula and David are licensed fonts and ship in this repo, the zip, the site and the showcase. Keep the repo private unless the licence allows wider sharing.
- **PowerPoint** uses Arial Black, Georgia and Calibri Light by default, because .pptx files can't embed the web fonts. Set `UGO_BRAND_FONTS=1` for machines that have the brand fonts installed.
