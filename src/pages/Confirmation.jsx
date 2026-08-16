import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../../design-system/components/display/Card.jsx";
import { SummaryRow } from "../../design-system/components/display/SummaryRow.jsx";
import { Button } from "../../design-system/components/actions/Button.jsx";
import { ScreenHeader } from "../../design-system/components/navigation/ScreenHeader.jsx";
import { Sticker } from "../../design-system/components/brand/Sticker.jsx";
import { Tag } from "../../design-system/components/display/Tag.jsx";
import { useRegistration } from "../context/RegistrationContext.jsx";
import { useStepNav } from "../lib/useStepNav.js";
import { submitRegistration } from "../services/registrationService.js";
import { ASSET_BASE } from "../lib/asset.js";

function spDate(iso) {
  if (!iso) return "—";
  return new Date(iso + "T00:00:00").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default function Confirmation() {
  const { data, setTicket } = useRegistration();
  const { goBack } = useStepNav();
  const navigate = useNavigate();
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState(null);

  const confirm = async () => {
    setSubmitting(true);
    setError(null);
    try {
      const result = await submitRegistration(data);
      setTicket(result);
      navigate("/ticket");
    } catch (e) {
      setError(e.message || "Something went wrong. Please try again.");
      setSubmitting(false);
    }
  };

  return (
    <React.Fragment>
      <Sticker name="starPurple" size={20} top={64} right={30} rotate={10} basePath={ASSET_BASE} />
      <ScreenHeader title="Confirmation" subtitle="Please check your details — the QR is made from this." onBack={goBack} />

      <Card tone="white" padding={18}>
        {data.visitorType ? (
          <div style={{ marginBottom: 6 }}>
            <Tag tone="lemon" size="sm">{data.visitorType}</Tag>
          </div>
        ) : null}
        <SummaryRow label="Full Name" value={data.fullName || "—"} onEdit={() => navigate("/register")} />
        <SummaryRow label="Email" value={data.email || "—"} onEdit={() => navigate("/register")} />
        <SummaryRow label="Phone" value={data.phone || "—"} onEdit={() => navigate("/register")} />
        <SummaryRow label="Date of Birth" value={spDate(data.dateOfBirth)} onEdit={() => navigate("/register")} />
        <SummaryRow label="Visiting Date" value={spDate(data.visitDate)} onEdit={() => navigate("/visit")} />
        <SummaryRow label="Visit Time" value={data.visitTime || "—"} onEdit={() => navigate("/visit")} />
        <SummaryRow label="Purpose" value={data.purpose || "—"} onEdit={() => navigate("/visit")} divider={false} />
      </Card>

      {error ? (
        <span style={{ fontSize: "var(--text-caption)", fontWeight: 700, color: "var(--coral-500)", textAlign: "center" }}>{error}</span>
      ) : null}

      <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 10 }}>
        <Button variant="primary" size="lg" fullWidth withArrow disabled={submitting} onClick={confirm}>
          {submitting ? "Making your ticket…" : "Confirm"}
        </Button>
        <Button variant="ghost" size="sm" fullWidth onClick={goBack}>Go back and change something</Button>
      </div>
    </React.Fragment>
  );
}
