# SEMASA PIKNIK 2026 — Design System

A design system for **SEMASA PIKNIK 2026**, a three-day outdoor festival in Jakarta
(26–28 June 2026, Lapangan Banteng, in collaboration with **myBCA**), and for the
**visitor registration web app** that issues its free QR e-tickets.

The festival itself is the product: free entry, a Food Market, a Creative Market and a
Fashion Market. The app is a short mobile-first flow — say who you are, pick your day,
get a QR code to show at the gate.

## Sources this was built from

| Source | What was taken from it |
|---|---|
| `https://github.com/jonathanchristopher10/semasa-registration` (branch `master`) | The whole brief: `README.md` (flow, data model, colour and type tokens, component list), `assets/PAGE1_BACKGROUND.png` (finished landing artwork, 1620×2875), `assets/ICON/*` (flower, purple star, yellow star), `reference/moodboard.jpeg`, `reference/page_flow.jpeg`. |
| `reference/moodboard.jpeg` (in this project) | Palette hexes, font pairing, button and field shapes, the five-step flow, the "Choose Your Visitor Type" step, mood keywords, illustration style. |
| `reference/page_flow.jpeg` (in this project) | The original five-screen wireframe. |

There is **no application source code yet** — the repo is a brief plus artwork. Every
value here comes from the moodboard, the README's token tables, or direct measurement
of the hero PNG. Where the two disagree, the drawn artwork wins and the difference is
noted below.

Anyone extending this system should read the repository above first: the README there
is the product spec, and the moodboard is the visual ground truth.

## Index

| Path | What's in it |
|---|---|
| `styles.css` | The one stylesheet consumers link. `@import`s everything below. |
| `tokens/` | `colors.css`, `typography.css`, `spacing.css`, `shape.css`, `motion.css`, `base.css`, `fonts.css`. |
| `assets/illustrations/` | Wordmark, hero lockup, myBCA badge, mascot, two visitor characters, green car, cactus-and-flower. |
| `assets/icons/` | calendar, pin, ticket, foodtruck, cookie, bag, flower, star-yellow, star-purple. |
| `assets/PAGE1_BACKGROUND.png` | The untouched source hero artwork. |
| `assets/ICON/` | The untouched source icon PNGs. |
| `components/` | React primitives, grouped by concern (below). |
| `guidelines/` | Foundation specimen cards — colour, type, spacing, shape, motion, brand. |
| `ui_kits/registration/` | Click-through recreation of the registration app, plus its own README. |
| `reference/` | The moodboard and page-flow images from the repo. |
| `SKILL.md` | Agent-skill entry point. |
| `github.md` | Upstream repo association and sync record. |

### Components

`actions/` — **Button**, **IconDisc**
`forms/` — **TextField**, **SelectField**, **DateField**, **OptionCard**
`display/` — **Card**, **Tag**, **InfoChip**, **SummaryRow**
`brand/` — **Logo**, **Sticker** (+ the `STICKERS` path map)
`navigation/` — **StepHeader**, **ScreenHeader**
`layout/` — **PhoneFrame**, **Screen**
`ticket/` — **QrTicket**, **QrCode**

Every component has a sibling `.d.ts` (props contract) and `.prompt.md` (one-line
"what & when" plus a usage example).

**Intentional additions** — families the sources imply but don't name outright:
`IconDisc` (the arrow badge drawn inside every CTA), `Sticker` (the decorative artwork
scatter the moodboard calls for), `Screen` (the padded column inside `PhoneFrame`),
`ScreenHeader` (the title + subtitle block every step screen repeats), `QrCode`
(stand-in for `qrcode.react`, which the app will use in production).

## Content fundamentals

