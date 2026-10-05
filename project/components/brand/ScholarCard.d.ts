import * as React from "react";

/**
 * A scholar's portrait cropped into the profile silhouette, with name / country / field.
 *
 * @startingPoint section="Brand" subtitle="Scholar portrait in silhouette crop" viewport="700x460"
 */
export interface ScholarCardProps extends React.HTMLAttributes<HTMLElement> {
  /** Scholar's name — set in Simula. */
  name: string;
  /** Country — Simula italic. */
  country?: string;
  /** Field of study — David. */
  field?: string;
  /** Portrait image URL. */
  photoSrc: string;
  /** Profile PNG whose alpha crops the photo (assets/profiles/p01–p05.png). */
  maskSrc: string;
  /** Halo hue behind the cut-out. @default "lightTeal" */
  tone?: "pink" | "lightTeal" | "lime" | "cornflower" | "orange" | "darkTeal" | string;
  /** Card width in px (or any CSS width). @default 260 */
  width?: number | string;
}

/** A scholar's portrait cropped into the profile silhouette, with name / country / field. */
export function ScholarCard(props: ScholarCardProps): JSX.Element;
