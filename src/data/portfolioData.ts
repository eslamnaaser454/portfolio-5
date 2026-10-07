export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  category: 'Full Stack' | 'Cloud & Systems' | 'Education & Tools';
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  metrics?: string;
  iconName: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  type: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  badge?: string;
  skills: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  batch: string;
  quote: string;
  rating: number;
}

export const portfolioData = {
  personal: {
    name: "Eslam Nasser",
    title: "Software Engineer & DEPI Trainer",
    headline: "Transforming Complex Systems into Scalable Software & Mentoring Future Tech Leaders",
    shortBio: "AAST Honors Graduate (3.53 GPA), Official DEPI (Digital Egypt Pioneers Initiative) Trainer, and Software Engineer experienced in building resilient web platforms and empowering hundreds of aspiring software engineers.",
    email: "nassereslam454@gmail.com",
    github: "https://github.com/eslamnaaser454",
    linkedin: "https://linkedin.com",
    location: "Cairo / Alexandria, Egypt",
    gpa: "3.53",
    gpaScale: "4.00",
    university: "Arab Academy for Science, Technology & Maritime Transport (AASTMT)",
    status: "Available for Senior Roles & Tech Training",
    heroImage: "/assets/eslam-microsoft.jpg",
  },

  stats: [
    { label: "AAST Graduation GPA", value: "3.53", suffix: " / 4.0", detail: "Distinction with Honors" },
    { label: "DEPI Trainees Mentored", value: "350+", suffix: "", detail: "Across multiple engineering tracks" },
    { label: "Projects Architected", value: "25+", suffix: "", detail: "Production & Academic systems" },
    { label: "Workshop Hours", value: "500+", suffix: " hrs", detail: "Hands-on coding instruction" },
  ],

  experiences: [
    {
      id: "depi",
      role: "Official Technical Trainer",
      organization: "Digital Egypt Pioneers Initiative (DEPI) - MCIT",
      type: "Government & Tech Initiative",
      period: "2023 - Present",
      location: "Egypt",
      badge: "Lead Trainer",
      description: "Appointed by the Ministry of Communications and Information Technology (MCIT) to deliver premier tech training programs, mentoring university graduates and software engineers in modern full-stack development, software architecture, and industry practices.",
      achievements: [
        "Trained and graduated 350+ software engineering candidates into top-tier tech roles",
        "Formulated end-to-end curriculum spanning Next.js, React, Node.js, REST APIs, and database engineering",
        "Conducted 100+ code reviews, architecture critiques, and live debugging workshops",
        "Spearheaded graduation capstone mentorship with 98% on-time project completion rate",
      ],
      skills: ["Technical Mentorship", "Full-Stack Development", "Curriculum Design", "Agile & Code Reviews", "System Architecture"]
    },
    {
      id: "se-consultant",
      role: "Software Engineer",
      organization: "Enterprise & Freelance Engineering",
      type: "Full-Time / Consultancy",
      period: "2022 - Present",
      location: "Hybrid / Remote",
      badge: "Core Engineering",
      description: "Designing and engineering cloud-native web applications, scalable REST APIs, and responsive enterprise interfaces. Focusing on high performance, clean architecture, and seamless user experiences.",
      achievements: [
        "Architected responsive Next.js and TypeScript frontends with 99+ Lighthouse performance scores",
        "Engineered secure authentication, transactional state management, and relational database schemas",
        "Containerized microservices and automated deployment pipelines reducing release friction",
      ],
      skills: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Docker", "RESTful APIs"]
    },
    {
      id: "microsoft-exp",
      role: "Microsoft Immersion & Technical Programs",
      organization: "Microsoft Technology Experience",
      type: "Professional Immersion",
      period: "Special Engagement",
      location: "Microsoft Egypt",
      badge: "Corporate Immersion",
      description: "Engaged in specialized technology sessions and engineering immersion at Microsoft facilities, focusing on enterprise software architecture, Azure cloud services, and developer tooling.",
      achievements: [
        "Deep-dived into enterprise software development patterns and modern cloud ecosystems",
        "Participated in developer workshops on scalable backend infrastructure and DevOps practices",
        "Connected with senior engineering leadership and tech evangelists in the regional hub",
      ],
      skills: ["Cloud Architecture", "Azure Services", "Enterprise Systems", "Developer Ecosystem"]
    },
    {
      id: "aast",
      role: "B.Sc. in Computer Science / Engineering",
      organization: "Arab Academy for Science, Technology & Maritime Transport (AASTMT)",
      type: "Higher Education",
      period: "Graduated with 3.53 GPA",
      location: "Alexandria, Egypt",
      badge: "3.53 GPA Honors",
      description: "Earned Bachelor's Degree with exceptional academic standing (3.53 / 4.00 GPA). Mastered algorithms, data structures, software engineering methodologies, distributed systems, and computer networks.",
      achievements: [
        "Graduated with Distinction and Class Honors (GPA: 3.53 / 4.00)",
        "Recognized on the Dean's Honor List across consecutive academic semesters",
        "Led senior capstone engineering project with top marks from external evaluation committee",
        "Served as student mentor for lower-level computer engineering courses",
      ],
      skills: ["Data Structures & Algorithms", "Database Design", "Software Engineering", "Operating Systems", "Computer Networks"]
    }
  ] as ExperienceItem[],

  skillCategories: [
    {
      category: "Frontend & Web Technologies",
      icon: "Layout",
      description: "Crafting hyper-responsive, accessible, and reactive user interfaces",
      items: [
        { name: "Next.js (App Router & SSR)", level: 95 },
        { name: "React 19 & Hooks", level: 95 },
        { name: "TypeScript", level: 92 },
        { name: "JavaScript (ESNext)", level: 98 },
        { name: "Modern CSS3 & Vanilla Architecture", level: 94 },
        { name: "Responsive UI/UX & Glassmorphism", level: 92 },
      ]
    },
    {
      category: "Backend & Systems",
      icon: "Server",
      description: "Building resilient microservices, high-throughput APIs, and database layers",
      items: [
        { name: "Node.js & Express", level: 90 },
        { name: "RESTful API & GraphQL Design", level: 94 },
        { name: "PostgreSQL & SQL Optimization", level: 88 },
        { name: "MongoDB & NoSQL Schemas", level: 85 },
        { name: "JWT & Security Best Practices", level: 90 },
        { name: "Clean Architecture & Design Patterns", level: 92 },
      ]
    },
    {
      category: "DevOps & Engineering Tools",
      icon: "Cpu",
      description: "Streamlining continuous deployment, monitoring, and developer environments",
      items: [
        { name: "Git & Advanced GitHub Workflows", level: 96 },
        { name: "Docker & Containerization", level: 85 },
        { name: "CI/CD Deployment Pipelines", level: 82 },
        { name: "Linux & Shell Scripting", level: 84 },
        { name: "Performance Profiling & Testing", level: 86 },
      ]
    },
    {
      category: "DEPI Mentorship & Instruction",
      icon: "GraduationCap",
      description: "Pedagogy, technical training, and elevating engineering talent",
      items: [
        { name: "DEPI Track Curriculum Delivery", level: 98 },
        { name: "Live Coding & Architecture Workshops", level: 96 },
        { name: "Code Review & Quality Standards", level: 95 },
        { name: "Career Coaching & Tech Interview Prep", level: 92 },
        { name: "Project Capstone Mentorship", level: 98 },
      ]
    }
  ],

  projects: [
    {
      id: "project-1",
      title: "PioneerLMS - DEPI Training & Assessment Hub",
      tagline: "High-performance learning management portal built for 500+ student cohort tracking",
      description: "A centralized platform engineered specifically for tracking student submissions, automated code reviews, interactive lecture assignments, and real-time attendance analytics for DEPI cohorts.",
      tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "WebSockets"],
      category: "Education & Tools",
      featured: true,
      githubUrl: "https://github.com/eslamnaaser454",
      liveUrl: "https://github.com/eslamnaaser454",
      metrics: "Used across 4 DEPI cohorts with 99.4% uptime",
      iconName: "GraduationCap"
    },
    {
      id: "project-2",
      title: "CloudGate - Enterprise API Orchestrator",
      tagline: "Resilient API gateway with distributed token bucket rate limiting and telemetry",
      description: "A distributed gateway proxy designed to handle authentication, dynamic reverse routing, circuit breaking, and Prometheus metric streams for microservices architectures.",
      tags: ["Node.js", "TypeScript", "Redis", "Docker", "REST APIs"],
      category: "Cloud & Systems",
      featured: true,
      githubUrl: "https://github.com/eslamnaaser454",
      liveUrl: "https://github.com/eslamnaaser454",
      metrics: "< 8ms p99 latency overhead",
      iconName: "Server"
    },
    {
      id: "project-3",
      title: "AAST ScholarFlow - Academic GPA & Degree Planner",
      tagline: "Algorithmic degree trajectory simulator honoring the AAST credit-hour grading system",
      description: "Inspired by AASTMT's curriculum, this full-stack tool enables engineering students to simulate GPA scenarios, forecast graduation standing, and optimize prerequisite paths.",
      tags: ["Next.js", "React", "TypeScript", "Vanilla CSS", "LocalStorage Sync"],
      category: "Education & Tools",
      featured: true,
      githubUrl: "https://github.com/eslamnaaser454",
      liveUrl: "https://github.com/eslamnaaser454",
      metrics: "Simulates full 3.53+ GPA honors criteria",
      iconName: "Award"
    },
    {
      id: "project-4",
      title: "DevForge - Real-Time Code Collaboration Studio",
      tagline: "Interactive browser-based playground with real-time peer syncing and syntax engine",
      description: "Full-stack developer studio featuring multi-tab code editors, live preview rendering, room-based WebSocket broadcasting, and instant snippet sharing.",
      tags: ["React", "Next.js", "WebSockets", "Monaco Editor", "Tailored CSS"],
      category: "Full Stack",
      featured: false,
      githubUrl: "https://github.com/eslamnaaser454",
      liveUrl: "https://github.com/eslamnaaser454",
      metrics: "Zero-latency typing sync across tabs",
      iconName: "Code2"
    },
    {
      id: "project-5",
      title: "OmniStore - Modern E-Commerce Scalable Engine",
      tagline: "Ultra-fast headless commerce platform with optimized SSR and instant checkout",
      description: "A production-grade retail platform featuring dynamic catalogue filtering, cart persistence, payment integration hooks, and comprehensive administration dashboards.",
      tags: ["Next.js", "TypeScript", "Node.js", "Stripe API", "PostgreSQL"],
      category: "Full Stack",
      featured: false,
      githubUrl: "https://github.com/eslamnaaser454",
      liveUrl: "https://github.com/eslamnaaser454",
      metrics: "100/100 Google PageSpeed score",
      iconName: "ShoppingBag"
    },
    {
      id: "project-6",
      title: "SecureVault - Zero-Trust Credentials & Key Manager",
      tagline: "End-to-end client-encrypted secrets management tool for engineering teams",
      description: "Enterprise security solution employing AES-256-GCM encryption, master password derivation via PBKDF2, and role-based audit trail logging for distributed dev teams.",
      tags: ["TypeScript", "Web Crypto API", "Node.js", "Security"],
      category: "Cloud & Systems",
      featured: false,
      githubUrl: "https://github.com/eslamnaaser454",
      liveUrl: "https://github.com/eslamnaaser454",
      metrics: "Zero plaintext storage on server",
      iconName: "ShieldCheck"
    }
  ] as Project[],

  depiPillars: [
    {
      title: "Hands-on Practical Training",
      description: "Moving beyond theoretical concepts to real-world codebases, git collaboration workflows, and industry-standard best practices.",
      icon: "Code2"
    },
    {
      title: "Modern Tech Stacks",
      description: "Imparting skills in modern JavaScript/TypeScript, Next.js, React, Node.js, and cloud deployments matching international hiring criteria.",
      icon: "Layers"
    },
    {
      title: "Engineering Mindset & Problem Solving",
      description: "Cultivating clean code habits, architectural foresight, debugging prowess, and algorithmic efficiency.",
      icon: "Sparkles"
    },
    {
      title: "Industry Readiness & Mentorship",
      description: "Preparing trainees for technical interviews, code challenges, portfolio presentation, and real workplace dynamics.",
      icon: "Users"
    }
  ],

  testimonials: [
    {
      id: "t1",
      name: "Ahmed Mostafa",
      role: "Junior Full Stack Engineer",
      batch: "DEPI Cohort Trainee",
      quote: "Eng. Eslam Nasser is one of the most dedicated trainers I have ever met. His ability to break down complex Next.js and architectural concepts into digestible, hands-on lessons completely transformed my career trajectory.",
      rating: 5
    },
    {
      id: "t2",
      name: "Mariam Hassan",
      role: "Frontend Developer",
      batch: "DEPI Cohort Trainee",
      quote: "Thanks to Eng. Eslam's mentorship in DEPI, I went from struggling with state management to building full production applications. His feedback during code reviews was gold standard.",
      rating: 5
    },
    {
      id: "t3",
      name: "Omar Khaled",
      role: "Backend Engineer",
      batch: "AASTMT Colleague & Dev",
      quote: "Eslam's graduation from AAST with a 3.53 GPA is a testament to his hard work, brilliance, and technical depth. He brings that exact same excellence to every software project and teaching session.",
      rating: 5
    }
  ]
};
