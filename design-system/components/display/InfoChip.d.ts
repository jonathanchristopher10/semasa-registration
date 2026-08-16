import * as React from "react";

export interface InfoChipProps {
  /** Path to one of the illustrated PNG icons in assets/icons/. */
  iconSrc?: string;
  label: string;
  /** Second line — the hero stacks "Food" / "Market" rather than wrapping. */
  sublabel?: string;
  /** Icon size in px. 34 in the hero strip, 24 inline. */
  size?: number;
}

export declare function InfoChip(props: InfoChipProps): React.JSX.Element;
