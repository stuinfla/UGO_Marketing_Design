// U-GO University — site header (nav + donate). Assigns to window; not a DS component.
function Header({ route, onNav }) {
  const { Button } = window.UGOUniversityDesignSystem_5d28d6;
  const links = [
    ["home", "The Team"],
    ["about", "About Us"],
    ["scholars", "Meet the Scholars"],
    ["news", "News"],
    ["contact", "Contact"],
  ];
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 20,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "16px clamp(20px, 5vw, 56px)",
      background: "rgba(241,241,236,0.86)", backdropFilter: "blur(10px)",
      borderBottom: "1px solid var(--border-hairline)",
    }}>
      <a href="#home" onClick={(e)=>{e.preventDefault();onNav("home");}} style={{ display: "flex", alignItems: "center" }}>
        <img src={window.__resources.logo} alt="U-GO University" style={{ height: 34, width: "auto" }}/>
      </a>
      <nav style={{ display: "flex", alignItems: "center", gap: "clamp(14px,2.4vw,34px)" }}>
        {links.map(([key, label]) => (
          <a key={key} href={"#"+key}
             onClick={(e)=>{e.preventDefault();onNav(key === "about" || key === "news" || key === "contact" ? "home" : key);}}
             style={{
               fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase",
               fontSize: 13, letterSpacing: "0.04em",
               color: route === key ? "var(--ugo-dark-teal)" : "var(--text-primary)",
               textDecoration: "none", whiteSpace: "nowrap",
             }}>{label}</a>
        ))}
        <Button variant="primary" size="sm" onClick={()=>onNav("donate")}>Donate</Button>
      </nav>
    </header>
  );
}
window.Header = Header;
