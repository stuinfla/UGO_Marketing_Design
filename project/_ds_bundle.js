/* @ds-bundle: {"format":4,"namespace":"UGOUniversityDesignSystem_5d28d6","components":[{"name":"ScholarCard","sourcePath":"components/brand/ScholarCard.jsx"},{"name":"StatSilhouette","sourcePath":"components/brand/StatSilhouette.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Field","sourcePath":"components/core/Field.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/brand/ScholarCard.jsx":"0c8c76f21054","components/brand/StatSilhouette.jsx":"8b2085f8dd1d","components/core/Button.jsx":"fe605fb7d2f4","components/core/Card.jsx":"322d8ac7243d","components/core/Eyebrow.jsx":"4017d73cb9a2","components/core/Field.jsx":"7699bb896fec","components/core/Tag.jsx":"ea2f7eb3bf9d","ui_kits/website/DonateScreen.jsx":"a4bedeb60535","ui_kits/website/Footer.jsx":"b3ac7a21cfcb","ui_kits/website/Header.jsx":"e4dd0c85c0e8","ui_kits/website/HomeScreen.jsx":"bd8e04881b2e","ui_kits/website/ScholarsScreen.jsx":"f0e8e47cf0bf","ui_kits/website/dist/DonateScreen.sa.jsx":"7d1f0c5bfe4d","ui_kits/website/dist/Footer.sa.jsx":"d53155f10028","ui_kits/website/dist/Header.sa.jsx":"d4844e2b54ed","ui_kits/website/dist/HomeScreen.sa.jsx":"3e62c6c8e928","ui_kits/website/dist/ScholarsScreen.sa.jsx":"6dc968934c5e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.UGOUniversityDesignSystem_5d28d6 = window.UGOUniversityDesignSystem_5d28d6 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/ScholarCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * U-GO University — ScholarCard
 * A scholar's photo cropped into the profile silhouette, with their name
 * (Simula), country and field beneath — exactly as on "Meet the Scholars".
 *
 * `photoSrc` is the portrait; `maskSrc` is a profile PNG whose alpha defines
 * the silhouette crop (assets/profiles/p01–p05.png). `tone` tints the soft
 * watercolour halo behind the cut-out.
 */
const HALO = {
  pink: "var(--ugo-pink)",
  lightTeal: "var(--ugo-light-teal)",
  lime: "var(--ugo-lime)",
  cornflower: "var(--ugo-cornflower)",
  orange: "var(--ugo-orange)",
  darkTeal: "var(--ugo-dark-teal)"
};
function ScholarCard({
  name,
  country,
  field,
  photoSrc,
  maskSrc,
  tone = "lightTeal",
  width = 260,
  style = {},
  ...rest
}) {
  const mask = {
    WebkitMaskImage: `url(${maskSrc})`,
    maskImage: `url(${maskSrc})`,
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskSize: "contain",
    maskSize: "contain",
    WebkitMaskPosition: "center",
    maskPosition: "center"
  };
  return /*#__PURE__*/React.createElement("article", _extends({
    style: {
      width: typeof width === "number" ? `${width}px` : width,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      aspectRatio: "1 / 1.12"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: HALO[tone] || tone,
      opacity: 0.35,
      ...mask
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: photoSrc,
    alt: name,
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      ...mask
    }
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 400,
      textTransform: "none",
      letterSpacing: 0,
      fontSize: "22px",
      lineHeight: 1.05,
      color: "var(--text-primary)",
      margin: "14px 0 4px"
    }
  }, name), country && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-serif)",
      fontStyle: "italic",
      fontSize: "16px",
      color: "var(--text-primary)",
      marginBottom: "6px"
    }
  }, country), field && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 400,
      fontSize: "14px",
      color: "var(--text-body)"
    }
  }, field));
}
Object.assign(__ds_scope, { ScholarCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ScholarCard.jsx", error: String((e && e.message) || e) }); }

// components/brand/StatSilhouette.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * U-GO University — StatSilhouette
 * The brand's signature impact statistic: an oversized MD IO number set
 * inside a watercolour profile silhouette, with a caption beneath the number.
 *
 * Pass `profileSrc` = the path to one of the watercolour profile PNGs
 * (assets/profiles/p01–p05.png). The number colour defaults to the deep
 * ink; override with `numberColor` for a knockout on darker silhouettes.
 */
function StatSilhouette({
  value,
  unit = "%",
  caption,
  profileSrc,
  numberColor = "var(--ugo-royal-blue)",
  captionColor,
  width = 300,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      position: "relative",
      width: typeof width === "number" ? `${width}px` : width,
      margin: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: profileSrc,
    alt: "",
    style: {
      width: "100%",
      height: "auto",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: "12%",
      textAlign: "center",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      lineHeight: 0.9,
      letterSpacing: "0.005em",
      color: numberColor,
      fontSize: "clamp(40px, 7vw, 72px)",
      display: "inline-flex",
      alignItems: "flex-start"
    }
  }, value, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.42em",
      marginTop: "0.25em"
    }
  }, unit)), caption && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 400,
      fontSize: "13px",
      lineHeight: 1.3,
      color: captionColor || numberColor,
      maxWidth: "62%",
      marginTop: "8px"
    }
  }, caption)));
}
Object.assign(__ds_scope, { StatSilhouette });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/StatSilhouette.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * U-GO University — Button
 * MD IO uppercase label, pill shape. Primary is Royal-Blue ink on beige;
 * secondary is an outlined ghost; subtle is text-only.
 */
