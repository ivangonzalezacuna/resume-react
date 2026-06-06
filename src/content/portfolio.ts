const portfolio = {
  personal: {
    name: "Iván González Acuña",
    title: "Software Engineer",
    location: "Leipzig, Germany",
    summary:
      "Software Engineer with 6+ years of experience building backend systems (Go, Python) " +
      "and web applications (TypeScript, React). Focused on platform engineering, developer " +
      "experience, and internal tooling. With a track record of simplifying infrastructure, " +
      "accelerating developer workflows, and shipping production-grade systems across the " +
      "full stack.",
  },

  social: {
    github: "https://github.com/ivangonzalezacuna",
    linkedin: "https://www.linkedin.com/in/ivangonzalezacuna",
    email: "ivangonzalezacuna@gmail.com",
  },

  cv: "/pdf/resume.pdf",

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
          ],
        },
      ],
      technologies: ["Go", "CI/CD", "ArgoCD", "Kubernetes", "Datadog"],
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
      title: "Platform Engineering CLI Tooling",
      summary:
        "Designed and built Go CLI tools that abstracted complex Kubernetes and Vault interactions, " +
        "reducing cognitive load for development teams and standardising infrastructure workflows.",
      highlights: [
        "Standardised infrastructure interactions across multiple teams through opinionated, convention-driven defaults",
        "Reduced manual configuration steps and eliminated a class of environment provisioning errors",
        "Integrated with CI/CD pipelines to enable automated, repeatable environment setup",
      ],
      technologies: ["Go", "Kubernetes", "Vault", "Docker", "ArgoCD"],
      url: "",
    },
    {
      title: "IoT Anomaly Detection System",
      summary:
        "Developed an anomaly detection algorithm for industrial IoT monitoring during an internship " +
        "at Muutech, applying statistical and ML techniques to identify irregular patterns in " +
        "real-time sensor data streams.",
      highlights: [
        "Designed time-series analysis pipeline in Python and R for continuous sensor data",
        "Integrated output with existing monitoring infrastructure for real-time alerting",
        "Delivered as part of a university–industry research collaboration",
      ],
      technologies: ["Python", "R"],
      url: "",
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
        "Vault",
        "Docker",
        "Linux",
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
      technologies: ["Git", "Jira"],
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
