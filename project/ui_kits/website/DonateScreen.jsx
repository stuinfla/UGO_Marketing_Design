// U-GO University — Donate screen. Assigns to window; not a DS component.
function DonateScreen({ onNav }) {
  const { Button, Eyebrow, Field, Card } = window.UGOUniversityDesignSystem_5d28d6;
  const [amount, setAmount] = React.useState(75);
  const [freq, setFreq] = React.useState("monthly");
  const wrap = { maxWidth: 1080, margin: "0 auto", padding: "clamp(48px,6vw,88px) clamp(20px,5vw,56px)" };
  const presets = [25, 50, 75, 150];

  return (
    <div style={{ ...wrap, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start" }}>
      {/* left: pitch */}
      <div>
        <Eyebrow rule>Fund a scholar</Eyebrow>
        <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 400, textTransform: "none", letterSpacing: 0, fontSize: "clamp(34px,4.6vw,56px)", lineHeight: 1.03, color: "var(--text-primary)", margin: "18px 0 0" }}>
          When a girl can't afford a SIM card to study, talent goes to waste.
        </h1>
        <p style={{ fontFamily: "var(--font-body)", fontWeight: 200, fontSize: 18, lineHeight: 1.55, color: "var(--text-body)", maxWidth: "44ch", marginTop: 24 }}>
          Your gift funds tuition, devices and data for a young woman in a low-income country — and every grade she advances, the return multiplies for her family and community.
        </p>
        <img src="../../assets/profiles/p03.png" alt="" style={{ height: 240, marginTop: 24 }}/>
      </div>

      {/* right: donate form */}
      <Card pad="lg" style={{ position: "sticky", top: 90 }}>
        <h2 style={{ fontSize: 22, color: "var(--text-primary)", margin: "0 0 18px" }}>Your gift</h2>

        <div style={{ display: "flex", gap: 8, marginBottom: 18 }}>
          {["once", "monthly"].map((f) => (
            <button key={f} onClick={()=>setFreq(f)} style={{
              flex: 1, cursor: "pointer", padding: "11px 0",
              fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase", fontSize: 12, letterSpacing: "0.08em",
              borderRadius: "var(--radius-pill)",
              border: "1.5px solid " + (freq===f ? "var(--ugo-royal-blue)" : "var(--border-strong)"),
              background: freq===f ? "var(--ugo-royal-blue)" : "transparent",
              color: freq===f ? "var(--ugo-beige)" : "var(--text-primary)",
            }}>{f === "once" ? "One time" : "Monthly"}</button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8, marginBottom: 14 }}>
          {presets.map((p) => (
            <button key={p} onClick={()=>setAmount(p)} style={{
              cursor: "pointer", padding: "14px 0",
              fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 16,
              borderRadius: "var(--radius-sm)",
              border: "1.5px solid " + (amount===p ? "var(--ugo-dark-teal)" : "var(--border-strong)"),
              background: amount===p ? "var(--ugo-light-teal)" : "transparent",
              color: "var(--text-primary)",
            }}>${p}</button>
          ))}
        </div>

        <Field label="Other amount" type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} />
        <div style={{ height: 14 }}/>
        <Field label="Email for receipt" type="email" placeholder="you@example.org" />
        <div style={{ height: 22 }}/>
        <Button variant="primary" size="lg" full>
          Give ${amount}{freq === "monthly" ? " / month" : ""}
        </Button>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--text-muted)", textAlign: "center", marginTop: 14, marginBottom: 0 }}>
          U-GO is a registered charity. 100% of your gift funds scholarships.
        </p>
      </Card>
    </div>
  );
}
window.DonateScreen = DonateScreen;
