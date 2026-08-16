import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Screen } from "../../design-system/components/layout/Screen.jsx";
import { StepHeader } from "../../design-system/components/navigation/StepHeader.jsx";
import { STEP_LABELS, stepIndexOf, routeAt } from "../flow.js";

/* Wraps every step screen in the padded Screen column with the numbered
   StepHeader on top. Tapping a completed step pill jumps back to it. */
export function StepLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const current = Math.max(0, stepIndexOf(location.pathname));

  return (
    <Screen>
      <StepHeader
        steps={STEP_LABELS}
        current={current}
        onStepClick={(i) => {
          if (i < current) navigate(routeAt(i));
        }}
      />
      <Outlet />
    </Screen>
  );
}
