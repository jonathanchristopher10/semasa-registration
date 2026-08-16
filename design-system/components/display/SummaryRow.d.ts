import * as React from "react";

export interface SummaryRowProps {
  label: string;
  value?: React.ReactNode;
  /** Shows the inline Edit link that routes back to the owning step. */
  onEdit?: () => void;
  editLabel?: string;
  /** Hairline under the row. Turn off on the last row. */
  divider?: boolean;
}

export declare function SummaryRow(props: SummaryRowProps): React.JSX.Element;
