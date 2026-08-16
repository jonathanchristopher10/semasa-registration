# SEMASA PIKNIK 2026 — Visitor Registration Web App

A playful, mobile-first visitor-registration web app for **SEMASA PIKNIK 2026**.
Visitors register their details, pick their day and slot, confirm, and receive a
scannable QR e-ticket to show at the entrance.

- **Event:** SEMASA PIKNIK 2026 (in collaboration with myBCA)
- **Dates:** 26 – 28 June 2026
- **Venue:** Lapangan Banteng, Jakarta Pusat
- **Highlights:** Free Entry · Food Market · Creative Market · Fashion Market

Built to the **v2 design system** in [`design-system/`](design-system/). The UI is
**adaptive**: full-screen on phones, and centred inside an outlined phone frame on
tablet/desktop.

> **Scope:** Frontend MVP. It runs with **no backend** — the QR ticket is issued
> locally in the browser. A real backend drops in by setting one env var; see
> [Backend integration](#backend-integration-later). No UI code changes.

---

## Quick start

```bash
npm install
npm run dev       # dev server (Vite prints the local URL, usually http://localhost:5173)
npm run build     # production build to dist/
npm run preview   # preview the production build
```

Requires Node 18+.

---

## The flow (5 screens)

| Route | Screen | What happens |
|---|---|---|
| `/` | Landing | Hero lockup, myBCA credit, event card (date, venue, four markets), "Let's Get Started!". |
| `/register` | Personal Data | Full name, email, phone, date of birth. Next stays disabled until all four validate. |
| `/visit` | Visit Details | Day (26–28 June), a time slot, and Purpose of Visit (Food, Fashion, Creative, Media, Others). |
| `/confirm` | Confirmation | Summary of everything; each row's **Edit** jumps back to the right step, data preserved. |
| `/ticket` | E-Ticket | "You're all set!", a scannable QR, ticket id `SP26-XXXXXX`, and an Open-in-Maps link. |

Form state is shared through React context and mirrored to `sessionStorage`, so a
mid-flow refresh doesn't lose what was typed. `/ticket` is only reachable after a
confirmed registration.

**Optional visitor-type step.** The moodboard's "Choose Your Type" step is built
(`src/pages/VisitorType.jsx`) but hidden. Flip `SHOW_VISITOR_TYPE` to `true` in
[`src/flow.js`](src/flow.js) to put it back — step labels, numbering and the
Confirmation edit links all follow automatically.

---

## Tech stack

- **React 18 + Vite** — app framework and build tool.
- **react-router-dom** — one route per screen.
- **qrcode.react** — renders a real, scannable QR on the ticket screen.
- **The design system** in `design-system/` — CSS design tokens + React
  components. No Tailwind, no CSS framework; styling is tokens + component styles.

---

## Project structure

```
semasa-landing/
├── design-system/            # v2 design system (source of truth)
│   ├── styles.css            # entry stylesheet — @imports all tokens
│   ├── tokens/               # colors, typography, spacing, shape, motion, fonts
│   ├── components/           # Button, Card, TextField, StepHeader, QrTicket, …
│   ├── guidelines/           # foundation specimen cards
│   └── readme.md             # full design-system documentation — read this
├── public/
│   └── assets/               # icons, illustrations, hero art (served at /assets/…)
├── src/
│   ├── main.jsx              # entry; imports design-system/styles.css then app.css
│   ├── App.jsx               # router + RegistrationProvider
│   ├── flow.js               # the ordered step list + SHOW_VISITOR_TYPE flag
│   ├── components/
│   │   ├── AppShell.jsx       # adaptive phone frame + decorative background
│   │   ├── StepLayout.jsx     # Screen + StepHeader wrapper for step routes
│   │   └── QrTicket.jsx       # e-ticket card with a real qrcode.react QR
│   ├── context/
│   │   └── RegistrationContext.jsx   # shared form state + sessionStorage
│   ├── pages/                # Landing, PersonalData, VisitDetail, VisitorType, Confirmation, Ticket
│   ├── services/
│   │   └── registrationService.js    # the backend seam (see below)
│   ├── lib/                  # asset() path helper, useStepNav hook
│   └── styles/app.css        # adaptive shell + hover/press motion
├── index.html
└── vite.config.js
```

The app imports design-system components directly from `design-system/components/…`,
so the design system stays the single source of truth for look and behaviour.

---

## Adaptive layout

One column, always. The breakpoint lives in `src/styles/app.css`:

- **< 600px (phones):** the app fills the viewport — no frame, no faux status bar.
- **≥ 600px (tablet/desktop):** a centred `430 × 900` outlined phone frame on the
  cream background, with the faux status bar and decorative stickers around it.

---

## Backend integration (later)

Every submission goes through one function — `submitRegistration` in
[`src/services/registrationService.js`](src/services/registrationService.js). Today
it issues the ticket locally. To connect a backend:

1. Add `VITE_API_URL=https://your-api.example.com` to a `.env` file.
2. That's it — `submitRegistration` automatically POSTs to `${VITE_API_URL}/registrations`
   and uses the ticket the server returns.

The UI depends only on the `Registration` / `TicketResult` shapes (documented at the
top of that file) and this one function, so no screen code changes. The QR currently
encodes a compact JSON payload of the ticket; point it at a check-in URL once the
backend can verify scans.

---

## Design system

`design-system/readme.md` is the full spec — voice, colour, type, shape, motion,
iconography. In short: warm cream page, six pastels plus coral for actions, Hanken
Grotesk (display) + Nunito (body), heavy ink outlines, generous radii, short bouncy
motion, illustrated PNG stickers rather than an icon font. The design system is also
packaged as an agent skill (`design-system/SKILL.md`).
