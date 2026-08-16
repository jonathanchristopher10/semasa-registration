import React from "react";

/* Padded, scrollable screen body used inside PhoneFrame. */
export function Screen({ children, padded = true, gap = "var(--gap-section)", align = "stretch", style }) {
  return (
    <div style={{
      position: "relative", minHeight: "100%", display: "flex", flexDirection: "column",
      alignItems: align, gap,
      padding: padded ? "8px var(--gutter-screen) 28px" : 0,
      ...style
    }}>{children}</div>
  );
}
