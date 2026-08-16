Outlined circular glyph disc — the arrow badge that sits at the right edge of SEMASA PIKNIK pill buttons, or a standalone back/next control.

```jsx
<IconDisc glyph="\u2192" tone="blue" size={30} />
<IconDisc glyph="\u2190" tone="cream" size={34} onClick={goBack} title="Back" />
```

Tones: `blue` (default, #028CFA with a yellow arrow, exactly as drawn in the hero), `cream`, `coral`, `green`. Always keeps the 2px ink outline. Renders a `<button>` only when `onClick` is passed.
