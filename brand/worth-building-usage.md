# Worth Building — Design Tokens (Brand Core)

Acid chartreuse on near-black, with Brunson (bold condensed display) and Perfectly Nineties (editorial serif). Files in this set:

- `tokens.json` — W3C/DTCG design tokens (colors, semantic roles, typography, spacing, radius, elevation).
- `tokens.css` — the same tokens as CSS custom properties, plus a few ready-made text/button classes.

Prefix on every variable is `wb-` (Worth Building). Base black is `ink-800` (#1A1A1A), not pure black. Base green is `acid-500` (#7FFF00).

---

## Color

### Acid ramp (brand)
`50 F2FFDE · 100 E4FFBD · 200 CCFF85 · 300 B0FF4D · 400 97FF1A · 500 7FFF00 · 600 6BD900 · 700 54AB00 · 800 3D7D00 · 900 294F00`

500 is the hero. 400 is the hover state (slightly brighter). 600 is the pressed state. 800/900 are the *only* greens dark enough to use as text on light surfaces.

### Ink ramp (neutral)
`0 FFFFFF · 50 F5F5F4 · 100 E7E7E5 · 200 C9C9C6 · 300 A3A3A0 · 400 6E6E6B · 500 4A4A48 · 600 333331 · 700 262625 · 800 1A1A1A · 900 0D0D0D`

### Semantic roles
| Role | Token | Value |
|---|---|---|
| Default surface | `--wb-bg-default` | ink-800 |
| Raised surface | `--wb-bg-raised` | ink-700 |
| Brand fill | `--wb-bg-brand` | acid-500 |
| Primary text (on dark) | `--wb-text-primary` | white |
| Secondary/muted text (on dark) | `--wb-text-secondary` | ink-300 |
| Text on acid | `--wb-text-on-brand` | ink-800 |
| Green text on light | `--wb-text-brand-on-light` | acid-900 |
| Accent/link (dark only) | `--wb-text-accent` | acid-500 |
| Focus ring | `--wb-border-focus` | acid-500 |

---

## Accessibility — the one rule that matters

**#7FFF00 is a background/accent color, never body text on light.** Green-on-white sits at ~1.3:1 and is illegible. All ratios below are measured (WCAG 2.1).

| Pairing | Ratio | Rating |
|---|---|---|
| Acid-500 text on ink-800 | **13.43:1** | AAA |
| Ink-800 text on acid-500 | **13.43:1** | AAA |
| White text on ink-800 | **17.40:1** | AAA |
| Ink-300 (muted) text on ink-800 | **6.88:1** | AA |
| Acid-900 text on white | **9.49:1** | AAA |
| Acid-800 text on white | **5.08:1** | AA |
| White text on acid-500 | 1.30:1 | ✗ never |
| Acid-500 text on white | 1.30:1 | ✗ never |
| Acid-700 text on white | 2.92:1 | ✗ never |

Practical takeaways: on dark, use white for body and acid-500 for accents/links. On acid fills, use ink-800 text. On light, use ink-800 for body and acid-900 (not 500) if you need green text.

---

## Typography

Two families do the work: **Brunson** for anything loud (display, headings, buttons, labels) and **Perfectly Nineties** for anything you actually read (body, quotes, lead-ins). A mono is included for timestamps/metadata/captions.

| Role | Family | Size | Weight | Line | Tracking | Case |
|---|---|---|---|---|---|---|
| display-2xl | Brunson | 96px | 800 | 0.95 | -0.02em | UPPER |
| display-xl | Brunson | 72px | 800 | 0.96 | -0.02em | UPPER |
| display-lg | Brunson | 56px | 800 | 1.0 | -0.015em | UPPER |
| display-md | Brunson | 40px | 700 | 1.05 | -0.01em | — |
| heading-lg | Brunson | 32px | 700 | 1.1 | -0.01em | — |
| heading-md | Brunson | 24px | 700 | 1.15 | 0 | — |
| heading-sm | Brunson | 20px | 700 | 1.2 | 0 | — |
| lead | Perfectly Nineties *italic* | 24px | 400 | 1.5 | 0 | — |
| body-lg | Perfectly Nineties | 20px | 400 | 1.6 | 0 | — |
| body-md | Perfectly Nineties | 16px | 400 | 1.6 | 0 | — |
| body-sm | Perfectly Nineties | 14px | 400 | 1.55 | 0 | — |
| caption | Mono | 12px | 400 | 1.4 | 0.04em | UPPER |

Fallback stacks are baked into the tokens: Brunson → Arial Narrow → Helvetica Neue → sans-serif; Perfectly Nineties → Georgia → Times → serif. Set the tight negative tracking only on display sizes; leave body at 0.

---

## Spacing, radius, elevation

Spacing is a 4px base on a soft-geometric scale: `4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 128` px (tokens `space-1` … `space-12`).

Radius: `sm 4 · md 8 · lg 16 · xl 24 · pill 999`. The cover art leans bold and rounded — pill buttons and lg cards match that voice.

Elevation is tuned for dark UI (shadows are heavier than on light themes), plus a signature `--wb-shadow-glow` (acid glow) for hero and CTA emphasis. Use glow sparingly — it loses impact if everything glows.

---

## Quick start

```html
<link rel="stylesheet" href="tokens.css">
```

```css
.hero {
  background: var(--wb-bg-default);
  color: var(--wb-text-primary);
  padding: var(--wb-space-9);
}
.hero h1 { /* or add class="wb-display-xl" */
  font-family: var(--wb-font-display);
  font-weight: var(--wb-weight-black);
  font-size: var(--wb-fs-display-xl);
  text-transform: uppercase;
  letter-spacing: -0.02em;
  color: var(--wb-acid-500);
}
.hero p {
  font-family: var(--wb-font-serif);
  font-size: var(--wb-fs-body-lg);
  line-height: 1.6;
}
```

`tokens.json` is tool-agnostic — feed it to Style Dictionary, Tokens Studio (Figma), or any DTCG-compatible pipeline to generate iOS/Android/Tailwind outputs from the same source.
