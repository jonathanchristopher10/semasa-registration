import React from "react";

/* Native select in the brand's field shell, with a chevron character. */
export function SelectField({ label, value = "", onChange, options = [], placeholder = "Please select", required = false, error, name, id }) {
  const fieldId = id || name || (label ? "s-" + label.replace(/\s+/g, "-").toLowerCase() : undefined);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, width: "100%" }}>
      {label ? (
        <label htmlFor={fieldId} style={{ fontFamily: "var(--font-body)", fontWeight: "var(--weight-bold)", fontSize: "var(--text-label)" }}>
          {label}{required ? <span style={{ color: "var(--coral-500)" }}> *</span> : null}
        </label>
      ) : null}
      <div style={{
        position: "relative", display: "flex", alignItems: "center",
        background: "var(--surface-field)",
        border: "var(--stroke) solid " + (error ? "var(--coral-500)" : "var(--border-ink)"),
        borderRadius: "var(--radius-input)", minHeight: 50, padding: "0 14px"
      }}>
        <select
          id={fieldId} name={name} value={value} onChange={onChange}
          style={{
            appearance: "none", border: "none", outline: "none", background: "transparent",
            width: "100%", padding: "13px 24px 13px 0",
            fontFamily: "var(--font-body)", fontSize: "var(--text-body-lg)",
            fontWeight: "var(--weight-semibold)",
            color: value ? "var(--text-body)" : "var(--text-muted)", cursor: "pointer"
          }}
        >
          <option value="">{placeholder}</option>
          {options.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
        <span style={{ position: "absolute", right: 16, pointerEvents: "none", fontSize: 12 }}>{"\u25BE"}</span>
      </div>
      {error ? <span style={{ fontSize: "var(--text-caption)", fontWeight: "var(--weight-bold)", color: "var(--coral-500)" }}>{error}</span> : null}
    </div>
  );
}
