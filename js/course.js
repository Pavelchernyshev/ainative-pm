/* ============================================================
   The AI-Native PM — course player
   Renders sidebar + lessons from window.COURSE.
   Progress persists in localStorage. Deep-links via #lessonId.
   Access gate: modules in FREE_MODULES are open; the rest need a
   license key (Lemon Squeezy license validated client-side, or a
   manual comp key from SITE_CONFIG.manualKeys). The gate is
   honesty-based friction, not security — see MONEY.md.
   ============================================================ */

(function () {
  var C = window.COURSE;
  var CFG = window.SITE_CONFIG || {};
  var PROGRESS_KEY = "ainativepm-progress-v1";
  var LAST_KEY = "ainativepm-last-lesson-v1";
  var LICENSE_KEY = "ainativepm-license-v1";

  /* ---- access gate ---- */
  var FREE_MODULES = { m1: true, m2: true, m3: true };

  function isFree(mod) { return !!FREE_MODULES[mod.id]; }

  function storedLicense() {
    try { return localStorage.getItem(LICENSE_KEY) || ""; } catch (e) { return ""; }
  }
  function storeLicense(key) {
    try { localStorage.setItem(LICENSE_KEY, key); } catch (e) {}
  }
  function clearLicense() {
    try { localStorage.removeItem(LICENSE_KEY); } catch (e) {}
  }
  function isUnlocked() { return storedLicense() !== ""; }

  function isManualKey(key) {
    var norm = key.trim().toUpperCase();
    return (CFG.manualKeys || []).some(function (k) { return k.trim().toUpperCase() === norm; });
  }

  /* Validates against manual comp keys first, then the Lemon Squeezy
     public license API. cb(ok, message). */
  function validateKey(key, cb) {
    key = (key || "").trim();
    if (!key) return cb(false, "Enter your access key.");
    if (isManualKey(key)) return cb(true, "");
    var body = new URLSearchParams();
    body.append("license_key", key);
    fetch("https://api.lemonsqueezy.com/v1/licenses/validate", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: body
    })
      .then(function (r) { return r.json(); })
      .then(function (data) {
        var storeOk = !CFG.lsStoreId ||
          String(((data || {}).meta || {}).store_id) === String(CFG.lsStoreId);
        if (data && data.valid && storeOk) cb(true, "");
        else cb(false, "That key didn’t validate. Check your receipt email — or write to us.");
      })
      .catch(function () {
        cb(false, "Couldn’t reach the license server. Check your connection and try again.");
      });
  }

  /* Silent revalidation of a stored LS key (manual keys skip this). */
  function revalidateStored() {
    var key = storedLicense();
    if (!key || isManualKey(key)) return;
    validateKey(key, function (ok, msg) {
      /* only clear on an explicit "invalid" — never on network failure */
      if (!ok && msg && msg.indexOf("didn’t validate") !== -1) {
        clearLicense();
        if (currentId !== null) renderLesson(currentId);
      }
    });
  }

  /* ---- email capture (renders only when Brevo is configured) ---- */
  function captureHtml(context) {
    if (!CFG.brevoFormAction) return "";
    return (
      '<div class="capture">' +
      '<p class="capture-label">Free lessons by email</p>' +
      "<h3>" + (context === "complete"
        ? "Keep the momentum — new lessons &amp; playbooks by email"
        : "Get the next drops before anyone else") + "</h3>" +
      '<p class="capture-sub">New modules, eval templates, and founding-member offers. No spam, unsubscribe anytime.</p>' +
      '<form class="capture-form" method="POST" action="' + CFG.brevoFormAction + '" target="_blank">' +
      '<input class="capture-input" type="email" name="EMAIL" required placeholder="you@work.com" autocomplete="email">' +
      '<button class="btn btn-sm" type="submit">Subscribe</button>' +
      "</form></div>"
    );
  }

  /* ---- flatten lessons for ordering ---- */
  var flat = [];
  C.modules.forEach(function (mod) {
    mod.lessons.forEach(function (l, i) {
      flat.push({ mod: mod, lesson: l, idx: i });
    });
  });

  function findFlat(id) {
    for (var i = 0; i < flat.length; i++) if (flat[i].lesson.id === id) return i;
    return -1;
  }

  /* ---- progress store ---- */
  function loadProgress() {
    try { return JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {}; }
    catch (e) { return {}; }
  }
  function saveProgress(p) {
    try { localStorage.setItem(PROGRESS_KEY, JSON.stringify(p)); } catch (e) {}
  }
  var progress = loadProgress();

  function doneCount() {
    return flat.filter(function (f) { return progress[f.lesson.id]; }).length;
  }

  /* ---- top bar progress ---- */
  var pctEl = document.getElementById("progress-pct");
  var fillEl = document.getElementById("progress-fill");
  function renderProgressBar() {
    var pct = Math.round((doneCount() / flat.length) * 100);
    pctEl.textContent = pct + "%";
    fillEl.style.width = pct + "%";
  }

  /* ---- sidebar ---- */
  var nav = document.getElementById("sidebar-nav");
  function renderSidebar(activeId) {
    var unlocked = isUnlocked();
    var html = "";
    C.modules.forEach(function (mod) {
      var locked = !isFree(mod) && !unlocked;
      var done = mod.lessons.filter(function (l) { return progress[l.id]; }).length;
      var isActiveModule = mod.lessons.some(function (l) { return l.id === activeId; });
      var complete = done === mod.lessons.length;
      html +=
        '<div class="snav-module' + (isActiveModule ? " open" : "") + (complete ? " complete" : "") + '" data-mod="' + mod.id + '">' +
        '<button class="snav-mod-head" aria-expanded="' + (isActiveModule ? "true" : "false") + '">' +
        '<span class="snav-caret">▶</span>' +
        '<span class="snav-mod-num">' + mod.num + "</span>" +
        "<span>" + mod.title + "</span>" +
        '<span class="snav-mod-done">' + (locked ? "✦" : done + "/" + mod.lessons.length) + "</span>" +
        "</button>" +
        '<ul class="snav-lessons">' +
        mod.lessons.map(function (l) {
          return (
            "<li>" +
            '<a class="snav-lesson' + (progress[l.id] ? " done" : "") + (l.id === activeId ? " active" : "") + (locked ? " locked" : "") + '" href="#' + l.id + '">' +
            (locked ? '<span class="snav-lock" aria-label="Founding access">✦</span>' : '<span class="snav-check">✓</span>') +
            "<span>" + l.title + "</span>" +
            "</a></li>"
          );
        }).join("") +
        "</ul></div>";
    });
    nav.innerHTML = html;
  }

  nav.addEventListener("click", function (e) {
    var head = e.target.closest(".snav-mod-head");
    if (head) {
      var m = head.parentElement;
      var open = m.classList.toggle("open");
      head.setAttribute("aria-expanded", open ? "true" : "false");
      return;
    }
    if (e.target.closest(".snav-lesson")) closeSidebarMobile();
  });

  /* ---- mobile sidebar ---- */
  var sidebar = document.getElementById("sidebar");
  var scrim = document.getElementById("sidebar-scrim");
  var toggle = document.getElementById("sidebar-toggle");

  function closeSidebarMobile() {
    sidebar.classList.remove("open");
    scrim.classList.remove("show");
    toggle.setAttribute("aria-expanded", "false");
  }
  toggle.addEventListener("click", function () {
    var open = sidebar.classList.toggle("open");
    scrim.classList.toggle("show", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  scrim.addEventListener("click", closeSidebarMobile);

  /* ---- lesson rendering ---- */
  var root = document.getElementById("lesson-root");
  var currentId = null;

  function teaserText(html) {
    var text = html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
    return text.length > 220 ? text.slice(0, 220) + "…" : text;
  }

  function renderLockedLesson(f, l) {
    var checkoutBtn = CFG.checkoutUrl
      ? '<a class="btn btn-block" href="' + CFG.checkoutUrl + '" target="_blank" rel="noopener">Get founding access — $149&nbsp;→</a>'
      : '<a class="btn btn-block" href="index.html#access">Founding access — $149</a>';

    root.innerHTML =
      '<p class="lesson-eyebrow">Module ' + f.mod.num + " — " + f.mod.title + " · Lesson " + (f.idx + 1) + " of " + f.mod.lessons.length + "</p>" +
      "<h1>" + l.title + "</h1>" +
      '<div class="lesson-meta"><span>~' + l.minutes + " min read</span><span>founding access</span></div>" +
      '<div class="lesson-content"><p>' + teaserText(l.content) + "</p></div>" +
      '<div class="locked-panel">' +
      '<p class="locked-label">✦ Founding access</p>' +
      "<h3>Modules 4–8 are for founding members</h3>" +
      '<p class="locked-sub">Evals, agents, technical fluency, AI-speed shipping, and the org-multiplier playbook — 21 more lessons, every one ending in an artifact. Modules 1–3 stay free forever.</p>' +
      checkoutBtn +
      '<p class="locked-hint">Already enrolled? Your access key is in your receipt email.</p>' +
      '<form class="key-form" id="key-form">' +
      '<input class="capture-input" type="text" id="key-input" placeholder="Paste your access key" autocomplete="off">' +
      '<button class="btn btn-sm" type="submit">Unlock</button>' +
      "</form>" +
      '<p class="key-status" id="key-status"></p>' +
      "</div>" +
      '<div class="lesson-nav">' +
      '<a class="btn btn-ghost btn-sm lesson-nav-prev" href="#m1l1">← Back to the free modules</a>' +
      "</div>";

    document.getElementById("key-form").addEventListener("submit", function (ev) {
      ev.preventDefault();
      var input = document.getElementById("key-input");
      var status = document.getElementById("key-status");
      status.textContent = "Checking…";
      validateKey(input.value, function (ok, msg) {
        if (ok) {
          storeLicense(input.value.trim());
          status.textContent = "";
          renderLesson(l.id);
        } else {
          status.textContent = msg;
        }
      });
    });

    renderSidebar(l.id);
    renderProgressBar();
    window.scrollTo({ top: 0 });
  }

  function renderLesson(id) {
    var fi = findFlat(id);
    if (fi === -1) return;
    var f = flat[fi];
    var l = f.lesson;
    currentId = id;
    try { localStorage.setItem(LAST_KEY, id); } catch (e) {}

    if (!isFree(f.mod) && !isUnlocked()) {
      renderLockedLesson(f, l);
      return;
    }

    var isDone = !!progress[l.id];
    var prev = flat[fi - 1];
    var next = flat[fi + 1];

    var srcHtml = (l.sources || []).map(function (s) {
      return '<a href="' + s.url + '" target="_blank" rel="noopener">' + s.label + " ↗</a>";
    }).join("");

    /* capture band on the last lesson of each free module */
    var lastFreeInModule = isFree(f.mod) && f.idx === f.mod.lessons.length - 1;

    root.innerHTML =
      '<p class="lesson-eyebrow">Module ' + f.mod.num + " — " + f.mod.title + " · Lesson " + (f.idx + 1) + " of " + f.mod.lessons.length + "</p>" +
      "<h1>" + l.title + "</h1>" +
      '<div class="lesson-meta"><span>~' + l.minutes + " min read</span><span>" + (l.sources ? l.sources.length : 0) + " linked sources</span></div>" +
      '<div class="lesson-content">' + l.content + "</div>" +
      '<div class="exercise"><p class="exercise-label">Ship it — this lesson’s artifact</p><h3>' + l.exercise.title + "</h3><p>" + l.exercise.body + "</p></div>" +
      '<div class="sources"><p class="sources-label">Primary sources</p>' + srcHtml + "</div>" +
      (lastFreeInModule ? captureHtml("lesson") : "") +
      '<div class="lesson-nav">' +
      (prev ? '<a class="btn btn-ghost btn-sm lesson-nav-prev" href="#' + prev.lesson.id + '">← Previous</a>' : "") +
      '<button class="btn btn-sm btn-complete' + (isDone ? " is-done" : "") + '" id="complete-btn">' +
      (isDone ? "✓ Completed — tap to undo" : "Mark complete" + (next ? " & continue →" : "")) +
      "</button>" +
      (next ? '<a class="btn btn-ghost btn-sm" href="#' + next.lesson.id + '">Skip →</a>' : "") +
      "</div>";

    document.getElementById("complete-btn").addEventListener("click", function () {
      if (progress[l.id]) {
        delete progress[l.id];
        saveProgress(progress);
        renderAll(l.id);
      } else {
        progress[l.id] = true;
        saveProgress(progress);
        if (doneCount() === flat.length) {
          renderComplete();
          renderSidebar(null);
          renderProgressBar();
        } else if (next) {
          location.hash = next.lesson.id; /* triggers re-render */
        } else {
          renderAll(l.id);
        }
      }
    });

    renderSidebar(id);
    renderProgressBar();
    root.scrollIntoView({ block: "start" });
    window.scrollTo({ top: 0 });
  }

  function renderComplete() {
    currentId = null;
    root.innerHTML =
      '<div class="complete-panel">' +
      '<div class="big-check">✓</div>' +
      "<h1>You’re <em>AI-native</em> now.</h1>" +
      "<p>All 33 lessons complete. More importantly, you’re holding the portfolio: a prototype, an eval suite, a running agent, a context doc, a research-preview template, a kill list, and a rollout plan. Ship something this week — and re-test your capability watchlist on the next model release.</p>" +
      '<a class="btn" href="index.html">Back to the course page</a>' +
      captureHtml("complete") +
      "</div>";
    window.scrollTo({ top: 0 });
  }

  function renderAll(id) {
    renderLesson(id);
  }

  /* ---- routing ---- */
  function initialLesson() {
    var hash = location.hash.replace("#", "");
    if (hash && findFlat(hash) !== -1) return hash;
    var last = null;
    try { last = localStorage.getItem(LAST_KEY); } catch (e) {}
    if (last && findFlat(last) !== -1) return last;
    /* first incomplete, else first */
    for (var i = 0; i < flat.length; i++) if (!progress[flat[i].lesson.id]) return flat[i].lesson.id;
    return flat[0].lesson.id;
  }

  window.addEventListener("hashchange", function () {
    var id = location.hash.replace("#", "");
    if (findFlat(id) !== -1) renderLesson(id);
  });

  /* keyboard: ← → between lessons */
  window.addEventListener("keydown", function (e) {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA" || !currentId) return;
    var fi = findFlat(currentId);
    if (e.key === "ArrowRight" && flat[fi + 1]) location.hash = flat[fi + 1].lesson.id;
    if (e.key === "ArrowLeft" && flat[fi - 1]) location.hash = flat[fi - 1].lesson.id;
  });

  renderLesson(initialLesson());
  revalidateStored();
})();
