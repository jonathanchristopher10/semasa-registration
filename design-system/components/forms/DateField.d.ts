import * as React from "react";

export interface DateFieldProps {
  label?: string;
  /** ISO yyyy-mm-dd. */
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** ISO bounds — visiting date is constrained to 2026-06-26 … 2026-06-28. */
  min?: string;
  max?: string;
  required?: boolean;
  error?: string;
  hint?: string;
  name?: string;
  id?: string;
  /** Path to the brand calendar PNG, relative to the consuming page. */
  iconSrc?: string;
}

export declare function DateField(props: DateFieldProps): React.JSX.Element;
