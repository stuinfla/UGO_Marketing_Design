import * as React from "react";

export type ToneName =
  | "pink" | "lightTeal" | "darkTeal" | "lime"
  | "orange" | "cornflower" | "darkGreen" | "royalBlue";

/**
 * Small pill for countries, fields of study, and map legends.
 *
 * @startingPoint section="Core" subtitle="Outline, solid & dot tags" viewport="700x180"
 */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Campaign hue. @default "darkTeal" */
  tone?: ToneName | string;
  /** Render as a legend dot + label (no border/fill). @default false */
  dot?: boolean;
  /** Solid filled pill instead of outline. @default false */
  solid?: boolean;
  children?: React.ReactNode;
}

/** Small pill for countries, fields of study, and map legends. */
export function Tag(props: TagProps): JSX.Element;
