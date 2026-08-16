import React from "react";

/* The little outlined disc that rides on the right of a pill button, or stands
   alone as a back / next affordance. Glyph is a character, not an SVG. */
export function IconDisc({ glyph = "\u2192", tone = "blue", size = 30, onClick, title }) {
  const tones = {
    blue: { bg: "var(--accent-arrow)", fg: "#FFD84D" },
    cream: { bg: "var(--surface-card)", fg: "var(--text-body)" },
    coral: { bg: "var(--primary)", fg: "var(--text-body)" },
    green: { bg: "var(--green-300)", fg: "var(--text-body)" }
  };
  const t = tones[tone] || tones.blue;
  const Tag = onClick ? "button" : "span";
  return (
    <Tag
      onClick={onClick}
      title={title}
      aria-label={title}
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        width: size, height: size, flex: "0 0 auto",
        borderRadius: "var(--radius-pill)",
        background: t.bg, color: t.fg,
        border: "var(--stroke) solid var(--border-ink)",
        fontFamily: "var(--font-display)", fontWeight: "var(--weight-black)",
        fontSize: Math.round(size * 0.55), lineHeight: 1, padding: 0,
        cursor: onClick ? "pointer" : "default"
      }}
    >
      {glyph}
    </Tag>
  );
}
