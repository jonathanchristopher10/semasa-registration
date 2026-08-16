The standard form field: bold Nunito label above a white, 16px-radius, ink-outlined input.

```jsx
<TextField label="Full Name" placeholder="Full Name" required value={name} onChange={e => setName(e.target.value)} />
<TextField label="Email Address" type="email" error="That email looks off" />
```

Fields are always full width inside the phone frame, stacked with `--gap-field` (14px). Error state recolours the outline coral and prints the message in 12px bold.