function Button({
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
    sm: {
      fontSize: "12px",
      padding: "9px 18px",
      letterSpacing: "0.1em"
    },
    md: {
      fontSize: "14px",
      padding: "13px 26px",
      letterSpacing: "0.09em"
    },
    lg: {
      fontSize: "16px",
      padding: "17px 36px",
      letterSpacing: "0.08em"
    }
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
    transition: "background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)",
    opacity: disabled ? 0.45 : 1,
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: "var(--accent)",
      color: "var(--accent-contrast)",
      borderColor: "var(--accent)"
    },
    secondary: {
      background: "transparent",
      color: "var(--text-primary)",
      borderColor: "var(--text-primary)"
    },
    subtle: {
      background: "transparent",
      color: "var(--text-primary)",
      borderColor: "transparent",
      padding: sizes[size].padding.replace(/\d+px (\d+)px/, m => m) // keep
    },
    onColor: {
      background: "var(--ugo-beige)",
      color: "var(--ugo-royal-blue)",
      borderColor: "var(--ugo-beige)"
    }
  };
  const [hover, setHover] = React.useState(false);
  const hoverStyle = hover && !disabled ? {
    primary: {
      background: "var(--accent-hover)",
      borderColor: "var(--accent-hover)"
    },
    secondary: {
      background: "var(--text-primary)",
      color: "var(--ugo-beige)"
    },
    subtle: {
      textDecoration: "underline"
    },
    onColor: {
      transform: "translateY(-1px)"
    }
  }[variant] : null;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    disabled: as === "button" ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...variants[variant],
      ...hoverStyle,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  ink: "var(--ugo-royal-blue)"
};
function Card({
  children,
  tone,
  flat = false,
  pad = "lg",
  style = {},
  ...rest
}) {
  const pads = {
    none: "0",
    sm: "16px",
    md: "22px",
    lg: "30px"
  };
  const onInk = tone === "ink";
  const base = {
    background: tone ? TONE_BG[tone] || tone : "var(--surface-card)",
    color: onInk ? "var(--ugo-beige)" : "var(--text-body)",
    borderRadius: "var(--radius-lg)",
    padding: pads[pad] ?? pad,
    boxShadow: flat ? "none" : "var(--shadow-md)",
    border: flat && !tone ? "1px solid var(--border-hairline)" : "none",
    ...style
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: base
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * U-GO University — Eyebrow
 * The small spaced MD IO label that sits above headings and sections
 * ("WHERE WE WORK", "MEET THE SCHOLARS"). Optionally prefixed with a rule.
 */
function Eyebrow({
  children,
  rule = false,
  color,
  style = {},
  ...rest
}) {
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
    ...style
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: base
  }, rest), rule && /*#__PURE__*/React.createElement("span", {
    style: {
      width: "28px",
      height: "2px",
      background: "currentColor",
      display: "inline-block"
    }
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * U-GO University — Field
 * A labelled text input (or textarea). David label, soft surface,
 * dark-teal focus ring. Used across donate / contact / apply forms.
 */
function Field({
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
    fontFamily: "var(--font-body)"
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      display: "block",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      fontSize: "11px",
      color: "var(--text-primary)",
      marginBottom: "7px"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ugo-dark-teal)"
    }
  }, " *")), textarea ? /*#__PURE__*/React.createElement("textarea", _extends({
    id: fid,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: control
  }, rest)) : /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    type: type,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: control
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-body)",
      fontSize: "12px",
      color: "var(--text-muted)",
      marginTop: "6px"
    }
  }, hint));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Field.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  royalBlue: "var(--ugo-royal-blue)"
};
function Tag({
  children,
  tone = "darkTeal",
  dot = false,
  solid = false,
  style = {},
  ...rest
}) {
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
    ...style
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: base
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: "11px",
      height: "11px",
      borderRadius: "50%",
      background: hue,
      flex: "0 0 auto"
    }
  }), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/DonateScreen.jsx
