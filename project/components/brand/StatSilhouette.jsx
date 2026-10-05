import React from "react";

/**
 * U-GO University — StatSilhouette
 * The brand's signature impact statistic: an oversized MD IO number set
 * inside a watercolour profile silhouette, with a caption beneath the number.
 *
 * Pass `profileSrc` = the path to one of the watercolour profile PNGs
 * (assets/profiles/p01–p05.png). The number colour defaults to the deep
 * ink; override with `numberColor` for a knockout on darker silhouettes.
 */
export function StatSilhouette({
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
  return (
    <figure
      style={{
        position: "relative",
        width: typeof width === "number" ? `${width}px` : width,
        margin: 0,
        ...style,
      }}
      {...rest}
    >
      <img
        src={profileSrc}
        alt=""
        style={{ width: "100%", height: "auto", display: "block" }}
      />
      <figcaption
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "12%",
          textAlign: "center",
          pointerEvents: "none",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            lineHeight: 0.9,
            letterSpacing: "0.005em",
            color: numberColor,
            fontSize: "clamp(40px, 7vw, 72px)",
            display: "inline-flex",
            alignItems: "flex-start",
          }}
        >
          {value}
          <span style={{ fontSize: "0.42em", marginTop: "0.25em" }}>{unit}</span>
        </span>
        {caption && (
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 400,
              fontSize: "13px",
              lineHeight: 1.3,
              color: captionColor || numberColor,
              maxWidth: "62%",
              marginTop: "8px",
            }}
          >
            {caption}
          </span>
        )}
      </figcaption>
    </figure>
  );
}
