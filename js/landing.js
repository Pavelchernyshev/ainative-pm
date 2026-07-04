/* Landing page: video hero loop-fade, curriculum from course data, accordions, reveal-on-scroll */

/* ---- hero video: scripted loop with rAF fades (no CSS transitions) ---- */
(function () {
  var video = document.getElementById("hero-video");
  if (!video) return;

  var FADE_MS = 500;
  var FADE_OUT_LEAD_S = 0.55;
  var RESTART_DELAY_MS = 100;

  var raf = null;
  var opacity = 0;
  var fadingOut = false;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    /* show the first frame as a still image instead of animating */
    video.pause();
    video.style.opacity = "1";
    return;
  }

  function cancelFade() {
    if (raf !== null) {
      cancelAnimationFrame(raf);
      raf = null;
    }
  }

  /* resumes from the current opacity rather than snapping */
  function fadeTo(target) {
    cancelFade();
    var from = opacity;
    var start = performance.now();
    function step(now) {
      var t = Math.min((now - start) / FADE_MS, 1);
      opacity = from + (target - from) * t;
      video.style.opacity = String(opacity);
      raf = t < 1 ? requestAnimationFrame(step) : null;
    }
    raf = requestAnimationFrame(step);
  }

  function onLoaded() {
    fadingOut = false;
    fadeTo(1);
  }

  video.addEventListener("loadeddata", onLoaded);

  video.addEventListener("timeupdate", function () {
    if (!video.duration) return;
    if (video.duration - video.currentTime <= FADE_OUT_LEAD_S && !fadingOut) {
      fadingOut = true;
      fadeTo(0);
    }
  });

  video.addEventListener("ended", function () {
    cancelFade();
    opacity = 0;
    video.style.opacity = "0";
    setTimeout(function () {
      video.currentTime = 0;
      var p = video.play();
      if (p && p.catch) p.catch(function () {});
      fadingOut = false;
      fadeTo(1);
    }, RESTART_DELAY_MS);
  });

  /* already loaded from cache before listeners attached */
  if (video.readyState >= 2) onLoaded();

  /* if autoplay was blocked, start on first interaction */
  document.addEventListener("click", function retry() {
    if (video.paused && !video.ended) {
      var p = video.play();
      if (p && p.catch) p.catch(function () {});
    }
    document.removeEventListener("click", retry);
  });
})();

(function () {
  var C = window.COURSE;

  /* ---- curriculum ---- */
  var list = document.getElementById("module-list");
  if (list && C) {
    C.modules.forEach(function (mod) {
      var lessonsHtml = mod.lessons
        .map(function (l, i) {
          return (
            '<li><a href="course.html#' + l.id + '">' +
            '<span class="lesson-idx">' + mod.num + "." + (i + 1) + "</span>" +
            "<span>" + l.title + "</span>" +
            '<span class="lesson-min">' + l.minutes + " min</span>" +
            "</a></li>"
          );
        })
        .join("");

      var el = document.createElement("div");
      el.className = "module reveal";
      el.innerHTML =
        '<button class="mod-head" aria-expanded="false">' +
        '<span class="mod-num">' + mod.num + "</span>" +
        '<span class="mod-title">' + mod.title +
        '<span class="mod-tagline">' + mod.tagline + "</span></span>" +
        '<span class="mod-count">' + mod.lessons.length + " lessons</span>" +
        '<span class="mod-toggle" aria-hidden="true">+</span>' +
        "</button>" +
        '<div class="mod-body"><div class="mod-body-inner">' +
        '<ul class="mod-lessons">' + lessonsHtml + "</ul>" +
        "</div></div>";
      list.appendChild(el);
    });

    list.addEventListener("click", function (e) {
      var head = e.target.closest(".mod-head");
      if (!head) return;
      var mod = head.parentElement;
      var open = mod.classList.toggle("open");
      head.setAttribute("aria-expanded", open ? "true" : "false");
    });

    /* open the first module by default so the section reads rich */
    var first = list.querySelector(".module");
    if (first) {
      first.classList.add("open");
      first.querySelector(".mod-head").setAttribute("aria-expanded", "true");
    }
  }

  /* ---- FAQ accordion ---- */
  document.querySelectorAll(".faq-q").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.parentElement;
      var open = item.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });

  /* ---- reveal on scroll ---- */
  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
})();