try { (() => {
// U-GO University — Donate screen. Assigns to window; not a DS component.
function DonateScreen({
  onNav
}) {
  const {
    Button,
    Eyebrow,
    Field,
    Card
  } = window.UGOUniversityDesignSystem_5d28d6;
  const [amount, setAmount] = React.useState(75);
  const [freq, setFreq] = React.useState("monthly");
  const wrap = {
    maxWidth: 1080,
    margin: "0 auto",
    padding: "clamp(48px,6vw,88px) clamp(20px,5vw,56px)"
  };
  const presets = [25, 50, 75, 150];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 56,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true
  }, "Fund a scholar"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 400,
      textTransform: "none",
      letterSpacing: 0,
      fontSize: "clamp(34px,4.6vw,56px)",
      lineHeight: 1.03,
      color: "var(--text-primary)",
      margin: "18px 0 0"
    }
  }, "When a girl can't afford a SIM card to study, talent goes to waste."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 200,
      fontSize: 18,
      lineHeight: 1.55,
      color: "var(--text-body)",
      maxWidth: "44ch",
      marginTop: 24
    }
  }, "Your gift funds tuition, devices and data for a young woman in a low-income country \u2014 and every grade she advances, the return multiplies for her family and community."), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/profiles/p03.png",
    alt: "",
    style: {
      height: 240,
      marginTop: 24
    }
  })), /*#__PURE__*/React.createElement(Card, {
    pad: "lg",
    style: {
      position: "sticky",
      top: 90
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 22,
      color: "var(--text-primary)",
      margin: "0 0 18px"
    }
  }, "Your gift"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 18
    }
  }, ["once", "monthly"].map(f => /*#__PURE__*/React.createElement("button", {
    key: f,
    onClick: () => setFreq(f),
    style: {
      flex: 1,
      cursor: "pointer",
      padding: "11px 0",
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      textTransform: "uppercase",
      fontSize: 12,
      letterSpacing: "0.08em",
      borderRadius: "var(--radius-pill)",
      border: "1.5px solid " + (freq === f ? "var(--ugo-royal-blue)" : "var(--border-strong)"),
      background: freq === f ? "var(--ugo-royal-blue)" : "transparent",
      color: freq === f ? "var(--ugo-beige)" : "var(--text-primary)"
    }
  }, f === "once" ? "One time" : "Monthly"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 8,
      marginBottom: 14
    }
  }, presets.map(p => /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => setAmount(p),
    style: {
      cursor: "pointer",
      padding: "14px 0",
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 16,
      borderRadius: "var(--radius-sm)",
      border: "1.5px solid " + (amount === p ? "var(--ugo-dark-teal)" : "var(--border-strong)"),
      background: amount === p ? "var(--ugo-light-teal)" : "transparent",
      color: "var(--text-primary)"
    }
  }, "$", p))), /*#__PURE__*/React.createElement(Field, {
    label: "Other amount",
    type: "number",
    value: amount,
    onChange: e => setAmount(e.target.value)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 14
    }
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Email for receipt",
    type: "email",
    placeholder: "you@example.org"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 22
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    full: true
  }, "Give $", amount, freq === "monthly" ? " / month" : ""), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      color: "var(--text-muted)",
      textAlign: "center",
      marginTop: 14,
      marginBottom: 0
    }
  }, "U-GO is a registered charity. 100% of your gift funds scholarships.")));
}
window.DonateScreen = DonateScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/DonateScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
// U-GO University — site footer. Assigns to window; not a DS component.
function Footer({
  onNav
}) {
  const cols = ["The team", "About us", "Meet the scholars", "News", "Contact", "Donate"];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--surface-page)",
      borderTop: "1px solid var(--border-hairline)",
      padding: "56px clamp(20px,5vw,56px) 36px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "wrap",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      fontSize: 14,
      color: "var(--text-primary)"
    }
  }, "Get in touch:"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:contact@ugouniversity.org",
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      textTransform: "uppercase",
      letterSpacing: "0.04em",
      fontSize: 22,
      color: "var(--text-primary)",
      textDecoration: "none",
      display: "block",
      marginTop: 6
    }
  }, "contact@ugouniversity.org"), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 3,
      marginTop: 28
    }
  }, cols.map(c => /*#__PURE__*/React.createElement("a", {
    key: c,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav && onNav("home");
    },
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 400,
      fontSize: 15,
      color: "var(--text-body)",
      textDecoration: "none"
    }
  }, c)))), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/UGO_Logo_horizontal.png",
    alt: "U-GO University",
    style: {
      height: 44,
      width: "auto"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      fontFamily: "var(--font-body)",
      fontWeight: 400,
      fontSize: 12,
      color: "var(--text-muted)",
      display: "flex",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2024 U-GO"), /*#__PURE__*/React.createElement("span", null, "Privacy & Terms")));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
// U-GO University — site header (nav + donate). Assigns to window; not a DS component.
function Header({
  route,
  onNav
}) {
  const {
    Button
  } = window.UGOUniversityDesignSystem_5d28d6;
  const links = [["home", "The Team"], ["about", "About Us"], ["scholars", "Meet the Scholars"], ["news", "News"], ["contact", "Contact"]];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 20,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px clamp(20px, 5vw, 56px)",
      background: "rgba(241,241,236,0.86)",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#home",
    onClick: e => {
      e.preventDefault();
      onNav("home");
    },
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/UGO_Logo_horizontal.png",
    alt: "U-GO University",
    style: {
      height: 34,
      width: "auto"
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "clamp(14px,2.4vw,34px)"
    }
  }, links.map(([key, label]) => /*#__PURE__*/React.createElement("a", {
    key: key,
    href: "#" + key,
    onClick: e => {
      e.preventDefault();
      onNav(key === "about" || key === "news" || key === "contact" ? "home" : key);
    },
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      textTransform: "uppercase",
      fontSize: 13,
      letterSpacing: "0.04em",
      color: route === key ? "var(--ugo-dark-teal)" : "var(--text-primary)",
      textDecoration: "none",
      whiteSpace: "nowrap"
    }
  }, label)), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: () => onNav("donate")
  }, "Donate")));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
