# AI-Native PM — video hero

Single-page cinematic hero: full-screen looping background video with a custom
requestAnimationFrame fade system, liquid-glass UI, dark aesthetic. Built with
Vite + React 18 + TypeScript + Tailwind CSS 3 + lucide-react.

Fonts are the Worth Building brand faces served locally — **Brunson** (logo) and
**Perfectly Nineties** (heading) — instead of the template's Instrument Serif.
They are licensed assets: fine to serve on your own site, don't redistribute the
files separately.

## Develop

```bash
npm install
npm run dev      # http://localhost:5199/ainative-pm/
npm run build    # type-checks, then builds to dist/
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and
publishes to GitHub Pages: **https://pavelchernyshev.github.io/ainative-pm/**

`base: "/ainative-pm/"` in [vite.config.ts](vite.config.ts) matches that path.

### Serving it on productcopilot.com

The apex domain is hosted on Tilda, which can't proxy a subpath to an external
app — so `productcopilot.com/ainative-pm` can't be served while Tilda holds the
domain. The clean option is a subdomain:

1. Add a DNS record: `ainativepm` CNAME → `pavelchernyshev.github.io`
2. Set the custom domain on this repo's Pages settings to `ainativepm.productcopilot.com`
3. Change `base` in vite.config.ts to `"/"` and push

## Video loop fade

The video element has no `loop` attribute — looping is scripted in
[src/App.tsx](src/App.tsx): 500ms rAF fade-in on load, fade-out triggered when
0.55s remain (guarded by `fadingOutRef`), on `ended` opacity snaps to 0, and
after 100ms the video seeks to 0, plays, and fades back in. Every new fade
cancels the previous animation frame and resumes from the current opacity.
