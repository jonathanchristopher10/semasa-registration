Dropdown in the brand field shell — same white pill-rounded box as TextField, with a small ▾ chevron at the right.

```jsx
<SelectField label="Purpose of Visit" required options={["Food","Fashion","Creative","Media","Others"]} value={purpose} onChange={e => setPurpose(e.target.value)} />
```

Placeholder text renders in muted grey until a value is chosen. Keep option lists short; for 3–6 visual choices prefer OptionCard rows instead.
