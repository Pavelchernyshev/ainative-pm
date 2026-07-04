/* ============================================================
   The AI-Native PM — course player
   Renders sidebar + lessons from window.COURSE.
   Progress persists in localStorage. Deep-links via #lessonId.
   ============================================================ */

(function () {
  var C = window.COURSE;
  var PROGRESS_KEY = "ainativepm-progress-v1";
  var LAST_KEY = "ainativepm-last-lesson-v1";

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
    var html = "";
    C.modules.forEach(function (mod) {
      var done = mod.lessons.filter(function (l) { return progress[l.id]; }).length;
      var isActiveModule = mod.lessons.some(function (l) { return l.id === activeId; });
      var complete = done === mod.lessons.length;
      html +=
        '<div class="snav-module' + (isActiveModule ? " open" : "") + (complete ? " complete" : "") + '" data-mod="' + mod.id + '">' +
        '<button class="snav-mod-head" aria-expanded="' + (isActiveModule ? "true" : "false") + '">' +
        '<span class="snav-caret">▶</span>' +
        '<span class="snav-mod-num">' + mod.num + "</span>" +
        "<span>" + mod.title + "</span>" +
        '<span class="snav-mod-done">' + done + "/" + mod.lessons.length + "</span>" +
        "</button>" +
        '<ul class="snav-lessons">' +
        mod.lessons.map(function (l) {
          return (
            "<li>" +
            '<a class="snav-lesson' + (progress[l.id] ? " done" : "") + (l.id === activeId ? " active" : "") + '" href="#' + l.id + '">' +
            '<span class="snav-check">✓</span>' +
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

  function renderLesson(id) {
    var fi = findFlat(id);
    if (fi === -1) return;
    var f = flat[fi];
    var l = f.lesson;
    currentId = id;
    try { localStorage.setItem(LAST_KEY, id); } catch (e) {}

    var isDone = !!progress[l.id];
    var prev = flat[fi - 1];
    var next = flat[fi + 1];

    var srcHtml = (l.sources || []).map(function (s) {
      return '<a href="' + s.url + '" target="_blank" rel="noopener">' + s.label + " ↗</a>";
    }).join("");

    root.innerHTML =
      '<p class="lesson-eyebrow">Module ' + f.mod.num + " — " + f.mod.title + " · Lesson " + (f.idx + 1) + " of " + f.mod.lessons.length + "</p>" +
      "<h1>" + l.title + "</h1>" +
      '<div class="lesson-meta"><span>~' + l.minutes + " min read</span><span>" + (l.sources ? l.sources.length : 0) + " linked sources</span></div>" +
      '<div class="lesson-content">' + l.content + "</div>" +
      '<div class="exercise"><p class="exercise-label">Ship it — this lesson’s artifact</p><h3>' + l.exercise.title + "</h3><p>" + l.exercise.body + "</p></div>" +
      '<div class="sources"><p class="sources-label">Primary sources</p>' + srcHtml + "</div>" +
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
})();
