import React from "react";

/* Labelled input with the brand's rounded white field, optional leading glyph. */
export function TextField({
  label, value = "", onChange, placeholder, type = "text",
  glyph, error, hint, required = false, name, id
}) {
  const fieldId = id || name || (label ? "f-" + label.replace(/\s+/g, "-").toLowerCase() : undefined);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, width: "100%" }}>
      {label ? (
        <label htmlFor={fieldId} style={{ fontFamily: "var(--font-body)", fontWeight: "var(--weight-bold)", fontSize: "var(--text-label)", color: "var(--text-body)" }}>
          {label}{required ? <span style={{ color: "var(--coral-500)" }}> *</span> : null}
        </label>
      ) : null}
      <div style={{
        display: "flex", alignItems: "center", gap: 10,
        background: "var(--surface-field)",
        border: "var(--stroke) solid " + (error ? "var(--coral-500)" : "var(--border-ink)"),
        borderRadius: "var(--radius-input)",
        padding: "0 14px", minHeight: 50
      }}>
        {glyph ? <span style={{ fontSize: 16, opacity: 0.55 }}>{glyph}</span> : null}
        <input
          id={fieldId} name={name} type={type} value={value} placeholder={placeholder}
          onChange={onChange}
          style={{
            border: "none", outline: "none", background: "transparent", width: "100%",
            font: "inherit", fontFamily: "var(--font-body)", fontSize: "var(--text-body-lg)",
            fontWeight: "var(--weight-semibold)", color: "var(--text-body)", padding: "13px 0"
          }}
        />
      </div>
      {error ? (
        <span style={{ fontSize: "var(--text-caption)", fontWeight: "var(--weight-bold)", color: "var(--coral-500)" }}>{error}</span>
      ) : hint ? (
        <span style={{ fontSize: "var(--text-caption)", color: "var(--text-muted)" }}>{hint}</span>
      ) : null}
    </div>
  );
}
