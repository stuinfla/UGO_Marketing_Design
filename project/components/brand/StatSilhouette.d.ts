import * as React from "react";

/**
 * Signature impact statistic — a big MD IO number set inside a watercolour profile.
 *
 * @startingPoint section="Brand" subtitle="Stat inside a watercolour silhouette" viewport="700x420"
 */
export interface StatSilhouetteProps extends React.HTMLAttributes<HTMLElement> {
  /** The headline figure, e.g. "98" or "90". */
  value: React.ReactNode;
  /** Unit shown small & raised. @default "%" */
  unit?: string;
  /** Supporting line beneath the number. */
  caption?: string;
  /** Path to a watercolour profile PNG (assets/profiles/p01–p05.png). */
  profileSrc: string;
  /** Number colour. @default Royal Blue */
  numberColor?: string;
  /** Caption colour (defaults to numberColor). */
  captionColor?: string;
  /** Figure width in px (or any CSS width). @default 300 */
  width?: number | string;
}

/** Signature impact statistic — a big MD IO number set inside a watercolour profile. */
export function StatSilhouette(props: StatSilhouetteProps): JSX.Element;
