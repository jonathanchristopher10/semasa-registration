import React from "react";
import { Outlet } from "react-router-dom";
import { asset } from "../lib/asset.js";

/* Adaptive presentation shell.
   - On phones: fills the viewport, no frame (see src/styles/app.css).
   - On desktop: a centred, outlined phone with a faux status bar.
   Decorative stickers sit behind the frame and only show on desktop. */
export function AppShell() {
  return (
    <div className="sp-shell">
      <img className="sp-bg" src={asset("assets/icons/star-yellow.png")} alt=""
        style={{ width: 44, top: "8%", left: "12%", transform: "rotate(-12deg)" }} />
      <img className="sp-bg" src={asset("assets/icons/star-purple.png")} alt=""
        style={{ width: 36, bottom: "14%", right: "14%", transform: "rotate(14deg)" }} />
      <img className="sp-bg" src={asset("assets/icons/flower.png")} alt=""
        style={{ width: 78, bottom: "6%", left: "8%" }} />

      <div className="sp-phone">
        <div className="sp-statusbar">
          <span>09:41</span>
          <span style={{ letterSpacing: "0.08em" }}>{"●●●  ▰"}</span>
        </div>
        <div className="sp-scroll">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
