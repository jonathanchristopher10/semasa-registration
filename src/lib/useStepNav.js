import { useLocation, useNavigate } from "react-router-dom";
import { FLOW, stepIndexOf, routeAt } from "../flow.js";

/* Step-aware navigation derived from the FLOW list, so it keeps working if the
   visitor-type step is toggled on/off. Back from the first step returns to the
   landing screen. */
export function useStepNav() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const current = stepIndexOf(pathname);

  return {
    current,
    goNext: () => navigate(routeAt(current + 1)),
    goBack: () =>
      current <= 0 ? navigate("/") : navigate(routeAt(current - 1)),
    goTo: (route) => navigate(route),
  };
}
