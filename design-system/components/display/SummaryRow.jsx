import React from "react";

/* Label / value row for the confirmation card, with an optional Edit action. */
export function SummaryRow({ label, value, onEdit, editLabel = "Edit", divider = true }) {
  return (
    <div style={{
      display: "flex", alignItems: "baseline", gap: 12, padding: "10px 0",
      borderBottom: divider ? "var(--stroke-hair) solid var(--border-hair)" : "none"
    }}>
      <span style={{ flex: "0 0 34%", fontSize: "var(--text-label)", fontWeight: "var(--weight-bold)", color: "var(--text-muted)" }}>{label}</span>
      <span style={{ flex: "1 1 auto", fontSize: "var(--text-body-lg)", fontWeight: "var(--weight-bold)", wordBreak: "break-word" }}>{value}</span>
      {onEdit ? (
        <button type="button" onClick={onEdit} style={{
          background: "transparent", border: "none", padding: 0, cursor: "pointer",
          fontFamily: "var(--font-body)", fontWeight: "var(--weight-bold)", fontSize: "var(--text-caption)",
          color: "var(--text-link)", textDecoration: "underline", flex: "0 0 auto"
        }}>{editLabel}</button>
      ) : null}
    </div>
  );
}
