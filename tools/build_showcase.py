"""Assemble a static showcase of the U-GO design system into showcase-dist/.

    (cd site && npm run build) && python tools/build_showcase.py

Output:
  index.html            gallery of every card, slide and the website
  use-with-claude.html  plain-English instructions with copy-paste prompts
  claude.md, llms.txt   the brand brief Claude reads when given the link
  kit/                  the skill's assets + ugo.css (one stylesheet, absolute font URLs)
  site/                 the React website
  system/               tokens, foundation cards, slides, component cards
  ugo-university-design.zip  the Claude skill

Set UGO_BASE_URL if the site moves; claude.md uses absolute links so Claude
can fetch assets from anywhere.
"""
import html, os, re, shutil

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PROJECT = os.path.join(ROOT, "project")
OUT = os.path.join(ROOT, "showcase-dist")
SKILL = os.path.join(PROJECT, "dist", "skill", "ugo-university-design")
WEB = os.path.join(ROOT, "tools", "web")
BASE = os.environ.get("UGO_BASE_URL", "https://ugo-brand.netlify.app").rstrip("/")
# Fonts, images and the stylesheet are served from the public GitHub repo via
# jsDelivr: correct MIME types, CORS, and allowed inside Claude artifacts.
CDN = "https://cdn.jsdelivr.net/gh/stuinfla/UGO_Marketing_Design@main"
KIT = CDN + "/project/dist/skill/ugo-university-design"

HEADERS = """/kit/*
  Access-Control-Allow-Origin: *
/system/*
  Access-Control-Allow-Origin: *
/claude.md
  Content-Type: text/markdown; charset=utf-8
  Access-Control-Allow-Origin: *
/llms.txt
  Content-Type: text/plain; charset=utf-8
  Access-Control-Allow-Origin: *
"""

SYSTEM_PARTS = ["styles.css", "tokens", "assets", "guidelines", "components", "_ds_bundle.js",
                os.path.join("ui_kits", "slides")]


def card_meta(path):
    first = open(path, encoding="utf-8").readline()
    attrs = dict(re.findall(r'(\w+)="([^"]*)"', first)) if "@dsCard" in first else {}
    w, h = (attrs.get("viewport", "700x300").split("x") + ["300"])[:2]
    name = attrs.get("name") or os.path.splitext(os.path.basename(path))[0]
    return attrs.get("group", "Other"), name, attrs.get("subtitle", ""), int(w), int(h)


def flat_css():
    """Inline the skill's @import chain into one file with absolute font URLs."""
    brand = os.path.join(SKILL, "brand")
    parts = []
    for name in re.findall(r'@import\s+"([^"]+)"', open(os.path.join(brand, "styles.css")).read()):
        css = open(os.path.join(brand, name), encoding="utf-8").read()
        parts.append(css.replace('url("../assets/', f'url("{KIT}/assets/'))
    return "/* U-GO University brand stylesheet: " + CDN + "/kit/ugo.css */\n" + "\n".join(parts)


def render_brief():
    """claude.md with every link pointing at the CDN, so it works wherever it's read."""
    text = open(os.path.join(WEB, "claude.md"), encoding="utf-8").read()
    return (text.replace("{{BASE}}/kit/ugo.css", CDN + "/kit/ugo.css")
                .replace("{{BASE}}/kit/", KIT + "/")
                .replace("{{BASE}}/use-with-claude.html", BASE + "/use-with-claude.html")
                .replace("{{BASE}}/site/", BASE + "/site/")
                .replace("{{BASE}}", BASE))


def write_repo_kit():
    """Committed copies that jsDelivr serves: kit/ugo.css and ugo-brand.md at the repo root."""
    os.makedirs(os.path.join(ROOT, "kit"), exist_ok=True)
    open(os.path.join(ROOT, "kit", "ugo.css"), "w", encoding="utf-8").write(flat_css())
    open(os.path.join(ROOT, "ugo-brand.md"), "w", encoding="utf-8").write(render_brief())


def build_kit():
    shutil.copytree(SKILL, os.path.join(OUT, "kit"), ignore=shutil.ignore_patterns("__pycache__", "*.pyc"))
    open(os.path.join(OUT, "kit", "ugo.css"), "w", encoding="utf-8").write(flat_css())
    open(os.path.join(OUT, "claude.md"), "w", encoding="utf-8").write(render_brief())
    text = open(os.path.join(WEB, "use-with-claude.html"), encoding="utf-8").read()
    text = text.replace("{{BRIEF}}", CDN + "/ugo-brand.md").replace("{{BASE}}", BASE)
    open(os.path.join(OUT, "use-with-claude.html"), "w", encoding="utf-8").write(text)
    open(os.path.join(OUT, "llms.txt"), "w").write(
        "# U-GO University brand\n\n> Official brand kit. To build anything for U-GO, read and follow:\n\n"
        f"- [Brand kit for Claude]({CDN}/ugo-brand.md)\n- [Stylesheet]({CDN}/kit/ugo.css)\n")
    for f in ("ugo-university-design.zip", "U-GO SETUP - read me first.txt"):
        shutil.copy2(os.path.join(ROOT, "release", f), os.path.join(OUT, f))
    open(os.path.join(OUT, "_headers"), "w").write(HEADERS)


