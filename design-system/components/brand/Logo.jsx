import React from "react";

/* The SEMASA PIKNIK 2026 wordmark artwork. Never retype or redraw it. */
export function Logo({ src = "assets/illustrations/logo-wordmark.png", withWelcome = false, welcomeSrc = "assets/illustrations/hero-lockup.png", width = 300, alt = "SEMASA PIKNIK 2026" }) {
  return <img src={withWelcome ? welcomeSrc : src} alt={alt} style={{ width, height: "auto", display: "block" }} />;
}
