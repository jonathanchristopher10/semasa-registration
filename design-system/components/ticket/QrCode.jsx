import React from "react";

/* Deterministic block pattern standing in for a scannable QR code.
   Swap for qrcode.react in production — the visual footprint is identical. */
function spHash(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}

export function QrCode({ value = "SP26", size = 200, modules = 21, quietZone = 10 }) {
  const cells = [];
  let seed = spHash(value);
  const rnd = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
  const finder = (r, c) =>
    (r < 7 && c < 7) || (r < 7 && c >= modules - 7) || (r >= modules - 7 && c < 7);
  for (let r = 0; r < modules; r++) {
    for (let c = 0; c < modules; c++) {
      let on;
      if (finder(r, c)) {
        const rr = r < 7 ? r : modules - 1 - r;
        const cc = c < 7 ? c : modules - 1 - c;
        const ring = Math.min(rr, cc);
        on = ring === 0 || ring >= 2;
      } else {
        on = rnd() > 0.5;
      }
      if (on) cells.push(r * modules + c);
    }
  }
  const step = (size - quietZone * 2) / modules;
  return (
    <div role="img" aria-label={"QR code for " + value} style={{
      width: size, height: size, background: "var(--white)", padding: quietZone,
      boxSizing: "border-box", position: "relative"
    }}>
      {cells.map(i => (
        <span key={i} style={{
          position: "absolute",
          left: quietZone + (i % modules) * step,
          top: quietZone + Math.floor(i / modules) * step,
          width: Math.ceil(step), height: Math.ceil(step),
          background: "var(--ink-900)"
        }} />
      ))}
    </div>
  );
}
