import React from "react";

/**
 * U-GO University — Field
 * A labelled text input (or textarea). David label, soft surface,
 * dark-teal focus ring. Used across donate / contact / apply forms.
 */
export function Field({
  label,
  hint,
  type = "text",
  textarea = false,
  id,
  required = false,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || `f-${Math.random().toString(36).slice(2, 8)}`;

  const control = {
    width: "100%",
    fontFamily: "var(--font-body)",
    fontWeight: 400,
    fontSize: "15px",
    color: "var(--text-primary)",
    background: "var(--surface-card)",
    border: `1.5px solid ${focus ? "var(--ugo-dark-teal)" : "var(--border-strong)"}`,
    borderRadius: "var(--radius-sm)",
    padding: "12px 14px",
    outline: "none",
    boxShadow: focus ? "var(--shadow-focus)" : "none",
    transition: "border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)",
    resize: textarea ? "vertical" : undefined,
    minHeight: textarea ? "108px" : undefined,
    fontFamily: "var(--font-body)",
  };

  return (
    <label htmlFor={fid} style={{ display: "block", ...style }}>
      {label && (
        <span
          style={{
            display: "block",
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            fontSize: "11px",
            color: "var(--text-primary)",
            marginBottom: "7px",
          }}
        >
          {label}
          {required && <span style={{ color: "var(--ugo-dark-teal)" }}> *</span>}
        </span>
      )}
      {textarea ? (
        <textarea id={fid} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} style={control} {...rest} />
      ) : (
        <input id={fid} type={type} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} style={control} {...rest} />
      )}
      {hint && (
        <span style={{ display: "block", fontFamily: "var(--font-body)", fontSize: "12px", color: "var(--text-muted)", marginTop: "6px" }}>
          {hint}
        </span>
      )}
    </label>
  );
}
