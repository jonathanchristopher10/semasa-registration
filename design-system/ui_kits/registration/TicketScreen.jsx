const { Button, QrTicket, ScreenHeader, Sticker, Tag } = window.SEMASAPIKNIK2026DesignSystem_c74c54;

function spTicketDate(iso) {
  if (!iso) return "";
  return new Date(iso + "T00:00:00").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

function TicketScreen({ data, ticket, onRestart }) {
  return (
    <React.Fragment>
      <Sticker name="starYellow" size={26} top={58} left={20} rotate={-12} basePath="../../" />
      <Sticker name="starPurple" size={18} top={96} right={26} rotate={16} basePath="../../" />
      <ScreenHeader title="You're all set!" subtitle="Show this QR code at the entrance." align="center" />
      <div className="sp-pop" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
        <QrTicket
          ticketId={ticket ? ticket.id : "SP26-000000"}
          name={data.fullName}
          purpose={data.purpose}
          visitDate={spTicketDate(data.visitDate)}
        />
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
          {data.visitorType ? <Tag tone="lemon" size="sm">{data.visitorType}</Tag> : null}
          <Tag tone="blue" size="sm">{data.visitTime || "Any time"}</Tag>
        </div>
      </div>
      <a href="https://www.google.com/maps?q=Lapangan+Banteng+Jakarta+Pusat" target="_blank" rel="noreferrer"
        style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "center", textDecoration: "none" }}>
        <img src="../../assets/icons/pin.png" alt="" width={22} height={22} />
        <span style={{ fontSize: 14, fontWeight: 700, color: "var(--text-body)" }}>Lapangan Banteng, Jakarta Pusat</span>
        <span style={{ fontSize: 12, fontWeight: 700, color: "var(--text-link)", textDecoration: "underline" }}>Open in Maps</span>
      </a>
      <div style={{ display: "flex", justifyContent: "center", marginTop: -4 }}>
        <img src="../../assets/illustrations/mascot-peek.png" alt="" style={{ width: 150 }} />
      </div>
      <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 10 }}>
        <Button variant="ghost" size="sm" fullWidth onClick={onRestart}>Register someone else</Button>
      </div>
    </React.Fragment>
  );
}

Object.assign(window, { TicketScreen });
