import { logos } from "../assets.js";

const LINKS = [
  ["The team", "home"],
  ["About us", "home"],
  ["Meet the scholars", "scholars"],
  ["News", "home"],
  ["Contact", "home"],
  ["Donate", "donate"],
];

const label = {
  fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase",
  color: "var(--text-primary)", textDecoration: "none",
};

export function Footer({ onNav }) {
  return (
    <footer className="site-footer">
      <div className="top">
        <div>
          <div style={{ ...label, letterSpacing: "0.08em", fontSize: 14 }}>Get in touch:</div>
          <a
            href="mailto:contact@ugouniversity.org"
            style={{ ...label, letterSpacing: "0.04em", fontSize: "clamp(17px, 4vw, 22px)", display: "block", marginTop: 6, overflowWrap: "anywhere" }}
          >
            contact@ugouniversity.org
          </a>
          <nav aria-label="Footer" style={{ display: "flex", flexDirection: "column", gap: 3, marginTop: 28 }}>
            {LINKS.map(([text, route]) => (
              <a
                key={text}
                className="footer-link"
                href={route === "home" ? "#/" : `#/${route}`}
                onClick={(e) => { e.preventDefault(); onNav(route); }}
              >
                {text}
              </a>
            ))}
          </nav>
        </div>
        <img className="logo" src={logos.horizontal} alt="U-GO University" />
      </div>
      <div style={{ marginTop: 40, fontFamily: "var(--font-body)", fontWeight: 400, fontSize: 12, color: "var(--text-muted)", display: "flex", gap: 20 }}>
        <span>© {new Date().getFullYear()} U-GO</span>
        <span>Privacy &amp; Terms</span>
      </div>
    </footer>
  );
}
