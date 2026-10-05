# U-GO University brand repository

This repo is the U-GO University brand system. Whenever you create anything for U-GO (decks, documents, web pages, social posts, apps), follow it.

- **Brand rules:** `project/readme.md` covers voice, colours, type, motifs and iconography. Read it before writing copy or designing.
- **Skill:** `.claude/skills/ugo-university-design` links to `project/dist/skill/ugo-university-design`. Use it for finished files: `scripts/ugo_pptx.py` builds PowerPoint decks, and `scripts/inline_html.py` turns HTML into one self-contained file.
- **Tokens:** link `project/styles.css` and use its CSS variables. Never hard-code new colours or fonts.
- **Components:** `project/components/` (Button, Card, Eyebrow, Field, Tag, StatSilhouette, ScholarCard). The `site/` app shows how to use them in a Vite build.
- **Assets:** `project/assets/` holds fonts, logos (`*_trim.png` have no transparent margin), the watercolour profiles `p01–p05` and the white `inv02/inv06` (use these faint on Royal Blue).
- **Statistics:** use only the four approved stats in the brand guide; never invent numbers. No emoji, no exclamation marks.
- After changing the skill, run `python tools/build_skill.py` to smoke-test it and rebuild `release/ugo-university-design.zip`.
