/* ============================================================
   SITE CONFIG — the only file to edit when wiring accounts.
   Fill the three values below, bump the ?v= stamps in both HTML
   files (+1), commit, push. Full instructions: MONEY.md.
   Empty value = that feature stays dormant (nothing breaks).
   ============================================================ */

window.SITE_CONFIG = {
  /* Lemon Squeezy "Buy" URL for Founding Access ($149).
     Looks like: https://<store>.lemonsqueezy.com/buy/<uuid> */
  checkoutUrl: "",

  /* Lemon Squeezy license-key validation stays on their public API;
     no key needed here. Manual comp keys (friends, reviewers) can be
     added below — NOTE: this file is public, so treat these as
     shareable coupons, never as security. */
  manualKeys: [],

  /* Brevo embedded-form ACTION URL (Brevo → Contacts → Forms →
     share → "HTML embed" → copy the <form action="..."> value).
     Looks like: https://xxxxxxx.sibforms.com/serve/XXXXXXXX */
  brevoFormAction: "",

  /* Cloudflare Web Analytics token (Cloudflare dash → Analytics →
     Web Analytics → add site ainativepm.productcopilot.com). */
  cfAnalyticsToken: ""
};

/* ---- Cloudflare Web Analytics beacon (loads only when configured) ---- */
(function () {
  var t = window.SITE_CONFIG.cfAnalyticsToken;
  if (!t) return;
  var s = document.createElement("script");
  s.defer = true;
  s.src = "https://static.cloudflareinsights.com/beacon.min.js";
  s.setAttribute("data-cf-beacon", JSON.stringify({ token: t }));
  document.head.appendChild(s);
})();
