// U-GO University — Meet the Scholars grid. Assigns to window; not a DS component.
function ScholarsScreen({ onNav }) {
  const { Eyebrow, ScholarCard, Tag } = window.UGOUniversityDesignSystem_5d28d6;
  const wrap = { maxWidth: 1180, margin: "0 auto", padding: "0 clamp(20px,5vw,56px)" };

  const photos = [window.__resources.ph_teal, window.__resources.ph_orange, window.__resources.ph_blue];
  const masks = [window.__resources.p01, window.__resources.p03, window.__resources.p05, window.__resources.p04, window.__resources.p02];
  const tones = ["lightTeal", "orange", "cornflower", "lime", "pink"];

  const scholars = [
    ["Evania Larasati", "Indonesia", "Agrotechnology"],
    ["Shimpi Yadav", "India", "Pharmacy"],
    ["Jahnavi A", "India", "Aeronautical Engineering"],
    ["Sokha Chan", "Cambodia", "Computer Science"],
    ["Aisha Rahman", "Bangladesh", "Public Health"],
    ["Nilima Gurung", "Nepal", "Civil Engineering"],
    ["Linh Tran", "Vietnam", "Environmental Science"],
    ["Maria Santos", "Philippines", "Nursing"],
  ];

  return (
    <div style={{ ...wrap, padding: "clamp(48px,6vw,88px) clamp(20px,5vw,56px) clamp(40px,5vw,72px)" }}>
      <Eyebrow rule>Our scholars</Eyebrow>
      <h1 style={{ fontSize: "clamp(34px,5vw,64px)", color: "var(--text-primary)", margin: "16px 0 8px" }}>Meet the scholars</h1>
      <p style={{ fontFamily: "var(--font-body)", fontWeight: 200, fontSize: 18, color: "var(--text-body)", maxWidth: "52ch", margin: "0 0 40px" }}>
        Dreamers, makers, doctors, teachers and leaders — young women funded to finish what their talent started.
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))",
        gap: "clamp(28px,3vw,48px)",
      }}>
        {scholars.map((s, i) => (
          <ScholarCard key={s[0]} name={s[0]} country={s[1]} field={s[2]}
            photoSrc={photos[i % photos.length]}
            maskSrc={masks[i % masks.length]}
            tone={tones[i % tones.length]}
            width="100%" />
        ))}
      </div>
    </div>
  );
}
window.ScholarsScreen = ScholarsScreen;
