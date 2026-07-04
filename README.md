# The AI-Native PM — landing page + online course

A self-contained static site: a cinematic landing page (`index.html`) with a full-screen
looping video hero and liquid-glass UI, plus a working self-paced course player
(`course.html`) with 8 modules and 33 lessons. All content is distilled from 20+ primary
sources in Lenny's ecosystem (newsletter, podcast, How I AI, Lenny × Maven AI-Native PM
track), with every quote attributed and linked.

The hero video loops with a scripted requestAnimationFrame fade system (500ms in/out,
fade-out triggered 0.55s before the end, 100ms restart delay) — see the top of
`js/landing.js`. Buttons and cards use the liquid-glass treatment over the Worth Building
color system.

No build step, no dependencies. Works from any static host — or by double-clicking `index.html`.

## Deploy

Pushing to `main` publishes the site as-is (no build) to GitHub Pages via
`.github/workflows/deploy.yml`: **https://pavelchernyshev.github.io/ainative-pm/**
All internal URLs are relative, so the site works at any base path or (sub)domain
without configuration.

## Run it

```bash
# any static server works, e.g.:
python3 -m http.server 4188 --directory "/Users/pavelchernyshev/AI PM/ai-native-pm-course"
# then open http://localhost:4188
```

## Structure

```
index.html          — landing page (curriculum section renders from course-data.js)
course.html         — course player shell
css/tokens.css      — Worth Building brand tokens (--wb-*), copied from the brand core set
css/fonts.css       — @font-face for the local brand fonts
css/style.css       — site styles built on the tokens + landing page
css/course.css      — course player styles
fonts/              — Brunson, Brunson Rough, Perfectly Nineties (licensed brand fonts)
brand/              — tokens.json (DTCG source) + worth-building-usage.md (brand guide)
js/course-data.js   — ALL course content lives here (single source of truth)
js/landing.js       — curriculum render, accordions, scroll reveals
js/course.js        — course player: routing (#lessonId), progress, keyboard nav
```

## Brand

The site runs on the Worth Building design system: acid chartreuse `#7FFF00` (acid-500)
on near-black `#1A1A1A` (ink-800), Brunson for display/headings/buttons (a caps-only
condensed cut — headings render uppercase by nature), Perfectly Nineties for everything
you read, system mono for captions/metadata. `css/tokens.css` is the source of truth —
restyle by editing tokens, not components. Contrast rules live in
`brand/worth-building-usage.md` (short version: acid is never text on light backgrounds).
Note: Brunson has one weight and Perfectly Nineties has no bold/italic cuts — bold renders
as the regular weight (emphasis is done with white color), italics are browser-synthesized.
The fonts are licensed assets — fine to serve on your own site, don't redistribute the
files separately.

## Editing content

Everything editorial is in `js/course-data.js`. Each lesson is:

```js
{ id, title, minutes, content (HTML string), exercise: {title, body}, sources: [{label, url}] }
```

Add/remove/reorder lessons freely — the landing curriculum, sidebar, progress math,
and prev/next navigation all update automatically. Lesson deep links are `course.html#m4l2`.

## Progress tracking

Saved in `localStorage` (`ainativepm-progress-v1`), per browser. "Mark complete & continue"
advances; completing everything shows the completion panel. Arrow keys ← → move between lessons.

## Things you'll want to change before selling it

- **Pricing card** (`index.html`, section `#access`): the $149 "Enroll now" button currently
  links straight to `course.html` — swap the href for your Stripe/Lemon Squeezy checkout link
  and gate `course.html` however you host it. Price is placeholder copy.
- **Brand/attribution**: footer says "A Worth Building project" and carries a
  not-affiliated-with-Lenny disclaimer — keep the disclaimer if you distribute this.
- **Analytics/OG image**: none included; add your snippet before the closing `</head>`.

## Deploy

Drag the folder into Netlify Drop, `vercel deploy`, or push to GitHub Pages — it's all static.
