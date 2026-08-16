Step indicator for the registration flow: the current step expands into a labelled pastel pill, completed steps collapse to an ink ✓ disc, upcoming steps to a pastel numbered disc.

```jsx
<StepHeader steps={["Visitor Type","Personal Data","Visit Details","Confirmation","E-Ticket"]} current={2} onStepClick={setStep} />
```

Labels are uppercase 12px. The expand/collapse is the flow's main bit of motion — keep `--ease-pop`.
