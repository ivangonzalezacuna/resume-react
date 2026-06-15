const portfolio = {
  personal: {
    name: "Iván González Acuña",
    title: "Software Engineer",
    location: "Leipzig, Germany",
    summary:
      "Software Engineer with 6+ years building the tools and platforms that engineering " +
      "teams depend on. Specialised in platform engineering and developer experience — " +
      "Go backends, Kubernetes infrastructure, CI/CD workflows, and internal tooling. " +
      "Track record of shipping production systems that reduce friction, accelerate delivery, " +
      "and raise the engineering floor for the teams around me, owning solutions end to end " +
      "from design through production operations.",
  },

  social: {
    github: "https://github.com/ivangonzalezacuna",
    linkedin: "https://www.linkedin.com/in/ivangonzalezacuna",
    email: "ivangonzalezacuna@gmail.com",
  },

  cv: "/pdf/CV_IvanGonzalezAcuna.pdf",

  experience: [
    {
      company: "Upvest",
      location: "Berlin, Germany (remote)",
      duration: "Jan 2026 – Present",
      roles: [
        {
          title: "Software Engineer — Engineering Enablement",
          duration: "Jan 2026 – Present",
          description: [
            "Implemented feature-flag infrastructure enabling safe, incremental rollout of new capabilities, reducing incident mitigation time from hours to ~10 minutes when a flagged feature needs to be rolled back.",
            "Built the infrastructure and tooling to make load testing a standard part of the developer workflow.",
            "Integrated Claude Code into the daily development workflow, accelerating problem-solving and delivery.",
          ],
        },
      ],
      technologies: [
        "Go",
        "CI/CD",
        "ArgoCD",
        "Kubernetes",
        "Datadog",
        "Claude Code",
      ],
    },
    {
      company: "Spreadgroup",
      location: "Leipzig, Germany (hybrid)",
      duration: "Dec 2021 – Dec 2025",
      roles: [
        {
          title: "Software Engineer",
          duration: "Apr 2024 – Dec 2025",
          description: [
            "Built internal developer tools in Go, simplifying complex infrastructure interactions across engineering teams, such as Kubernetes, ArgoCD or Vault.",
            "Owned the design and maintainability of an internal Backstage software catalog serving ~100 engineers, establishing it as the source of truth for service ownership, dependencies, and relationships across the org; published custom plugins and open-source contributions adopted by external teams.",
            "Migrated release processes from manual deployments to a fully automated GitOps setup with Kubernetes and ArgoCD, eliminating manual steps from the release pipeline and improving reliability.",
          ],
        },
        {
          title: "Junior Software Engineer",
          duration: "Dec 2021 – Apr 2024",
          description: [
            "Initiated the internal Backstage implementation, delivered improvements across existing tooling, and contributed to migrating QA systems, resulting in a 10x more stable on-demand testing environment for engineering teams. Promoted to Software Engineer in April 2024.",
          ],
        },
      ],
      technologies: [
        "Go",
        "TypeScript",
        "React",
        "Kubernetes",
        "Docker",
        "ArgoCD",
        "Backstage",
        "Vault",
        "Grafana",
        "Kibana",
        "Git",
      ],
    },
    {
      company: "University of Vigo",
      location: "Vigo, Spain",
      duration: "Feb 2020 – Nov 2021",
      roles: [
        {
          title: "Software Developer — Research & Development",
          duration: "Feb 2020 – Nov 2021",
          description: [
            "Migrated internal applications to hexagonal architecture in Go, improving modularity, testability, and maintainability.",
            "Built signal-processing pipelines in Python and shipped a voice assistant deployed aboard a Navy vessel.",
          ],
        },
      ],
      technologies: ["Go", "Python", "Qt"],
    },
    {
      company: "Muutech Monitoring Solutions",
      location: "Vigo, Spain",
      duration: "Jun 2019 – Jul 2019",
      roles: [
        {
          title: "Software Developer Intern",
          duration: "Jun 2019 – Jul 2019",
          description: [
            "Prototyped anomaly-detection algorithms for industrial IoT sensor streams using Python and R.",
          ],
        },
      ],
      technologies: ["Python", "R"],
    },
  ],

  projects: [
    {
      title: "Internal Developer Catalog (Backstage)",
      summary:
        "Led the design and implementation of an internal software catalog at Spreadgroup, " +
        "giving ~100 engineers a single source of truth for services, APIs, ownership, and runbooks.",
      highlights: [
        "Built custom Backstage plugins to surface internal tooling, service health, and deployment status",
        "Contributed open-source improvements to the Backstage ecosystem, adopted by external teams",
        "Reduced onboarding time by centralising service discovery and documentation in one place",
      ],
      technologies: ["TypeScript", "React", "Backstage", "Go", "Kubernetes"],
      url: "",
    },
    {
      title: "QA Platform Modernisation",
      summary:
        "Led the migration of Spreadgroup's QA infrastructure from a legacy Angular+Java service to a " +
        "Backstage-based frontend and a purpose-built Go backend, unlocking developer self-service " +
        "and dramatically improving platform reliability.",
      highlights: [
        "Reduced average machine error rate from ~30% to ~3% through automated stability testing on provisioned environments",
        "Enabled developers to self-service: provision machines, deploy and auto-update services, and test features with work-in-progress code",
        "Built Go tooling to manage application deployments into Kubernetes clusters via ArgoCD, handling lifecycle operations end-to-end",
        "Improved modularity and long-term maintainability by splitting the system into a dedicated Backstage frontend and Go backend",
      ],
      technologies: ["Go", "Backstage", "ArgoCD", "Kubernetes"],
      url: "",
    },
    {
      title: "Personal Portfolio Website",
      summary:
        "Designed and built this portfolio site from scratch with React and TypeScript, featuring " +
        "smooth animations, a responsive layout, and AI-assisted content refinement.",
      highlights: [
        "Built with React, TypeScript, Vite, and Framer Motion for a polished, performant experience",
        "Deployed on Netlify with CI/CD integration and automated previews on every pull request",
        "Leveraged Claude (Anthropic) to assist with copy writing and iterative content refinement",
      ],
      technologies: ["React", "TypeScript", "Vite", "Netlify", "Claude Code"],
      url: "https://github.com/ivangonzalezacuna/resume-react",
    },
  ],

  skills: [
    {
      category: "Backend",
      technologies: ["Go", "Python", "Node.js"],
    },
    {
      category: "Frontend",
      technologies: ["TypeScript", "React", "JavaScript"],
    },
    {
      category: "Platform & DX",
      technologies: [
        "Kubernetes",
        "Backstage",
        "ArgoCD",
        "Docker",
        "Linux",
        "Vault",
      ],
    },
    {
      category: "Observability",
      technologies: [
        "Datadog",
        "Grafana",
        "Prometheus",
        "Elasticsearch",
        "Kibana",
      ],
    },
    {
      category: "Data",
      technologies: ["PostgreSQL", "MySQL", "MongoDB"],
    },
    {
      category: "Tools",
      technologies: ["Git", "Claude Code", "Linear", "Jira"],
    },
  ],

  languages: [
    { language: "Spanish", proficiency: "Native" },
    {
      language: "English",
      proficiency: "C1 — Professional working proficiency",
    },
    { language: "German", proficiency: "B2 — Upper intermediate" },
  ],

  education: [
    {
      college: "University of Vigo",
      location: "Vigo, Spain",
      degree: "B.Sc. Telecommunications Engineering — Telematics",
      duration: "Aug 2016 – Jul 2020",
      description: [
        "Specialised in Telematics, focusing on Internet communication protocols, distributed systems, and low-level programming.",
        "Final year project in the field of signal processing and data analysis.",
      ],
      technologies: ["Java", "C"],
    },
    {
      college: "Oulu University of Applied Sciences",
      location: "Oulu, Finland",
      degree: "Software Development — Erasmus+ Exchange",
      duration: "Aug 2019 – Dec 2019",
      description: [
        "Semester abroad funded by an Erasmus+ scholarship, focused on mobile and web application development.",
        "Coursework in Android development (Java/Kotlin), iOS development (Swift), and web technologies.",
      ],
      technologies: ["Java", "Kotlin", "Swift"],
    },
  ],
} as const;

export default portfolio;
