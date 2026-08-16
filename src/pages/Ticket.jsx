import React from "react";
import { Navigate } from "react-router-dom";
import { ScreenHeader } from "../../design-system/components/navigation/ScreenHeader.jsx";
import { Sticker } from "../../design-system/components/brand/Sticker.jsx";
import { Tag } from "../../design-system/components/display/Tag.jsx";
import { Button } from "../../design-system/components/actions/Button.jsx";
import { QrTicket } from "../components/QrTicket.jsx";
import { useRegistration } from "../context/RegistrationContext.jsx";
import { asset, ASSET_BASE } from "../lib/asset.js";

function spDate(iso) {
  if (!iso) return "";
  return new Date(iso + "T00:00:00").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default function Ticket() {
  const { data, ticket, reset } = useRegistration();

  // The ticket is only reachable after a confirmed registration.
  if (!ticket) return <Navigate to="/" replace />;

  // What the QR encodes — compact and ready for a real check-in backend later.
  const payload = JSON.stringify({
    t: ticket.ticketId,
    n: data.fullName,
    d: data.visitDate,
    s: data.visitTime,
    p: data.purpose,
  });

  return (
    <React.Fragment>
      <Sticker name="starYellow" size={26} top={58} left={20} rotate={-12} basePath={ASSET_BASE} />
      <Sticker name="starPurple" size={18} top={96} right={26} rotate={16} basePath={ASSET_BASE} />

      <ScreenHeader title="You're all set!" subtitle="Show this QR code at the entrance." align="center" />

      <div className="sp-pop" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
        <QrTicket
          ticketId={ticket.ticketId}
          value={payload}
          name={data.fullName}
          purpose={data.purpose}
          visitDate={spDate(data.visitDate)}
        />
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
          {data.visitorType ? <Tag tone="lemon" size="sm">{data.visitorType}</Tag> : null}
          <Tag tone="blue" size="sm">{data.visitTime || "Any time"}</Tag>
        </div>
      </div>

      <a
        href="https://www.google.com/maps?q=Lapangan+Banteng+Jakarta+Pusat"
        target="_blank" rel="noreferrer"
        style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "center", textDecoration: "none" }}
      >
        <img src={asset("assets/icons/pin.png")} alt="" width={22} height={22} />
        <span style={{ fontSize: 14, fontWeight: 700, color: "var(--text-body)" }}>Lapangan Banteng, Jakarta Pusat</span>
        <span style={{ fontSize: 12, fontWeight: 700, color: "var(--text-link)", textDecoration: "underline" }}>Open in Maps</span>
      </a>

      <div style={{ display: "flex", justifyContent: "center", marginTop: -4 }}>
        <img src={asset("assets/illustrations/mascot-peek.png")} alt="" style={{ width: 150 }} />
      </div>

      <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 10 }}>
        <Button variant="ghost" size="sm" fullWidth onClick={reset}>Register someone else</Button>
      </div>
    </React.Fragment>
  );
}
