"""U-GO University branded PowerPoint builder (python-pptx).

Usage:
    import sys; sys.path.insert(0, "<skill>/scripts")
    from ugo_pptx import Deck
    d = Deck()                                   # 16:9
    d.title("Talent is universal,", "opportunity is not.", label="IMPACT REPORT · 2026")
    d.section("02", "Where we work")
    d.content("Why it works", ["Point one", "Point two"], label="OUR IMPACT")
    d.stats("Why investing in her works", [("98%", "of U-GO scholars advance to the next grade"),
                                           ("90%", "of a woman's income is invested back into her family")])
    d.quote("When a girl can't afford a SIM card to study, talent goes to waste.", "U-GO founding principle")
    d.closing("Make opportunity as universal as talent.")
    d.save("/mnt/user-data/outputs/deck.pptx")
Every function also accepts notes="..." for speaker notes.
"""
import os
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
from pptx.enum.shapes import MSO_SHAPE
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR

HERE = os.path.dirname(os.path.abspath(__file__))
ASSETS = os.path.join(HERE, "..", "assets")
A = lambda *p: os.path.join(ASSETS, *p)

BEIGE, WHITE = RGBColor(0xF1, 0xF1, 0xEC), RGBColor(0xFF, 0xFF, 0xFF)
INK, BODY, MUTED = RGBColor(0x1C, 0x3B, 0x40), RGBColor(0x34, 0x40, 0x3F), RGBColor(0x6F, 0x7A, 0x79)
DARK_TEAL, LIGHT_TEAL, LIME = RGBColor(0x4F, 0x9E, 0xB0), RGBColor(0x80, 0xDE, 0xBA), RGBColor(0xBA, 0xD6, 0x26)
ORANGE, CORNFLOWER, PINK = RGBColor(0xFF, 0xBA, 0x29), RGBColor(0x94, 0xB2, 0xFF), RGBColor(0xFF, 0xA3, 0xE5)

# Brand font names; PowerPoint falls back if not installed. Set USE_FALLBACK_FONTS=True to force safe fonts.
USE_FALLBACK_FONTS = True
DISPLAY = "Arial Black" if USE_FALLBACK_FONTS else "MD IO"
SERIF = "Georgia" if USE_FALLBACK_FONTS else "Simula"
SANS = "Calibri Light" if USE_FALLBACK_FONTS else "David"

PROFILES = ["p01.png", "p03.png", "p05.png", "p04.png", "p02.png"]
W, H = Inches(13.333), Inches(7.5)
M = Inches(0.8)


