import React from "react";
import { Button, Card, Eyebrow, Field } from "../ds.js";
import { profiles } from "../assets.js";

const PRESETS = [25, 50, 75, 150];
const FREQUENCIES = [["once", "One time"], ["monthly", "Monthly"]];

export function DonateScreen() {
  const [amount, setAmount] = React.useState(75);
  const [freq, setFreq] = React.useState("monthly");

  // No payment provider is connected yet; wire this to the charity's donation platform.
  const onSubmit = (e) => e.preventDefault();

  return (
    <div className="wrap donate" style={{ maxWidth: 1080, paddingTop: "clamp(48px,6vw,88px)", paddingBottom: "clamp(48px,6vw,88px)" }}>
      <div>
        <Eyebrow rule>Fund a scholar</Eyebrow>
        <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 400, textTransform: "none", letterSpacing: 0, fontSize: "clamp(34px,4.6vw,56px)", lineHeight: 1.03, color: "var(--text-primary)", margin: "18px 0 0" }}>
          When a girl can't afford a SIM card to study, talent goes to waste.
        </h1>
        <p style={{ fontFamily: "var(--font-body)", fontWeight: 200, fontSize: 18, lineHeight: 1.55, color: "var(--text-body)", maxWidth: "44ch", marginTop: 24 }}>
          Your gift funds tuition, devices and data for a young woman in a low-income country — and every grade she advances, the return multiplies for her family and community.
        </p>
        <img src={profiles.p03} alt="" style={{ height: 240, width: "auto", marginTop: 24 }} />
      </div>

      <Card pad="lg" className="donate-card">
        <form onSubmit={onSubmit}>
          <h2 style={{ fontSize: 22, color: "var(--text-primary)", margin: "0 0 18px" }}>Your gift</h2>
          <div className="toggle-row" role="group" aria-label="Frequency">
            {FREQUENCIES.map(([key, text]) => (
              <button key={key} type="button" className="choice choice-freq" aria-pressed={freq === key} onClick={() => setFreq(key)}>
                {text}
              </button>
            ))}
          </div>
          <div className="preset-row" role="group" aria-label="Amount">
            {PRESETS.map((p) => (
              <button key={p} type="button" className="choice choice-amount" aria-pressed={Number(amount) === p} onClick={() => setAmount(p)}>
                ${p}
              </button>
            ))}
          </div>
          <Field label="Other amount" type="number" min="1" value={amount} onChange={(e) => setAmount(e.target.value)} />
          <div style={{ height: 14 }} />
          <Field label="Email for receipt" type="email" placeholder="you@example.org" />
          <div style={{ height: 22 }} />
          <Button type="submit" variant="primary" size="lg" full>
            Give ${amount}{freq === "monthly" ? " / month" : ""}
          </Button>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--text-muted)", textAlign: "center", marginTop: 14, marginBottom: 0 }}>
            U-GO is a registered charity. 100% of your gift funds scholarships.
          </p>
        </form>
      </Card>
    </div>
  );
}
