import React from "react";

/**
 * U-GO University — Tag
 * A small pill used for countries, fields of study, categories.
 * `tone` maps to a campaign hue; `dot` shows the legend dot used on
 * the "Where we work" map.
 */
const TONES = {
  pink: "var(--ugo-pink)",
  lightTeal: "var(--ugo-light-teal)",
  darkTeal: "var(--ugo-dark-teal)",
  lime: "var(--ugo-lime)",
  orange: "var(--ugo-orange)",
  cornflower: "var(--ugo-cornflower)",
  darkGreen: "var(--ugo-dark-green)",
  royalBlue: "var(--ugo-royal-blue)",
};

export function Tag({ children, tone = "darkTeal", dot = false, solid = false, style = {}, ...rest }) {
  const hue = TONES[tone] || tone;

  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5em",
    fontFamily: "var(--font-body)",
    fontWeight: 400,
    fontSize: "13px",
    lineHeight: 1,
    padding: dot ? "0" : "6px 13px",
    borderRadius: "var(--radius-pill)",
    background: dot ? "transparent" : solid ? hue : "transparent",
    color: dot ? "var(--text-body)" : solid ? "var(--ugo-royal-blue)" : "var(--text-primary)",
    border: dot || solid ? "none" : `1.5px solid ${hue}`,
    whiteSpace: "nowrap",
    ...style,
  };

  return (
    <span style={base} {...rest}>
      {dot && (
        <span
          style={{
            width: "11px",
            height: "11px",
            borderRadius: "50%",
            background: hue,
            flex: "0 0 auto",
          }}
        />
      )}
      {children}
    </span>
  );
}
