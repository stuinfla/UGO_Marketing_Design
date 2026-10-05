import React from "react";

/**
 * U-GO University — Card
 * A soft white surface with quiet elevation. The everyday container.
 * `tone` optionally tints the whole card with a campaign hue (e.g.
 * a colored callout). `flat` removes the shadow for grouped lists.
 */
const TONE_BG = {
  beige: "var(--ugo-beige)",
  lightTeal: "var(--ugo-light-teal)",
  lime: "var(--ugo-lime)",
  orange: "var(--ugo-orange)",
  cornflower: "var(--ugo-cornflower)",
  pink: "var(--ugo-pink)",
  ink: "var(--ugo-royal-blue)",
};

export function Card({ children, tone, flat = false, pad = "lg", style = {}, ...rest }) {
  const pads = { none: "0", sm: "16px", md: "22px", lg: "30px" };
  const onInk = tone === "ink";

  const base = {
    background: tone ? TONE_BG[tone] || tone : "var(--surface-card)",
    color: onInk ? "var(--ugo-beige)" : "var(--text-body)",
    borderRadius: "var(--radius-lg)",
    padding: pads[pad] ?? pad,
    boxShadow: flat ? "none" : "var(--shadow-md)",
    border: flat && !tone ? "1px solid var(--border-hairline)" : "none",
    ...style,
  };

  return (
    <div style={base} {...rest}>
      {children}
    </div>
  );
}
