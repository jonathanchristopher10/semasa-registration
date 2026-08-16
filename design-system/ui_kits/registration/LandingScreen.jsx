const { Button, Card, InfoChip, Screen, Sticker } = window.SEMASAPIKNIK2026DesignSystem_c74c54;

function LandingScreen({ onStart }) {
  const B = "../../";
  return (
    <Screen padded={false} gap={0} style={{ justifyContent: "space-between" }}>
      <div style={{ position: "relative", padding: "10px 0 0" }}>
        <Sticker name="starPurple" size={20} top={64} right={30} rotate={12} basePath={B} />
        <Sticker name="starYellow" size={16} top={104} left={58} basePath={B} />
      </div>
      <img src={B + "assets/illustrations/hero-lockup.png"} alt="Welcome to SEMASA PIKNIK 2026" style={{ width: "100%", display: "block", margin: "0 auto", position: "relative", zIndex: 1 }} />
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginTop: 2, flexDirection: "row", flexWrap: "wrap", position: "absolute", left: 120, top: 279 }}>
        <span style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 14 }}>in collaboration with</span>
        <img src={B + "assets/illustrations/mybca-logo.png"} alt="myBCA" style={{ width: 44, borderRadius: 10 }} />
      </div>
      <img src={B + "assets/illustrations/kid-waving.png"} alt="" style={{ position: "absolute", left: 37, width: 97, zIndex: 0, top: 329, height: 77 }} />
      <img src="./screenshot-2026-08-15-at-12-58-54-msvljxsb-zj5i.png" alt="" style={{ position: "absolute", width: 103, zIndex: 0, left: 310, top: 330, height: 67 }} />
      <img src={B + "assets/illustrations/mascot-peek.png"} alt="" style={{ position: "absolute", transform: "translateX(-52%)", width: 129, zIndex: 2, left: 218, top: 334, height: 78 }} />

      <div style={{ padding: "0 18px", position: "relative", zIndex: 1, display: "block" }}>
        <Card tone="cream" padding={0} radius="var(--radius-card)" style={{ overflow: "hidden" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, padding: "18px 14px" }}>
            <InfoChip iconSrc={B + "assets/icons/calendar.png"} label="26 – 28 June" sublabel="2026" size={34} />
            <span style={{ width: 1, alignSelf: "stretch", background: "var(--border-hair)" }} />
            <InfoChip iconSrc={B + "assets/icons/pin.png"} label="Lapangan" sublabel="Banteng" size={34} />
          </div>
          <div style={{ height: 1, background: "var(--border-hair)" }} />
          <div style={{ display: "flex", justifyContent: "space-between", gap: 8, padding: "18px 14px" }}>
            <InfoChip iconSrc="./screenshot-2026-08-15-at-13-03-31-msvll09k-hrw8.png" label="Free" sublabel="Entry" size={34} />
            <InfoChip iconSrc="./screenshot-2026-08-15-at-13-03-06-msvlkrq0-s50a.png" label="Food" sublabel="Market" size={34} />
            <InfoChip iconSrc="./screenshot-2026-08-15-at-13-03-20-msvlkify-tygk.png" label="Creative" sublabel="Market" size={34} />
            <InfoChip iconSrc={B + "assets/icons/bag.png"} label="Fashion" sublabel="Market" size={34} />
          </div>
          <div style={{ padding: "10px 12px 18px" }}>
            <Button variant="primary" size="lg" fullWidth withArrow onClick={onStart}>Let's Get Started!</Button>
            <img src={B + "assets/illustrations/girl-tote.png"} alt="" style={{ position: "absolute", width: 55, zIndex: 1, left: 365, top: 200, height: 103 }} />
          </div>
        </Card>
      </div>

      <div style={{ padding: "18px 24px 34px", display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: "var(--text-muted)", textAlign: "center" }}>Free entry · Takes about a minute</span>
        <span style={{ fontSize: 13, fontWeight: 700, color: "var(--text-muted)", textAlign: "center" }}>Your QR ticket lands in your phone</span>
      </div>
      <Sticker name="starYellow" size={22} top={72} left={102} rotate={-10} basePath={B} />
      <Sticker name="starYellow" size={22} top={299} left={53} rotate={-10} basePath={B} />
      <Sticker name="starYellow" size={17} top={266} left={322} rotate={-10} basePath={B} />
      <Sticker name="starPurple" size={20} top={657} left={56} rotate={12} basePath={B} />
      <Sticker name="starPurple" size={20} top={98} left={310} rotate={12} basePath={B} />
    </Screen>
  );
}

Object.assign(window, { LandingScreen });
