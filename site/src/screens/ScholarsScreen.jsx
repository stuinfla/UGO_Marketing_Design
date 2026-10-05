import { Eyebrow, ScholarCard } from "../ds.js";
import { scholars } from "../content.js";

export function ScholarsScreen() {
  return (
    <div className="wrap" style={{ paddingTop: "clamp(48px,6vw,88px)", paddingBottom: "clamp(40px,5vw,72px)" }}>
      <Eyebrow rule>Our scholars</Eyebrow>
      <h1 style={{ fontSize: "clamp(34px,5vw,64px)", color: "var(--text-primary)", margin: "16px 0 8px" }}>Meet the scholars</h1>
      <p style={{ fontFamily: "var(--font-body)", fontWeight: 200, fontSize: 18, color: "var(--text-body)", maxWidth: "52ch", margin: "0 0 40px" }}>
        Dreamers, makers, doctors, teachers and leaders — young women funded to finish what their talent started.
      </p>
      <div className="scholar-grid">
        {scholars.map((s) => (
          <ScholarCard key={s.name} name={s.name} country={s.country} field={s.field} photoSrc={s.photo} maskSrc={s.mask} tone={s.tone} width="100%" />
        ))}
      </div>
    </div>
  );
}
