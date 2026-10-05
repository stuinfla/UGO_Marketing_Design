import React from "react";

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
  darkTeal: "var(--ugo-dark-teal)",
};

export function ScholarCard({
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
    maskPosition: "center",
  };

  return (
    <article
      style={{ width: typeof width === "number" ? `${width}px` : width, ...style }}
      {...rest}
    >
      <div style={{ position: "relative", width: "100%", aspectRatio: "1 / 1.12" }}>
        {/* soft halo */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: HALO[tone] || tone,
            opacity: 0.35,
            ...mask,
          }}
        />
        {/* masked photo */}
        <img
          src={photoSrc}
          alt={name}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            ...mask,
          }}
        />
      </div>
      <h3
        style={{
          fontFamily: "var(--font-serif)",
          fontWeight: 400,
          textTransform: "none",
          letterSpacing: 0,
          fontSize: "22px",
          lineHeight: 1.05,
          color: "var(--text-primary)",
          margin: "14px 0 4px",
        }}
      >
        {name}
      </h3>
      {country && (
        <div
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: "16px",
            color: "var(--text-primary)",
            marginBottom: "6px",
          }}
        >
          {country}
        </div>
      )}
      {field && (
        <div
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 400,
            fontSize: "14px",
            color: "var(--text-body)",
          }}
        >
          {field}
        </div>
      )}
    </article>
  );
}
