// U-GO University — site footer. Assigns to window; not a DS component.
function Footer({ onNav }) {
  const cols = ["The team", "About us", "Meet the scholars", "News", "Contact", "Donate"];
  return (
    <footer style={{ background: "var(--surface-page)", borderTop: "1px solid var(--border-hairline)", padding: "56px clamp(20px,5vw,56px) 36px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 32 }}>
        <div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.08em", fontSize: 14, color: "var(--text-primary)" }}>Get in touch:</div>
          <a href="mailto:contact@ugouniversity.org" style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.04em", fontSize: 22, color: "var(--text-primary)", textDecoration: "none", display: "block", marginTop: 6 }}>contact@ugouniversity.org</a>
          <nav style={{ display: "flex", flexDirection: "column", gap: 3, marginTop: 28 }}>
            {cols.map((c) => (
              <a key={c} href="#" onClick={(e)=>{e.preventDefault();onNav && onNav("home");}} style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: 15, color: "var(--text-body)", textDecoration: "none" }}>{c}</a>
            ))}
          </nav>
        </div>
        <img src="../../assets/logos/UGO_Logo_horizontal.png" alt="U-GO University" style={{ height: 44, width: "auto" }}/>
      </div>
      <div style={{ marginTop: 40, fontFamily: "var(--font-body)", fontWeight: 400, fontSize: 12, color: "var(--text-muted)", display: "flex", gap: 20 }}>
        <span>© 2024 U-GO</span><span>Privacy &amp; Terms</span>
      </div>
    </footer>
  );
}
window.Footer = Footer;