// U-GO University — Home screen. Assigns to window; not a DS component.
function HomeScreen({
  onNav
}) {
  const DS = window.UGOUniversityDesignSystem_5d28d6;
  const {
    Button,
    Eyebrow,
    StatSilhouette,
    ScholarCard,
    Tag
  } = DS;
  const wrap = {
    maxWidth: 1180,
    margin: "0 auto",
    padding: "0 clamp(20px,5vw,56px)"
  };
  const countries = [["Pakistan", "pink"], ["India", "lightTeal"], ["Bangladesh", "darkTeal"], ["Cambodia", "lime"], ["Vietnam", "pink"], ["Philippines", "orange"], ["Indonesia", "cornflower"], ["Nepal", "darkGreen"], ["Tanzania", "cornflower"]];
  const scholars = [["Evania Larasati", "Indonesia", "Agrotechnology", "../../assets/photos/ph_teal.png", "../../assets/profiles/p01.png", "lightTeal"], ["Shimpi Yadav", "India", "Pharmacy", "../../assets/photos/ph_orange.png", "../../assets/profiles/p03.png", "orange"], ["Jahnavi A", "India", "Aeronautical Engineering", "../../assets/photos/ph_blue.png", "../../assets/profiles/p05.png", "cornflower"]];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      paddingTop: "clamp(48px,7vw,96px)",
      paddingBottom: "clamp(40px,6vw,80px)",
      display: "grid",
      gridTemplateColumns: "minmax(0,1.05fr) minmax(0,0.95fr)",
      gap: 48,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true
  }, "Where talent meets opportunity"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 400,
      textTransform: "none",
      letterSpacing: 0,
      fontSize: "clamp(40px,5.4vw,72px)",
      lineHeight: 1.02,
      color: "var(--text-primary)",
      margin: "20px 0 0"
    }
  }, "Talent is universal,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "opportunity is not.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 200,
      fontSize: 18,
      lineHeight: 1.55,
      color: "var(--text-body)",
      maxWidth: "46ch",
      margin: "26px 0 0"
    }
  }, "U-GO partners with ambitious donors at scale to fund thousands of higher-education scholarships for talented young women in low-income countries. Because when young women go, opportunities multiply."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 32,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNav("donate")
  }, "Donate"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNav("scholars")
  }, "Meet the scholars"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-end",
      minHeight: 320
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/profiles/p02.png",
    alt: "",
    style: {
      height: 300,
      marginRight: -56,
      position: "relative",
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/profiles/p01.png",
    alt: "",
    style: {
      height: 360,
      position: "relative",
      zIndex: 2
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/profiles/p04.png",
    alt: "",
    style: {
      height: 280,
      marginLeft: -48,
      position: "relative",
      zIndex: 1
    }
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--ugo-white)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: "clamp(48px,6vw,80px) clamp(20px,5vw,56px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 24,
      justifyContent: "space-around",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(StatSilhouette, {
    value: "98",
    caption: "of U-GO scholars advance to the next grade",
    profileSrc: "../../assets/profiles/p05.png",
    width: 230
  }), /*#__PURE__*/React.createElement(StatSilhouette, {
    value: "90",
    caption: "of a woman's income is invested back into her family",
    profileSrc: "../../assets/profiles/p04.png",
    width: 230
  }), /*#__PURE__*/React.createElement(StatSilhouette, {
    value: "96",
    caption: "of women in Cambodia do not attend university",
    profileSrc: "../../assets/profiles/p01.png",
    width: 230
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: "clamp(56px,7vw,96px) clamp(20px,5vw,56px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "clamp(28px,3.6vw,46px)",
      color: "var(--text-primary)",
      margin: 0
    }
  }, "Where we work")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.2fr 1fr",
      gap: 40,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: "var(--radius-xl)",
      overflow: "hidden",
      background: "var(--ugo-white)",
      aspectRatio: "16/10",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/textures/wc_cornflower_s.png",
    alt: "",
    style: {
      width: "120%",
      height: "120%",
      objectFit: "cover",
      opacity: 0.5
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, "[ Watercolour region map ]")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "14px 18px"
    }
  }, countries.map(([c, tone]) => /*#__PURE__*/React.createElement(Tag, {
    key: c,
    tone: tone,
    dot: true
  }, c))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--ugo-white)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: "clamp(56px,7vw,96px) clamp(20px,5vw,56px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "clamp(28px,3.6vw,46px)",
      color: "var(--text-primary)",
      margin: 0
    }
  }, "Meet the scholars")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 40,
      justifyContent: "center",
      flexWrap: "wrap"
    }
  }, scholars.map(([n, c, f, ph, m, t]) => /*#__PURE__*/React.createElement(ScholarCard, {
    key: n,
    name: n,
    country: c,
    field: f,
    photoSrc: ph,
    maskSrc: m,
    tone: t,
    width: 240
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--ugo-royal-blue)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: "clamp(56px,7vw,90px) clamp(20px,5vw,56px)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 400,
      textTransform: "none",
      letterSpacing: 0,
      fontSize: "clamp(28px,3.8vw,48px)",
      lineHeight: 1.08,
      color: "var(--ugo-beige)",
      margin: "0 auto",
      maxWidth: "18ch"
    }
  }, "Make opportunity as universal as talent."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "onColor",
    size: "lg",
    onClick: () => onNav("donate")
  }, "Fund a scholar")))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ScholarsScreen.jsx