def main():
    site_dist = os.path.join(ROOT, "site", "dist")
    assert os.path.isdir(site_dist), "build the site first: (cd site && npm run build)"
    shutil.rmtree(OUT, ignore_errors=True)
    shutil.copytree(site_dist, os.path.join(OUT, "site"))
    for part in SYSTEM_PARTS:
        src, dst = os.path.join(PROJECT, part), os.path.join(OUT, "system", part)
        os.makedirs(os.path.dirname(dst), exist_ok=True)
        (shutil.copytree if os.path.isdir(src) else shutil.copy2)(src, dst)

    write_repo_kit()
    build_kit()
    groups = {}
    for dirpath, _, files in os.walk(os.path.join(OUT, "system")):
        for f in sorted(files):
            if f.endswith(".html"):
                p = os.path.join(dirpath, f)
                g, name, sub, w, h = card_meta(p)
                groups.setdefault(g, []).append((os.path.relpath(p, OUT), name, sub, w, h))

    order = ["Brand", "Colors", "Type", "Spacing", "Components", "Slides"]
    sections = []
    for g in sorted(groups, key=lambda g: order.index(g) if g in order else 99):
        cards = []
        for rel, name, sub, w, h in groups[g]:
            scale = min(1, 340 / w)
            cards.append(
                f'<a class="card" href="{rel}"><div class="frame" data-w="{w}" data-h="{h}" style="height:{int(h * scale)}px">'
                f'<iframe src="{rel}" loading="lazy" tabindex="-1" style="width:{w}px;height:{h}px;transform:scale({scale:.4f})"></iframe>'
                f'</div><b>{html.escape(name)}</b><span>{html.escape(sub)}</span></a>')
        sections.append(f'<h2>{html.escape(g)}</h2><div class="grid">{"".join(cards)}</div>')

    page = TEMPLATE.replace("{{SECTIONS}}", "\n".join(sections))
    open(os.path.join(OUT, "index.html"), "w", encoding="utf-8").write(page)
    n = sum(len(v) for v in groups.values())
    print(f"wrote {os.path.relpath(OUT, ROOT)}/ ({n} cards)")


TEMPLATE = """<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>U-GO Brand System</title>
<link rel="icon" href="system/assets/logos/UGO_Favicon.png">
<link rel="stylesheet" href="system/styles.css">
<style>
  body{padding:0 clamp(16px,5vw,56px) 64px}
  header{display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;padding:28px 0;border-bottom:1px solid var(--border-hairline)}
  header img{height:34px;width:auto}
  .hero{padding:48px 0 24px}
  .hero h1{font-family:var(--font-serif);text-transform:none;letter-spacing:0;font-weight:400;font-size:clamp(34px,5vw,60px);line-height:1.04}
  .cta{display:inline-block;margin-top:8px;padding:15px 30px;border-radius:999px;background:var(--accent);color:var(--accent-contrast);font-family:var(--font-display);font-weight:900;text-transform:uppercase;letter-spacing:.09em;font-size:14px}
  .cta:hover{text-decoration:none;background:var(--accent-hover)}
  .cta.ghost{background:transparent;color:var(--accent);box-shadow:inset 0 0 0 1.5px var(--accent);margin-left:8px}
  .cta.ghost:hover{background:var(--accent);color:var(--accent-contrast)}
  h2{margin:56px 0 18px;font-size:var(--text-xl)}
  .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(340px,100%),1fr));gap:24px}
  .card{display:flex;flex-direction:column;gap:4px;color:var(--text-body)}
  .card:hover{text-decoration:none}
  .frame{position:relative;overflow:hidden;border-radius:var(--radius-md);background:var(--ugo-white);box-shadow:var(--shadow-md);margin-bottom:8px}
  .frame iframe{border:0;transform-origin:0 0;pointer-events:none;position:absolute;top:0;left:0}
  .card b{font-family:var(--font-display);font-weight:900;text-transform:uppercase;letter-spacing:.06em;font-size:13px;color:var(--text-primary)}
  .card span{font-size:14px;color:var(--text-muted)}
</style></head><body>
<header><img src="system/assets/logos/UGO_Logo_horizontal_trim.png" alt="U-GO University"><a class="ugo-eyebrow" href="use-with-claude.html">Use with Claude</a></header>
<section class="hero">
  <h1>Talent is universal,<br><em>opportunity is not.</em></h1>
  <p>The U-GO University brand in one place: colours, type, the watercolour silhouettes, components, slide layouts and the website.</p>
  <a class="cta" href="use-with-claude.html">Use the brand with Claude</a>
  <a class="cta ghost" href="site/index.html">See the website</a>
</section>
{{SECTIONS}}
<script>
  // Scale each preview to its card's real width.
  const fit = (f) => { const s = f.clientWidth / f.dataset.w; f.style.height = f.dataset.h * s + "px"; f.firstChild.style.transform = `scale(${s})`; };
  const ro = new ResizeObserver((es) => es.forEach((e) => fit(e.target)));
  document.querySelectorAll(".frame").forEach((f) => ro.observe(f));
</script>
</body></html>
"""

if __name__ == "__main__":
    if os.environ.get("UGO_KIT_ONLY") == "1":
        write_repo_kit()
        print("wrote kit/ugo.css and ugo-brand.md")
    else:
        main()
