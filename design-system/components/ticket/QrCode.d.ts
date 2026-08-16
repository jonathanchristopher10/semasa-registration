import * as React from "react";

export interface QrCodeProps {
  /** Payload the pattern is derived from — same string you would encode for real. */
  value?: string;
  /** Outer size in px, including the white quiet zone. */
  size?: number;
  /** Grid resolution. 21 matches a version-1 QR. */
  modules?: number;
  quietZone?: number;
}

export declare function QrCode(props: QrCodeProps): React.JSX.Element;