try { (() => {
// U-GO University — Meet the Scholars grid. Assigns to window; not a DS component.
function ScholarsScreen({
  onNav
}) {
  const {
    Eyebrow,
    ScholarCard,
    Tag
  } = window.UGOUniversityDesignSystem_5d28d6;
  const wrap = {
    maxWidth: 1180,
    margin: "0 auto",
    padding: "0 clamp(20px,5vw,56px)"
  };
  const photos = ["../../assets/photos/ph_teal.png", "../../assets/photos/ph_orange.png", "../../assets/photos/ph_blue.png"];
  const masks = ["../../assets/profiles/p01.png", "../../assets/profiles/p03.png", "../../assets/profiles/p05.png", "../../assets/profiles/p04.png", "../../assets/profiles/p02.png"];
  const tones = ["lightTeal", "orange", "cornflower", "lime", "pink"];
  const scholars = [["Evania Larasati", "Indonesia", "Agrotechnology"], ["Shimpi Yadav", "India", "Pharmacy"], ["Jahnavi A", "India", "Aeronautical Engineering"], ["Sokha Chan", "Cambodia", "Computer Science"], ["Aisha Rahman", "Bangladesh", "Public Health"], ["Nilima Gurung", "Nepal", "Civil Engineering"], ["Linh Tran", "Vietnam", "Environmental Science"], ["Maria Santos", "Philippines", "Nursing"]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: "clamp(48px,6vw,88px) clamp(20px,5vw,56px) clamp(40px,5vw,72px)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true
  }, "Our scholars"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "clamp(34px,5vw,64px)",
      color: "var(--text-primary)",
      margin: "16px 0 8px"
    }
  }, "Meet the scholars"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 200,
      fontSize: 18,
      color: "var(--text-body)",
      maxWidth: "52ch",
      margin: "0 0 40px"
    }
  }, "Dreamers, makers, doctors, teachers and leaders \u2014 young women funded to finish what their talent started."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))",
      gap: "clamp(28px,3vw,48px)"
    }
  }, scholars.map((s, i) => /*#__PURE__*/React.createElement(ScholarCard, {
    key: s[0],
    name: s[0],
    country: s[1],
    field: s[2],
    photoSrc: photos[i % photos.length],
    maskSrc: masks[i % masks.length],
    tone: tones[i % tones.length],
    width: "100%"
  }))));
}
window.ScholarsScreen = ScholarsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ScholarsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/dist/DonateScreen.sa.jsx
try { (() => {
// U-GO University — Donate screen. Assigns to window; not a DS component.
function DonateScreen({
  onNav
}) {
  const {
    Button,
    Eyebrow,
    Field,
    Card
  } = window.UGOUniversityDesignSystem_5d28d6;
  const [amount, setAmount] = React.useState(75);
  const [freq, setFreq] = React.useState("monthly");
  const wrap = {
    maxWidth: 1080,
    margin: "0 auto",
    padding: "clamp(48px,6vw,88px) clamp(20px,5vw,56px)"
  };
  const presets = [25, 50, 75, 150];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 56,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true
  }, "Fund a scholar"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 400,
      textTransform: "none",
      letterSpacing: 0,
      fontSize: "clamp(34px,4.6vw,56px)",
      lineHeight: 1.03,
      color: "var(--text-primary)",
      margin: "18px 0 0"
    }
  }, "When a girl can't afford a SIM card to study, talent goes to waste."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 200,
      fontSize: 18,
      lineHeight: 1.55,
      color: "var(--text-body)",
      maxWidth: "44ch",
      marginTop: 24
    }
  }, "Your gift funds tuition, devices and data for a young woman in a low-income country \u2014 and every grade she advances, the return multiplies for her family and community."), /*#__PURE__*/React.createElement("img", {
    src: window.__resources.p03,
    alt: "",
    style: {
      height: 240,
      marginTop: 24
    }
  })), /*#__PURE__*/React.createElement(Card, {
    pad: "lg",
    style: {
      position: "sticky",
      top: 90
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 22,
      color: "var(--text-primary)",
      margin: "0 0 18px"
    }
  }, "Your gift"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 18
    }
  }, ["once", "monthly"].map(f => /*#__PURE__*/React.createElement("button", {
    key: f,
    onClick: () => setFreq(f),
    style: {
      flex: 1,
      cursor: "pointer",
      padding: "11px 0",
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      textTransform: "uppercase",
      fontSize: 12,
      letterSpacing: "0.08em",
      borderRadius: "var(--radius-pill)",
      border: "1.5px solid " + (freq === f ? "var(--ugo-royal-blue)" : "var(--border-strong)"),
      background: freq === f ? "var(--ugo-royal-blue)" : "transparent",
      color: freq === f ? "var(--ugo-beige)" : "var(--text-primary)"
    }
  }, f === "once" ? "One time" : "Monthly"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 8,
      marginBottom: 14
    }
  }, presets.map(p => /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => setAmount(p),
    style: {
      cursor: "pointer",
      padding: "14px 0",
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 16,
      borderRadius: "var(--radius-sm)",
      border: "1.5px solid " + (amount === p ? "var(--ugo-dark-teal)" : "var(--border-strong)"),
      background: amount === p ? "var(--ugo-light-teal)" : "transparent",
      color: "var(--text-primary)"
    }
  }, "$", p))), /*#__PURE__*/React.createElement(Field, {
    label: "Other amount",
    type: "number",
    value: amount,
    onChange: e => setAmount(e.target.value)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 14
    }
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Email for receipt",
    type: "email",
    placeholder: "you@example.org"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 22
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    full: true
  }, "Give $", amount, freq === "monthly" ? " / month" : ""), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      color: "var(--text-muted)",
      textAlign: "center",
      marginTop: 14,
      marginBottom: 0
    }
  }, "U-GO is a registered charity. 100% of your gift funds scholarships.")));
}
window.DonateScreen = DonateScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/dist/DonateScreen.sa.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/dist/Footer.sa.jsx
try { (() => {
// U-GO University — site footer. Assigns to window; not a DS component.
function Footer({
  onNav
}) {
  const cols = ["The team", "About us", "Meet the scholars", "News", "Contact", "Donate"];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--surface-page)",
      borderTop: "1px solid var(--border-hairline)",
      padding: "56px clamp(20px,5vw,56px) 36px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "wrap",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      fontSize: 14,
      color: "var(--text-primary)"
    }
  }, "Get in touch:"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:contact@ugouniversity.org",
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      textTransform: "uppercase",
      letterSpacing: "0.04em",
      fontSize: 22,
      color: "var(--text-primary)",
      textDecoration: "none",
      display: "block",
      marginTop: 6
    }
  }, "contact@ugouniversity.org"), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 3,
      marginTop: 28
    }
  }, cols.map(c => /*#__PURE__*/React.createElement("a", {
    key: c,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav && onNav("home");
    },
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 400,
      fontSize: 15,
      color: "var(--text-body)",
      textDecoration: "none"
    }
  }, c)))), /*#__PURE__*/React.createElement("img", {
    src: window.__resources.logo,
    alt: "U-GO University",
    style: {
      height: 44,
      width: "auto"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      fontFamily: "var(--font-body)",
      fontWeight: 400,
      fontSize: 12,
      color: "var(--text-muted)",
      display: "flex",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2024 U-GO"), /*#__PURE__*/React.createElement("span", null, "Privacy & Terms")));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/dist/Footer.sa.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/dist/Header.sa.jsx
try { (() => {
// U-GO University — site header (nav + donate). Assigns to window; not a DS component.
function Header({
  route,
  onNav
}) {
  const {
    Button
  } = window.UGOUniversityDesignSystem_5d28d6;
  const links = [["home", "The Team"], ["about", "About Us"], ["scholars", "Meet the Scholars"], ["news", "News"], ["contact", "Contact"]];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 20,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px clamp(20px, 5vw, 56px)",
      background: "rgba(241,241,236,0.86)",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#home",
    onClick: e => {
      e.preventDefault();
      onNav("home");
    },
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources.logo,
    alt: "U-GO University",
    style: {
      height: 34,
      width: "auto"
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "clamp(14px,2.4vw,34px)"
    }
  }, links.map(([key, label]) => /*#__PURE__*/React.createElement("a", {
    key: key,
    href: "#" + key,
    onClick: e => {
      e.preventDefault();
      onNav(key === "about" || key === "news" || key === "contact" ? "home" : key);
    },
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      textTransform: "uppercase",
      fontSize: 13,
      letterSpacing: "0.04em",
      color: route === key ? "var(--ugo-dark-teal)" : "var(--text-primary)",
      textDecoration: "none",
      whiteSpace: "nowrap"
    }
  }, label)), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: () => onNav("donate")
  }, "Donate")));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/dist/Header.sa.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/dist/HomeScreen.sa.jsx
try { (() => {
// U-GO University — Home screen. Assigns to window; not a DS component.
function HomeScreen({
  onNav
}) {
  const DS = window.UGOUniversityDesignSystem_5d28d6;
  const {
    Button,
    Eyebrow,
    StatSilhouette,
    ScholarCard,
    Tag
  } = DS;
  const wrap = {
    maxWidth: 1180,
    margin: "0 auto",
    padding: "0 clamp(20px,5vw,56px)"
  };
  const countries = [["Pakistan", "pink"], ["India", "lightTeal"], ["Bangladesh", "darkTeal"], ["Cambodia", "lime"], ["Vietnam", "pink"], ["Philippines", "orange"], ["Indonesia", "cornflower"], ["Nepal", "darkGreen"], ["Tanzania", "cornflower"]];
  const scholars = [["Evania Larasati", "Indonesia", "Agrotechnology", window.__resources.ph_teal, window.__resources.p01, "lightTeal"], ["Shimpi Yadav", "India", "Pharmacy", window.__resources.ph_orange, window.__resources.p03, "orange"], ["Jahnavi A", "India", "Aeronautical Engineering", window.__resources.ph_blue, window.__resources.p05, "cornflower"]];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      paddingTop: "clamp(48px,7vw,96px)",
      paddingBottom: "clamp(40px,6vw,80px)",
      display: "grid",
      gridTemplateColumns: "minmax(0,1.05fr) minmax(0,0.95fr)",
      gap: 48,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true
  }, "Where talent meets opportunity"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 400,
      textTransform: "none",
      letterSpacing: 0,
      fontSize: "clamp(40px,5.4vw,72px)",
      lineHeight: 1.02,
      color: "var(--text-primary)",
      margin: "20px 0 0"
    }
  }, "Talent is universal,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "opportunity is not.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 200,
      fontSize: 18,
      lineHeight: 1.55,
      color: "var(--text-body)",
      maxWidth: "46ch",
      margin: "26px 0 0"
    }
  }, "U-GO partners with ambitious donors at scale to fund thousands of higher-education scholarships for talented young women in low-income countries. Because when young women go, opportunities multiply."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 32,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNav("donate")
  }, "Donate"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNav("scholars")
  }, "Meet the scholars"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-end",
      minHeight: 320
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources.p02,
    alt: "",
    style: {
      height: 300,
      marginRight: -56,
      position: "relative",
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: window.__resources.p01,
    alt: "",
    style: {
      height: 360,
      position: "relative",
      zIndex: 2
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: window.__resources.p04,
    alt: "",
    style: {
      height: 280,
      marginLeft: -48,
      position: "relative",
      zIndex: 1
    }
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--ugo-white)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: "clamp(48px,6vw,80px) clamp(20px,5vw,56px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 24,
      justifyContent: "space-around",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(StatSilhouette, {
    value: "98",
    caption: "of U-GO scholars advance to the next grade",
    profileSrc: window.__resources.p05,
    width: 230
  }), /*#__PURE__*/React.createElement(StatSilhouette, {
    value: "90",
    caption: "of a woman's income is invested back into her family",
    profileSrc: window.__resources.p04,
    width: 230
  }), /*#__PURE__*/React.createElement(StatSilhouette, {
    value: "96",
    caption: "of women in Cambodia do not attend university",
    profileSrc: window.__resources.p01,
    width: 230
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: "clamp(56px,7vw,96px) clamp(20px,5vw,56px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "clamp(28px,3.6vw,46px)",
      color: "var(--text-primary)",
      margin: 0
    }
  }, "Where we work")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.2fr 1fr",
      gap: 40,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: "var(--radius-xl)",
      overflow: "hidden",
      background: "var(--ugo-white)",
      aspectRatio: "16/10",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources.wc,
    alt: "",
    style: {
      width: "120%",
      height: "120%",
      objectFit: "cover",
      opacity: 0.5
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, "[ Watercolour region map ]")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "14px 18px"
    }
  }, countries.map(([c, tone]) => /*#__PURE__*/React.createElement(Tag, {
    key: c,
    tone: tone,
    dot: true
  }, c))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--ugo-white)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: "clamp(56px,7vw,96px) clamp(20px,5vw,56px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "clamp(28px,3.6vw,46px)",
      color: "var(--text-primary)",
      margin: 0
    }
  }, "Meet the scholars")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 40,
      justifyContent: "center",
      flexWrap: "wrap"
    }
  }, scholars.map(([n, c, f, ph, m, t]) => /*#__PURE__*/React.createElement(ScholarCard, {
    key: n,
    name: n,
    country: c,
    field: f,
    photoSrc: ph,
    maskSrc: m,
    tone: t,
    width: 240
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--ugo-royal-blue)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: "clamp(56px,7vw,90px) clamp(20px,5vw,56px)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 400,
      textTransform: "none",
      letterSpacing: 0,
      fontSize: "clamp(28px,3.8vw,48px)",
      lineHeight: 1.08,
      color: "var(--ugo-beige)",
      margin: "0 auto",
      maxWidth: "18ch"
    }
  }, "Make opportunity as universal as talent."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "onColor",
    size: "lg",
    onClick: () => onNav("donate")
  }, "Fund a scholar")))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/dist/HomeScreen.sa.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/dist/ScholarsScreen.sa.jsx
