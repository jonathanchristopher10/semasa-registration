Label/value line for the Confirmation screen's review card; `onEdit` adds the blue underlined Edit link that jumps back to the step that owns the field.

```jsx
<SummaryRow label="Full Name" value="Nadia Putri" onEdit={() => go("personal")} />
<SummaryRow label="Purpose" value="Creative" divider={false} />
```

Labels are 14px muted bold, values 17px ink bold. Keep the label column at 34%.
