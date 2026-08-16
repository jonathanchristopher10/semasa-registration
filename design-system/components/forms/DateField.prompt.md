Native date input in the brand field shell, closed by the illustrated calendar icon from the hero artwork (`assets/icons/calendar.png`).

```jsx
<DateField label="Visiting Date" required min="2026-06-26" max="2026-06-28" hint="Event runs 26–28 June 2026" value={date} onChange={e => setDate(e.target.value)} />
```

Pass `iconSrc` when the page sits in a subfolder. Use for Date of Birth and Visiting Date; never fake a date picker.
