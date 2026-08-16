Selectable pastel pill row, straight from the moodboard's "Choose Your Visitor Type" list. Selection reads as a double ring (cream gap + ink ring) plus a ✓, so it survives on any pastel.

```jsx
<OptionCard label="General Visitor" tone="coral" selected onClick={pick} />
<OptionCard label="Student" description="Bring your student ID" tone="peach" onClick={pick} />
```

Cycle tones in list order — coral, peach, blue, purple, green — never one colour repeated down the stack. When the options are neutral (time slots, quantities) use `tone="plain"`, so pastel stays reserved for choices that mean a category.
