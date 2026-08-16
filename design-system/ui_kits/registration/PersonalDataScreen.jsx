const { Button, Card, DateField, ScreenHeader, Sticker, TextField } = window.SEMASAPIKNIK2026DesignSystem_c74c54;

function PersonalDataScreen({ data, patch, onNext, onBack }) {
  const [touched, setTouched] = React.useState(false);
  const emailOk = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email);
  const phoneOk = /^[0-9+\-\s]{8,16}$/.test(data.phone);
  const valid = data.fullName.trim().length > 1 && emailOk && phoneOk && data.dateOfBirth;
  return (
    <React.Fragment>
      <Sticker name="flower" size={40} top={56} right={18} rotate={14} opacity={0.9} basePath="../../" />
      <ScreenHeader title="Personal Data" subtitle="We only need the basics to make your ticket." onBack={onBack} />
      <Card tone="white" padding={18}>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--gap-field)" }}>
          <TextField label="Full Name" placeholder="Full Name" required value={data.fullName} onChange={e => patch({ fullName: e.target.value })} />
          <TextField label="Email Address" type="email" placeholder="you@email.com" required value={data.email}
            onChange={e => patch({ email: e.target.value })}
            error={touched && data.email && !emailOk ? "That email looks off" : undefined} />
          <TextField label="Phone Number" type="tel" placeholder="0812 3456 7890" required value={data.phone}
            onChange={e => patch({ phone: e.target.value })}
            error={touched && data.phone && !phoneOk ? "Digits only, 8–16 of them" : undefined} />
          <DateField label="Date of Birth" required value={data.dateOfBirth} onChange={e => patch({ dateOfBirth: e.target.value })} iconSrc="../../assets/icons/calendar.png" />
        </div>
      </Card>
      <div style={{ marginTop: "auto" }}>
        <Button variant="primary" size="lg" fullWidth withArrow disabled={!valid}
          onClick={() => { setTouched(true); if (valid) onNext(); }}>Next</Button>
      </div>
    </React.Fragment>
  );
}

Object.assign(window, { PersonalDataScreen });
