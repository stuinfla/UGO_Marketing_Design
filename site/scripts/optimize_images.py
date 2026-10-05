"""Write web-sized WebP copies of the design-system images into src/img/.

    python scripts/optimize_images.py

The originals in ../project/assets stay the source of truth; re-run this after
replacing one. Sizes are 2x the largest size each image is shown at on the site.
"""
import os
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, "..", "..", "project", "assets")
OUT = os.path.join(HERE, "..", "src", "img")

JOBS = {
    "profiles/p01.png": 760, "profiles/p02.png": 760, "profiles/p03.png": 760,
    "profiles/p04.png": 760, "profiles/p05.png": 760,
    "photos/ph_blue.png": 600, "photos/ph_orange.png": 600, "photos/ph_teal.png": 600,
    "textures/wc_cornflower_s.png": 1200,
    "logos/UGO_Logo_horizontal_trim.png": 300,
}

os.makedirs(OUT, exist_ok=True)
for rel, px in JOBS.items():
    im = Image.open(os.path.join(SRC, rel)).convert("RGBA")
    im.thumbnail((px, px), Image.LANCZOS)
    dst = os.path.join(OUT, os.path.splitext(os.path.basename(rel))[0] + ".webp")
    im.save(dst, "WEBP", quality=86, method=6)
    print(f"{rel} -> {os.path.relpath(dst, os.path.join(HERE, '..'))} ({os.path.getsize(dst) // 1024} KB)")
