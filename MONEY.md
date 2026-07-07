# MONEY.md — monetization wiring & operator guide

Status: **plumbing live, awaiting 3 account values** (see checklist).
Gate design: **modules 1–3 free forever · modules 4–8 founding access ($149)**.
All configuration lives in **`js/config.js`** — nothing else needs editing.

## How it works

- **Payments:** Lemon Squeezy (merchant of record → they handle EU VAT/invoices, critical for a Germany-based seller). Buyer pays → receipt email contains a **license key** → they paste it once on any locked lesson → unlocked on that browser (localStorage), validated against Lemon Squeezy's public license API. Stored keys are re-validated silently on each visit; refunded/disabled keys lose access.
- **Email capture:** Brevo embedded form. Renders automatically (pricing section, end of each free module, completion panel) once `brevoFormAction` is set; invisible until then.
- **Analytics:** Cloudflare Web Analytics beacon, injected only when `cfAnalyticsToken` is set. Free, cookieless, no consent banner needed.
- **Comp keys** (friends/reviewers): add strings to `manualKeys` in config.js. ⚠️ This repo is public — treat comp keys as shareable coupons, never as security.

## Honest caveats (decided trade-offs, not oversights)

1. **The gate is friction, not security.** A static site on a public repo means all content is technically reachable by a determined person (view-source, repo). This is the standard v1 for indie courses — buyers pay for the experience, updates, and honesty, not DRM. Revisit only if revenue proves piracy matters: the clean fix is moving hosting to Cloudflare Pages (free, supports **private** repos) — which also resolves the licensed-fonts-in-public-repo flag.
2. License validation calls Lemon Squeezy from the browser. If their API is briefly unreachable, stored keys keep working (we never clear on network errors); fresh unlocks retry.

## ✅ Pavel's 15-minute checklist (one-time)

**1. Lemon Squeezy (~7 min)** — lemonsqueezy.com
   - Create store (name: Product Copilot). Complete identity/payout setup (can happen in parallel; test mode works immediately).
   - Products → New: "The AI-Native PM — Founding Access", $149 one-time.
   - In the product: **enable "Generate license keys"** (activations limit: 3).
   - Share → copy the **Buy link** (`https://<store>.lemonsqueezy.com/buy/<uuid>`).
   - Settings → taxes: confirm EU VAT collection is on (default for MoR).
   → paste the buy link into `checkoutUrl` in `js/config.js`.

**2. Brevo (~4 min)** — brevo.com (free tier)
   - Contacts → Forms → create form: one email field, double opt-in ON, list "AI-Native PM".
   - Share → **HTML embed** → copy only the `<form action="…">` URL (looks like `https://xxxx.sibforms.com/serve/…`).
   → paste into `brevoFormAction`.

**3. Cloudflare Web Analytics (~2 min)** — dash.cloudflare.com → Analytics & Logs → Web Analytics
   - Add site `ainativepm.productcopilot.com` → copy the **token** from the JS snippet.
   → paste into `cfAnalyticsToken`.

**4. Ship it (~2 min)**
   - In `index.html` + `course.html`: bump `js/config.js?v=1` → `?v=2`.
   - Commit, push. Wait for the deploy action (~40s).

**5. Verify end-to-end (~5 min)**
   - Open the live site in a private window: modules 1–3 open; module 4 shows the founding panel; pricing button says "Get founding access".
   - Buy your own product (test mode or real + refund) → find the license key in the receipt email → paste it on a locked lesson → unlocked.
   - Submit your own email to the capture form → confirm double opt-in arrives.
   - Cloudflare dashboard shows your visit within ~5 min.

## Operating notes

- **Refunds:** Lemon Squeezy dashboard → order → refund (also deactivates the license).
- **Price changes:** edit the product in LS; update the two `$149` mentions (`index.html` pricing card, `js/course.js` locked panel) and bump stamps.
- **Weekly scorecard (Fridays):** visitors (CF dash) · new subscribers (Brevo) · sales (LS) · posts shipped. Four numbers, one row.
