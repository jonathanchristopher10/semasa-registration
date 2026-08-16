import * as React from "react";

/**
 * Pastel pill row for picking one of a short list — visitor type, market interest.
 */
export interface OptionCardProps {
  label: string;
  /** Optional second line, 12px, 65% ink. */
  description?: string;
  /** Pastel fill. Cycle tones down a list rather than repeating one.
   *  Use "plain" (white) when the choices carry no category meaning. */
  tone?: "coral" | "peach" | "green" | "blue" | "purple" | "lemon" | "plain";
  selected?: boolean;
  onClick?: () => void;
  /** Optional illustrated PNG glyph, 26px. */
  glyphSrc?: string;
}

export declare function OptionCard(props: OptionCardProps): React.JSX.Element;
