import * as React from "react";

export interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Uppercase MD IO label above the control. */
  label?: string;
  /** Helper text below the control. */
  hint?: string;
  /** Input type (ignored when textarea). @default "text" */
  type?: string;
  /** Render a multiline textarea. @default false */
  textarea?: boolean;
  required?: boolean;
}

/** Labelled text input / textarea with dark-teal focus ring. */
export function Field(props: FieldProps): JSX.Element;
