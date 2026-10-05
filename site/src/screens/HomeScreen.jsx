import { Button, Eyebrow, ScholarCard, StatSilhouette, Tag } from "../ds.js";
import { profiles, textures } from "../assets.js";
import { countries, scholars, stats } from "../content.js";

const serifHeading = { fontFamily: "var(--font-serif)", fontWeight: 400, textTransform: "none", letterSpacing: 0 };
const sectionTitle = { fontSize: "clamp(28px,3.6vw,46px)", color: "var(--text-primary)", margin: 0 };
const sectionPad = { paddingTop: "clamp(56px,7vw,96px)", paddingBottom: "clamp(56px,7vw,96px)" };

export function HomeScreen({ onNav }) {
  return (
    <div>
      <section className="wrap hero">
        <div>
          <Eyebrow rule>Where talent meets opportunity</Eyebrow>
          <h1 style={{ ...serifHeading, fontSize: "clamp(40px,5.4vw,72px)", lineHeight: 1.02, color: "var(--text-primary)", margin: "20px 0 0" }}>
            Talent is universal,<br /><em>opportunity is not.</em>
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 200, fontSize: 18, lineHeight: 1.55, color: "var(--text-body)", maxWidth: "46ch", margin: "26px 0 0" }}>
            U-GO partners with ambitious donors at scale to fund thousands of higher-education scholarships for talented young women in low-income countries. Because when young women go, opportunities multiply.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
            <Button variant="primary" size="lg" onClick={() => onNav("donate")}>Donate</Button>
            <Button variant="secondary" size="lg" onClick={() => onNav("scholars")}>Meet the scholars</Button>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <img className="a" src={profiles.p02} alt="" />
          <img className="b" src={profiles.p01} alt="" />
          <img className="c" src={profiles.p04} alt="" />
        </div>
      </section>

      <section className="band-white">
        <div className="wrap" style={{ paddingTop: "clamp(48px,6vw,80px)", paddingBottom: "clamp(48px,6vw,80px)" }}>
          <div className="stats">
            {stats.map((s) => (
              <StatSilhouette key={s.value} value={s.value} caption={s.caption} profileSrc={s.profile} width={230} />
            ))}
          </div>
        </div>
      </section>

      <section className="wrap" style={sectionPad}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h2 style={sectionTitle}>Where we work</h2>
        </div>
        <div className="where">
          {/* The watercolour region map wasn't in the asset package; the texture stands in for it. */}
          <div className="where-map">
            <img src={textures.cornflower} alt="" />
          </div>
          <div className="where-list">
            {countries.map(([c, tone]) => <Tag key={c} tone={tone} dot>{c}</Tag>)}
          </div>
        </div>
      </section>

      <section className="band-white">
        <div className="wrap" style={sectionPad}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={sectionTitle}>Meet the scholars</h2>
          </div>
          <div className="scholar-row">
            {scholars.slice(0, 3).map((s) => (
              <ScholarCard key={s.name} name={s.name} country={s.country} field={s.field} photoSrc={s.photo} maskSrc={s.mask} tone={s.tone} width={240} />
            ))}
          </div>
        </div>
      </section>

      <section className="band-ink">
        <div className="wrap" style={{ paddingTop: "clamp(56px,7vw,90px)", paddingBottom: "clamp(56px,7vw,90px)", textAlign: "center" }}>
          <h2 style={{ ...serifHeading, fontSize: "clamp(28px,3.8vw,48px)", lineHeight: 1.08, color: "var(--ugo-beige)", margin: "0 auto", maxWidth: "18ch" }}>
            Make opportunity as universal as talent.
          </h2>
          <div style={{ marginTop: 32 }}>
            <Button variant="onColor" size="lg" onClick={() => onNav("donate")}>Fund a scholar</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
