import React from "react";

/* Desktop presentation shell: the mobile app centred in an outlined phone. */
export function PhoneFrame({ children, width = 430, height = 900, statusBar = true, time = "09:41", scrollable = true }) {
  return (
    <div style={{
      width, height, position: "relative", flex: "0 0 auto",
      background: "linear-gradient(180deg,var(--surface-page) 0%,var(--surface-page-bottom) 100%)",
      border: "var(--stroke-heavy) solid var(--border-ink)",
      borderRadius: "var(--radius-phone)",
      boxShadow: "var(--shadow-lift)",
      overflow: "hidden", display: "flex", flexDirection: "column"
    }}>
      {statusBar ? (
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "10px 26px 2px", fontFamily: "var(--font-body)", fontWeight: "var(--weight-bold)",
          fontSize: 13, flex: "0 0 auto"
        }}>
          <span>{time}</span>
          <span style={{ letterSpacing: "0.08em" }}>{"\u25CF\u25CF\u25CF  \u25B0"}</span>
        </div>
      ) : null}
      <div style={{ flex: "1 1 auto", minHeight: 0, overflowY: scrollable ? "auto" : "hidden", position: "relative" }}>
        {children}
      </div>
    </div>
  );
}
