# UI kit — SEMASA PIKNIK 2026 visitor registration

Mobile-first web app, presented inside `PhoneFrame` on desktop. `index.html` is a
click-through of the whole flow: pick a visitor type, fill in your details, choose a
day and slot, review, get a QR e-ticket.

## Screens

| File | Route in the real app | Notes |
|---|---|---|
| `LandingScreen.jsx` | `/` | Hero lockup, myBCA credit, character scatter, event card with the four market chips, CTA, and two reassurance lines. No map — see below. |
| `VisitorTypeScreen.jsx` | `/type` | Five `OptionCard` rows: General Visitor, Student, VIP / VVIP, Media, Exhibitor. From the moodboard's step 1. **Currently hidden** — flip `SP_SHOW_VISITOR_TYPE` to `true` in `App.jsx` to put it back; step labels, numbering and the Confirmation Edit links all follow automatically. |
| `PersonalDataScreen.jsx` | `/register` | Full name, email, phone, date of birth. Next stays disabled until all four validate. |
| `VisitDetailScreen.jsx` | `/visit` | Visiting date clamped to 2026-06-26 … 2026-06-28, a four-slot time picker (moodboard step 3), and Purpose of Visit — exactly Food, Fashion, Creative, Media, Others. |
| `ConfirmationScreen.jsx` | `/confirm` | `SummaryRow` list; every row's Edit link jumps back to the step that owns the field, data preserved. |
| `TicketScreen.jsx` | `/ticket` | "You're all set!", `QrTicket` with a stand-in QR pattern, mascot, and a link to register someone else. |
| `App.jsx` | routes + state | Holds the `Registration` shape from the repo README in one `useState`; `makeTicketId()` mirrors `SP26-XXXXXX`. |

## Where this departs from the repo README

- **A visitor-type step was added** as step 1, because the moodboard's flow starts there and the five types change what staff do at the gate. The README's four-screen flow skips it.
- **A visit-time slot picker** was added on Visit Details for the same reason (moodboard step 3 shows "Visit Time 10:00 – 13:00"). It is pastel `OptionCard`s rather than a dropdown — four choices read faster as buttons.
- **The Google Maps embed was dropped from the landing screen.** At registration nobody is travelling yet, so an iframe map costs a third-party load, a scroll and a dead 170px band to answer a question that isn't being asked. The venue name and dates stay in the event card, and the map moved to the **e-ticket screen** as a "Lapangan Banteng, Jakarta Pusat — Open in Maps" link: that's the moment a visitor actually needs directions, and a link opens their own maps app with live traffic instead of a static frame. Under the CTA, the space now carries the two things that reduce drop-off: "Free entry · Takes about a minute" and "Your QR ticket lands in your phone".
- **The visitor-type step is hidden behind one flag** rather than deleted, so it can be re-enabled without touching any screen.
- **The landing hero is composed from cut-out artwork** rather than placing `PAGE1_BACKGROUND.png` whole. The baked-in "Let's Get Started!" button in that PNG cannot be a real tap target, and the flat image can't reflow; the pieces (wordmark, mascot, characters, icons) live in `assets/` and rebuild the same composition responsively.
- **CTA labels are ink, not white.** The finished artwork draws them that way.

## Not built (absent from the sources)

Sign-in, ticket lookup, staff check-in scanner, and any backend state. The repo is a
frontend-only MVP; `submitRegistration` is faked in `App.jsx`.
