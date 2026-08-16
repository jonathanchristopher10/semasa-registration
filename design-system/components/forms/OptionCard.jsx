import React from "react";

/* Pastel selectable row — the "Choose Your Visitor Type" list from the moodboard.
   `showCheck` (default true) draws the ✓ on selection; set false in compact grids
   where the selection ring alone reads it and the ✓ would crowd the label. */
export function OptionCard({ label, description, tone = "peach", selected = false, onClick, glyphSrc, showCheck = true, align = "flex-start" }) {
  const tones = {
    coral: "var(--pink-200)", peach: "var(--peach-200)", green: "var(--green-300)",
    blue: "var(--blue-200)", purple: "var(--purple-200)", lemon: "var(--lemon-100)",
    plain: "var(--surface-card)"
  };
  return (
    <button
      type="button" onClick={onClick} aria-pressed={selected}
      className="sp-option"
      style={{
        display: "flex", alignItems: "center", justifyContent: align, gap: 12, width: "100%", textAlign: "left",
        minHeight: "var(--tap-min)", padding: "12px 16px",
        background: tones[tone] || tones.peach,
        border: "var(--stroke) solid var(--border-ink)",
        borderRadius: "var(--radius-pill)",
        boxShadow: selected ? "0 0 0 4px var(--surface-page), 0 0 0 6px var(--border-ink)" : "none",
        cursor: "pointer",
        transition: "transform var(--dur-fast) var(--ease-pop), box-shadow var(--dur) var(--ease-out)"
      }}
    >
      {glyphSrc ? <img src={glyphSrc} alt="" width={26} height={26} style={{ objectFit: "contain", mixBlendMode: "multiply" }} /> : null}
      <span style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-bold)", fontSize: "var(--text-body-lg)", whiteSpace: "nowrap" }}>{label}</span>
        {description ? <span style={{ fontSize: "var(--text-caption)", color: "rgba(34,34,34,.65)", fontWeight: "var(--weight-semibold)", whiteSpace: "nowrap" }}>{description}</span> : null}
      </span>
      {showCheck && selected ? <span style={{ marginLeft: "auto", fontWeight: "var(--weight-black)", fontSize: 16 }}>{"\u2713"}</span> : null}
    </button>
  );
}
