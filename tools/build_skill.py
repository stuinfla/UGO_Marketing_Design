"""Smoke-test and package the U-GO Claude skill.

    python tools/build_skill.py

Builds a sample deck and a self-contained HTML page from the skill (to prove
both scripts work), then writes release/ugo-university-design.zip with the
`ugo-university-design/` folder at the zip root, the layout Claude's
Customize > Skills upload expects.
"""
import os, re, subprocess, sys, tempfile, zipfile

sys.dont_write_bytecode = True

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SKILL = os.path.join(ROOT, "project", "dist", "skill", "ugo-university-design")
RELEASE = os.path.join(ROOT, "release")
ZIP = os.path.join(RELEASE, "ugo-university-design.zip")


def check_frontmatter():
    text = open(os.path.join(SKILL, "SKILL.md"), encoding="utf-8").read()
    m = re.match(r"---\n(.*?)\n---\n", text, re.S)
    assert m, "SKILL.md must start with YAML frontmatter"
    fm = dict(line.split(": ", 1) for line in m.group(1).splitlines() if ": " in line)
    assert re.fullmatch(r"[a-z0-9-]{1,64}", fm.get("name", "")), "name must be lowercase-hyphenated, <=64 chars"
    assert 0 < len(fm.get("description", "")) <= 1024, "description must be 1-1024 chars"


def check_references():
    """Every assets/... path mentioned in the examples and scripts must exist."""
    missing = []
    for sub in ("examples", "scripts"):
        for name in os.listdir(os.path.join(SKILL, sub)):
            path = os.path.join(SKILL, sub, name)
            if not os.path.isfile(path):
                continue
            for ref in re.findall(r"\.\./assets/[\w./-]+\.(?:png|jpg|woff2)", open(path, encoding="utf-8").read()):
                if not os.path.exists(os.path.normpath(os.path.join(SKILL, sub, ref))):
                    missing.append(f"{sub}/{name}: {ref}")
    assert not missing, "missing assets:\n" + "\n".join(missing)


def smoke_test(out):
    sys.path.insert(0, os.path.join(SKILL, "scripts"))
    from ugo_pptx import Deck
    d = Deck()
    d.title("Talent is universal,", "opportunity is not.", label="Smoke test")
    d.section("01", "Where we work")
    d.content("Why it works", ["One", "Two"], label="Our model")
    d.stats("Our impact", [("98%", "of U-GO scholars advance to the next grade"),
                           ("90%", "of a woman's income is invested back into her family")])
    d.quote("Talent is universal, opportunity is not.", "U-GO")
    d.image("Scholars", os.path.join(SKILL, "assets", "photos", "ph_teal.jpg"))
    d.closing()
    d.save(os.path.join(out, "smoke.pptx"))
    for name in os.listdir(os.path.join(SKILL, "examples")):
        dst = os.path.join(out, name)
        subprocess.run([sys.executable, os.path.join(SKILL, "scripts", "inline_html.py"),
                        os.path.join(SKILL, "examples", name), dst], check=True, capture_output=True)
        left = re.findall(r'(?:src|href)="(\.\./[^"]+)"', open(dst, encoding="utf-8").read())
        assert not left, f"{name}: un-inlined references {left}"


def package():
    os.makedirs(RELEASE, exist_ok=True)
    base = os.path.dirname(SKILL)
    with zipfile.ZipFile(ZIP, "w", zipfile.ZIP_DEFLATED) as z:
        for dirpath, dirnames, files in os.walk(SKILL):
            dirnames[:] = sorted(d for d in dirnames if d != "__pycache__")
            for f in sorted(files):
                if f.startswith(".") or f.endswith(".pyc"):
                    continue
                full = os.path.join(dirpath, f)
                z.write(full, os.path.relpath(full, base))
    with zipfile.ZipFile(ZIP) as z:
        assert "ugo-university-design/SKILL.md" in z.namelist()
        n = len(z.namelist())
    print(f"wrote {os.path.relpath(ZIP, ROOT)} ({n} files, {os.path.getsize(ZIP) // 1024} KB)")


if __name__ == "__main__":
    check_frontmatter()
    check_references()
    with tempfile.TemporaryDirectory() as tmp:
        smoke_test(tmp)
    print("smoke test passed")
    package()
