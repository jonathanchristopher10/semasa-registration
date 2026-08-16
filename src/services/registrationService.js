// The single seam between the UI and "the backend". Today it issues a ticket
// locally so the app runs with no server. When a backend exists, set
// VITE_API_URL and this function POSTs to it — no screen code changes.
//
// @typedef {Object} Registration
// @property {string} visitorType  optional (hidden step by default)
// @property {string} fullName
// @property {string} email
// @property {string} phone
// @property {string} dateOfBirth  ISO yyyy-mm-dd
// @property {string} visitDate    ISO yyyy-mm-dd
// @property {string} visitTime    e.g. "10:00 – 13:00"
// @property {string} purpose      Food | Fashion | Creative | Media | Others
//
// @typedef {Object} TicketResult
// @property {string} ticketId     SP26-XXXXXX
// @property {string} issuedAt     ISO timestamp
// @property {Registration} registration

function makeTicketId() {
  return "SP26-" + Math.random().toString(36).slice(2, 8).toUpperCase();
}

/**
 * @param {Registration} data
 * @returns {Promise<TicketResult>}
 */
export async function submitRegistration(data) {
  const apiUrl = import.meta.env.VITE_API_URL;

  // Backend path — used automatically once VITE_API_URL is configured.
  if (apiUrl) {
    const res = await fetch(`${apiUrl.replace(/\/$/, "")}/registrations`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Registration failed. Please try again.");
    return res.json();
  }

  // MVP path — no backend. Generate the ticket in the browser.
  return {
    ticketId: makeTicketId(),
    issuedAt: new Date().toISOString(),
    registration: data,
  };
}
