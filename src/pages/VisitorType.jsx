import React from "react";
import { OptionCard } from "../../design-system/components/forms/OptionCard.jsx";
import { Button } from "../../design-system/components/actions/Button.jsx";
import { ScreenHeader } from "../../design-system/components/navigation/ScreenHeader.jsx";
import { Sticker } from "../../design-system/components/brand/Sticker.jsx";
import { useRegistration } from "../context/RegistrationContext.jsx";
import { useStepNav } from "../lib/useStepNav.js";
import { ASSET_BASE } from "../lib/asset.js";

// Optional first step (moodboard). Hidden unless SHOW_VISITOR_TYPE is on in flow.js.
const TYPES = [
  { label: "General Visitor", description: "Just here for a good time", tone: "coral" },
  { label: "Student", description: "Bring your student ID", tone: "peach" },
  { label: "VIP / VVIP", description: "Invitation code required", tone: "blue" },
  { label: "Media", description: "Press & content creators", tone: "purple" },
  { label: "Exhibitor", description: "You've got a booth", tone: "green" },
];

export default function VisitorType() {
  const { data, patch } = useRegistration();
  const { goNext, goBack } = useStepNav();

  return (
    <React.Fragment>
      <Sticker name="starPurple" size={22} top={70} right={26} rotate={-12} basePath={ASSET_BASE} />
      <ScreenHeader title="Choose Your Type" subtitle="So we know how to welcome you at the gate." onBack={goBack} />

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {TYPES.map((t) => (
          <OptionCard
            key={t.label} label={t.label} description={t.description} tone={t.tone}
            selected={data.visitorType === t.label} onClick={() => patch({ visitorType: t.label })}
          />
        ))}
      </div>

      <div style={{ marginTop: "auto" }}>
        <Button variant="primary" size="lg" fullWidth withArrow disabled={!data.visitorType} onClick={goNext}>Next</Button>
      </div>
    </React.Fragment>
  );
}
