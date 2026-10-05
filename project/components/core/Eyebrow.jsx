import React from "react";

/**
 * U-GO University — Eyebrow
 * The small spaced MD IO label that sits above headings and sections
 * ("WHERE WE WORK", "MEET THE SCHOLARS"). Optionally prefixed with a rule.
 */
export function Eyebrow({ children, rule = false, color, style = {}, ...rest }) {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.7em",
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    textTransform: "uppercase",
    letterSpacing: "0.14em",
    fontSize: "13px",
    lineHeight: 1,
    color: color || "var(--text-primary)",
    ...style,
  };
  return (
    <span style={base} {...rest}>
      {rule && (
        <span style={{ width: "28px", height: "2px", background: "currentColor", display: "inline-block" }} />
      )}
      {children}
    </span>
  );
}
