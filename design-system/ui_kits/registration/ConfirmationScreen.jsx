const { Button, Card, ScreenHeader, Sticker, SummaryRow, Tag } = window.SEMASAPIKNIK2026DesignSystem_c74c54;

function spDate(iso) {
  if (!iso) return "—";
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

function ConfirmationScreen({ data, onEdit, onConfirm, onBack }) {
  return (
    <React.Fragment>
      <Sticker name="starPurple" size={20} top={64} right={30} rotate={10} basePath="../../" />
      <ScreenHeader title="Confirmation" subtitle="Please check your details — the QR is made from this." onBack={onBack} />
      <Card tone="white" padding={18}>
        {data.visitorType ? (
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
            <Tag tone="lemon" size="sm">{data.visitorType}</Tag>
          </div>
        ) : null}
        <SummaryRow label="Full Name" value={data.fullName || "—"} onEdit={() => onEdit("personal")} />
        <SummaryRow label="Email" value={data.email || "—"} onEdit={() => onEdit("personal")} />
        <SummaryRow label="Phone" value={data.phone || "—"} onEdit={() => onEdit("personal")} />
        <SummaryRow label="Date of Birth" value={spDate(data.dateOfBirth)} onEdit={() => onEdit("personal")} />
        <SummaryRow label="Visiting Date" value={spDate(data.visitDate)} onEdit={() => onEdit("visit")} />
        <SummaryRow label="Visit Time" value={data.visitTime || "—"} onEdit={() => onEdit("visit")} />
        <SummaryRow label="Purpose" value={data.purpose || "—"} onEdit={() => onEdit("visit")} divider={false} />
      </Card>
      <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 10 }}>
        <Button variant="primary" size="lg" fullWidth withArrow onClick={onConfirm}>Confirm</Button>
        <Button variant="ghost" size="sm" fullWidth onClick={onBack}>Go back and change something</Button>
      </div>
    </React.Fragment>
  );
}

Object.assign(window, { ConfirmationScreen });
