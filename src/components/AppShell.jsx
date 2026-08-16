import React from "react";
import { Outlet } from "react-router-dom";

/* Mobile-only web shell. The app is a plain website opened in a phone browser:
   full-screen on phones, and a centred mobile-width column on larger screens
   (see src/styles/app.css). No phone frame, no faux status bar. */
export function AppShell() {
  return (
    <div className="sp-shell">
      <div className="sp-app">
        <div className="sp-scroll">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