class Deck:
    def __init__(self):
        self.prs = Presentation()
        self.prs.slide_width, self.prs.slide_height = W, H
        self._blank = self.prs.slide_layouts[6]

    # ---------- primitives ----------
    def _slide(self, bg, notes=None):
        s = self.prs.slides.add_slide(self._blank)
        s.background.fill.solid()
        s.background.fill.fore_color.rgb = bg
        if notes:
            s.notes_slide.notes_text_frame.text = notes
        return s

    def _text(self, s, x, y, w, h, text, font, size, color, upper=False, italic=False,
              align=PP_ALIGN.LEFT, anchor=MSO_ANCHOR.TOP, spacing=None, line=None):
        tb = s.shapes.add_textbox(x, y, w, h)
        tf = tb.text_frame
        tf.word_wrap = True
        tf.vertical_anchor = anchor
        tf.margin_left = tf.margin_right = tf.margin_top = tf.margin_bottom = 0
        lines = text if isinstance(text, list) else [text]
        for i, t in enumerate(lines):
            p = tf.paragraphs[0] if i == 0 else tf.add_paragraph()
            p.alignment = align
            if line:
                p.line_spacing = line
            r = p.add_run()
            r.text = t.upper() if upper else t
            f = r.font
            f.name, f.size, f.italic = font, Pt(size), italic
            f.color.rgb = color
            if spacing is not None:
                rPr = r._r.get_or_add_rPr()
                rPr.set("spc", str(int(spacing)))
        return tb

    def _logo(self, s, light=False, x=None, y=None, h=Inches(0.55)):
        f = "UGO_Logo_horizontal_light.png" if light else "UGO_Logo_horizontal.png"
        s.shapes.add_picture(A("logos", f), x if x is not None else M, y if y is not None else Inches(0.6), height=h)

    def _eyebrow(self, s, text, x, y, color=DARK_TEAL):
        bar = s.shapes.add_shape(MSO_SHAPE.RECTANGLE, x, y + Inches(0.1), Inches(0.4), Inches(0.04))
        bar.fill.solid(); bar.fill.fore_color.rgb = color; bar.line.fill.background()
        self._text(s, x + Inches(0.55), y, Inches(9), Inches(0.3), text, DISPLAY, 14, color, upper=True, spacing=200)

    # ---------- slide types ----------
    def title(self, line1, line2_italic="", label="", notes=None):
        s = self._slide(BEIGE, notes)
        s.shapes.add_picture(A("profiles", "p02.png"), Inches(7.6), Inches(1.9), height=Inches(5.6))
        s.shapes.add_picture(A("profiles", "p01.png"), Inches(9.0), Inches(1.0), height=Inches(6.5))
        self._logo(s)
        if label:
            self._eyebrow(s, label, M, Inches(2.6))
        tb = self._text(s, M, Inches(3.1), Inches(7.6), Inches(3), line1, SERIF, 54, INK, line=1.0)
        if line2_italic:
            p = tb.text_frame.add_paragraph(); p.line_spacing = 1.0
            r = p.add_run(); r.text = line2_italic
            r.font.name, r.font.size, r.font.italic, r.font.color.rgb = SERIF, Pt(54), True, INK
        self._text(s, M, Inches(6.7), Inches(5), Inches(0.4), "ugouniversity.org", SANS, 14, BODY)
        return s

    def section(self, number, title, notes=None):
        s = self._slide(INK, notes)
        s.shapes.add_picture(A("profiles", "inv02.png"), Inches(8.2), Inches(-0.6), height=Inches(8.7))
        self._text(s, M, Inches(2.3), Inches(4), Inches(0.5), number, DISPLAY, 24, LIGHT_TEAL)
        self._text(s, M, Inches(2.9), Inches(9), Inches(2.6), title, DISPLAY, 66, BEIGE, upper=True, line=0.95)
        bar = s.shapes.add_shape(MSO_SHAPE.RECTANGLE, M, Inches(5.7), Inches(0.7), Inches(0.06))
        bar.fill.solid(); bar.fill.fore_color.rgb = LIME; bar.line.fill.background()
        return s

    def content(self, heading, bullets, label="", image=None, notes=None):
        """bullets: list of short strings (max ~5). image: optional path shown on the right."""
        s = self._slide(BEIGE, notes)
        if label:
            self._eyebrow(s, label, M, Inches(0.8))
        text_w = Inches(6.8) if image else Inches(11.5)
        self._text(s, M, Inches(1.3), text_w, Inches(1.4), heading, DISPLAY, 34, INK, upper=True, line=0.95)
        self._text(s, M, Inches(2.9), text_w, Inches(4), ["•  " + b for b in bullets], SANS, 20, BODY, line=1.35)
        if image:
            s.shapes.add_picture(image, Inches(8.0), Inches(0.9), height=Inches(5.8))
        else:
            s.shapes.add_picture(A("profiles", "p05.png"), Inches(10.4), Inches(4.0), height=Inches(3.5))
        return s

    def stats(self, heading, items, label="OUR IMPACT", notes=None):
        """items: list of (value, caption), 2-3 of them. Values like '98%'."""
        s = self._slide(BEIGE, notes)
        self._eyebrow(s, label, M, Inches(0.7))
        self._text(s, M, Inches(1.1), Inches(11.5), Inches(0.9), heading, DISPLAY, 34, INK, upper=True)
        n = len(items); gap = Inches(0.3)
        cw = int((W - 2 * M - gap * (n - 1)) / n)
        for i, (val, cap) in enumerate(items):
            x = M + i * (cw + gap)
            ph = Inches(4.9)
            pic = s.shapes.add_picture(A("profiles", PROFILES[i % len(PROFILES)]), x, Inches(2.25), height=ph)
            pic.left = int(x + (cw - pic.width) / 2)
            self._text(s, x, Inches(3.9), cw, Inches(1.2), val, DISPLAY, 72, INK, align=PP_ALIGN.CENTER)
            self._text(s, x + Inches(0.6), Inches(5.15), cw - Inches(1.2), Inches(1), cap, SANS, 15, INK, align=PP_ALIGN.CENTER)
        return s

    def quote(self, text, attribution="", notes=None):
        s = self._slide(BEIGE, notes)
        s.shapes.add_picture(A("profiles", "p03.png"), Inches(8.6), Inches(1.0), height=Inches(6.8))
        self._text(s, Inches(1.0), Inches(1.6), Inches(7.8), Inches(3.8), "\u201c" + text + "\u201d", SERIF, 40, INK, italic=True,
                   anchor=MSO_ANCHOR.MIDDLE, line=1.1)
        if attribution:
            self._text(s, Inches(1.0), Inches(5.6), Inches(7.5), Inches(0.4), "\u2014 " + attribution, DISPLAY, 14, DARK_TEAL, upper=True, spacing=150)
        return s

    def image(self, heading, image_path, caption="", notes=None):
        s = self._slide(WHITE, notes)
        self._text(s, M, Inches(0.7), Inches(11.5), Inches(0.8), heading, DISPLAY, 30, INK, upper=True)
        pic = s.shapes.add_picture(image_path, M, Inches(1.7), height=Inches(4.9))
        if caption:
            self._text(s, M, Inches(6.75), Inches(11.5), Inches(0.4), caption, SANS, 14, MUTED)
        return s

    def closing(self, line="Make opportunity as universal as talent.", contact="contact@ugouniversity.org  ·  ugouniversity.org", notes=None):
        s = self._slide(INK, notes)
        s.shapes.add_picture(A("profiles", "inv06.png"), Inches(-1.2), Inches(0.4), height=Inches(7.6))
        self._text(s, Inches(2.2), Inches(2.0), Inches(9), Inches(2.4), line, SERIF, 48, BEIGE, align=PP_ALIGN.CENTER,
                   anchor=MSO_ANCHOR.MIDDLE, line=1.05)
        self._text(s, Inches(2.2), Inches(4.7), Inches(9), Inches(0.4), contact, SANS, 16, LIGHT_TEAL, align=PP_ALIGN.CENTER)
        self._logo(s, light=True, x=int((W - Inches(2.2)) / 2), y=Inches(5.6), h=Inches(0.6))
        return s

    def save(self, path):
        self.prs.save(path)
        return path
