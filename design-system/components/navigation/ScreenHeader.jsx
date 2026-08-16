import React from "react";
import { IconDisc } from "../actions/IconDisc.jsx";

/* Screen title block: optional back disc, display title, friendly subtitle. */
export function ScreenHeader({ title, subtitle, onBack, align = "left" }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, width: "100%" }}>
      {onBack ? (
        <div style={{ marginBottom: 2 }}>
          <IconDisc glyph={"\u2190"} tone="cream" size={34} onClick={onBack} title="Back" />
        </div>
      ) : null}
      <h2 style={{ fontSize: "var(--text-display)", textAlign: align }}>{title}</h2>
      {subtitle ? (
        <p style={{ margin: 0, fontSize: "var(--text-body-md)", color: "var(--text-muted)", fontWeight: "var(--weight-semibold)", textAlign: align, maxWidth: "36ch" }}>{subtitle}</p>
      ) : null}
    </div>
  );
}