**Voice: a friendly host, not an institution.** Copy speaks to the visitor as *you*,
and the app speaks as *we* only when it needs something ("We only need the basics to
make your ticket"). Never "the user", never "kindly", never passive voice.

**Casing.** Screen titles are Title Case and short — "Personal Data", "Visit Details",
"Confirmation", "Choose Your Type". Field labels are Title Case ("Full Name", "Purpose
of Visit"). Everything else is sentence case. Micro-labels inside tags and step pills
are UPPERCASE with 0.06em tracking.

**Exclamation marks are rationed.** They belong to arrival and celebration only:
"Let's Get Started!", "You're all set!". A form label or an error never gets one.

**Sentence length.** One idea per line, under twelve words. Subtitles explain the
*why* of the step: "So we know how to welcome you at the gate.", "Pick your day and
the slot you'll walk in.", "Please check your details — the QR is made from this."

**Errors are light, specific, and blame nobody.** "That email looks off", "Digits
only, 8–16 of them". No "invalid", no "failed", no red banners.

**Buttons say the outcome**, not the mechanism: "Let's Get Started!", "Next",
"Confirm", "Add to Wallet", "Register someone else". "Submit" never appears.

**Fixed strings that must not be paraphrased**: the event name *SEMASA PIKNIK 2026*;
the dates *26 – 28 June 2026*; the venue *Lapangan Banteng, Jakarta Pusat*; the
partner credit *in collaboration with myBCA*; the four highlights *Free Entry, Food
Market, Creative Market, Fashion Market*; the Purpose of Visit options *Food, Fashion,
Creative, Media, Others*; ticket ids as *SP26-XXXXXX*.

**Emoji: never.** The brand's warmth comes from illustration, so the copy stays plain
text. Unicode glyphs are used as UI marks (→ ← ✓ ▾), not as decoration in sentences.

**Vibe words from the moodboard** — playful, friendly, colorful, fun, youthful,
inclusive, vibrant, approachable. Bilingual reality: the audience is Indonesian, the
interface copy is English; keep sentences simple enough to read either way.

## Visual foundations

**Colour.** A warm cream page (`#FEF7E9` top, `#FEEDCF` bottom — a barely-there
vertical warm-up, never white, never a photo) carries six pastels (pink `#FFB6C1`,
peach `#FFE0B2`, green `#A7E0A1`, blue `#B3D7FF`, purple `#CDB4FF`, lemon `#FFF6CC`)
plus one hot coral for action. The moodboard names the CTA `#FF6B6B`; the finished
artwork draws it `#FF8296`, so `--primary` is `#FF8296` and `#FF6B6B` becomes the
hover/press deepening. Blue `#028CFA` is reserved for the arrow disc and links — it is
the myBCA blue and shouldn't be spent elsewhere. Ink `#222222` does all outlines and
all body text; grey `#6D6D6D` is the only secondary text colour. Pastels never carry
text meaning on their own — a category is a pastel *plus* its word.

**Type.** Two families, both from Google Fonts: **Hanken Grotesk** for display (screen
titles, button labels, tight two-line info chips; 700–800, −0.01em tracking) and
**Nunito** for everything read as text (labels 700/14px, input values 600/17px, body
400/15px, captions 600/12px). The scale is 34 / 28 / 22 / 18 / 17 / 15 / 14 / 12.
Nothing smaller than 12px. The bubble-letter wordmark is **artwork, not type** — no
font reproduces it, so place `assets/illustrations/logo-wordmark.png`.

**Shape and edge.** This is a sticker system: everything is an outlined, heavily
rounded object. 2px ink outlines on fields, 2.5px on cards and buttons, 3px on the
phone frame and the e-ticket, 1px hairlines (`rgba(34,34,34,.14)`) for dividers inside
a card. Radii: chips 12, inputs 16, cards 24, hero cards 32, phone 44, buttons fully
round. No square corners anywhere.

**Shadows are the exception, not the system.** The outline carries the edge, so the
default card has no shadow at all. `--shadow-soft` (0 8px 24px rgba(34,34,34,.08)) is
for a panel genuinely floating above other content; `--shadow-lift` only for the
desktop phone frame. No inner shadows, no glows, no coloured shadows.

**Backgrounds.** Flat cream, plus scattered illustrated stickers — sparkles, a flower,
the cactus, the mascot, two visitors, a green car — cut from the hero artwork and
placed behind content at the corners, 3–5 per screen, rotated ±20°. No gradients as
decoration (the page warm-up is the only one), no patterns, no textures, no grain, no
photography anywhere in the system.

**Imagery vibe.** Hand-drawn vector illustration: thick black outlines, flat pastel
fills, small white speculars, no gradients inside the artwork, warm-leaning palette.
Characters are mid-action (waving, walking) and cropped to the figure. Never mix in
photography or 3D.

**Motion.** Short and bouncy. 120ms on press, 200ms on colour, 320ms for anything that
grows; `--ease-pop` (`cubic-bezier(.34,1.56,.64,1)`) for growth, `--ease-out` for
colour. The step pill expanding from a disc into a labelled pill is the flow's
signature move, and the e-ticket pops in from 92% scale. Nothing slides horizontally,
nothing fades slowly, nothing loops.

**States.** Hover lifts 1px and deepens coral to `#FF6B6B`; secondary buttons warm to
`#FEEDCF`. Press sinks 1px — no scale-down, no ripple. Selection is a double ring
(4px cream gap, then a 2px ink ring) plus a ✓, so it survives on any pastel fill.
Focus keeps the browser ring; error recolours the field outline coral and prints a
12px bold message. Disabled is 45% opacity of the real button — never a grey fill,
because the shape must still read as the thing you're about to be allowed to press.

**Layout.** Mobile-first at 390–430px, 20px gutters, 14px between fields, 24px between
blocks, 48px minimum tap target. On desktop the app sits centred in a 430×900 phone
frame on cream; nothing is fixed or sticky, and the primary CTA sits at the bottom of
the screen's own flow rather than pinned. Content is one column, always.

**Transparency and blur: none.** No frosted panels, no scrims, no protection
gradients. Text sits on flat cream or flat white; if artwork would collide with text,
the artwork moves or goes behind the card.

**Cards** are the unit of layout: white (or a pastel tint), 24px radius, 2.5px ink
outline, 16–20px padding, no shadow. The e-ticket is the one embellished card — a
dashed perforation with two punched notches and a cream detail grid below.

## Iconography

There is **no icon font and no icon library**. The icon set is the festival's own
illustrated PNGs, cut from the hero artwork and background-keyed to transparency:
`calendar`, `pin`, `ticket`, `foodtruck`, `cookie`, `bag`, plus the decorative
`flower`, `star-yellow`, `star-purple` shipped in the repo. They are full-colour,
thick-outlined drawings — closer to stickers than to UI icons — used at 20–34px beside
a label, or 40–200px as background decoration.

Because that set is illustrative, small functional marks are **Unicode characters set
in the brand fonts**, not SVG: → and ← in the arrow disc, ✓ for completion and
selection, ▾ for the select chevron, ● ▰ in the faux status bar, and `*` in coral for
required fields. This keeps the system honest — nothing here pretends to be a
line-icon library it doesn't have.

Rules: never draw a new icon in SVG to fill a gap; either use a PNG from `assets/`, a
Unicode mark, or a word. Never use emoji. If a genuinely new functional icon is
needed, ask for artwork drawn in the festival's illustration style — a CDN line-icon
set (Lucide, Heroicons) would clash with the thick-outline look and none is used here.

## Known substitutions and gaps

- **Fonts load from Google Fonts** (`tokens/fonts.css`). The repo ships no binaries;
  Hanken Grotesk and Nunito are the exact families the moodboard names, so this is a
  hosting substitution, not a typeface substitution. Send the licensed files if you
  want them self-hosted.
- **No logo file exists** in the source. The wordmark in `assets/illustrations/` was
  cut from the supplied hero artwork; nothing was redrawn, and no mark was invented.
- **The mascot referenced as `assets/ICON/BERUANG.png` in the repo README is missing
  from the repo.** The mascot artwork here is cropped from the hero PNG, which shows
  only the head-and-paws peek pose. A full-body mascot needs the original file.
- **QR codes are a stand-in pattern** (`QrCode`), deterministic but not scannable.
  Production uses `qrcode.react` at the same size and quiet zone.
- **Cut-out artwork is bitmap.** The characters, icons and wordmark are cropped from a
  1620×2875 PNG, so they're sharp at the sizes used here but not infinitely scalable.
  Vector or layered originals would be better.
