/* ============================================================
   EDIT THIS FILE TO UPDATE YOUR SITE.
   Everything on the page comes from here.
   Keep the commas and quotes intact — if the page goes blank
   after an edit, a missing comma is almost always the cause.
   ============================================================ */

window.SITE = {
  name: "Michael Chow",
  title: "Information Science Student and Undergraduate Researcher @ University of Colorado Boulder", // badge under your name
  avatar: "assets/images/avatar.webp",  // your photo; initials show if it is missing

  email: "michael.s.chow@gmail.com",        // personal
  schoolEmail: "michael.chow@colorado.edu", // leave "" to hide
  phone: "",                            // leave "" to hide
  location: "Palo Alto, CA",
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/michael-s-chow/" },
    { label: "GitHub", url: "https://github.com/michaelchow38/michaelchow38.github.io/tree/main/projects" }
  ],

  /* ---------- ABOUT TAB ---------- */
  about: [
    "I'm an Information Science student at the University of Colorado Boulder, minoring in Business. I'm interested in how people and technology work together, especially how each design decision shapes the user experience from one moment to the next. I also love digging into the why: understanding what's going on in someone's world that leads them to make big changes.",
    "I'm an undergraduate researcher in the Al-Adala Lab, working under Professor Bryan Semaan and PhD candidate Divyanshu Kumar Singh to study technology and marginalized communities, with a focus on caste in India. I'm also currently doing an independent study on the organizing side of esports, looking at how team representatives and managerial staff work together to run competitive gaming, the decisions and strategies behind that collaboration, and how it shapes the wider esports ecosystem and its infrastructure. Before that, I spent years managing competitive esports teams and youth soccer programs, where I learned to run operations, negotiate sponsorships, and keep teams coordinated across countries."
  ],

  /* "What I'm doing" cards.
     icon options: design, code, mobile, camera, data, research, pen, chart, briefcase, team */
  services: [
    { icon: "research", title: "HCI Research", text: "Human-centered research on technology and communities, using IRB-governed methods." },
    { icon: "design", title: "Accessibility & Design", text: "Evaluating spaces and systems for barriers and designing more inclusive alternatives." },
    { icon: "chart", title: "Data Analysis", text: "Turning raw data into clear findings with Python, SQL, Excel, Tableau, and Power BI." },
    { icon: "briefcase", title: "Program Management", text: "Running operations, budgets, logistics, and sponsorships for teams and programs." }
  ],

  /* ---------- CV TAB ----------
     The CV tab shows your PDF and lets people download it.
     To update it: upload the new PDF into the assets folder with this exact
     name (it replaces the old one), then change cvUpdated.
     (The education, experience, and skills lists below aren't shown on the
     site anymore, but you can keep them for reference.) */
  cvFile: "assets/Michael_Chow_CV.pdf",
  cvUpdated: "October 2026",

  education: [
    { title: "University of Colorado Boulder", dates: "2024 — May 2028 (expected)", detail: "B.S. Information Science, Minor in Business. GPA 3.78. Dean's List Fall 2024, Spring 2025, and Spring 2026." },
    { title: "CITI Program — Human Subjects Research Certification", dates: "September 2026", detail: "Social-Behavioral Research Investigators and Key Personnel (Basic Course). Valid through September 2029." },
    { title: "Foothill College", dates: "2022 — 2023", detail: "Dual enrollment while in high school." }
  ],
  /* Experience is split into groups. Each group has a heading,
     an icon (research, team, briefcase, code, design, chart...)
     and its own list of items. Add a new group by copying one. */
  experience: [
    {
      heading: "Research",
      icon: "research",
      items: [
        { title: "Undergraduate Researcher — Al-Adala Lab, CU Boulder", dates: "Fall 2026 — Present", detail: "Supporting human-centered research on technology and marginalized communities under Dr. Bryan Semaan." }
      ]
    },
    {
      heading: "Esports & Youth Sports",
      icon: "team",
      items: [
        { title: "Team Manager — Vatic (PUBG Mobile)", dates: "January 2025 — June 2026", detail: "Directed team operations, scheduling, logistics, and sponsorship discussions across competitive events." },
        { title: "Team Manager — Wolves Esports", dates: "2025 — January 2026", detail: "Managed scheduling, competitive operations, and communication between staff and players." },
        { title: "Org & Team Manager — Dauntless Esports", dates: "January 2022 — 2025", detail: "Took the roster from Open Division to the PUBG Mobile Super League, helped negotiate over $50,000 in sponsorships, and coordinated international travel to PMSL Americas in Brazil." },
        { title: "Assistant Program Director — Palo Alto Soccer Club", dates: "July 2020 — July 2024", detail: "Promoted from Junior Coach. Managed scheduling, staffing, and budgets for multi-team youth programs." },
        { title: "Earlier esports roles — NRG Galaxy, Lotus Esports, Angry Amateurs", dates: "2020 — 2023", detail: "Roster scouting, sponsorship talks, logistics, and tournament operations." }
      ]
    }
  ],
  skills: ["Python", "SQL", "Excel", "Tableau", "Power BI", "Data visualization", "User research", "Human subjects research", "Design thinking", "Accessibility", "Budgeting", "Logistics & scheduling", "Sponsorship negotiation"],

  /* Card shown at the end of the Portfolio grid. Delete this line to hide it. */
  comingSoon: { title: "More projects coming soon", text: "I'm working on new research and data projects. Check back soon." },

  /* ---------- PORTFOLIO TAB ----------
     Every project gets its own page. Only title, status and labels
     are required — leave out anything you don't have.

     status:   "completed"  or  "in-progress"
     labels:   tags for the filter buttons
     image:    cover picture, e.g. "assets/images/chipotle.jpg"
     facts:    short details shown in a row, e.g. { label: "Methods", value: "..." }
     sections: the write-up. Each has a heading and either
               text: "one paragraph"  or  text: ["para 1", "para 2"]
               and/or points: ["bullet", "bullet"]
     gallery:  extra pictures, e.g. { src: "assets/images/map.jpg", caption: "..." }
     links:    buttons, e.g. { label: "Read the report", url: "https://..." }
     Copy a whole { ... } block to add a project. */
  projects: [
    {
      id: "cod-kd-sql",
      title: "K/D vs. Winning in Pro Call of Duty",
      year: "2026",
      status: "completed",
      labels: ["Data Analysis", "SQL", "Esports"],
      summary: "Do players with a high kill/death ratio actually win more, or do other stats matter more?",
      image: "assets/images/cwl-stat-correlations.png",
      imageAlt: "Bar charts showing how strongly each stat correlates with win rate in Control, Hardpoint, and Search & Destroy",
      facts: [
        { label: "Data", value: "22,301 player-map box scores, 2019 CWL season (Black Ops 4), from Jpkrez's cwl-stats archive" },
        { label: "Tools", value: "Python, pandas, SQLite, Matplotlib" },
        { label: "Methods", value: "SQL queries, data-quality checks, correlation analysis" }
      ],
      sections: [
        { heading: "Overview", text: "In professional Call of Duty, kill/death ratio (K/D) is the stat everyone looks at first. I used a season of Call of Duty World League box scores to test whether high-K/D players actually win more, or whether other stats tell you more about who wins in each game mode." },
        { heading: "Checking the data first", text: "Before answering anything, I ran data-quality checks in SQL to see what the data could support:", points: [
          "The Vegas event was missing assists and hill-time stats entirely, so I excluded it from the analysis",
          "The accuracy column was 0% for 19,105 of 19,110 rows, so it couldn't be used",
          "The original K/D column contained spreadsheet errors (#DIV/0!), so I recalculated K/D from kills and deaths",
          "Map IDs weren't unique on their own, so I built a combined key from the event, series, and map"
        ] },
        { heading: "Approach", points: [
          "Loaded the raw CSV into a SQLite database and cleaned the column names",
          "Compared the two teams on every map to see how often the higher-K/D team won",
          "Built one row per player per mode, using per-10-minute and per-round rates so longer maps don't skew the results, and only players with at least 20 maps",
          "Measured how strongly each stat correlates with win rate in Hardpoint, Control, and Search & Destroy"
        ] },
        { heading: "What I found", points: [
          "The team with the higher K/D won about 91% of maps in every mode, but that's partly because the winning team controls the fights and racks up kills",
          "At the player level, K/D was never the stat most closely tied to winning",
          "In Control, captures per round (0.53) beat K/D (0.43)",
          "In Hardpoint, damage per 10 minutes (0.47) beat K/D (0.35)",
          "In Search & Destroy, how often a player survived the round (0.46) beat K/D (0.30)",
          "Some top-K/D players had average win rates: one Hardpoint player ranked 4th in K/D (1.17) but won only 45.9% of maps"
        ] },
        { heading: "Conclusion", text: "Players with a high K/D do tend to win more, but K/D was never the stat most closely tied to winning in any mode. What mattered most depended on the mode: capturing zones in Control, dealing damage in Hardpoint, and staying alive in Search & Destroy. Stats like captures, damage, and survival deserve as much attention as K/D." },
        { heading: "Limitations", points: [
          "Correlation isn't causation: winning teams get more kills, not only the other way around",
          "A player's win rate depends on their teammates, and several players changed teams mid-season",
          "One season of one game, pro players only, and the correlations are moderate (0.30 to 0.53)"
        ] },
        { heading: "Data source", text: "The data comes from Jpkrez's cwl-stats repository on GitHub, a public archive of CWL player stats he collected while working for MLG from 2016 to 2019. Thanks to Jpkrez for sharing it." }
      ],
      gallery: [],
      links: [
        { label: "View code on GitHub", url: "https://github.com/michaelchow38/michaelchow38.github.io/tree/main/projects/cod-kd-sql-analysis" },
        { label: "Data source: jpkrez/cwl-stats", url: "https://github.com/jpkrez/cwl-stats" }
      ]
    },
    {
      id: "man-city-2020-21",
      title: "What Made Man City Champions?",
      year: "2025",
      status: "completed",
      labels: ["Data Analysis", "Python", "Data Visualization"],
      summary: "Why Manchester City won the 2020–21 Premier League: circumstance, stats, or star players?",
      image: "assets/images/epl-goals-by-team.png",
      imageAlt: "Bar chart of total goals scored by each Premier League team in 2020–21",
      facts: [
        { label: "Type", value: "Class final project" },
        { label: "Data", value: "Match results CSV, player stats CSV, Wikipedia season page" },
        { label: "Tools", value: "Python, pandas, NumPy, Matplotlib, Beautiful Soup" }
      ],
      sections: [
        { heading: "Overview", text: "Manchester City won the 2020–21 English Premier League. I set out to find out why: did they win on circumstance, by scoring the most and conceding the least, or because they had the best players?" },
        { heading: "Approach", points: [
          "Rebuilt the full league table from every match result using pandas and NumPy, combining home and away games",
          "Charted total goals by team, then Man City's individual goal scorers",
          "Compared Man City's best player in each stat category to the best player in the whole league",
          "Parsed the season's Wikipedia page with Beautiful Soup to pull the clean sheets and awards tables",
          "Built pie charts of which clubs won the season awards and PFA Team of the Year spots"
        ] },
        { heading: "What I found", points: [
          "Man City had the best attack and the best defense: 83 goals scored and only 32 conceded, the most and fewest in the league, finishing on 86 points",
          "No Man City player led the league in any single stat. Harry Kane led in both goals (23) and assists (14), while City's top scorer, İlkay Gündoğan, had 13",
          "Their goals came from across the squad rather than one star, which protects a team against injuries",
          "Their goalkeeper Ederson kept the most clean sheets in the league (19)",
          "City players and staff won 6 of the 8 major season awards and 6 of the 11 PFA Team of the Year spots"
        ] },
        { heading: "What I learned", text: "I got much more comfortable building charts in Matplotlib on my own, rather than copying examples." }
      ],
      gallery: [
        { src: "assets/images/epl-man-city-scorers.png", caption: "Man City's individual goal scorers" },
        { src: "assets/images/epl-awards-by-club.png", caption: "Season awards by club" },
        { src: "assets/images/epl-pfa-team-by-club.png", caption: "PFA Team of the Year spots by club" }
      ],
      links: [{ label: "View code on GitHub", url: "https://github.com/michaelchow38/michaelchow38.github.io/tree/main/projects/man-city-2020-21-analysis" }]
    },
    {
      title: "Al-Adala Lab Research",
      year: "2026",
      status: "in-progress",
      labels: ["Research"],
      summary: "Research on technology and marginalized communities, including caste and data workers in India, plus my own interview study on how esports competitive structures form.",
      image: "",
      facts: [
        { label: "Role", value: "Undergraduate Researcher & Research Assistant" },
        { label: "Lab", value: "Al-Adala Lab, CU Boulder" },
        { label: "PI", value: "Dr. Bryan Semaan" },
        { label: "Supervisor", value: "Divyanshu Kumar Singh, PhD Candidate" }
      ],
      sections: [
        { heading: "Overview", text: "The Al-Adala Lab is a social computing and HCI lab at CU Boulder that studies how technology shapes the lives of marginalized communities. I joined as an Undergraduate Researcher in Fall 2026, working with Dr. Bryan Semaan, the lab's PI, and PhD candidate Divyanshu Kumar Singh, my supervisor." },
        { heading: "What I'm doing", points: [
          "Leading an independent interview study on how esports stakeholders (players, team managers, creators, and league staff) explain why competitive structures like franchised leagues and open circuits form and change",
          "Designed the study's interview questions, a recruitment plan across 8 stakeholder groups, and a plan for analyzing and comparing responses by role",
          "Supporting my supervisor's research on caste and data workers in India: helping design interview questions and protocols, coding and labeling qualitative data, and identifying insights",
          "Completed CITI human subjects training to take part in IRB-governed social-behavioral research"
        ] }
      ],
      gallery: [],
      links: []
    },
    {
      title: "Accessibility Heat Maps: ECCR and Leeds",
      year: "2026",
      status: "completed",
      labels: ["Accessibility", "Research", "Data Visualization"],
      summary: "A team evaluation of two CU Boulder buildings, scoring every part of every floor for accessibility and mapping the results as heat maps.",
      image: "projects/accessibility-eval/accessibility-heatmap.jpg",
      imageAlt: "Heat map of the Engineering Center's first floor, with each grid cell scored from 0 to 5 for accessibility",
      presentation: { file: "projects/accessibility-eval/Accessibility%20Eval.pdf", title: "Our presentation" },
      facts: [
        { label: "Type", value: "Team project, INFO 4871" },
        { label: "Team", value: "Alex Gertzen, Mason Mutz, Michael Chow, Owen Lowery, Nick Carpico" },
        { label: "Methods", value: "Student survey, floor-by-floor site evaluations, scoring rubric" },
        { label: "Tools", value: "Python, NumPy, Matplotlib" }
      ],
      sections: [
        { heading: "Overview", text: "Our team set out to build a \"from students, for students\" picture of how accessible CU Boulder's buildings are, so students with disabilities can understand a building's layout before they arrive. We focused on two buildings: the Engineering Center (ECCR) and the Leeds School of Business (Koelbel Building)." },
        { heading: "What students told us", points: [
          "Almost 1 in 5 campus buildings have areas that make getting in or out difficult for students with disabilities",
          "Almost 1 in 3 students found at least one floor in every building with little to no accessibility support",
          "Feedback on the Engineering Center was mixed: students called its signage confusing and said its many sharp corners cause traffic problems"
        ] },
        { heading: "How we scored each floor", text: "We divided every floor into a 10×10 grid and scored each cell from 0 (inaccessible or blocked) to 5 (highly accessible):", points: [
          "Route access (0 to +2): path width and obstructions for mobility devices",
          "Entry and doors (−1 to +1): level transitions, and automatic versus heavy or narrow manual doors",
          "Space and usability (−1 to +1): turning room and how usable desks, labs, and restrooms are",
          "Stair-only access or an inaccessible entrance automatically scores 0",
          "Criteria adjust for hallways, entryways, and classrooms or labs"
        ] },
        { heading: "What we found", points: [
          "Leeds scored much higher overall: 4.63 out of 5, compared with 3.5 for the Engineering Center",
          "The Engineering Center varied the most by floor, from 2.9 in Basement 2 to 4.0 on Floor 1",
          "Engineering Center issues: an inconsistent layout, hard-to-find alternatives to stairs, signage that doesn't work for people with visual impairments, and accessible restrooms on only floors 1 and 2",
          "Leeds strengths: elevators reach every floor, and ramps sit near the smaller staircases",
          "Leeds issues: large staircases with no signs pointing to alternatives, and heavy classroom doors that open only by the handle"
        ] },
        { heading: "Recommendations", points: [
          "Engineering Center: signage that works for people with visual impairments, such as braille, plus recommended routes. Many of its issues are built into the building's design",
          "Leeds: prop classroom doors open between classes, and add signs pointing to elevators and ramps"
        ] },
        { heading: "Limitations", points: [
          "Scores are based on student observations, not professional ADA compliance audits",
          "A 10×10 grid can average out small physical details within a single cell",
          "Only two buildings were studied, so other campus buildings may have different challenges",
          "Non-essential areas, like exterior landscaping, were left out to focus on high-traffic student spaces"
        ] }
      ],
      gallery: [],
      links: []
    },
    {
      title: "Chipotle Field Study",
      year: "2025",
      status: "completed",
      labels: ["Research", "Design"],
      summary: "A field study of the Chipotle on University Hill, looking at how customers, staff, layout, and technology work together as one information system.",
      image: "projects/chipotle-field-study/chipotle-map.jpg",
      imageAlt: "Hand-drawn floor map of the Chipotle, showing the kitchen, burrito bar, cashier, mobile order area, seating, and doors",
      presentation: { file: "projects/chipotle-field-study/Chipotle%20Analysis.pdf", title: "My presentation" },
      facts: [
        { label: "Type", value: "Individual project, INFO 2131" },
        { label: "Framework", value: "Socially distributed cognition" },
        { label: "Methods", value: "In-person observation, photos, hand-drawn map" },
        { label: "Field study", value: "February 10, 2025, Chipotle on University Hill, Boulder" }
      ],
      sections: [
        { heading: "Overview", text: "I studied a Chipotle near campus as an information system. I went in as a regular customer, then shifted into a researcher's mindset to watch how employees and customers work together to turn an order into a meal: who does what, where everything is placed, and how information gets passed along the way." },
        { heading: "How I observed", text: "I visited at 1:30 p.m., just after the lunch rush.", points: [
          "With fewer customers, I had a clear view of the whole space and could watch staff start preparing for dinner service",
          "The tradeoff was fewer orders to watch, and some employees were prepping or on break instead of at their usual stations",
          "I took photos at each step without disturbing anyone, drew a map of the layout, and noted key features",
          "I asked employees for an interview, but they declined, so I respected that and relied on observation"
        ] },
        { heading: "Who does what", points: [
          "Customers line up and tell the burrito bar cooks what they want, prompted by the overhead menu and the food in front of them",
          "Burrito bar cooks each run one station: tortilla, rice, and beans; then meats and salsas; then veggies and cheese. Several orders move down the line at once",
          "Cooks in the back keep the bar stocked, and a separate mobile order bar, with its own monitor and label maker, handles app orders so they don't back up the main line",
          "The cashier prices each order and takes payment, with bottled drinks placed right before the register",
          "Delivery and app orders go on dedicated shelves or out a mobile pickup window"
        ] },
        { heading: "How information moves", text: "Most of the coordination between staff is nonverbal:", points: [
          "Cooks write a code on the foil with a marker (S for steak, G for guacamole, C for chicken) and add colored labels for extras like double meat, so the cashier knows what to charge without asking",
          "The conversation between customer and cook is the most important exchange: it's where the whole order gets built",
          "Cooks at the bar and cooks in the back talk constantly about what needs refilling and what to start cooking next",
          "For an in-person order, the information flows in one direction: line up, tell the first cook, continue down the line, the cashier reads the code and enters it, then pay and get a receipt"
        ] },
        { heading: "Space and time", text: "The restaurant runs almost like a manufacturing line. The layout was designed around that flow rather than retrofitted: seating funnels customers into a single-file line, and staff are arranged in the order a burrito is built. Speed is the goal at every step. While I was there, a large order came through and the line finished it item by item remarkably quickly." },
        { heading: "Recommendations", points: [
          "Give the line more room. Right now it weaves between people eating and sometimes stretches out the door. Removing the large back table would create space, and the seating area is rarely full",
          "Add prices to the bottled drinks. There's no pricing shown, so customers can't make an informed choice, and it could prevent returns at the register"
        ] }
      ],
      gallery: [],
      links: []
    }
  ]
};
