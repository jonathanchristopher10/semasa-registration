# SEMASA PIKNIK 2026 — Visitor Registration Web App

A playful, mobile-first visitor-registration web app for **SEMASA PIKNIK 2026**.
Visitors register their details, choose their visit info, confirm, and receive a
QR e-ticket to show at the entrance.

- **Event:** SEMASA PIKNIK 2026 (in collaboration with myBCA)
- **Dates:** 26–28 June 2026
- **Venue:** Lapangan Banteng, Jakarta Pusat
- **Highlights:** Free Entry · Food Market · Creative Market · Fashion Market

> **Scope:** This is a **frontend-only MVP**. It runs completely without a
> backend — the QR e-ticket is generated locally in the browser. The code is
> deliberately structured so a real backend can be connected later by changing a
> single service module (see [Backend integration](#backend-integration-later)).

---

## Table of contents
- [Tech stack](#tech-stack)
- [Design system](#design-system)
- [Assets](#assets)
- [App flow (5 screens)](#app-flow-5-screens)
- [Data model](#data-model)
- [Architecture](#architecture)
- [Project structure](#project-structure)
- [Getting started](#getting-started)
- [Backend integration (later)](#backend-integration-later)
- [Validation & accessibility](#validation--accessibility)

---

## Tech stack

| Concern | Choice | Why |
|---|---|---|
| Framework | **React 18 + Vite** | Fast dev server, tiny config, instant builds. |
| Language | **TypeScript** | Defines the `Registration` data contract now, so the backend swap later is type-safe. |
| Styling | **Tailwind CSS** | Quick to match the pastel/playful look; utility classes keep components readable. |
| Routing | **React Router** | One route per screen (`/`, `/register`, `/visit`, `/confirm`, `/ticket`). |
| Shared state | **React Context + `sessionStorage`** | Form data persists across steps and survives a page refresh. |
| QR code | **`qrcode.react`** | Renders the QR client-side; no backend required. |
| Map | **Google Maps embed `<iframe>`** | Uses `output=embed`, so **no API key** is needed. |
| Fonts | **Hanken Grotesk** (display) + **Nunito** (body) | Loaded from Google Fonts. |

Install:
```bash
npm create vite@latest . -- --template react-ts
npm install react-router-dom qrcode.react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

---

## Design system

Follow `reference/moodboard.jpeg`. The vibe is **playful, friendly, colorful,
fun, youthful, inclusive, vibrant, approachable**.

### Colors
Expose these as Tailwind theme tokens (e.g. `theme.extend.colors`).

| Token | Hex | Usage |
|---|---|---|
| `pink` | `#FFB6C1` | Soft accents, backgrounds |
| `peach` | `#FFE0B2` | Backgrounds, cards |
| `green` | `#A7E0A1` | Accents, tags |
| `blue` | `#B3D7FF` | Accents, tags |
| `purple` | `#CDB4FF` | Accents, tags |
| `cream` | `#FFF6CC` | Backgrounds |
| `primary` | `#FF6B6B` | **Primary buttons / CTAs** (pill shape) |
| `teal` | `#4ECDC4` | Secondary accents |
| `orange` | `#FF9F1C` | Highlights |
| `ink` | `#222222` | Body text, outlines |
| `muted` | `#6D6D6D` | Secondary text |

Base page background: warm cream (`#FDF6E9`-ish, matching `PAGE1_BACKGROUND.png`).

### Typography
- **Display / headings:** Hanken Grotesk (bold, rounded feel). Used for screen
  titles like "Personal Data", "You're all set!".
- **Body / inputs / labels:** Nunito.

```html
<link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;600;700;800&family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
```

### Shape & components
- **Rounded everything:** large border-radius on cards (~24px) and inputs (~16px).
- **Buttons are pills** (fully rounded) with a small circular arrow icon on the
  right, matching the moodboard "Register Now!" / "Get Started!" buttons.
  Primary = `#FF6B6B` fill, white text.
- **Inputs** have a light fill, subtle border, an optional leading icon, and a
  placeholder like "Full Name".
- Scatter decorative **sparkles/stars and flowers** subtly in the background
  (see [Assets](#assets)); keep them behind content, low opacity where needed.
- Generous whitespace, soft shadows, no harsh edges.

---

## Assets

All assets live in `assets/`. Copy the ones you use into `public/` (or `src/assets/`)
so Vite can serve them.

| File | Description | Where to use |
|---|---|---|
| `assets/PAGE1_BACKGROUND.png` | Finished mobile hero: "Welcome to SEMASA PIKNIK 2026", event info card, mascot, and a "Let's Get Started!" button baked in. Tall portrait (1620×2875). | **Page 1 (Landing)** — use as the hero. See landing note below. |
| `assets/ICON/BERUANG.png` | The mascot bear (waving, blue cap). | Decorative accent on any screen; e.g. success screen, empty areas. |
| `assets/ICON/Flower icon.png` | Flower illustration. | Background decoration. |
| `assets/ICON/PURPLESTAR.png` | Purple sparkle/star. | Background decoration. |
| `assets/ICON/YELLOW STAR.png` | Yellow sparkle/star. | Background decoration. |

> **Landing hero note:** `PAGE1_BACKGROUND.png` already includes a
> "Let's Get Started!" button in the artwork. Place a **transparent, tappable
> button** over that region so tapping it routes to `/register`, **or** crop the
> button out of the image and render a real HTML button beneath the hero. Either
> way the Google Map goes directly below the hero on the landing screen.

---

## App flow (5 screens)

Mobile-first. On desktop, render the whole app **centered inside a phone-shaped
frame** (max width ~430px, rounded corners, soft shadow) on the cream background.

A persistent step indicator (steps 2–4) is optional but on-brand — small
numbered pills like the moodboard (`Personal Data`, `Visit Details`,
`Confirmation`). The landing and ticket screens are full-bleed.

### Page 1 — Landing (`/`)
- **Purpose:** Welcome visitors and start registration.
- **Content:**
  - Hero from `PAGE1_BACKGROUND.png` (title, event date/venue, mascot).
  - **Google Map** of Lapangan Banteng, Jakarta Pusat (embedded iframe).
  - **Get Started** button → routes to `/register`.
- **Map embed:**
  ```html
  <iframe
    title="Lapangan Banteng, Jakarta Pusat"
    src="https://www.google.com/maps?q=Lapangan+Banteng+Jakarta+Pusat&output=embed"
    width="100%" height="200" style="border:0; border-radius:16px;"
    loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  ```

### Page 2 — Personal Data (`/register`)
- **Purpose:** Collect the visitor's identity.
- **Fields:**
  - Full Name — text, required.
  - Email Address — email, required, valid format.
  - Phone Number — tel, required, digits (Indonesian format friendly).
  - Date of Birth — date, required.
- **Nav:** **Next** → `/visit`. Disabled/invalid until required fields pass.

### Page 3 — Visit Detail (`/visit`)
- **Purpose:** Capture visit info.
- **Fields:**
  - Visiting Date — date, required (constrain to 2026-06-26 … 2026-06-28).
  - Purpose of Visit — **dropdown**, required. Options **exactly**:
    `Food`, `Fashion`, `Creative`, `Media`, `Others`.
- **Nav:** **Next** → `/confirm`.

### Page 4 — Confirmation (`/confirm`)
- **Purpose:** Let the visitor review and fix their info before generating the ticket.
- **Content:** A summary card listing every field:
  Name, Email, Phone, Date of Birth, Visiting Date, Purpose of Visit.
- **Editing:** Each field (or a section) has an **Edit** control that routes back
  to the relevant screen (`/register` or `/visit`) with **all previously entered
  data preserved** (that's what the shared context is for). Returning re-lands on
  `/confirm`.
- **Nav:** **Confirm / Next** → calls `submitRegistration(...)` then routes to `/ticket`.

### Page 5 — QR E-Ticket (`/ticket`)
- **Purpose:** Deliver the e-ticket.
- **Content:**
  - Heading: **"You're all set!"**
  - Sub: "Show this QR code at the entrance."
  - The **QR code** (rendered with `qrcode.react`) encoding the ticket payload
    (see [Data model](#data-model)).
  - Mascot accent (`BERUANG.png`).
- If a visitor lands here with no registration data (e.g. direct URL), redirect
  to `/`.

---

## Data model

Single source of truth — keep in `src/types.ts`:

```ts
export type PurposeOfVisit = "Food" | "Fashion" | "Creative" | "Media" | "Others";

export interface Registration {
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth: string;   // ISO yyyy-mm-dd
  visitDate: string;     // ISO yyyy-mm-dd
  purpose: PurposeOfVisit;
}

export interface TicketResult {
  ticketId: string;      // e.g. "SP26-XXXXXX"
  issuedAt: string;      // ISO timestamp
  registration: Registration;
}
```

The QR encodes a JSON string of the `TicketResult` (or a compact URL containing
the `ticketId`). For the MVP, encoding the JSON payload is fine.

---

## Architecture

- **Routing:** `react-router-dom` with the five routes above.
- **Shared form state:** a `RegistrationContext` provider wraps the app. It holds
  a partial `Registration`, exposes `update(patch)` and `reset()`, and mirrors
  state to `sessionStorage` so a refresh doesn't lose progress.
- **Backend-ready seam:** all "submission" goes through **one** module,
  `src/services/registrationService.ts`:

  ```ts
  import type { Registration, TicketResult } from "../types";

  export async function submitRegistration(data: Registration): Promise<TicketResult> {
    const apiUrl = import.meta.env.VITE_API_URL;

    // Backend path (used automatically once VITE_API_URL is set):
    if (apiUrl) {
      const res = await fetch(`${apiUrl}/registrations`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Registration failed");
      return res.json();
    }

    // MVP path (no backend): generate the ticket locally.
    return {
      ticketId: "SP26-" + Math.random().toString(36).slice(2, 8).toUpperCase(),
      issuedAt: new Date().toISOString(),
      registration: data,
    };
  }
  ```

  **UI never calls `fetch` directly.** When the backend is ready, only this file
  changes; screens stay untouched.

---

## Project structure

```
semasa-landing/
├── assets/                     # source brand assets (provided)
│   ├── PAGE1_BACKGROUND.png
│   └── ICON/
├── public/                     # assets copied here for the app to serve
├── src/
│   ├── assets/                 # (optional) imported images
│   ├── components/
│   │   ├── PhoneFrame.tsx       # centers the app in a phone frame on desktop
│   │   ├── PillButton.tsx       # primary CTA button
│   │   ├── TextField.tsx        # styled input + label + error
│   │   └── StepHeader.tsx       # numbered step indicator
│   ├── context/
│   │   └── RegistrationContext.tsx
│   ├── pages/
│   │   ├── Landing.tsx          # "/"
│   │   ├── PersonalData.tsx     # "/register"
│   │   ├── VisitDetail.tsx      # "/visit"
│   │   ├── Confirmation.tsx     # "/confirm"
│   │   └── Ticket.tsx           # "/ticket"
│   ├── services/
│   │   └── registrationService.ts
│   ├── types.ts
│   ├── App.tsx                  # routes + providers
│   └── main.tsx
├── index.html
├── tailwind.config.js
├── package.json
└── README.md
```

---

## Getting started

```bash
npm install
npm run dev      # start the dev server (Vite prints the local URL)
npm run build    # production build to dist/
npm run preview  # preview the production build
```

No environment variables are required for the MVP. The app runs and issues QR
tickets entirely client-side.

---

## Backend integration (later)

When the backend exists:

1. Add `VITE_API_URL=https://your-api.example.com` to a `.env` file.
2. That's it — `submitRegistration` automatically switches to the network path.
3. (Optional) Have the API return a real `ticketId`; the QR will encode it
   instead of local data. Consider encoding a check-in URL like
   `https://api.example.com/checkin/{ticketId}` so entrance staff can scan-to-verify.

Because the UI depends only on the `Registration`/`TicketResult` types and the
`submitRegistration` function, no screen code needs to change.

---

## Validation & accessibility

- **Required fields** on Personal Data and Visit Detail; disable **Next** until valid.
- **Email**: standard format check. **Phone**: digits only, reasonable length.
- **Dates**: use native date inputs; constrain Visiting Date to the event window.
- **Labels**: every input has an associated `<label>`; buttons have accessible names.
- **Mobile-first**: design at ~390–430px width; the phone frame only affects the
  desktop presentation, not the mobile layout.
- **Direct-URL safety**: `/ticket` (and ideally `/confirm`) redirect to `/` when
  required data is missing from context.
```
