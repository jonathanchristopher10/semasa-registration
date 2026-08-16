import * as React from "react";

export interface ScreenProps {
  children?: React.ReactNode;
  /** 20px side gutters + bottom breathing room. Off for full-bleed art. */
  padded?: boolean;
  /** Vertical rhythm between blocks. Defaults to --gap-section (24px). */
  gap?: string | number;
  align?: "stretch" | "center";
  style?: React.CSSProperties;
}

export declare function Screen(props: ScreenProps): React.JSX.Element;
