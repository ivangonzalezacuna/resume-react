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
      "and raise the engineering floor for the teams around me.",
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
            "Part of the Engineering Enablement team within the Platform tribe, focused on developer tooling and platform infrastructure.",
            "Implemented feature flags infrastructure, enabling safe and incremental rollout of new capabilities across engineering teams.",
            "Built the infrastructure and tooling to integrate load testing as a standard part of the developers' workflow.",
            "Adopted Claude Code into my personal development workflow, using AI-assisted iteration to accelerate problem-solving and code delivery.",
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
            "Built and maintained internal developer tools in Go, simplifying complex Kubernetes and Vault interactions and reducing manual configuration steps across engineering teams.",
            "Led the design and implementation of an internal software catalog using Backstage, serving ~100 engineers as a unified source for service discovery, ownership, and runbooks.",
            "Developed custom Backstage plugins and contributed open-source improvements adopted by teams outside the company.",
            "Optimised CI/CD workflows with Kubernetes and ArgoCD, improving pipeline reliability and reducing deployment friction in collaboration with platform teams.",
          ],
        },
        {
          title: "Junior Software Engineer",
          duration: "Dec 2021 – Apr 2024",
          description: [
            "Worked across the full stack on internal tooling and platform engineering workflows, contributing to Go backends and infrastructure automation.",
            "Promoted to Software Engineer in April 2024 based on demonstrated ownership and engineering impact.",
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
            "Migrated internal applications to hexagonal architecture in Go, improving modularity, testability, and long-term maintainability.",
            "Implemented a Voice Assistant connected to internal applications, deployed for use aboard a Navy vessel.",
            "Implemented signal processing pipelines in Python for academic and industry research projects.",
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
            "Researched and prototyped anomaly detection algorithms for industrial IoT sensor streams using Python and R.",
            "Applied statistical and machine learning techniques to improve predictive maintenance accuracy.",
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
