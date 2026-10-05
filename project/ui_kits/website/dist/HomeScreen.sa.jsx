// U-GO University — Home screen. Assigns to window; not a DS component.
function HomeScreen({ onNav }) {
  const DS = window.UGOUniversityDesignSystem_5d28d6;
  const { Button, Eyebrow, StatSilhouette, ScholarCard, Tag } = DS;

  const wrap = { maxWidth: 1180, margin: "0 auto", padding: "0 clamp(20px,5vw,56px)" };

  const countries = [
    ["Pakistan", "pink"], ["India", "lightTeal"], ["Bangladesh", "darkTeal"],
    ["Cambodia", "lime"], ["Vietnam", "pink"], ["Philippines", "orange"],
    ["Indonesia", "cornflower"], ["Nepal", "darkGreen"], ["Tanzania", "cornflower"],
  ];

  const scholars = [
    ["Evania Larasati", "Indonesia", "Agrotechnology", window.__resources.ph_teal, window.__resources.p01, "lightTeal"],
    ["Shimpi Yadav", "India", "Pharmacy", window.__resources.ph_orange, window.__resources.p03, "orange"],
    ["Jahnavi A", "India", "Aeronautical Engineering", window.__resources.ph_blue, window.__resources.p05, "cornflower"],
  ];

  return (
    <div>
      {/* ---------- Hero ---------- */}
      <section style={{ ...wrap, paddingTop: "clamp(48px,7vw,96px)", paddingBottom: "clamp(40px,6vw,80px)", display: "grid", gridTemplateColumns: "minmax(0,1.05fr) minmax(0,0.95fr)", gap: 48, alignItems: "center" }}>
        <div>
          <Eyebrow rule>Where talent meets opportunity</Eyebrow>
          <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 400, textTransform: "none", letterSpacing: 0, fontSize: "clamp(40px,5.4vw,72px)", lineHeight: 1.02, color: "var(--text-primary)", margin: "20px 0 0" }}>
            Talent is universal,<br/><em>opportunity is not.</em>
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 200, fontSize: 18, lineHeight: 1.55, color: "var(--text-body)", maxWidth: "46ch", margin: "26px 0 0" }}>
            U-GO partners with ambitious donors at scale to fund thousands of higher-education scholarships for talented young women in low-income countries. Because when young women go, opportunities multiply.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
            <Button variant="primary" size="lg" onClick={()=>onNav("donate")}>Donate</Button>
            <Button variant="secondary" size="lg" onClick={()=>onNav("scholars")}>Meet the scholars</Button>
          </div>
        </div>
        <div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "flex-end", minHeight: 320 }}>
          <img src={window.__resources.p02} alt="" style={{ height: 300, marginRight: -56, position: "relative", zIndex: 1 }}/>
          <img src={window.__resources.p01} alt="" style={{ height: 360, position: "relative", zIndex: 2 }}/>
          <img src={window.__resources.p04} alt="" style={{ height: 280, marginLeft: -48, position: "relative", zIndex: 1 }}/>
        </div>
      </section>

      {/* ---------- Stats ---------- */}
      <section style={{ background: "var(--ugo-white)" }}>
        <div style={{ ...wrap, padding: "clamp(48px,6vw,80px) clamp(20px,5vw,56px)" }}>
          <div style={{ display: "flex", gap: 24, justifyContent: "space-around", flexWrap: "wrap" }}>
            <StatSilhouette value="98" caption="of U-GO scholars advance to the next grade" profileSrc={window.__resources.p05} width={230}/>
            <StatSilhouette value="90" caption="of a woman's income is invested back into her family" profileSrc={window.__resources.p04} width={230}/>
            <StatSilhouette value="96" caption="of women in Cambodia do not attend university" profileSrc={window.__resources.p01} width={230}/>
          </div>
        </div>
      </section>

      {/* ---------- Where we work ---------- */}
      <section style={{ ...wrap, padding: "clamp(56px,7vw,96px) clamp(20px,5vw,56px)" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h2 style={{ fontSize: "clamp(28px,3.6vw,46px)", color: "var(--text-primary)", margin: 0 }}>Where we work</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 40, alignItems: "center" }}>
          <div style={{ position: "relative", borderRadius: "var(--radius-xl)", overflow: "hidden", background: "var(--ugo-white)", aspectRatio: "16/10", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src={window.__resources.wc} alt="" style={{ width: "120%", height: "120%", objectFit: "cover", opacity: 0.5 }}/>
            <span style={{ position: "absolute", fontFamily: "var(--font-body)", fontSize: 13, color: "var(--text-muted)" }}>[ Watercolour region map ]</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px 18px" }}>
            {countries.map(([c, tone]) => <Tag key={c} tone={tone} dot>{c}</Tag>)}
          </div>
        </div>
      </section>

      {/* ---------- Meet the scholars ---------- */}
      <section style={{ background: "var(--ugo-white)" }}>
        <div style={{ ...wrap, padding: "clamp(56px,7vw,96px) clamp(20px,5vw,56px)" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(28px,3.6vw,46px)", color: "var(--text-primary)", margin: 0 }}>Meet the scholars</h2>
          </div>
          <div style={{ display: "flex", gap: 40, justifyContent: "center", flexWrap: "wrap" }}>
            {scholars.map(([n, c, f, ph, m, t]) => (
              <ScholarCard key={n} name={n} country={c} field={f} photoSrc={ph} maskSrc={m} tone={t} width={240}/>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA band ---------- */}
      <section style={{ background: "var(--ugo-royal-blue)" }}>
        <div style={{ ...wrap, padding: "clamp(56px,7vw,90px) clamp(20px,5vw,56px)", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 400, textTransform: "none", letterSpacing: 0, fontSize: "clamp(28px,3.8vw,48px)", lineHeight: 1.08, color: "var(--ugo-beige)", margin: "0 auto", maxWidth: "18ch" }}>
            Make opportunity as universal as talent.
          </h2>
          <div style={{ marginTop: 32 }}>
            <Button variant="onColor" size="lg" onClick={()=>onNav("donate")}>Fund a scholar</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
window.HomeScreen = HomeScreen;
