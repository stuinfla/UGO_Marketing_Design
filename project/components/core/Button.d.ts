import * as React from "react";

/**
 * Primary call-to-action button. MD IO uppercase label, pill by default.
 * Use `onColor` when sitting on a Royal-Blue / dark section.
 *
 * @startingPoint section="Core" subtitle="Pill button in all variants" viewport="700x220"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default "primary" */
  variant?: "primary" | "secondary" | "subtle" | "onColor";
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  /** Rounded pill (true) or soft rect. @default true */
  pill?: boolean;
  /** Stretch to container width. @default false */
  full?: boolean;
  disabled?: boolean;
  /** Render as another element, e.g. "a". @default "button" */
  as?: "button" | "a";
  children?: React.ReactNode;
}

/** Primary call-to-action button. MD IO uppercase label, pill by default. */
export function Button(props: ButtonProps): JSX.Element;
