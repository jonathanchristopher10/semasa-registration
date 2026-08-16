import React from "react";

/* Illustrated icon + two-line label, as in the hero's event strip. */
export function InfoChip({ iconSrc, label, sublabel, size = 34 }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 0 }}>
      {iconSrc ? <img src={iconSrc} alt="" width={size} height={size} style={{ objectFit: "contain", flex: "0 0 auto", mixBlendMode: "multiply" }} /> : null}
      <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.05 }}>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-bold)", fontSize: "var(--text-label)" }}>{label}</span>
        {sublabel ? <span style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-bold)", fontSize: "var(--text-label)" }}>{sublabel}</span> : null}
      </span>
    </div>
  );
}
