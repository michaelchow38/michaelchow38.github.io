(function () {
  const S = window.SITE;
  const $ = (id) => document.getElementById(id);
  const el = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  };

  // Profile
  document.title = S.name + " — Portfolio";
  $("name").textContent = S.name;
  $("role").textContent = S.role;
  $("intro").textContent = S.intro;
  $("email").textContent = S.email;
  $("email").href = "mailto:" + S.email;
  S.links.forEach((l) => {
    const li = el("li"), a = el("a", null, l.label);
    a.href = l.url; a.target = "_blank"; a.rel = "noopener";
    li.appendChild(a); $("links").appendChild(li);
  });

  // CV
  $("cv-download").href = S.cvFile;
  $("cv-updated").textContent = S.cvUpdated ? "Last updated " + S.cvUpdated : "";
  const timeline = (list, target) => list.forEach((e) => {
    const li = el("li");
    li.appendChild(el("span", "t-dates", e.dates));
    const body = el("div");
    body.appendChild(el("strong", null, e.title));
    body.appendChild(el("span", "t-org", e.org));
    if (e.detail) body.appendChild(el("p", null, e.detail));
    li.appendChild(body); target.appendChild(li);
  });
  timeline(S.experience, $("experience"));
  timeline(S.education, $("education"));
  S.skills.forEach((s) => $("skills").appendChild(el("li", null, s)));

  // Projects
  const STATUS = { "completed": "Completed", "in-progress": "In progress" };
  const state = { status: "all", label: "all" };

  const labels = [...new Set(S.projects.flatMap((p) => p.labels))].sort();

  function chip(group, value, text, container) {
    const b = el("button", "chip", text);
    b.type = "button";
    b.dataset.group = group; b.dataset.value = value;
    b.addEventListener("click", () => { state[group] = value; render(); });
    container.appendChild(b);
  }
  const done = S.projects.filter((p) => p.status === "completed").length;
  chip("status", "all", "All (" + S.projects.length + ")", $("status-filters"));
  chip("status", "completed", "Completed (" + done + ")", $("status-filters"));
  chip("status", "in-progress", "In progress (" + (S.projects.length - done) + ")", $("status-filters"));
  chip("label", "all", "All labels", $("label-filters"));
  labels.forEach((l) => chip("label", l, l, $("label-filters")));

  function projectItem(p, i) {
    const li = el("li", "project");
    li.dataset.status = p.status;

    const btn = el("button", "p-row");
    btn.type = "button";
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-controls", "p-" + i);

    const mark = el("span", "status " + p.status);
    mark.appendChild(el("span", "dot"));
    mark.appendChild(el("span", "status-text", STATUS[p.status] || p.status));

    const main = el("span", "p-main");
    main.appendChild(el("span", "p-title", p.title));
    main.appendChild(el("span", "p-summary", p.summary));

    const tags = el("span", "p-tags");
    p.labels.forEach((l) => tags.appendChild(el("span", "tag", l)));

    btn.append(el("span", "p-year", p.year), main, tags, mark);

    const panel = el("div", "p-detail");
    panel.id = "p-" + i; panel.hidden = true;
    if (p.image) {
      const img = el("img"); img.src = p.image; img.alt = p.title; img.loading = "lazy";
      panel.appendChild(img);
    }
    if (p.details) panel.appendChild(el("p", null, p.details));
    if (p.links && p.links.length) {
      const ul = el("ul", "p-links");
      p.links.forEach((l) => {
        const a = el("a", null, l.label); a.href = l.url; a.target = "_blank"; a.rel = "noopener";
        const item = el("li"); item.appendChild(a); ul.appendChild(item);
      });
      panel.appendChild(ul);
    }

    btn.addEventListener("click", () => {
      const open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!open));
      panel.hidden = open;
      li.classList.toggle("open", !open);
    });

    li.append(btn, panel);
    return li;
  }

  function render() {
    document.querySelectorAll(".chip").forEach((c) =>
      c.setAttribute("aria-pressed", String(state[c.dataset.group] === c.dataset.value)));
    const list = S.projects.filter((p) =>
      (state.status === "all" || p.status === state.status) &&
      (state.label === "all" || p.labels.includes(state.label)));
    const ol = $("projects");
    ol.replaceChildren(...list.map(projectItem));
    $("count").textContent = list.length + " of " + S.projects.length + " shown";
    $("empty").hidden = list.length > 0;
  }
  $("reset").addEventListener("click", () => { state.status = "all"; state.label = "all"; render(); });
  render();
})();
