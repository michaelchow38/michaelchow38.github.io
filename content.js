/* ============================================================
   EDIT THIS FILE TO UPDATE YOUR SITE.
   Everything on the page comes from here.
   Keep the commas and quotes intact — if the page goes blank
   after an edit, a missing comma is almost always the cause.
   ============================================================ */

window.SITE = {
  name: "Michael S. Chow",
  title: "Your title",               // small badge under your name
  avatar: "assets/images/avatar.png", // your photo; leave "" to show initials

  email: "you@example.com",
  phone: "",                          // leave "" to hide
  location: "City, State",
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/your-handle" },
    { label: "GitHub", url: "https://github.com/your-username" }
  ],

  /* ---------- ABOUT TAB ---------- */
  about: [
    "First paragraph about who you are and what you do. Replace with the intro from your Webflow site.",
    "Second paragraph: what you care about in your work and what you're looking for next."
  ],

  /* "What I'm doing" cards.
     icon options: design, code, mobile, camera, data, research, pen, chart */
  services: [
    { icon: "design", title: "Area one", text: "A short line about this area of your work." },
    { icon: "code", title: "Area two", text: "A short line about this area of your work." },
    { icon: "data", title: "Area three", text: "A short line about this area of your work." },
    { icon: "research", title: "Area four", text: "A short line about this area of your work." }
  ],

  /* ---------- RESUME TAB ----------
     To update your CV PDF: name it exactly like cvFile below and
     upload it into the assets folder, replacing the old one. */
  cvFile: "assets/Michael-Chow-CV.pdf",
  cvUpdated: "September 2026",

  education: [
    { title: "University name", dates: "2018 — 2022", detail: "Degree, Major" }
  ],
  experience: [
    { title: "Job title — Company", dates: "2024 — Present", detail: "One line on what you did or achieved." },
    { title: "Earlier job — Company", dates: "2022 — 2024", detail: "One line on what you did or achieved." }
  ],
  skills: ["Skill one", "Skill two", "Skill three", "Skill four", "Skill five"],

  /* ---------- PORTFOLIO TAB ----------
     status:  "completed"  or  "in-progress"
     labels:  any tags you like — filter buttons are built from these
     image:   put the picture in assets/images and write
              "assets/images/your-file.jpg", or leave "" for a plain tile
     links:   optional list of { label, url }
     Copy a whole { ... } block to add a project. */
  projects: [
    {
      title: "Example completed project",
      year: "2026",
      status: "completed",
      labels: ["Design", "Research"],
      summary: "A one-sentence description.",
      details: "The problem, what you did, and the result. Shown when someone clicks the project.",
      image: "",
      links: [{ label: "View live", url: "https://example.com" }]
    },
    {
      title: "Example project in progress",
      year: "2026",
      status: "in-progress",
      labels: ["Development"],
      summary: "Something you're currently working on.",
      details: "What it is, where it's headed, and what's done so far.",
      image: "",
      links: []
    },
    {
      title: "Another completed project",
      year: "2025",
      status: "completed",
      labels: ["Development", "Data"],
      summary: "A one-sentence description.",
      details: "The problem, what you did, and the result.",
      image: "",
      links: [{ label: "Source code", url: "https://github.com/your-username/repo" }]
    }
  ]
};
