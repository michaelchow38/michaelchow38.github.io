/* ============================================================
   EDIT THIS FILE TO UPDATE YOUR SITE.
   Everything on the page (bio, CV, projects) comes from here.
   Keep the commas and quotes intact — if the page goes blank
   after an edit, a missing comma is almost always the cause.
   ============================================================ */

window.SITE = {
  name: "Michael S. Chow",
  role: "Your role or field goes here",
  intro:
    "One or two sentences about what you do and what kind of work you're looking for. Replace this with the intro from your Webflow site.",
  email: "you@example.com",
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/your-handle" },
    { label: "GitHub", url: "https://github.com/your-username" }
  ],

  /* ---------- CV ----------
     To update your CV: save it as a PDF, name it exactly like
     cvFile below, and upload it into the assets folder
     (replacing the old one). Then change cvUpdated. */
  cvFile: "assets/Michael-Chow-CV.pdf",
  cvUpdated: "September 2026",

  experience: [
    {
      title: "Job title",
      org: "Company name",
      dates: "2024 – Present",
      detail: "One line on what you did or achieved."
    },
    {
      title: "Earlier job title",
      org: "Company name",
      dates: "2022 – 2024",
      detail: "One line on what you did or achieved."
    }
  ],

  education: [
    {
      title: "Degree, Major",
      org: "University name",
      dates: "2018 – 2022",
      detail: ""
    }
  ],

  skills: ["Skill one", "Skill two", "Skill three", "Skill four"],

  /* ---------- PROJECTS ----------
     status:  "completed"  or  "in-progress"
     labels:  any tags you like — filter buttons are built from these
     image:   optional. Put the picture in assets/images and write
              "assets/images/your-file.jpg", or leave as ""
     links:   optional list of { label, url }
     Newest projects first reads best. Copy a whole { ... } block
     to add a new one. */
  projects: [
    {
      title: "Example completed project",
      year: "2026",
      status: "completed",
      labels: ["Design", "Research"],
      summary: "A one-sentence description that shows in the list.",
      details:
        "A longer description shown when someone opens the project: the problem, what you did, and the result.",
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
      summary: "A one-sentence description that shows in the list.",
      details: "A longer description shown when someone opens the project.",
      image: "",
      links: [{ label: "Source code", url: "https://github.com/your-username/repo" }]
    }
  ]
};
