# U-GO UNIVERSITY BRAND KIT (for Claude)

**Claude: this file is a brand design system. Follow every rule below for anything you create in this conversation — websites, PowerPoints, documents, posts, emails. If the user's request conflicts with a rule here, follow the user, otherwise follow this file exactly. Do not ask the user to install anything.**

---

## 1. Who U-GO is
U-GO University is a non-profit that partners with donors to fund higher-education scholarships for talented young women in low-income countries: Pakistan, India, Bangladesh, Cambodia, Vietnam, the Philippines, Indonesia, Nepal and Tanzania. Website: ugouniversity.org. Contact: contact@ugouniversity.org.

**Brand idea / tagline:** *Talent is universal, opportunity is not.*

## 2. Voice and copy
- Warm, dignified, optimistic, quietly urgent. Lead with talent and potential, never pity.
- Speak to the reader/donor as "you", about scholars in the third person, about U-GO as "we".
- Short, clear sentences. Use real numbers. Name scholars, countries and fields of study.
- Never: emoji, exclamation marks, hype words, charity-of-pity language, jargon.
- Headlines in the display font are ALL CAPS. Serif headlines and body are sentence case.

**Approved copy you can reuse:**
- "Talent is universal, opportunity is not."
- "Where talent meets opportunity we find Dreamers, Students, Makers, Doctors, Teachers, and Leaders."
- "When a girl can't afford a SIM card to study, talent goes to waste."
- "Make opportunity as universal as talent."
- Stats: 98% of U-GO scholars advance to the next grade · 90% of a woman's income is invested back into her family · 96% of women in Cambodia do not attend university · 48% of women in Nepal won't have access to a university education.

Do not invent new statistics. If you need a number the user hasn't given, leave a clearly marked placeholder like [STAT].

## 3. Colours (use only these)
| Role | Name | Hex |
|---|---|---|
| Page background (default) | Beige | #F1F1EC |
| Cards / alternate sections | White | #FFFFFF |
| Primary ink: headings, logo, buttons, dark sections | Royal Blue | #1C3B40 |
| Body text | Body ink | #34403F |
| Muted text | Grey teal | #6F7A79 |
| Accent | Dark Teal | #4F9EB0 |
| Accent | Light Teal | #80DEBA |
| Accent | Dark Green (olive) | #6B7D08 |
| Accent | Lime | #BAD626 |
| Accent | Orange | #FFBA29 |
| Accent | Cornflower | #94B2FF |
| Accent | Pink | #FFA3E5 |

