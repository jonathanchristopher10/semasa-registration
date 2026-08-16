import * as React from "react";

export interface TagProps {
  children?: React.ReactNode;
  tone?: "pink" | "peach" | "green" | "blue" | "purple" | "lemon" | "coral";
  /** md = 13px (default), sm = 11px for dense rows. */
  size?: "sm" | "md";
  outlined?: boolean;
}

export declare function Tag(props: TagProps): React.JSX.Element;
