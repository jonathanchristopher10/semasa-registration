import React from "react";
import { Card } from "../../design-system/components/display/Card.jsx";
import { TextField } from "../../design-system/components/forms/TextField.jsx";
import { DateField } from "../../design-system/components/forms/DateField.jsx";
import { Button } from "../../design-system/components/actions/Button.jsx";
import { ScreenHeader } from "../../design-system/components/navigation/ScreenHeader.jsx";
import { Sticker } from "../../design-system/components/brand/Sticker.jsx";
import { useRegistration } from "../context/RegistrationContext.jsx";
import { useStepNav } from "../lib/useStepNav.js";
import { asset, ASSET_BASE } from "../lib/asset.js";

const emailRe = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const phoneRe = /^[0-9+\-\s]{8,16}$/;

export default function PersonalData() {
  const { data, patch } = useRegistration();
  const { goNext, goBack } = useStepNav();
  const [touched, setTouched] = React.useState(false);

  const emailOk = emailRe.test(data.email);
  const phoneOk = phoneRe.test(data.phone);
  const valid = data.fullName.trim().length > 1 && emailOk && phoneOk && data.dateOfBirth;

  return (
    <React.Fragment>
      <Sticker name="flower" size={40} top={56} right={18} rotate={14} opacity={0.9} basePath={ASSET_BASE} />
      <ScreenHeader title="Personal Data" subtitle="We only need the basics to make your ticket." onBack={goBack} />

      <Card tone="white" padding={18}>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--gap-field)" }}>
          <TextField
            label="Full Name" placeholder="Full Name" required
            value={data.fullName} onChange={(e) => patch({ fullName: e.target.value })}
          />
          <TextField
            label="Email Address" type="email" placeholder="you@email.com" required
            value={data.email} onChange={(e) => patch({ email: e.target.value })}
            error={touched && data.email && !emailOk ? "That email looks off" : undefined}
          />
          <TextField
            label="Phone Number" type="tel" placeholder="0812 3456 7890" required
            value={data.phone} onChange={(e) => patch({ phone: e.target.value })}
            error={touched && data.phone && !phoneOk ? "Digits only, 8–16 of them" : undefined}
          />
          <DateField
            label="Date of Birth" required
            value={data.dateOfBirth} onChange={(e) => patch({ dateOfBirth: e.target.value })}
            iconSrc={asset("assets/icons/calendar.png")}
          />
        </div>
      </Card>

      <div style={{ marginTop: "auto" }}>
        <Button
          variant="primary" size="lg" fullWidth withArrow disabled={!valid}
          onClick={() => { setTouched(true); if (valid) goNext(); }}
        >
          Next
        </Button>
      </div>
    </React.Fragment>
  );
}
