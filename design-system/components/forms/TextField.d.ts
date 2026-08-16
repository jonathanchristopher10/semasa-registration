import * as React from "react";

export interface TextFieldProps {
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: "text" | "email" | "tel" | "date" | "number";
  /** Leading character glyph, e.g. an emoji-free unicode mark. Optional. */
  glyph?: string;
  /** Error message; also switches the field outline to coral. */
  error?: string;
  /** Quiet helper text below the field. Ignored when error is set. */
  hint?: string;
  required?: boolean;
  name?: string;
  id?: string;
}

export declare function TextField(props: TextFieldProps): React.JSX.Element;
