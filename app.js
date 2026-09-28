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
    { ic: "mail", label: "Email", value: S.email, href: "mailto:" + S.email },
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
    const a = el("a", null, l.label); a.href = l.url; a.target = "_blank"; a.rel = "noopener";
    const li = el("li"); li.appendChild(a); target.appendChild(li);
  });
  socials($("social")); socials($("social-big"));

  $("more").addEventListener("click", () => {
    const open = $("sidebar").classList.toggle("open");
    $("more").setAttribute("aria-expanded", String(open));
    $("more").textContent = open ? "Hide contacts" : "Show contacts";
  });

  /* ---------- Tabs ---------- */
  const tabs = document.querySelectorAll(".tabs button");
  function show(name, push) {
    if (!$("tab-" + name)) name = "about";
    document.querySelectorAll(".tab").forEach((t) => (t.hidden = t.id !== "tab-" + name));
    tabs.forEach((b) => b.setAttribute("aria-current", b.dataset.tab === name ? "page" : "false"));
    if (push) history.replaceState(null, "", "#" + name);
    window.scrollTo(0, 0);
  }
  tabs.forEach((b) => b.addEventListener("click", () => show(b.dataset.tab, true)));
  show(location.hash.slice(1) || "about", false);
  window.addEventListener("hashchange", () => show(location.hash.slice(1), false));

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
  timeline(S.experience, $("experience"));
  S.skills.forEach((s) => $("skills").appendChild(el("li", null, s)));

  /* ---------- Contact ---------- */
  $("big-email").textContent = S.email; $("big-email").href = "mailto:" + S.email;

  /* ---------- Portfolio ---------- */
  const STATUS = { "completed": "Completed", "in-progress": "In progress" };
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
    if (p.image) { const i = el("img"); i.src = p.image; i.alt = ""; i.loading = "lazy"; return i; }
    return el("span", "tile", p.title.split(/\s+/).slice(0, 2).map((w) => w[0]).join("").toUpperCase());
  };

  function card(p) {
    const li = el("li");
    const b = el("button", "project"); b.type = "button";
    const fig = el("span", "thumb");
    fig.appendChild(imageOrTile(p));
    const eye = el("span", "view"); eye.appendChild(icon("eye")); fig.appendChild(eye);
    fig.appendChild(statusTag(p));
    b.appendChild(fig);
    b.appendChild(el("span", "p-title", p.title));
    b.appendChild(el("span", "p-cat", p.labels.join(", ") + (p.year ? " · " + p.year : "")));
    b.addEventListener("click", () => openModal(p));
    li.appendChild(b); return li;
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

  /* ---------- Project modal ---------- */
  const modal = $("modal");
  function openModal(p) {
    $("m-image").replaceChildren(p.image ? imageOrTile(p) : el("span"));
    $("m-meta").replaceChildren(statusTag(p), document.createTextNode(p.labels.join(", ") + (p.year ? " · " + p.year : "")));
    $("m-title").textContent = p.title;
    $("m-details").textContent = p.details || p.summary;
    $("m-links").replaceChildren(...(p.links || []).map((l) => {
      const a = el("a", "btn", l.label); a.href = l.url; a.target = "_blank"; a.rel = "noopener";
      const li = el("li"); li.appendChild(a); return li;
    }));
    modal.showModal();
  }
  $("m-close").addEventListener("click", () => modal.close());
  modal.addEventListener("click", (e) => { if (e.target === modal) modal.close(); });
})();
