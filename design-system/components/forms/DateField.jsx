import React from "react";

/* Date field: same shell as TextField with the brand calendar icon at the right. */
export function DateField({ label, value = "", onChange, min, max, required = false, error, hint, name, id, iconSrc = "assets/icons/calendar.png" }) {
  const fieldId = id || name || (label ? "d-" + label.replace(/\s+/g, "-").toLowerCase() : undefined);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, width: "100%" }}>
      {label ? (
        <label htmlFor={fieldId} style={{ fontFamily: "var(--font-body)", fontWeight: "var(--weight-bold)", fontSize: "var(--text-label)" }}>
          {label}{required ? <span style={{ color: "var(--coral-500)" }}> *</span> : null}
        </label>
      ) : null}
      <div style={{
        display: "flex", alignItems: "center", gap: 10,
        background: "var(--surface-field)",
        border: "var(--stroke) solid " + (error ? "var(--coral-500)" : "var(--border-ink)"),
        borderRadius: "var(--radius-input)", minHeight: 50, padding: "0 14px"
      }}>
        <input
          id={fieldId} name={name} type="date" value={value} min={min} max={max} onChange={onChange}
          style={{
            border: "none", outline: "none", background: "transparent", width: "100%",
            fontFamily: "var(--font-body)", fontSize: "var(--text-body-lg)",
            fontWeight: "var(--weight-semibold)", color: "var(--text-body)", padding: "13px 0"
          }}
        />
        <img src={iconSrc} alt="" width={22} height={22} style={{ flex: "0 0 auto", objectFit: "contain", mixBlendMode: "multiply" }} />
      </div>
      {error ? <span style={{ fontSize: "var(--text-caption)", fontWeight: "var(--weight-bold)", color: "var(--coral-500)" }}>{error}</span>
        : hint ? <span style={{ fontSize: "var(--text-caption)", color: "var(--text-muted)" }}>{hint}</span> : null}
    </div>
  );
}
