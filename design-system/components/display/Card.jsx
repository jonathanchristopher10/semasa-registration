import React from "react";

/* The outlined rounded panel every screen block sits in. */
export function Card({ children, tone = "white", padding = 20, radius = "var(--radius-card)", outlined = true, softShadow = false, style }) {
  const tones = {
    white: "var(--surface-card)", cream: "var(--surface-card-cream)", lemon: "var(--lemon-100)",
    peach: "var(--peach-100)", blue: "var(--blue-100)", purple: "var(--purple-100)", green: "var(--green-100)"
  };
  return (
    <div style={{
      background: tones[tone] || tones.white,
      border: outlined ? "var(--stroke-bold) solid var(--border-ink)" : "none",
      borderRadius: radius, padding,
      boxShadow: softShadow ? "var(--shadow-soft)" : "none",
      ...style
    }}>{children}</div>
  );
}
