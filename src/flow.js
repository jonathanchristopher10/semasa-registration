// The registration flow, in order. Flip SHOW_VISITOR_TYPE to true to bring the
// moodboard's "Choose Your Type" step back — step labels, numbering and the
// Confirmation edit links all follow from this one list.
export const SHOW_VISITOR_TYPE = false;

export const FLOW = [
  { route: "/type", label: "Visitor Type", enabled: SHOW_VISITOR_TYPE },
  { route: "/register", label: "Personal Data", enabled: true },
  { route: "/visit", label: "Visit Details", enabled: true },
  { route: "/confirm", label: "Confirmation", enabled: true },
  { route: "/ticket", label: "E-Ticket", enabled: true },
].filter((s) => s.enabled);

export const STEP_LABELS = FLOW.map((s) => s.label);

export const stepIndexOf = (pathname) =>
  FLOW.findIndex((s) => s.route === pathname);

export const routeAt = (i) =>
  FLOW[Math.max(0, Math.min(FLOW.length - 1, i))].route;
