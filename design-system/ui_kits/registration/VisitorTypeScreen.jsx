const { Button, Card, OptionCard, ScreenHeader, Sticker } = window.SEMASAPIKNIK2026DesignSystem_c74c54;

const SP_TYPES = [
  { label: "General Visitor", description: "Just here for a good time", tone: "coral" },
  { label: "Student", description: "Bring your student ID", tone: "peach" },
  { label: "VIP / VVIP", description: "Invitation code required", tone: "blue" },
  { label: "Media", description: "Press & content creators", tone: "purple" },
  { label: "Exhibitor", description: "You've got a booth", tone: "green" }
];

function VisitorTypeScreen({ data, patch, onNext, onBack }) {
  return (
    <React.Fragment>
      <Sticker name="starPurple" size={22} top={70} right={26} rotate={-12} basePath="../../" />
      <ScreenHeader title="Choose Your Type" subtitle="So we know how to welcome you at the gate." onBack={onBack} />
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {SP_TYPES.map(t => (
          <OptionCard
            key={t.label} label={t.label} description={t.description} tone={t.tone}
            selected={data.visitorType === t.label}
            onClick={() => patch({ visitorType: t.label })}
          />
        ))}
      </div>
      <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 10 }}>
        <Button variant="primary" size="lg" fullWidth withArrow disabled={!data.visitorType} onClick={onNext}>Next</Button>
      </div>
    </React.Fragment>
  );
}

Object.assign(window, { VisitorTypeScreen, SP_TYPES });
