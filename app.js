(function () {
  const S = window.SITE;
  const $ = (id) => document.getElementById(id);
  const el = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  };

  /* Simple line icons (24x24, stroke uses currentColor) */
  const P = {
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    phone: '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
    pin: '<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',
    link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
    design: '<path d="M4 20l1-4L16 5l3 3L8 19z"/><path d="m14 7 3 3"/><path d="M3 3h7v7H3z"/>',
    code: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m9 10-2 2 2 2M15 10l2 2-2 2M13 9l-2 6"/>',
    mobile: '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
    camera: '<path d="M4 7h3l2-3h6l2 3h3a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z"/><circle cx="12" cy="13" r="4"/>',
    data: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
    research: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m20 20-4.8-4.8"/>',
    pen: '<path d="M16 3l5 5L8 21H3v-5z"/><path d="m13 6 5 5"/>',
    chart: '<path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 6-6"/>',
    book: '<path d="M4 4h6a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4z"/><path d="M20 4h-6a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h7z"/>',
    briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18"/>',
    team: '<circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><circle cx="17" cy="9" r="2.5"/><path d="M15.5 14.5A5 5 0 0 1 21 19"/>',
    external: '<path d="M7 17 17 7"/><path d="M9 7h8v8"/>',
    eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>'
  };
  const icon = (name) => {
    const span = el("span", "ico");
    span.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (P[name] || P.link) + "</svg>";
    return span;
  };

  /* ---------- Sidebar ---------- */
  document.title = S.name + " — Portfolio";
  $("name").textContent = S.name;
  $("title").textContent = S.title;
  const initials = S.name.split(/\s+/).filter(w => /^[A-Za-z]/.test(w)).map(w => w[0]).filter((_, i, a) => i === 0 || i === a.length - 1).join("");
  if (S.avatar) {
    const img = el("img"); img.src = S.avatar; img.alt = S.name;
    img.onerror = () => { $("avatar").textContent = initials; };
    $("avatar").appendChild(img);
  } else { $("avatar").textContent = initials; }

  const contacts = [
    { ic: "mail", label: S.schoolEmail ? "Personal email" : "Email", value: S.email, href: "mailto:" + S.email },
    S.schoolEmail && { ic: "mail", label: "School email", value: S.schoolEmail, href: "mailto:" + S.schoolEmail },
    S.phone && { ic: "phone", label: "Phone", value: S.phone, href: "tel:" + S.phone.replace(/[^\d+]/g, "") },
    S.location && { ic: "pin", label: "Location", value: S.location }
  ].filter(Boolean);
  contacts.forEach((c) => {
    const li = el("li");
    const box = el("span", "icon-box"); box.appendChild(icon(c.ic));
    const txt = el("div", "c-text");
    txt.appendChild(el("span", "c-label", c.label));
    const v = el(c.href ? "a" : "span", "c-value", c.value);
    if (c.href) v.href = c.href;
    txt.appendChild(v);
    li.append(box, txt); $("contact-list").appendChild(li);
  });
  const socials = (target) => S.links.forEach((l) => {
    const a = el("a", "social-btn", l.label); a.href = l.url; a.target = "_blank"; a.rel = "noopener";
    a.setAttribute("aria-label", l.label + " (opens in a new tab)");
    a.appendChild(icon("external"));
    const li = el("li"); li.appendChild(a); target.appendChild(li);
  });
  socials($("social")); socials($("social-big"));

  $("more").addEventListener("click", () => {
    const open = $("sidebar").classList.toggle("open");
    $("more").setAttribute("aria-expanded", String(open));
    $("more").textContent = open ? "Hide contacts" : "Show contacts";
  });

  /* ---------- Tabs & routing ----------
     #about, #resume, #portfolio, #contact show a tab.
     #project/<id> shows one project's page. */
  const tabs = document.querySelectorAll(".tabs button");
  function showTab(name, highlight) {
    document.querySelectorAll(".tab").forEach((t) => (t.hidden = t.id !== "tab-" + name));
    tabs.forEach((b) => b.setAttribute("aria-current", b.dataset.tab === highlight ? "page" : "false"));
    window.scrollTo(0, 0);
  }
  function route() {
    const hash = decodeURIComponent(location.hash.slice(1));
    if (hash.startsWith("project/")) {
      renderProject(hash.slice(8));
      showTab("project", "portfolio");
      return;
    }
    const name = $("tab-" + hash) && hash !== "project" ? hash : "about";
    document.title = S.name + " — Portfolio";
    showTab(name, name);
  }
  tabs.forEach((b) => b.addEventListener("click", () => {
    if (location.hash === "#" + b.dataset.tab) route();
    else location.hash = b.dataset.tab;
  }));
  window.addEventListener("hashchange", route);

  /* ---------- About ---------- */
  S.about.forEach((p) => $("about-text").appendChild(el("p", null, p)));
  S.services.forEach((s) => {
    const li = el("li", "card service");
    const t = el("div");
    t.appendChild(el("h4", null, s.title));
    t.appendChild(el("p", null, s.text));
    li.append(icon(s.icon), t); $("services").appendChild(li);
  });

  /* ---------- Resume ---------- */
  document.querySelectorAll("[data-icon]").forEach((n) => n.appendChild(icon(n.dataset.icon)));
  $("cv-download").href = S.cvFile;
  $("cv-updated").textContent = S.cvUpdated ? "Last updated " + S.cvUpdated : "";
  const timeline = (list, target) => list.forEach((e) => {
    const li = el("li");
    li.appendChild(el("h4", null, e.title));
    li.appendChild(el("span", "t-dates", e.dates));
    if (e.detail) li.appendChild(el("p", null, e.detail));
    target.appendChild(li);
  });
  timeline(S.education, $("education"));
  // Experience can be one list, or split into groups with their own headings
  const groups = S.experience.length && S.experience[0].items
    ? S.experience
    : [{ heading: "Experience", icon: "briefcase", items: S.experience }];
  groups.forEach((g) => {
    const block = el("div", "timeline-block");
    const h = el("h3", "subheading with-icon");
    const box = el("span", "icon-box"); box.appendChild(icon(g.icon || "briefcase"));
    h.append(box, document.createTextNode(g.heading));
    const ol = el("ol", "timeline");
    timeline(g.items, ol);
    block.append(h, ol); $("experience-groups").appendChild(block);
  });
  S.skills.forEach((s) => $("skills").appendChild(el("li", null, s)));

  /* ---------- Contact ---------- */
  [[S.schoolEmail ? "Personal" : "Email", S.email], ["School", S.schoolEmail]].forEach(([label, addr]) => {
    if (!addr) return;
    const li = el("li");
    li.appendChild(el("span", "c-label", label));
    const link = el("a", "big-email", addr); link.href = "mailto:" + addr;
    li.appendChild(link); $("email-list").appendChild(li);
  });

  /* ---------- Portfolio ---------- */
  const STATUS = { "completed": "Completed", "in-progress": "In progress" };
  const slug = (p) => p.id || p.title.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const state = { status: "all", label: "all" };
  const labels = [...new Set(S.projects.flatMap((p) => p.labels))].sort();
  const done = S.projects.filter((p) => p.status === "completed").length;

  function chip(group, value, text, container) {
    const b = el("button", "chip", text); b.type = "button";
    b.dataset.group = group; b.dataset.value = value;
    b.addEventListener("click", () => { state[group] = value; render(); });
    container.appendChild(b);
  }
  chip("status", "all", "All", $("status-filters"));
  chip("status", "completed", "Completed (" + done + ")", $("status-filters"));
  chip("status", "in-progress", "In progress (" + (S.projects.length - done) + ")", $("status-filters"));
  chip("label", "all", "All labels", $("label-filters"));
  labels.forEach((l) => chip("label", l, l, $("label-filters")));

  const statusTag = (p) => {
    const s = el("span", "status " + p.status);
    s.appendChild(el("span", "dot"));
    s.appendChild(document.createTextNode(STATUS[p.status] || p.status));
    return s;
  };
  const imageOrTile = (p) => {
    const tile = () => el("span", "tile", p.title.split(/\s+/).slice(0, 2).map((w) => w[0]).join("").toUpperCase());
    if (p.image) {
      const i = el("img"); i.src = p.image; i.alt = ""; i.loading = "lazy";
      i.onerror = () => i.replaceWith(tile()); // image not uploaded yet: show initials instead
      return i;
    }
    return tile();
  };
  const meta = (p) => p.labels.join(", ") + (p.year ? " · " + p.year : "");

  function card(p) {
    const li = el("li");
    const a = el("a", "project"); a.href = "#project/" + slug(p);
    a.target = "_blank"; a.rel = "noopener"; // open each project in its own tab
    a.setAttribute("aria-label", p.title + " (opens in a new tab)");
    const fig = el("span", "thumb");
    fig.appendChild(imageOrTile(p));
    const eye = el("span", "view"); eye.appendChild(icon("eye")); fig.appendChild(eye);
    fig.appendChild(statusTag(p));
    a.appendChild(fig);
    a.appendChild(el("span", "p-title", p.title));
    a.appendChild(el("span", "p-cat", meta(p)));
    li.appendChild(a); return li;
  }

  function render() {
    document.querySelectorAll(".chip").forEach((c) =>
      c.setAttribute("aria-pressed", String(state[c.dataset.group] === c.dataset.value)));
    const list = S.projects.filter((p) =>
      (state.status === "all" || p.status === state.status) &&
      (state.label === "all" || p.labels.includes(state.label)));
    $("projects").replaceChildren(...list.map(card));
    $("empty").hidden = list.length > 0;
  }
  $("reset").addEventListener("click", () => { state.status = "all"; state.label = "all"; render(); });
  render();

  /* ---------- Slide viewer (for projects with a presentation PDF) ---------- */
  const PDFJS = "https://cdn.jsdelivr.net/npm/pdfjs-dist@5.6.205/legacy/build/";
  let pdfjsReady;
  const loadPdfJs = () => pdfjsReady || (pdfjsReady = import(PDFJS + "pdf.min.mjs").then((lib) => {
    lib.GlobalWorkerOptions.workerSrc = PDFJS + "pdf.worker.min.mjs";
    return lib;
  }));

  function slideViewer(pres) {
    const sec = el("section", "pj-section");
    sec.appendChild(el("h3", "subheading", pres.title || "Presentation"));
    const deck = el("div", "deck"); deck.tabIndex = 0;
    deck.setAttribute("aria-label", "Slide viewer. Use the left and right arrow keys to change slides.");
    const stage = el("div", "deck-stage");
    const canvas = el("canvas"); canvas.setAttribute("role", "img");
    const status = el("p", "deck-status", "Loading slides…");
    stage.append(canvas, status);
    const bar = el("div", "deck-bar");
    const prev = el("button", "deck-btn", "‹ Previous"); prev.type = "button";
    const next = el("button", "deck-btn", "Next ›"); next.type = "button";
    const count = el("span", "deck-count"); count.setAttribute("aria-live", "polite");
    const open = el("a", "deck-open", "Open PDF"); open.href = pres.file; open.target = "_blank"; open.rel = "noopener";
    open.appendChild(icon("external"));
    bar.append(prev, count, next, open);
    deck.append(stage, bar); sec.appendChild(deck);
    prev.disabled = next.disabled = true;

    let doc = null, n = 1, task = null, ratio = 16 / 9;
    async function draw() {
      if (!doc || !canvas.isConnected) return;
      const page = await doc.getPage(n);
      const base = page.getViewport({ scale: 1 });
      ratio = base.width / base.height; stage.style.aspectRatio = String(ratio);
      const scale = (stage.clientWidth || 800) / base.width * Math.min(window.devicePixelRatio || 1, 2);
      const viewport = page.getViewport({ scale });
      if (task) { try { task.cancel(); } catch (e) {} }
      canvas.width = Math.floor(viewport.width); canvas.height = Math.floor(viewport.height);
      task = page.render({ canvasContext: canvas.getContext("2d"), viewport, canvas });
      try { await task.promise; } catch (e) { if (e && e.name !== "RenderingCancelledException") throw e; }
      count.textContent = "Slide " + n + " of " + doc.numPages;
      canvas.setAttribute("aria-label", "Slide " + n + " of " + doc.numPages);
      prev.disabled = n === 1; next.disabled = n === doc.numPages;
    }
    const go = (d) => { if (!doc) return; const m = Math.min(Math.max(n + d, 1), doc.numPages); if (m !== n) { n = m; draw(); } };
    prev.addEventListener("click", () => go(-1));
    next.addEventListener("click", () => go(1));
    deck.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); }
      if (e.key === "ArrowRight") { e.preventDefault(); go(1); }
    });
    let x0 = null;
    stage.addEventListener("touchstart", (e) => { x0 = e.touches[0].clientX; }, { passive: true });
    stage.addEventListener("touchend", (e) => {
      if (x0 === null) return; const dx = e.changedTouches[0].clientX - x0; x0 = null;
      if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    });
    let resizeTimer;
    const onResize = () => {
      if (!canvas.isConnected) { window.removeEventListener("resize", onResize); return; }
      clearTimeout(resizeTimer); resizeTimer = setTimeout(draw, 150);
    };
    window.addEventListener("resize", onResize);

    loadPdfJs()
      .then((lib) => lib.getDocument(pres.file).promise)
      .then((d) => { doc = d; status.remove(); return draw(); })
      .catch(() => {
        status.textContent = "";
        status.append("The slides couldn't load here. ");
        const a2 = el("a", null, "Open the PDF instead"); a2.href = pres.file; a2.target = "_blank"; a2.rel = "noopener";
        status.appendChild(a2);
        count.textContent = "";
      });
    return sec;
  }

  /* ---------- Project page ---------- */
  function renderProject(id) {
    const view = $("project-view");
    const i = S.projects.findIndex((p) => slug(p) === id);
    const back = el("a", "back", "Back to portfolio"); back.href = "#portfolio";

    if (i < 0) {
      document.title = "Project not found — " + S.name;
      const h = el("h2", "heading", "Project not found");
      const p = el("p", "about-text", "This project may have been renamed or removed. Browse all projects instead.");
      view.replaceChildren(back, h, p);
      return;
    }
    const p = S.projects[i];
    document.title = p.title + " — " + S.name;

    const head = el("header", "pj-head");
    head.appendChild(el("h2", "heading", p.title));
    const m = el("p", "pj-meta"); m.append(statusTag(p), document.createTextNode(meta(p)));
    head.appendChild(m);
    if (p.summary) head.appendChild(el("p", "pj-lead", p.summary));

    const parts = [back, head];

    if (p.image) {
      const f = el("figure", "pj-hero"); const img = el("img"); img.src = p.image; img.alt = p.imageAlt || p.title;
      img.onerror = () => f.remove();
      f.appendChild(img); parts.push(f);
    }

    if (p.facts && p.facts.length) {
      const dl = el("dl", "facts");
      p.facts.forEach((f) => {
        const d = el("div"); d.append(el("dt", null, f.label), el("dd", null, f.value)); dl.appendChild(d);
      });
      parts.push(dl);
    }

    if (p.presentation && p.presentation.file) parts.push(slideViewer(p.presentation));

    const sections = p.sections && p.sections.length
      ? p.sections
      : (p.details ? [{ heading: "Overview", text: p.details }] : []);
    sections.forEach((s) => {
      const sec = el("section", "pj-section");
      sec.appendChild(el("h3", "subheading", s.heading));
      [].concat(s.text || []).forEach((t) => sec.appendChild(el("p", null, t)));
      if (s.points && s.points.length) {
        const ul = el("ul", "pj-points");
        s.points.forEach((pt) => ul.appendChild(el("li", null, pt)));
        sec.appendChild(ul);
      }
      parts.push(sec);
    });

    if (p.gallery && p.gallery.length) {
      const sec = el("section", "pj-section");
      sec.appendChild(el("h3", "subheading", "Gallery"));
      const g = el("div", "gallery");
      p.gallery.forEach((gi) => {
        const f = el("figure"); const img = el("img"); img.src = gi.src; img.alt = gi.caption || ""; img.loading = "lazy";
        img.onerror = () => f.remove();
        const link = el("a"); link.href = gi.src; link.target = "_blank"; link.rel = "noopener";
        link.setAttribute("aria-label", "Open full size: " + (gi.caption || "image"));
        link.appendChild(img); f.appendChild(link);
        if (gi.caption) f.appendChild(el("figcaption", null, gi.caption));
        g.appendChild(f);
      });
      sec.appendChild(g); parts.push(sec);
    }

    if (p.links && p.links.length) {
      const ul = el("ul", "pj-links");
      p.links.forEach((l) => {
        const a = el("a", "btn", l.label); a.href = l.url; a.target = "_blank"; a.rel = "noopener";
        const li = el("li"); li.appendChild(a); ul.appendChild(li);
      });
      parts.push(ul);
    }

    if (S.projects.length > 1) {
      const nav = el("nav", "pj-nav"); nav.setAttribute("aria-label", "More projects");
      const prev = S.projects[(i - 1 + S.projects.length) % S.projects.length];
      const next = S.projects[(i + 1) % S.projects.length];
      [["Previous project", prev, "prev"], ["Next project", next, "next"]].forEach(([label, q, cls]) => {
        const a = el("a", "pj-step " + cls); a.href = "#project/" + slug(q);
        a.append(el("span", "pj-step-label", label), el("span", "pj-step-title", q.title));
        nav.appendChild(a);
      });
      parts.push(nav);
    }

    view.replaceChildren(...parts);
  }

  route();
})();