try { (() => {
// U-GO University — Meet the Scholars grid. Assigns to window; not a DS component.
function ScholarsScreen({
  onNav
}) {
  const {
    Eyebrow,
    ScholarCard,
    Tag
  } = window.UGOUniversityDesignSystem_5d28d6;
  const wrap = {
    maxWidth: 1180,
    margin: "0 auto",
    padding: "0 clamp(20px,5vw,56px)"
  };
  const photos = [window.__resources.ph_teal, window.__resources.ph_orange, window.__resources.ph_blue];
  const masks = [window.__resources.p01, window.__resources.p03, window.__resources.p05, window.__resources.p04, window.__resources.p02];
  const tones = ["lightTeal", "orange", "cornflower", "lime", "pink"];
  const scholars = [["Evania Larasati", "Indonesia", "Agrotechnology"], ["Shimpi Yadav", "India", "Pharmacy"], ["Jahnavi A", "India", "Aeronautical Engineering"], ["Sokha Chan", "Cambodia", "Computer Science"], ["Aisha Rahman", "Bangladesh", "Public Health"], ["Nilima Gurung", "Nepal", "Civil Engineering"], ["Linh Tran", "Vietnam", "Environmental Science"], ["Maria Santos", "Philippines", "Nursing"]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: "clamp(48px,6vw,88px) clamp(20px,5vw,56px) clamp(40px,5vw,72px)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true
  }, "Our scholars"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "clamp(34px,5vw,64px)",
      color: "var(--text-primary)",
      margin: "16px 0 8px"
    }
  }, "Meet the scholars"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 200,
      fontSize: 18,
      color: "var(--text-body)",
      maxWidth: "52ch",
      margin: "0 0 40px"
    }
  }, "Dreamers, makers, doctors, teachers and leaders \u2014 young women funded to finish what their talent started."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))",
      gap: "clamp(28px,3vw,48px)"
    }
  }, scholars.map((s, i) => /*#__PURE__*/React.createElement(ScholarCard, {
    key: s[0],
    name: s[0],
    country: s[1],
    field: s[2],
    photoSrc: photos[i % photos.length],
    maskSrc: masks[i % masks.length],
    tone: tones[i % tones.length],
    width: "100%"
  }))));
}
window.ScholarsScreen = ScholarsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/dist/ScholarsScreen.sa.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ScholarCard = __ds_scope.ScholarCard;

__ds_ns.StatSilhouette = __ds_scope.StatSilhouette;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Tag = __ds_scope.Tag;

})();
