import * as React from "react";

/**
 * Phone-shaped shell that centres the mobile app on desktop.
 */
export interface PhoneFrameProps {
  children?: React.ReactNode;
  /** Design width. 430px is the app's canonical width. */
  width?: number;
  height?: number;
  /** Faux status bar row. */
  statusBar?: boolean;
  time?: string;
  scrollable?: boolean;
}

export declare function PhoneFrame(props: PhoneFrameProps): React.JSX.Element;
