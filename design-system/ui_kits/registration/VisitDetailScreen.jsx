const { Button, Card, DateField, OptionCard, ScreenHeader, SelectField, Sticker, Tag } = window.SEMASAPIKNIK2026DesignSystem_c74c54;

const SP_PURPOSES = ["Food", "Fashion", "Creative", "Media", "Others"];
const SP_SLOTS = ["10:00 – 13:00", "13:00 – 16:00", "16:00 – 19:00", "19:00 – 22:00"];
const SP_DAYS = [
  { iso: "2026-06-26", day: "Fri", date: "26 June" },
  { iso: "2026-06-27", day: "Sat", date: "27 June" },
  { iso: "2026-06-28", day: "Sun", date: "28 June" }
];

function VisitDetailScreen({ data, patch, onNext, onBack }) {
  const valid = data.visitDate && data.visitTime && data.purpose;
  return (
    <React.Fragment>
      <Sticker name="starYellow" size={24} top={58} right={26} rotate={-14} basePath="../../" />
      <ScreenHeader title="Visit Details" subtitle="Pick your day and the slot you'll walk in." onBack={onBack} />
      <Card tone="white" padding={18}>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--gap-field)" }}>
          <div>
            <span style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 700, fontSize: "var(--text-label)", marginBottom: 8 }}>
              <img src="../../assets/icons/calendar.png" alt="" width={20} height={20} style={{ objectFit: "contain" }} />
              Visiting Date <span style={{ color: "var(--coral-500)" }}>*</span>
            </span>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
              {SP_DAYS.map(d => (
                <OptionCard key={d.iso} label={d.day} description={d.date} tone="plain"
                  selected={data.visitDate === d.iso} onClick={() => patch({ visitDate: d.iso })} />
              ))}
            </div>
            <span style={{ display: "block", fontSize: "var(--text-caption)", color: "var(--text-muted)", marginTop: 6 }}>Event runs 26 – 28 June 2026</span>
          </div>
          <div>
            <span style={{ display: "block", fontWeight: 700, fontSize: "var(--text-label)", marginBottom: 8 }}>Visit Time <span style={{ color: "var(--coral-500)" }}>*</span></span>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {SP_SLOTS.map(s => (
                <OptionCard key={s} label={s} tone="plain"
                  selected={data.visitTime === s} onClick={() => patch({ visitTime: s })} />
              ))}
            </div>
          </div>
          <SelectField label="Purpose of Visit" required options={SP_PURPOSES} value={data.purpose}
            onChange={e => patch({ purpose: e.target.value })} />
        </div>
      </Card>
      <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
        <span style={{ fontSize: 12, fontWeight: 700, color: "var(--text-muted)" }}>Open all three days:</span>
        <Tag tone="peach" size="sm">Food</Tag><Tag tone="purple" size="sm">Fashion</Tag><Tag tone="green" size="sm">Creative</Tag>
      </div>
      <div style={{ marginTop: "auto" }}>
        <Button variant="primary" size="lg" fullWidth withArrow disabled={!valid} onClick={onNext}>Next</Button>
      </div>
    </React.Fragment>
  );
}

Object.assign(window, { VisitDetailScreen, SP_PURPOSES, SP_SLOTS });
