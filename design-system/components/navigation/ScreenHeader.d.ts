import * as React from "react";

export interface ScreenHeaderProps {
  title: React.ReactNode;
  /** One friendly sentence. Sentence case, no exclamation stacking. */
  subtitle?: React.ReactNode;
  /** Shows the cream back disc above the title. */
  onBack?: () => void;
  align?: "left" | "center";
}

export declare function ScreenHeader(props: ScreenHeaderProps): React.JSX.Element;
