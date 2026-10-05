import React from "react";

/**
 * U-GO University — Button
 * MD IO uppercase label, pill shape. Primary is Royal-Blue ink on beige;
 * secondary is an outlined ghost; subtle is text-only.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  pill = true,
  full = false,
  disabled = false,
  as = "button",
  style = {},
  ...rest
}) {
  const Tag = as;

  const sizes = {
    sm: { fontSize: "12px", padding: "9px 18px", letterSpacing: "0.1em" },
    md: { fontSize: "14px", padding: "13px 26px", letterSpacing: "0.09em" },
    lg: { fontSize: "16px", padding: "17px 36px", letterSpacing: "0.08em" },
  };

  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5em",
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    textTransform: "uppercase",
    lineHeight: 1,
    border: "1.5px solid transparent",
    borderRadius: pill ? "var(--radius-pill)" : "var(--radius-sm)",
    cursor: disabled ? "not-allowed" : "pointer",
    textDecoration: "none",
    width: full ? "100%" : "auto",
    transition:
      "background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)",
    opacity: disabled ? 0.45 : 1,
    ...sizes[size],
  };

  const variants = {
    primary: {
      background: "var(--accent)",
      color: "var(--accent-contrast)",
      borderColor: "var(--accent)",
    },
    secondary: {
      background: "transparent",
      color: "var(--text-primary)",
      borderColor: "var(--text-primary)",
    },
    subtle: {
      background: "transparent",
      color: "var(--text-primary)",
      borderColor: "transparent",
      padding: sizes[size].padding.replace(/\d+px (\d+)px/, (m) => m), // keep
    },
    onColor: {
      background: "var(--ugo-beige)",
      color: "var(--ugo-royal-blue)",
      borderColor: "var(--ugo-beige)",
    },
  };

  const [hover, setHover] = React.useState(false);
  const hoverStyle =
    hover && !disabled
      ? {
          primary: { background: "var(--accent-hover)", borderColor: "var(--accent-hover)" },
          secondary: { background: "var(--text-primary)", color: "var(--ugo-beige)" },
          subtle: { textDecoration: "underline" },
          onColor: { transform: "translateY(-1px)" },
        }[variant]
      : null;

  return (
    <Tag
      disabled={as === "button" ? disabled : undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ ...base, ...variants[variant], ...hoverStyle, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
