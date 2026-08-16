import * as React from "react";

/**
 * The QR e-ticket card handed to a visitor at the end of registration.
 */
export interface QrTicketProps {
  /** Format SP26-XXXXXX. */
  ticketId?: string;
  name?: string;
  /** Food | Fashion | Creative | Media | Others. */
  purpose?: string;
  /** Human-readable date, e.g. "26 June 2026". */
  visitDate?: string;
  venue?: string;
  qrSize?: number;
  width?: number | string;
}

export declare function QrTicket(props: QrTicketProps): React.JSX.Element;
