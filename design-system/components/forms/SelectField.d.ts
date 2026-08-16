import * as React from "react";

export interface SelectFieldProps {
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  /** Option labels. Purpose of Visit uses exactly: Food, Fashion, Creative, Media, Others. */
  options?: string[];
  /** Empty-state option text. Defaults to "Please select". */
  placeholder?: string;
  required?: boolean;
  error?: string;
  name?: string;
  id?: string;
}

export declare function SelectField(props: SelectFieldProps): React.JSX.Element;
