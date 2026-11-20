/* CVLab @ UAEU — renders People, News and Publications from data.js */
(function () {
  "use strict";

  var D = window.CVLAB || {};
  var $ = function (s) { return document.querySelector(s); };
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function initials(name) {
    return name.split(/\s+/).filter(Boolean).map(function (w) { return w[0]; }).join("").slice(0, 2).toUpperCase();
  }

  /* ---- Mobile menu ---- */
  function initMenu() {
    var btn = $("#menuBtn"), nav = $("#nav");
    if (!btn || !nav) return;
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") { nav.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); }
    });
  }

  /* ---- Address hash: "#tab" or "#tab/page", e.g. #people, #news/2 ---- */
  function hashRoute() {
    var parts = decodeURIComponent(location.hash.slice(1)).split("/");
    return { tab: parts[0], page: Math.max(1, parseInt(parts[1], 10) || 1) };
  }

  /* ---- Pages of 10: News and Featured Papers and Projects ----
   * <div id="newsList" data-per-page="10"> is filled with that page's items, and a
   * pager (← Prev 1 2 3 Next →) is put right after it when there is more than one page.
   * The page number lives in the address (#news/2) so reloads and Back keep it. */
  function renderPaged(el, items, itemHTML, tab) {
    var per = parseInt(el.getAttribute("data-per-page"), 10) || 10;
    var pages = Math.max(1, Math.ceil(items.length / per));
    var r = hashRoute();
    var page = r.tab === tab ? Math.min(r.page, pages) : 1;
    el.innerHTML = items.slice((page - 1) * per, page * per).map(itemHTML).join("");
    var pager = el.nextElementSibling;
    if (!pager || !pager.classList.contains("pager")) {
      pager = document.createElement("nav");
      pager.className = "pager";
      pager.setAttribute("aria-label", "Pages");
      el.parentNode.insertBefore(pager, el.nextSibling);
    }
    pager.hidden = pages < 2;
    if (pages < 2) { pager.innerHTML = ""; return; }
    var href = function (p) { return "#" + tab + (p > 1 ? "/" + p : ""); };
    var step = function (p, label, ok) {
      return ok ? '<a class="pager-step" href="' + href(p) + '">' + label + "</a>" : '<span class="pager-step is-disabled">' + label + "</span>";
    };
    var html = step(page - 1, "← Prev", page > 1);
    for (var p = 1; p <= pages; p++) {
      html += p === page ? '<span class="pager-num is-current" aria-current="page">' + p + "</span>"
        : '<a class="pager-num" href="' + href(p) + '">' + p + "</a>";
    }
    pager.innerHTML = html + step(page + 1, "Next →", page < pages);
  }

  /* ---- Tabs: each top-bar link (#overview, #people …) shows only its own section.
   * The URL keeps the tab (index.html#people), so links, reloads and Back work.
   * Without JavaScript the page simply shows every section one after another. ---- */
  function initTabs(onRoute) {
    var nav = $("#nav");
    if (!nav) return;
    var links = Array.prototype.slice.call(nav.querySelectorAll("a[href^='#']"));
    var ids = links.map(function (a) { return a.getAttribute("href").slice(1); })
      .filter(function (id) { return document.getElementById(id); });
    if (!ids.length) return;
    var root = document.documentElement;
    root.classList.add("tabs");

    function current() {
      var t = hashRoute().tab;
      return ids.indexOf(t) >= 0 ? t : ids[0];
    }
    function show(id) {
      ids.forEach(function (s) { document.getElementById(s).classList.toggle("is-active", s === id); });
      links.forEach(function (a) {
        var on = a.getAttribute("href") === "#" + id;
        a.classList.toggle("active", on);
        if (on) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
      });
    }
    // Where the section starts, just under the sticky header.
    function sectionTop(id) {
      var header = $(".site-header");
      return document.getElementById(id).getBoundingClientRect().top + window.scrollY - (header ? header.offsetHeight : 0);
    }

    // Scrolled down past the banner? Jump back to the start of the tab.
    function toTabStart(id) {
      var top = sectionTop(id);
      if (window.scrollY > top) window.scrollTo({ top: top, behavior: "instant" });
    }
    function route() { if (onRoute) onRoute(); show(current()); }

    nav.addEventListener("click", function (e) {
      var a = e.target.closest ? e.target.closest("a[href^='#']") : null;
      if (!a) return;
      var id = a.getAttribute("href").slice(1);
      if (ids.indexOf(id) < 0) return;
      e.preventDefault();
      if (location.hash !== "#" + id) history.pushState(null, "", "#" + id);
      route();
      toTabStart(id);
    });
    window.addEventListener("popstate", route);
    // Pager links (#news/2) and other in-page links.
    window.addEventListener("hashchange", function () { route(); toTabStart(current()); });

    show(current());
    // Opened with a tab in the URL (e.g. from a news article): bring that tab into view.
    if (location.hash && ids.indexOf(hashRoute().tab) >= 0) {
      requestAnimationFrame(function () { window.scrollTo({ top: Math.max(0, sectionTop(current())), behavior: "instant" }); });
    }
  }

  /* ---- People ---- */
  // The name links to the person's Google Scholar profile (or, without one, their homepage).
  function personName(p) {
    var url = p.scholar || p.link;
    if (!url) return esc(p.name);
    return '<a href="' + esc(url) + '" target="_blank" rel="noopener" title="' + (p.scholar ? "Google Scholar" : "Homepage") + '">' + esc(p.name) + "</a>";
  }
  function renderPeople() {
    var el = $("#peopleGroups");
    if (!el || !D.people) return;
    var html = "";
    (D.peopleSections || []).forEach(function (sec) {
      var list = [];
      sec.groups.forEach(function (g) { list = list.concat(D.people.filter(function (p) { return p.group === g; })); });
      if (!list.length) return;
      html += '<div class="group"><h3>' + esc(sec.title) + '</h3><div class="people-grid">' +
        list.map(function (p, i) {
          var lead = p.group === "faculty" && i === 0;
          return '<div class="person' + (lead ? " lead" : "") + '">' +
            '<div class="avatar">' + esc(initials(p.name)) +
            (p.photo ? '<img src="' + esc(p.photo) + '" alt="' + esc(p.name) + '" loading="lazy" onerror="this.remove()">' : "") + "</div>" +
            "<div>" +
            '<div class="person-name">' + personName(p) + "</div>" +
            (p.role ? '<div class="person-role">' + esc(p.role) + "</div>" : "") +
            (p.note ? '<div class="person-note">' + esc(p.note) + "</div>" : "") +
            "</div>" +
            (lead && p.bio ? '<p class="person-bio">' + esc(p.bio) + "</p>" : "") +
            "</div>";
        }).join("") + "</div></div>";
    });
    el.innerHTML = html;
  }

  /* ---- News ---- */
  function stripTags(h) { var d = document.createElement("div"); d.innerHTML = h; return d.textContent || ""; }
  function newsURL(n) { return "news.html?id=" + encodeURIComponent(n.id); }
  function hasArticle(n) { return !!(n.id && n.body && n.body.length); }
  function firstParagraph(n) {
    return (n.body || []).filter(function (p) { return typeof p === "string" && p.charAt(0) !== "<"; })[0] || "";
  }

  function thumbHTML(n, cls) {
    var pic = n.thumb || n.cover;
    // Without a picture the tile is the banner color with the badge text on it.
    return '<div class="' + (cls || "thumb") + '"><span class="thumb-label">' + esc(n.badge || n.tag || "CVLab") + "</span>" +
      // With a real picture the label is hidden (has-img), as on the original news cards.
      (pic ? '<img src="' + esc(pic) + '" alt="" loading="lazy" onload="this.parentNode.classList.add(\'has-img\')" onerror="this.remove()">' : "") + "</div>";
  }

  // One picture in an article; it is left out while its file is missing.
  function figureHTML(f) {
    return '<figure class="article-figure"><img src="' + esc(f.img) + '" alt="' + esc(f.caption || "") + '" loading="lazy"' +
      (f.width ? ' style="width:' + (+f.width) + 'px"' : "") + ' onerror="this.parentNode.remove()">' +
      (f.caption ? "<figcaption>" + esc(f.caption) + "</figcaption>" : "") + "</figure>";
  }
  function bodyItemHTML(p) {
    if (typeof p === "string") return /^\s*<(table|figure)/i.test(p) ? p : "<p>" + p + "</p>";
    if (p && p.row) return '<div class="article-row">' + p.row.map(figureHTML).join("") + "</div>";
    if (p && p.img) return figureHTML(p);
    return "";
  }

  function newsCard(n) {
    var summary = n.summary || firstParagraph(n);
    var link = hasArticle(n);
    var tagName = link ? "a" : "div";
    return "<" + tagName + ' class="news-card' + (link ? " is-link" : "") + '"' + (link ? ' href="' + newsURL(n) + '"' : "") + ">" +
      thumbHTML(n) +
      '<div class="news-body">' +
      '<div class="news-meta"><span>' + esc(n.date) + "</span>" + (n.tag ? '<span class="news-tag">' + esc(n.tag) + "</span>" : "") + "</div>" +
      '<h3 class="news-title">' + esc(n.title) + "</h3>" +
      '<p class="news-summary">' + (n.summary ? summary : esc(stripTags(summary))) + "</p>" +
      (link ? '<span class="read-more">Read more →</span>' : "") +
      "</div></" + tagName + ">";
  }

  // Home page News tab: 10 per page.
  function renderNews() {
    var el = $("#newsList");
    if (!el || !D.news) return;
    renderPaged(el, D.news, newsCard, "news");
  }

  /* ---- Overview: the 3 newest news, one at a time (changes every 5 s;
   * dots to pick one, swipe on phones, pauses while the pointer is on it) ---- */
  function renderNewsSpot() {
    var el = $("#newsSpot");
    if (!el || !D.news || !D.news.length) return;
    var items = D.news.slice(0, 3), n = items.length;
    el.hidden = false;
    el.innerHTML =
      '<div class="spot-head"><span class="spot-label">Latest News</span><a class="spot-all" href="#news">All news →</a></div>' +
      '<div class="spot-viewport"><div class="spot-track">' + items.map(function (x) {
        var link = hasArticle(x), tag = link ? "a" : "div";
        return "<" + tag + ' class="spot-slide"' + (link ? ' href="' + newsURL(x) + '"' : "") + ">" + thumbHTML(x, "thumb spot-thumb") +
          '<div class="spot-body"><div class="news-meta"><span>' + esc(x.date) + "</span>" + (x.tag ? '<span class="news-tag">' + esc(x.tag) + "</span>" : "") + "</div>" +
          '<h3 class="spot-title">' + esc(x.title) + "</h3></div></" + tag + ">";
      }).join("") + "</div></div>" +
      (n > 1 ? '<div class="spot-dots">' + items.map(function (x, i) {
        return '<button type="button" class="spot-dot" aria-label="Show news ' + (i + 1) + " of " + n + '"></button>';
      }).join("") + "</div>" : "");

    var track = el.querySelector(".spot-track"), slides = el.querySelectorAll(".spot-slide"), dots = el.querySelectorAll(".spot-dot");
    var cur = 0, timer = null, paused = false;
    var still = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    function go(i) {
      cur = (i + n) % n;
      track.style.transform = "translateX(" + (-100 * cur) + "%)";
      for (var k = 0; k < n; k++) {
        var on = k === cur;
        if (dots[k]) { dots[k].classList.toggle("is-active", on); dots[k].setAttribute("aria-current", on ? "true" : "false"); }
        slides[k].setAttribute("aria-hidden", on ? "false" : "true");
        if (on) slides[k].removeAttribute("tabindex"); else slides[k].setAttribute("tabindex", "-1");
      }
    }
    function restart() {
      if (timer) clearInterval(timer);
      timer = still || n < 2 ? null : setInterval(function () { if (!paused && !document.hidden) go(cur + 1); }, 5000);
    }
    for (var k = 0; k < dots.length; k++) {
      dots[k].addEventListener("click", (function (i) { return function () { go(i); restart(); }; })(k));
    }
    el.addEventListener("mouseenter", function () { paused = true; });
    el.addEventListener("mouseleave", function () { paused = false; });
    el.addEventListener("focusin", function () { paused = true; });
    el.addEventListener("focusout", function () { paused = false; });
    var x0 = null;
    el.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    el.addEventListener("touchend", function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0;
      x0 = null;
      if (Math.abs(dx) > 40) { go(cur + (dx < 0 ? 1 : -1)); restart(); }
    });
    go(0);
    restart();
  }

  // news.html?id=…: one article. Without an id, go to the News tab.
  function renderNewsPage() {
    var el = $("#newsPage");
    if (!el || !D.news) return;
    var id = new URLSearchParams(location.search).get("id");
    if (!id) { location.replace("index.html#news"); return; }
    var n = D.news.filter(function (x) { return x.id === id; })[0];
    if (!n) {
      el.innerHTML = '<p>News item not found. <a href="index.html#news">See all news →</a></p>';
      return;
    }
    document.title = n.title + " · CVLab UAEU";
    el.innerHTML = '<article class="article">' +
      '<a class="article-back" href="index.html#news">← All news</a>' +
      '<div class="news-meta" style="margin-top:24px"><span>' + esc(n.date) + "</span>" + (n.tag ? '<span class="news-tag">' + esc(n.tag) + "</span>" : "") + "</div>" +
      "<h1>" + esc(n.title) + "</h1>" +
      (n.cover ? '<figure class="article-cover"><img src="' + esc(n.cover) + '" alt="" onerror="this.parentNode.remove()"></figure>' : "") +
      '<div class="article-body">' + (n.body || []).map(bodyItemHTML).join("") + "</div>" +
      // Photos whose file is not there yet are left out.
      (n.gallery && n.gallery.length ? '<div class="gallery">' + n.gallery.map(function (g) {
        return '<figure><img src="' + esc(g.src) + '" alt="' + esc(g.caption || "") + '" loading="lazy" onerror="this.parentNode.remove()">' + (g.caption ? "<figcaption>" + esc(g.caption) + "</figcaption>" : "") + "</figure>";
      }).join("") + "</div>" : "") +
      '<p style="margin-top:40px"><a href="index.html#news">← Back to all news</a></p>' +
      "</article>";
  }

  /* ---- Publications ---- */
  function authorsHTML(a) {
    var out = esc(a);
    (D.labAuthors || []).forEach(function (name) {
      var re = new RegExp("(^|, )(" + name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\*?)(?=,|$)", "g");
      out = out.replace(re, '$1<span class="author-lab">$2</span>');
    });
    return out;
  }
  function renderPublications() {
    var el = $("#pubList");
    if (!el || !D.publications) return;
    var pubs = D.publications.filter(function (p) { return p.listed !== false; });
    var years = [];
    pubs.forEach(function (p) { if (years.indexOf(p.year) < 0) years.push(p.year); });
    years.sort(function (a, b) { return b - a; });
    var n = 0;
    el.innerHTML = years.map(function (y) {
      var items = pubs.filter(function (p) { return p.year === y; });
      var start = n + 1;
      n += items.length;
      return '<h3 class="pub-year">' + y + '</h3><ol class="pubs" start="' + start + '">' +
        items.map(function (p) {
          var L = p.links || {}, links = [];
          if (L.paper) links.push('<a href="' + esc(L.paper) + '" target="_blank" rel="noopener">Paper</a>');
          if (L.arxiv) links.push('<a href="' + esc(L.arxiv) + '" target="_blank" rel="noopener">arXiv</a>');
          if (L.code) links.push('<a href="' + esc(L.code) + '" target="_blank" rel="noopener">Code</a>');
          if (L.project) links.push('<a href="' + esc(L.project) + '" target="_blank" rel="noopener">Project</a>');
          return "<li>" + authorsHTML(p.authors) + ', “<span class="title">' + esc(p.title) + '</span>,” ' +
            '<span class="venue">' + (p.venue ? "in <em>" + esc(p.venue) + "</em> (<b>" + esc(p.short) + "</b>)" : "<b>" + esc(p.short) + "</b>") + (p.extra ? ", " + esc(p.extra) : "") + ", " + p.year + ".</span>" +
            (links.length ? '<span class="pub-links">' + links.join("") + "</span>" : "") + "</li>";
        }).join("") + "</ol>";
    }).join("");
  }

  // Featured Papers and Projects: cards with the paper's main figure and a short summary,
  // 10 per page (Papers & Projects tab).
  function renderFeatured() {
    var el = $("#featuredPapers");
    if (!el || !D.publications) return;
    var list = D.publications.filter(function (p) { return p.featured; });
    if (!list.length) { el.style.display = "none"; return; }
    renderPaged(el, list, paperCard, "publications");
  }
  function paperCard(p) {
      var L = p.links || {}, links = [];
      [["paper", "Paper"], ["arxiv", "arXiv"], ["code", "Code"], ["project", "Project"]].forEach(function (k) {
        if (L[k[0]]) links.push('<a href="' + esc(L[k[0]]) + '" target="_blank" rel="noopener">' + k[1] + "</a>");
      });
      // With a figure, the thumbnail opens it full size in a new tab.
      var tile = '<span class="paper-thumb-venue">' + esc(p.short) + '</span><span class="paper-thumb-year">' + p.year + "</span>";
      var thumb = p.thumb
        ? '<a class="paper-thumb" href="' + esc(p.thumb) + '" target="_blank" rel="noopener" title="View full figure">' + tile +
          '<img src="' + esc(p.thumb) + '" alt="Main figure" loading="lazy" onload="this.parentNode.classList.add(\'has-img\')" onerror="this.parentNode.removeAttribute(\'href\');this.remove()"></a>'
        : '<div class="paper-thumb">' + tile + "</div>";
      return '<article class="paper-card">' + thumb +
        '<div class="paper-body">' +
        '<div class="news-meta"><span class="news-tag">' + esc(p.venue ? p.short + " " + p.year : p.short) + "</span></div>" +
        '<h3 class="paper-title">' + esc(p.title) + "</h3>" +
        '<p class="paper-authors">' + authorsHTML(p.authors) + "</p>" +
        (p.summary ? '<p class="paper-summary">' + esc(p.summary) + "</p>" : "") +
        (links.length ? '<div class="pub-links">' + links.join("") + "</div>" : "") +
        "</div></article>";
  }

  // Lists whose page number comes from the address.
  function renderLists() {
    renderNews();
    renderFeatured();
  }

  function boot() {
    initMenu();
    renderPeople();
    renderLists();
    renderNewsSpot();
    renderNewsPage();
    renderPublications();
    initTabs(renderLists);
    var y = $("#year"); if (y) y.textContent = new Date().getFullYear();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
})();
