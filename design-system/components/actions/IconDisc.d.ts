import * as React from "react";

export interface IconDiscProps {
  /** Character glyph shown inside the disc. Defaults to a right arrow. */
  glyph?: string;
  /** Disc fill. Blue is the brand default (matches the hero CTA). */
  tone?: "blue" | "cream" | "coral" | "green";
  /** Diameter in px. 30 inside a large pill, 24 inside a small one. */
  size?: number;
  onClick?: () => void;
  /** Accessible name; also the tooltip. Required when onClick is set. */
  title?: string;
}

export declare function IconDisc(props: IconDiscProps): React.JSX.Element;
