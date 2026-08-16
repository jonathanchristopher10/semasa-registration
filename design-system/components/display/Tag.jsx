import React from "react";

/* Small pastel keyword pill — market categories, mood words, statuses. */
export function Tag({ children, tone = "peach", size = "md", outlined = true }) {
  const tones = {
    pink: "var(--pink-200)", peach: "var(--peach-200)", green: "var(--green-300)",
    blue: "var(--blue-200)", purple: "var(--purple-200)", lemon: "var(--lemon-100)", coral: "var(--primary)"
  };
  const s = size === "sm" ? { fs: 11, py: 3, px: 10 } : { fs: 13, py: 5, px: 14 };
  return (
    <span style={{
      display: "inline-flex", alignItems: "center",
      background: tones[tone] || tones.peach,
      border: outlined ? "var(--stroke) solid var(--border-ink)" : "none",
      borderRadius: "var(--radius-pill)",
      padding: s.py + "px " + s.px + "px",
      fontFamily: "var(--font-body)", fontWeight: "var(--weight-bold)", fontSize: s.fs,
      letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--text-body)"
    }}>{children}</span>
  );
}
