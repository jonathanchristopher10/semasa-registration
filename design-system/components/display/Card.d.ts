import * as React from "react";

export interface CardProps {
  children?: React.ReactNode;
  /** Fill. White for content, cream to sit invisibly on the page, pastels for accent blocks. */
  tone?: "white" | "cream" | "lemon" | "peach" | "blue" | "purple" | "green";
  /** Inner padding in px. 20 is the screen default, 16 for dense rows. */
  padding?: number | string;
  /** Corner radius. Defaults to --radius-card (24px); use --radius-card-lg for hero blocks. */
  radius?: string | number;
  /** 2.5px ink outline. On by default — the brand's defining edge. */
  outlined?: boolean;
  /** Adds --shadow-soft. Only for panels that float above other content. */
  softShadow?: boolean;
  style?: React.CSSProperties;
}

export declare function Card(props: CardProps): React.JSX.Element;
