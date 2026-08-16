import React from "react";
import { QRCodeSVG } from "qrcode.react";
import { Tag } from "../../design-system/components/display/Tag.jsx";

/* The e-ticket card: matches the design system's QrTicket shape (outlined card,
   dashed perforation with two punched notches, cream detail grid) but renders a
   real, scannable QR with qrcode.react instead of the stand-in pattern. */
export function QrTicket({ ticketId = "SP26-000000", value, name, purpose, visitDate, venue = "Lapangan Banteng", qrSize = 190, width = "100%" }) {
  const notch = {
    position: "absolute", width: 22, height: 22, borderRadius: "var(--radius-pill)",
    background: "var(--surface-page)", border: "var(--stroke-bold) solid var(--border-ink)",
    top: "50%", marginTop: -11,
  };
  const rows = [["Visitor", name], ["Purpose", purpose], ["Date", visitDate], ["Venue", venue]].filter((r) => r[1]);

  return (
    <div style={{
      position: "relative", width, background: "var(--surface-card)",
      border: "var(--stroke-heavy) solid var(--border-ink)", borderRadius: "var(--radius-card-lg)", overflow: "hidden",
    }}>
      <div style={{ padding: "22px 20px 18px", display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
        <Tag tone="lemon" size="sm">e-ticket</Tag>
        <div style={{ background: "var(--white)", padding: 10, borderRadius: 8 }}>
          <QRCodeSVG value={value || ticketId} size={qrSize} level="M" marginSize={0} fgColor="#222222" bgColor="#FFFFFF" />
        </div>
        <span style={{ fontFamily: "var(--font-body)", fontWeight: "var(--weight-black)", letterSpacing: "var(--tracking-caps)", fontSize: 15 }}>{ticketId}</span>
      </div>

      <div style={{ position: "relative", height: 0, borderTop: "var(--stroke) dashed rgba(34,34,34,.35)" }}>
        <span style={{ ...notch, left: -13 }} />
        <span style={{ ...notch, right: -13 }} />
      </div>

      <div style={{ padding: "16px 20px 20px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 14px", background: "var(--surface-card-cream)" }}>
        {rows.map(([k, v]) => (
          <span key={k} style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "var(--text-caption)", color: "var(--text-muted)", fontWeight: "var(--weight-bold)" }}>{k}</span>
            <span style={{ fontSize: "var(--text-body-md)", fontWeight: "var(--weight-bold)" }}>{v}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
