"""Make a U-GO HTML page fully self-contained (fonts, CSS, images embedded).

    python inline_html.py input.html output.html

Inlines <link rel="stylesheet"> (following @import), and converts url(...) and
<img src>/<link rel=icon href> pointing at local files into base64 data URIs.
"""
import base64, mimetypes, os, re, sys

MIME = {".woff2": "font/woff2", ".woff": "font/woff", ".png": "image/png", ".jpg": "image/jpeg",
        ".jpeg": "image/jpeg", ".svg": "image/svg+xml", ".gif": "image/gif", ".webp": "image/webp"}


def data_uri(path):
    ext = os.path.splitext(path)[1].lower()
    mime = MIME.get(ext) or mimetypes.guess_type(path)[0] or "application/octet-stream"
    with open(path, "rb") as f:
        return "data:%s;base64,%s" % (mime, base64.b64encode(f.read()).decode())


def is_local(ref):
    return not re.match(r"^(https?:|data:|//|#|mailto:)", ref)


def inline_css(css_path, seen=None):
    seen = seen or set()
    css_path = os.path.normpath(css_path)
    if css_path in seen or not os.path.exists(css_path):
        return ""
    seen.add(css_path)
    base = os.path.dirname(css_path)
    css = open(css_path, encoding="utf-8").read()
    css = re.sub(r'@import\s+(?:url\()?["\']([^"\']+)["\']\)?\s*;',
                 lambda m: inline_css(os.path.join(base, m.group(1)), seen) if is_local(m.group(1)) else m.group(0), css)

    def rep(m):
        ref = m.group(2)
        p = os.path.join(base, ref)
        return 'url("%s")' % data_uri(p) if is_local(ref) and os.path.exists(p) else m.group(0)
    return re.sub(r'url\((["\']?)([^)"\']+)\1\)', rep, css)


def main(src, dst):
    base = os.path.dirname(os.path.abspath(src))
    html = open(src, encoding="utf-8").read()

    def link(m):
        href = m.group(1)
        if not is_local(href):
            return m.group(0)
        return "<style>\n%s\n</style>" % inline_css(os.path.join(base, href))
    html = re.sub(r'<link[^>]*rel=["\']stylesheet["\'][^>]*href=["\']([^"\']+)["\'][^>]*>', link, html)
    html = re.sub(r'<link[^>]*href=["\']([^"\']+)["\'][^>]*rel=["\']stylesheet["\'][^>]*>', link, html)

    def attr(m):
        ref = m.group(3)
        p = os.path.join(base, ref)
        if is_local(ref) and os.path.exists(p):
            return '%s=%s%s%s' % (m.group(1), m.group(2), data_uri(p), m.group(2))
        return m.group(0)
    html = re.sub(r'\b(src|href)=(["\'])([^"\']+\.(?:png|jpe?g|svg|gif|webp|ico))\2', attr, html)

    def style_url(m):
        ref = m.group(2)
        p = os.path.join(base, ref)
        return 'url("%s")' % data_uri(p) if is_local(ref) and os.path.exists(p) else m.group(0)
    html = re.sub(r'url\((["\']?)([^)"\']+\.(?:png|jpe?g|svg|gif|webp|woff2?))\1\)', style_url, html)

    os.makedirs(os.path.dirname(os.path.abspath(dst)), exist_ok=True)
    open(dst, "w", encoding="utf-8").write(html)
    print("wrote", dst, "(%d KB)" % (os.path.getsize(dst) // 1024))


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
