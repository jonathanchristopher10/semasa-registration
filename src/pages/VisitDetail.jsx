import React from "react";
import { Card } from "../../design-system/components/display/Card.jsx";
import { OptionCard } from "../../design-system/components/forms/OptionCard.jsx";
import { SelectField } from "../../design-system/components/forms/SelectField.jsx";
import { Button } from "../../design-system/components/actions/Button.jsx";
import { ScreenHeader } from "../../design-system/components/navigation/ScreenHeader.jsx";
import { Sticker } from "../../design-system/components/brand/Sticker.jsx";
import { useRegistration } from "../context/RegistrationContext.jsx";
import { useStepNav } from "../lib/useStepNav.js";
import { asset, ASSET_BASE } from "../lib/asset.js";

export const PURPOSES = ["Food", "Fashion", "Creative", "Media", "Others"];
const SLOTS = ["10:00 – 13:00", "13:00 – 16:00", "16:00 – 19:00", "19:00 – 22:00"];
const DAYS = [
  { iso: "2026-06-26", day: "Fri", date: "26 June" },
  { iso: "2026-06-27", day: "Sat", date: "27 June" },
  { iso: "2026-06-28", day: "Sun", date: "28 June" },
];

const labelRow = { display: "flex", alignItems: "center", gap: 8, fontWeight: 700, fontSize: "var(--text-label)", marginBottom: 8 };
const req = <span style={{ color: "var(--coral-500)" }}>*</span>;

export default function VisitDetail() {
  const { data, patch } = useRegistration();
  const { goNext, goBack } = useStepNav();
  const valid = data.visitDate && data.visitTime && data.purpose;

  return (
    <React.Fragment>
      <Sticker name="starYellow" size={24} top={58} right={26} rotate={-14} basePath={ASSET_BASE} />
      <ScreenHeader title="Visit Details" subtitle="Pick your day and the slot you'll walk in." onBack={goBack} />

      <Card tone="white" padding={18}>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--gap-field)" }}>
          {/* Day */}
          <div>
            <span style={labelRow}>
              <img src={asset("assets/icons/calendar.png")} alt="" width={20} height={20} style={{ objectFit: "contain" }} />
              Visiting Date {req}
            </span>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
              {DAYS.map((d) => (
                <OptionCard
                  key={d.iso} label={d.day} description={d.date} tone="plain"
                  align="center" showCheck={false}
                  selected={data.visitDate === d.iso} onClick={() => patch({ visitDate: d.iso })}
                />
              ))}
            </div>
            <span style={{ display: "block", fontSize: "var(--text-caption)", color: "var(--text-muted)", marginTop: 6 }}>
              Event runs 26 – 28 June 2026
            </span>
          </div>

          {/* Time slot */}
          <div>
            <span style={{ display: "block", fontWeight: 700, fontSize: "var(--text-label)", marginBottom: 8 }}>Visit Time {req}</span>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {SLOTS.map((s) => (
                <OptionCard
                  key={s} label={s} tone="plain"
                  align="center" showCheck={false}
                  selected={data.visitTime === s} onClick={() => patch({ visitTime: s })}
                />
              ))}
            </div>
          </div>

          {/* Purpose */}
          <SelectField
            label="Purpose of Visit" required options={PURPOSES}
            value={data.purpose} onChange={(e) => patch({ purpose: e.target.value })}
          />
        </div>
      </Card>

      <div style={{ marginTop: "auto" }}>
        <Button variant="primary" size="lg" fullWidth withArrow disabled={!valid} onClick={goNext}>Next</Button>
      </div>
    </React.Fragment>
  );
}
