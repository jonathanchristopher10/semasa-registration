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

// Cut-out illustration; decorative only. `edge` translates it up so its bottom
// rests on the card's top edge (bottoms have no transparent padding).
const overCard = (extra = {}) => ({ position: "absolute", pointerEvents: "none", ...extra });

export default function Landing() {
  const navigate = useNavigate();

  return (
    <Screen padded={false} gap={0} style={{ justifyContent: "flex-start", minHeight: "100%" }}>
      {/* --- Hero title + partner credit, with sparkles like the reference --- */}
      <div style={{ position: "relative", padding: "46px 20px 0" }}>
        <Sticker name="starYellow" size={16} top={20} left={30} rotate={-8} basePath={ASSET_BASE} />
        <Sticker name="starPurple" size={22} top={8} right={44} rotate={12} basePath={ASSET_BASE} />
        <Sticker name="starYellow" size={13} top={70} right={86} rotate={6} basePath={ASSET_BASE} />
        <Sticker name="starPurple" size={14} top={104} left={18} rotate={-10} basePath={ASSET_BASE} />

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

      {/* --- The event card, with the whole cast arranged around it as in PAGE1_BACKGROUND --- */}
      <div style={{ position: "relative", padding: "0 20px", marginTop: 74 }}>
        {/* cactus + flower, far left, rising behind the card's top-left */}
        <img
          src={asset("assets/illustrations/cactus-flower.png")}
          alt="" aria-hidden="true"
          style={overCard({ left: -14, top: 0, transform: "translateY(-80%)", width: 60, zIndex: 0 })}
        />

        {/* sparkles around the character band */}
        <Sticker name="starPurple" size={18} top={-30} left={96} rotate={-12} basePath={ASSET_BASE} />
        <Sticker name="starYellow" size={16} top={-40} right={64} rotate={-10} basePath={ASSET_BASE} />
        <Sticker name="starPurple" size={16} bottom={-6} left={-2} rotate={12} basePath={ASSET_BASE} />

        {/* --- characters resting on the card's top edge: kid (left) · mascot (center) · car (right) --- */}
        <img
          src={asset("assets/illustrations/kid-waving.png")}
          alt="" aria-hidden="true"
          style={overCard({ left: 16, top: 0, transform: "translateY(-86%)", width: 92, zIndex: 2 })}
        />
        <img
          src={asset("assets/illustrations/mascot-peek.png")}
          alt="" aria-hidden="true"
          style={overCard({ left: "50%", top: 0, transform: "translate(-50%, -84%)", width: 132, zIndex: 3 })}
        />
        <img
          src={asset("assets/illustrations/car-green.png")}
          alt="" aria-hidden="true"
          style={overCard({ right: 8, top: 0, transform: "translateY(-92%)", width: 116, zIndex: 2 })}
        />

        {/* girl walking past the card's bottom-right */}
        <img
          src={asset("assets/illustrations/girl-tote.png")}
          alt="" aria-hidden="true"
          style={overCard({ right: -6, bottom: -8, width: 62, zIndex: 4 })}
        />
        {/* little flowers at the card's bottom-left */}
        <img
          src={asset("assets/icons/flower.png")}
          alt="" aria-hidden="true"
          style={overCard({ left: -8, bottom: 14, width: 38, zIndex: 2 })}
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
      <div style={{ padding: "26px 24px 30px", display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
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