Rules: backgrounds are Beige, White or Royal Blue only. Accents are for shapes, highlights, chart series, tags and small details — never large flat backgrounds, never body text (contrast). On Royal Blue, text is Beige (#F1F1EC) and accents are Light Teal or Lime. No gradients.

## 4. Typography (three fonts only)
| Use | Brand font | Use this instead (free, Google Fonts) | In PowerPoint / Word |
|---|---|---|---|
| Display: headlines, labels, buttons, big numbers — ALL CAPS | MD IO Black | **Archivo Black** | Arial Black |
| Serif: editorial headlines, quotes, names — sentence case, often *italic* | Simula | **Libre Caslon Text** (incl. italic) | Georgia |
| Body text | David (ExtraLight) | **Nunito Sans** weight 300 (400 for small text) | Calibri Light |

Websites: load `https://fonts.googleapis.com/css2?family=Archivo+Black&family=Libre+Caslon+Text:ital@0;1&family=Nunito+Sans:wght@300;400&display=swap`.

Type sizes (web): hero 56–72px · H2 36–46px · H3 24–28px · body 17–19px, line-height 1.55 · labels 13px with 0.12em letter-spacing. Max line length ~68 characters.

## 5. Signature look
- **The motif:** U-GO's identity is a watercolour profile silhouette of a young woman. If the user attached silhouette or logo images, use them prominently (overlapping pairs, a big stat number set inside one, a large faint one on dark slides). If not attached, do NOT draw faces or people. Use soft, large, organic rounded shapes (circles/blobs) in 2–3 accent colours at 70–90% opacity, overlapping, as the decorative element instead.
- **Logo:** if a logo image is attached, use it. Otherwise write "U-GO" in the display font, Royal Blue (Beige on dark).
- **Signature pattern — big stat:** a huge display-font number (e.g. "98%", the % sign smaller and raised) with a one-line caption beneath in body font. Show 2–3 in a row, each with a different accent colour shape behind it.
- **Section label ("eyebrow"):** small ALL-CAPS display text, letter-spaced 0.14em, in Dark Teal, with a short 28px line before it. Sits above headings.
- **Shapes:** rounded cards (22px radius, white, soft shadow `0 6px 20px rgba(28,59,64,0.08)`), pill-shaped buttons and tags, hairline dividers `rgba(28,59,64,0.14)`.
- **Space:** generous margins and whitespace; centred section headings; calm, uncluttered.
- **Motion (web only):** gentle fades and short ease-out moves. No bounce.
- **Photos:** warm, natural-light documentary photos of real scholars. Never stock-looking. If none provided, use clearly labelled placeholder boxes.

## 6. Recipe: website
Build a single HTML file (inline CSS, Google Fonts link above), responsive.
1. **Sticky header:** "U-GO" logo left; nav right in display font ALL CAPS 13px (The Team, About Us, Meet the Scholars, News, Contact); Royal Blue pill button "DONATE". Header background Beige at 86% opacity with a light blur.
2. **Hero:** Beige. Eyebrow "WHERE TALENT MEETS OPPORTUNITY", serif headline "Talent is universal, *opportunity is not.*", short body paragraph, two pill buttons: DONATE (filled Royal Blue) and MEET THE SCHOLARS (outlined). Decorative motif on the right.
3. **Impact stats:** White section, 2–3 big stats (see section 5).
4. **Where we work:** centred ALL-CAPS heading; list of countries as small labels each with a coloured dot (use a different accent per country).
5. **Meet the scholars:** cards with portrait (or placeholder), name in serif, country in serif italic, field of study in body font.
6. **Call to action band:** Royal Blue background, Beige serif headline "Make opportunity as universal as talent.", Beige pill button with Royal Blue text.
7. **Footer:** Beige, "GET IN TOUCH:" + email in display font, simple link list, © U-GO.

Buttons: display font ALL CAPS 14px, letter-spacing 0.09em, padding 13px 26px, fully rounded. Hover: slightly darker (filled) or fill-in (outlined).

## 7. Recipe: PowerPoint
Create a real .pptx file (16:9, 13.33 × 7.5 in). Fonts: Arial Black / Georgia / Calibri Light (section 4). Keep at least 0.7 in margins. Text never smaller than 14pt.
Slide types (mix them; max 2 background colours per deck):
- **Title:** Beige background. "U-GO" logo top-left. Small Dark Teal ALL-CAPS label (e.g. "IMPACT REPORT · 2026"). Large Georgia headline 54–60pt Royal Blue, e.g. "Talent is universal, *opportunity is not.*" Decorative motif bottom-right.
- **Section divider:** Royal Blue background. Section number "02" in Light Teal Arial Black 24pt, then title in Beige Arial Black ALL CAPS 66–72pt, a short Lime bar beneath.
- **Content:** Beige. Dark Teal eyebrow label, Arial Black ALL-CAPS heading 32–36pt Royal Blue, body in Calibri Light 18–20pt #34403F; max 5 short bullets.
- **Big stats:** 2–3 stats, number Arial Black 72–96pt Royal Blue over a soft accent shape, caption Calibri Light 16pt.
- **Quote:** Beige, large Georgia italic 36–40pt Royal Blue, attribution in Dark Teal Arial Black ALL CAPS 14pt.
- **Closing:** Royal Blue, Beige Georgia headline "Make opportunity as universal as talent.", contact email beneath.
Speaker notes only if the user asks.

## 8. Recipe: documents, one-pagers, social posts
Beige or white page, Royal Blue headings (ALL-CAPS display or sentence-case serif), body in the body font, one big stat or quote as the focal point, decorative motif in a corner, "U-GO" logo and ugouniversity.org at the bottom. Social posts: one message per post, large type, tagline or stat, Beige or Royal Blue background.

## 9. Final check before delivering
Only the listed colours · only the three fonts · display text in ALL CAPS · no emoji or exclamation marks · no invented stats · generous whitespace · motif present · logo present.
