import React from "react";
import { IconDisc } from "./IconDisc.jsx";

/* Pill button. Primary = coral fill, ink text (never white), ink outline. */
export function Button({
  children, variant = "primary", size = "lg", withArrow = false,
  fullWidth = false, disabled = false, onClick, type = "button"
}) {
  const sizes = {
    lg: { padY: 15, padX: 26, font: 19, disc: 30 },
    md: { padY: 11, padX: 20, font: 16, disc: 26 },
    sm: { padY: 7, padX: 14, font: 14, disc: 22 }
  };
  const variants = {
    primary: { background: "var(--primary)", border: "var(--stroke-bold) solid var(--border-ink)", color: "var(--text-on-primary)" },
    secondary: { background: "var(--surface-card)", border: "var(--stroke-bold) solid var(--border-ink)", color: "var(--text-body)" },
    ghost: { background: "transparent", border: "var(--stroke-bold) solid transparent", color: "var(--text-muted)" }
  };
  const s = sizes[size] || sizes.lg;
  const v = variants[variant] || variants.primary;
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={"sp-btn sp-btn--" + variant}
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        gap: withArrow ? 12 : 8,
        width: fullWidth ? "100%" : "auto",
        minHeight: "var(--tap-min)",
        padding: s.padY + "px " + s.padX + "px",
        borderRadius: "var(--radius-pill)",
        fontFamily: "var(--font-display)", fontWeight: "var(--weight-bold)",
        fontSize: s.font, letterSpacing: "var(--tracking-display)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.45 : 1,
        transition: "transform var(--dur-fast) var(--ease-pop), background var(--dur) var(--ease-out)",
        ...v
      }}
    >
      <span style={{ position: "relative", top: withArrow ? 0 : 0 }}>{children}</span>
      {withArrow ? <IconDisc size={s.disc} tone={variant === "primary" ? "blue" : "blue"} /> : null}
    </button>
  );
}
