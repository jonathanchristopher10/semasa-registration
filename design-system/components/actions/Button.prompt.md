The pill CTA. Coral fill, 2.5px ink outline, ink (never white) label in Hanken Grotesk Bold; the blue arrow disc marks the forward action in a flow.

```jsx
<Button variant="primary" size="lg" withArrow fullWidth onClick={next}>Let's Get Started!</Button>
<Button variant="secondary" size="md" withArrow>Learn More</Button>
<Button variant="ghost" size="sm">Edit</Button>
<Button variant="primary" size="lg" fullWidth disabled>Next</Button>
```

Rules: one primary per screen; `withArrow` only on the forward step; disabled state is 45% opacity, never a grey fill. Hover lifts 1px, press sinks 1px (`.sp-btn` rules in the card CSS show the pattern).
