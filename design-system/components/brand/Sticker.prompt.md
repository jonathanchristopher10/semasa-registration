Scatters the real illustrated artwork (sparkles, flower, mascot, characters) behind content. Decoration only — `aria-hidden`, no pointer events.

```jsx
<div style={{ position: "relative" }}>
  <Sticker name="starYellow" size={26} top={18} left={24} rotate={-8} />
  <Sticker name="mascot" size={180} bottom={-6} right={12} />
  …
</div>
```

Rules: 3–5 stickers per screen maximum, biased to the corners; never behind text at full size; never invent new stickers — use the PNGs in `assets/`.
