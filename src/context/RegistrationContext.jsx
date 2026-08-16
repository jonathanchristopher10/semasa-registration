import React from "react";

/* Shared registration state across the multi-step flow, mirrored to
   sessionStorage so a refresh mid-flow doesn't lose what was typed. */

const STORAGE_KEY = "semasa.registration.v1";

export const EMPTY_REGISTRATION = {
  visitorType: "",
  fullName: "",
  email: "",
  phone: "",
  dateOfBirth: "",
  visitDate: "",
  visitTime: "",
  purpose: "",
};

const RegistrationContext = React.createContext(null);

function loadInitial() {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (raw) return { ...EMPTY_REGISTRATION, ...JSON.parse(raw) };
  } catch (_) {
    /* ignore malformed / unavailable storage */
  }
  return EMPTY_REGISTRATION;
}

export function RegistrationProvider({ children }) {
  const [data, setData] = React.useState(loadInitial);
  const [ticket, setTicket] = React.useState(null);

  React.useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (_) {
      /* storage may be unavailable (private mode) — non-fatal */
    }
  }, [data]);

  const patch = React.useCallback((p) => setData((d) => ({ ...d, ...p })), []);

  const reset = React.useCallback(() => {
    setData(EMPTY_REGISTRATION);
    setTicket(null);
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch (_) {
      /* ignore */
    }
  }, []);

  const value = React.useMemo(
    () => ({ data, patch, reset, ticket, setTicket }),
    [data, patch, reset, ticket]
  );

  return (
    <RegistrationContext.Provider value={value}>
      {children}
    </RegistrationContext.Provider>
  );
}

export function useRegistration() {
  const ctx = React.useContext(RegistrationContext);
  if (!ctx) {
    throw new Error("useRegistration must be used within a RegistrationProvider");
  }
  return ctx;
}
