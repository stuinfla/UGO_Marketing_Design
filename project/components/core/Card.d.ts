import * as React from "react";

/**
 * Soft white surface with quiet elevation — the everyday container.
 *
 * @startingPoint section="Core" subtitle="White, tinted & ink cards" viewport="700x260"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Tint the whole card with a campaign hue, or "ink" for a dark callout. */
  tone?: "beige" | "lightTeal" | "lime" | "orange" | "cornflower" | "pink" | "ink" | string;
  /** Remove shadow, use a hairline border instead. @default false */
  flat?: boolean;
  /** Inner padding. @default "lg" */
  pad?: "none" | "sm" | "md" | "lg" | string;
  children?: React.ReactNode;
}

/** Soft white surface with quiet elevation — the everyday container. */
export function Card(props: CardProps): JSX.Element;
