import React from "react";
import { QrCode } from "./QrCode.jsx";
import { Tag } from "../display/Tag.jsx";

/* The e-ticket: outlined card, notched stub, QR, ticket id. */
export function QrTicket({ ticketId = "SP26-000000", name, purpose, visitDate, venue = "Lapangan Banteng", qrSize = 190, width = "100%" }) {
  const notch = { position: "absolute", width: 22, height: 22, borderRadius: "var(--radius-pill)", background: "var(--surface-page)", border: "var(--stroke-bold) solid var(--border-ink)", top: "50%", marginTop: -11 };
  return (
    <div style={{
      position: "relative", width, background: "var(--surface-card)",
      border: "var(--stroke-heavy) solid var(--border-ink)", borderRadius: "var(--radius-card-lg)",
      overflow: "hidden"
    }}>
      <div style={{ padding: "22px 20px 18px", display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
        <Tag tone="lemon" size="sm">e-ticket</Tag>
        <QrCode value={ticketId} size={qrSize} />
        <span style={{ fontFamily: "var(--font-body)", fontWeight: "var(--weight-black)", letterSpacing: "var(--tracking-caps)", fontSize: 15 }}>{ticketId}</span>
      </div>
      <div style={{ position: "relative", height: 0, borderTop: "var(--stroke) dashed rgba(34,34,34,.35)" }}>
        <span style={{ ...notch, left: -13 }} />
        <span style={{ ...notch, right: -13 }} />
      </div>
      <div style={{ padding: "16px 20px 20px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 14px", background: "var(--surface-card-cream)" }}>
        {[["Visitor", name], ["Purpose", purpose], ["Date", visitDate], ["Venue", venue]].filter(r => r[1]).map(([k, v]) => (
          <span key={k} style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "var(--text-caption)", color: "var(--text-muted)", fontWeight: "var(--weight-bold)" }}>{k}</span>
            <span style={{ fontSize: "var(--text-body-md)", fontWeight: "var(--weight-bold)" }}>{v}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
