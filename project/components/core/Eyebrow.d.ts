import * as React from "react";

export interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Show a short rule before the label. @default false */
  rule?: boolean;
  /** Override color (e.g. a campaign hue on a dark section). */
  color?: string;
  children?: React.ReactNode;
}

/** Small spaced MD IO label that sits above section headings. */
export function Eyebrow(props: EyebrowProps): JSX.Element;
