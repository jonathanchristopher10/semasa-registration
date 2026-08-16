import React from "react";
import { useNavigate } from "react-router-dom";
import { Screen } from "../../design-system/components/layout/Screen.jsx";
import { Card } from "../../design-system/components/display/Card.jsx";
import { InfoChip } from "../../design-system/components/display/InfoChip.jsx";
import { Button } from "../../design-system/components/actions/Button.jsx";
import { Sticker } from "../../design-system/components/brand/Sticker.jsx";
import { asset, ASSET_BASE } from "../lib/asset.js";

const MARKETS = [
  { icon: "assets/icons/ticket.png", label: "Free", sub: "Entry" },
  { icon: "assets/icons/foodtruck.png", label: "Food", sub: "Market" },
  { icon: "assets/icons/cookie.png", label: "Creative", sub: "Market" },
  { icon: "assets/icons/bag.png", label: "Fashion", sub: "Market" },
];

export default function Landing() {
  const navigate = useNavigate();

  return (
    <Screen padded={false} gap={0} style={{ justifyContent: "space-between", minHeight: "100%" }}>
      {/* --- Hero title + partner credit --- */}
      <div style={{ position: "relative", padding: "48px 20px 0" }}>
        <Sticker name="starPurple" size={22} top={30} right={22} rotate={12} basePath={ASSET_BASE} />
        <Sticker name="starYellow" size={16} top={92} left={16} rotate={-10} basePath={ASSET_BASE} />
        <img
          src={asset("assets/illustrations/hero-lockup.png")}
          alt="Welcome to SEMASA PIKNIK 2026"
          style={{ width: "100%", maxWidth: 360, display: "block", margin: "0 auto", position: "relative", zIndex: 1 }}
        />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginTop: 6 }}>
          <span style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 14 }}>in collaboration with</span>
          <img src={asset("assets/illustrations/mybca-logo.png")} alt="myBCA" style={{ width: 44, borderRadius: 10 }} />
        </div>
      </div>

      {/* --- Event card, with the mascot peeking over the top and a walking character at the corner --- */}
      <div style={{ position: "relative", padding: "0 20px", marginTop: 26 }}>
        <img
          src={asset("assets/illustrations/mascot-peek.png")}
          alt=""
          aria-hidden="true"
          style={{ position: "absolute", top: 0, left: "50%", transform: "translate(-50%, -66%)", width: 124, zIndex: 3, pointerEvents: "none" }}
        />
        <img
          src={asset("assets/illustrations/kid-waving.png")}
          alt=""
          aria-hidden="true"
          style={{ position: "absolute", top: 0, left: 6, transform: "translateY(-88%)", width: 90, zIndex: 2, pointerEvents: "none" }}
        />
        <img
          src={asset("assets/illustrations/girl-tote.png")}
          alt=""
          aria-hidden="true"
          style={{ position: "absolute", bottom: -8, right: -6, width: 58, zIndex: 4, pointerEvents: "none" }}
        />

        <Card tone="cream" padding={0} radius="var(--radius-card)" style={{ position: "relative", zIndex: 1 }}>
          {/* date + venue */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, padding: "18px 14px" }}>
            <InfoChip iconSrc={asset("assets/icons/calendar.png")} label="26 – 28 June" sublabel="2026" size={34} />
            <span style={{ width: 1, alignSelf: "stretch", background: "var(--border-hair)" }} />
            <InfoChip iconSrc={asset("assets/icons/pin.png")} label="Lapangan" sublabel="Banteng" size={34} />
          </div>
          <div style={{ height: 1, background: "var(--border-hair)" }} />

          {/* the four markets */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, padding: "16px 18px" }}>
            {MARKETS.map((m) => (
              <div key={m.label} style={{ display: "flex", justifyContent: "center" }}>
                <InfoChip iconSrc={asset(m.icon)} label={m.label} sublabel={m.sub} size={32} />
              </div>
            ))}
          </div>
          <div style={{ height: 1, background: "var(--border-hair)" }} />

          {/* CTA */}
          <div style={{ padding: "16px 14px 18px" }}>
            <Button variant="primary" size="lg" fullWidth withArrow onClick={() => navigate("/register")}>
              Let's Get Started!
            </Button>
          </div>
        </Card>
      </div>

      {/* --- Reassurance --- */}
      <div style={{ padding: "22px 24px 30px", display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: "var(--text-muted)", textAlign: "center" }}>
          Free entry · Takes about a minute
        </span>
        <span style={{ fontSize: 13, fontWeight: 700, color: "var(--text-muted)", textAlign: "center" }}>
          Your QR ticket lands in your phone
        </span>
      </div>
    </Screen>
  );
}
