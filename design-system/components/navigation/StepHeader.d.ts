import * as React from "react";

/**
 * Numbered pastel step pills across the top of a multi-step flow.
 */
export interface StepHeaderProps {
  /** Step labels in order, e.g. ["Visitor Type","Personal Data","Visit Details","Confirmation","E-Ticket"]. */
  steps?: string[];
  /** Zero-based index of the current step. */
  current?: number;
  /** Called with the step index. Only completed and current steps are clickable. */
  onStepClick?: (index: number) => void;
}

export declare function StepHeader(props: StepHeaderProps): React.JSX.Element;
