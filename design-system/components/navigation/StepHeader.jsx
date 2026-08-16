import React from "react";

/* Numbered pastel step pills — the moodboard's flow header. */
export function StepHeader({ steps = [], current = 0, onStepClick }) {
  const tones = ["var(--purple-200)", "var(--pink-200)", "var(--green-300)", "var(--blue-200)", "var(--lemon-100)"];
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, width: "100%" }}>
      {steps.map((label, i) => {
        const active = i === current;
        const done = i < current;
        return (
          <button
            key={label} type="button"
            onClick={onStepClick && (done || active) ? () => onStepClick(i) : undefined}
            aria-current={active ? "step" : undefined}
            title={label}
            style={{
              display: "flex", alignItems: "center", gap: 6,
              flex: active ? "1 1 auto" : "0 0 auto",
              minWidth: 0, padding: active ? "6px 12px 6px 6px" : 0,
              background: active ? tones[i % tones.length] : "transparent",
              border: "var(--stroke) solid " + (active || done ? "var(--border-ink)" : "rgba(34,34,34,.25)"),
              borderRadius: "var(--radius-pill)",
              cursor: onStepClick && (done || active) ? "pointer" : "default",
              overflow: "hidden",
              transition: "flex var(--dur-slow) var(--ease-pop), background var(--dur) var(--ease-out)"
            }}
          >
            <span style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              width: 24, height: 24, flex: "0 0 auto",
              borderRadius: "var(--radius-pill)",
              background: done ? "var(--border-ink)" : active ? "var(--surface-card)" : tones[i % tones.length],
              color: done ? "var(--surface-card)" : "var(--text-body)",
              border: active ? "var(--stroke-hair) solid var(--border-ink)" : "none",
              fontFamily: "var(--font-display)", fontWeight: "var(--weight-black)", fontSize: 12
            }}>{done ? "\u2713" : i + 1}</span>
            {active ? (
              <span style={{
                fontFamily: "var(--font-display)", fontWeight: "var(--weight-bold)", fontSize: 12,
                textTransform: "uppercase", letterSpacing: "var(--tracking-caps)",
                whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"
              }}>{label}</span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}
