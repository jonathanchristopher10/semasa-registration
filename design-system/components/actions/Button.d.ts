import * as React from "react";

/**
 * Primary pill CTA for SEMASA PIKNIK — coral fill, ink outline, ink label.
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** primary = coral CTA, secondary = white outlined, ghost = quiet text action. */
  variant?: "primary" | "secondary" | "ghost";
  /** lg is the screen-level CTA; md sits inside cards; sm for inline actions. */
  size?: "lg" | "md" | "sm";
  /** Appends the blue arrow disc, as on "Let's Get Started!". */
  withArrow?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export declare function Button(props: ButtonProps): React.JSX.Element;
