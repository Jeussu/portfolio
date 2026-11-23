export const PROFILE = {
    name: "Do The Vinh",
    title: "Fullstack .NET Developer (Backend-focused)",
    stack: "ASP.NET Core, SQL Server, ReactJS",
    headline: "Fullstack .NET Developer (Backend-focused) | ASP.NET Core, SQL Server, ReactJS",
    supporting:
        "Backend-focused full-stack .NET developer with 3+ years of experience building ERP and logistics systems across finance, reporting, reconciliation, and workflow-heavy operations.",
    location: "Hanoi, Vietnam",
    summary:
        "Strong in C#, ASP.NET Core, EF Core, SQL Server/MySQL, OOP/design patterns, and service integration (REST, WCF/SOAP); improved heavy reporting runtime by about 40% and reduced DB cost by about 30%. Delivered a paid production full-stack platform end to end as sole engineer (ASP.NET Core 10 + Next.js/React), using AI coding agents under spec-first, CI-gated review.",
    cvLink: "https://drive.google.com/file/d/10wdQDhaehoLF9H0JlTtEFaPUCnCRPFhZ/view?usp=sharing",
    email: "vinhdt1406@gmail.com",
    phone: "+84 964 063 455",
    linkedin: "https://www.linkedin.com/in/vinhdt10",
    github: "https://github.com/Jeussu",
}

export const SITE_URL = "https://vinh-portfolio-self.vercel.app"

export const METRICS = [
    {
        value: "~40%",
        label: "Report runtime improvement",
        description: "Improved heavy finance and reporting flows used by operations and finance teams.",
    },
    {
        value: "~30%",
        label: "Lower DB/query cost",
        description: "Reduced expensive report/query paths through plan review, query cleanup, and targeted indexing.",
    },
    {
        value: "30k+",
        label: "Rows handled reliably",
        description: "Supported large search and report flows where performance and usability both mattered in production.",
    },
    {
        value: "Cross-source",
        label: "Reconciliation accuracy",
        description: "Improved business-key mapping and beginning-balance handling to strengthen import debt reporting.",
    },
]

export const SKILLS = {
    backend: [
        "C#",
        "ASP.NET Core Web API",
        "EF Core",
        "LINQ",
        "OOP/SOLID",
        "Design Patterns",
        "DI",
        "Middleware",
        "Logging",
    ],
    data: [
        "SQL Server",
        "MySQL",
        "PostgreSQL",
        "Indexing",
        "Execution Plans",
        "Transactions",
        "Stored Procedures",
    ],
    frontend: ["ReactJS", "Next.js (App Router)", "TypeScript", "JavaScript", "Tailwind CSS", "HTML/CSS"],
    integration: [
        "REST",
        "WCF/SOAP",
        "RabbitMQ",
        "MassTransit (basic)",
        "Docker Compose",
        "nginx",
        "GitHub Actions (CI)",
    ],
    testing: [
        "xUnit",
        "Moq",
        "Playwright",
        "Git/GitHub",
        "TFS (basic)",
        "Postman/Swagger",
        "Profiling",
        "Debugging",
    ],
    ai: ["Claude Code", "Codex", "Spec-first Tasks", "PR Review", "CI-gated Merges"],
    desktop: [
        "WinForms (.NET Framework 4.8)",
        "WPF",
        "DevExpress UI/Reporting",
        "ClickOnce Deployment",
    ],
    domain: [
        "ERP / Logistics Systems",
        "Finance / Receivables / Debt Logic",
        "Import Operations",
        "Reporting / BI Workflows",
        "Audit / History-Oriented Systems",
        "Multi-Source Aggregation",
    ],
}

export const THUY_NGA_LINKS = {
    live: "https://thuyngawedding.vn/",
    // Public documentation-only showcase repository; null makes the UI show an unpublished note instead of a link.
    showcaseRepo: "https://github.com/Jeussu/thuynga-wedding-showcase" as string | null,
    caseStudy: "/case-studies/thuy-nga-wedding",
}

const SOMEE_NOTE = "Free hosting, HTTP only — may take ~10 s to load."

export const PROJECTS = [
    {
        slug: "thuy-nga-wedding",
        title: "Thuý Nga Wedding & Event",
        relevance:
            "Sole engineer from requirements to go-live: architecture, security, testing, and deployment on ASP.NET Core 10 and Next.js 16, with 2FA, idempotent workflows, real-database integration tests, and Playwright E2E in CI.",
        description:
            "Production platform for a Hanoi wedding and event decoration business: a public Vietnamese website plus an internal CMS and CRM covering leads, customers, events, appointments, quotations with PDF output, and payment tracking.",
        tags: ["ASP.NET Core 10", "EF Core", "SQL Server", "Next.js 16", "TypeScript", "2FA", "xUnit", "Playwright", "GitHub Actions"],
        links: {
            live: THUY_NGA_LINKS.live,
            liveLabel: "Live Site",
            caseStudy: THUY_NGA_LINKS.caseStudy,
            more: THUY_NGA_LINKS.showcaseRepo
                ? [{ label: "Showcase Repo", href: THUY_NGA_LINKS.showcaseRepo }]
                : undefined,
        },
        linkNote: THUY_NGA_LINKS.showcaseRepo
            ? "Production source code is private; the showcase repository is a documentation-only case study."
            : "Production source code is private. A public showcase repository is in preparation.",
        status: "Client Production Delivery",
        featured: true,
        spotlight: true,
    },
    {
        slug: "nzwalks-web-api",
        title: "NZWalks",
        relevance:
            "Shows progression beyond basic API scaffolding into CRUD APIs, JWT auth, EF Core with SQL Server, image upload, and API/UI integration in a small multi-project .NET solution.",
        description:
            "ASP.NET Core 8 solution with a Web API for regions, walks, authentication, and image upload, plus a server-rendered MVC UI that currently manages regions through the API.",
        tags: ["ASP.NET Core 8", "Web API", "MVC UI", "EF Core", "SQL Server", "JWT"],
        links: {
            live: "http://vinh-nzwalks-api.somee.com/swagger",
            github: "https://github.com/Jeussu/NZWalks",
        },
        linkNote: SOMEE_NOTE,
        status: "Backend Practice Project",
        featured: true,
    },
    {
        slug: "bulkybook-v2",
        title: "BulkyBook (v2)",
        relevance:
            "Earlier public ASP.NET Core MVC practice project that helped establish the web/backend foundation before moving deeper into APIs.",
        description:
            "Earlier supporting ASP.NET Core MVC project covering identity, admin workflows, reporting, and Stripe-backed checkout flows.",
        tags: ["ASP.NET Core MVC", "C#", "MySQL", "Identity", "Stripe", "Reporting"],
        links: {
            live: "http://vinh-bulkybook.somee.com/",
            github: "https://github.com/Jeussu/BulkyBook1",
        },
        linkNote: SOMEE_NOTE,
        status: "Earlier MVC Project",
        featured: true,
    },
    {
        slug: "portfolio-v1-to-v2",
        title: "Portfolio Website (V1 -> V2)",
        relevance:
            "Shows portfolio engineering, content hierarchy, and recruiter-facing UI refinement in support of a backend-focused full-stack .NET profile.",
        description:
            "A self-directed portfolio rebuild that evolved from a static HTML/CSS/JavaScript site into a structured Next.js/TypeScript experience with clearer recruiter-facing messaging, stronger case-study presentation, and better positioning for full-stack .NET roles with a backend focus. The two public repositories document that progression from the earlier version to the current portfolio.",
        tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Vercel"],
        links: {
            live: "https://vinh-portfolio-self.vercel.app",
            github: "https://github.com/Jeussu/portfolio",
            more: [
                {
                    label: "V1 Repo",
                    href: "https://github.com/Jeussu/portfolio-website",
                },
            ],
        },
        status: "Portfolio Engineering",
        featured: false,
    },
    {
        slug: "mini-h2all",
        title: "Mini H2ALL (Capstone)",
        relevance:
            "Capstone project covering a .NET Web API with EF Core and PostgreSQL, messaging with RabbitMQ/MassTransit, Docker Compose, and 40+ xUnit tests.",
        description:
            "Capstone project built with .NET Web API, EF Core, PostgreSQL, RabbitMQ/MassTransit, and Docker Compose, covered by 40+ xUnit tests. Included as capstone work, not enterprise production.",
        tags: [".NET Web API", "EF Core", "PostgreSQL", "RabbitMQ/MassTransit", "Docker Compose", "xUnit"],
        links: {},
        status: "Capstone",
        featured: false,
    },
]

export const EXPERIENCE = [
    {
        company: "Thuý Nga Wedding & Event",
        role: "Freelance Fullstack .NET Developer (Sole Engineer)",
        period: "09/2026 - Present",
        tech: "ASP.NET Core 10 (modular monolith), EF Core 10, SQL Server, Next.js 16, React, TypeScript, Docker, nginx, GitHub Actions",
        achievements: [
            "Delivered a paid production platform end to end (requirements, architecture, code, testing, deployment): public website plus admin CMS/CRM for leads, customers, events, quotations/PDF, and payments; live since Oct 2026.",
            "Backend: race-safe lead conversion, idempotent submissions, version checks, server-side money rules, a transactional email outbox, and ASP.NET Core Identity with 2FA, RBAC, and audit logging.",
            "Frontend: server-rendered public pages with per-page SEO metadata; admin data tables with filters and pagination, validated quotation/payment forms, and a review-then-confirm lead conversion flow.",
            "Released through GitHub Actions CI gates (1,900+ xUnit tests on real SQL Server, 60+ Playwright E2E specs), staging/UAT, and rollback-ready releases; AI-assisted with Claude Code under PR review.",
        ],
        links: [
            { label: "Live Site", href: THUY_NGA_LINKS.live },
            { label: "Case Study", href: THUY_NGA_LINKS.caseStudy },
            ...(THUY_NGA_LINKS.showcaseRepo ? [{ label: "GitHub Showcase", href: THUY_NGA_LINKS.showcaseRepo }] : []),
        ],
    },
    {
        company: "HNC International JSC",
        role: ".NET Developer (ERP/Logistics)",
        period: "02/2023 - Present",
        tech: "WinForms .NET 4.8 (ClickOnce), DevExpress, .NET 8 services, REST + WCF/SOAP gateways, SQL Server/MySQL",
        achievements: [
            "Delivered production changes across finance/import workflows, debt reporting, reconciliation, and operations reporting, owning changes from UI to DB.",
            "Built and maintained .NET 8 services with a multi-tier structure (Handlers/MessageTier/BL/DL/DTO) and integrated desktop workflows through REST and WCF/SOAP gateways.",
            "Optimized heavy reporting flows through batching, indexing, stored-procedure refactoring, and execution-plan analysis, improving runtime by about 40% and reducing DB query cost by about 30%.",
            "Handled large search result sets (30k+ rows per search) by chunking queries, pushing filtering and aggregation to SQL, and optimizing in-memory joins.",
        ],
        links: [{ label: "Case Study", href: "/case-studies/h2all-fastlink" }],
    },
    {
        company: "FPT Software",
        role: "Junior .NET Core Backend Developer (Petronas - Oil & Gas)",
        period: "06/2022 - 01/2023",
        tech: "ASP.NET Core Web API, SQL Server, Git/TFS, Postman/Swagger",
        achievements: [
            "Maintained and enhanced ASP.NET Core Web API modules and endpoints for CRUD and search workflows, applying validation, logging, and bug fixes for patch delivery and day-to-day backend maintenance.",
            "Worked with BA and QA to clarify requirements, support safe patch releases, and participate in code reviews and API testing with Postman/Swagger.",
        ],
        links: [],
    },
]

export const CERTIFICATES = [
    {
        category: "Certification",
        title: "Build ASP.NET Core Web API (.NET 8)",
        issuer: "Udemy · Sameer Saini",
        date: "Apr 2026",
        description:
            "18-hour course covering ASP.NET Core Web API fundamentals, routing, controllers, validation, and backend API structure.",
        image: "/images/certificates/aspnet-core-web-api-udemy-2026.jpg",
    },
    {
        category: "Certification",
        title: "Responsive Portfolio Website HTML5, CSS3, JavaScript",
        issuer: "Udemy · Cheetah Academy",
        date: "Dec 2025",
        description: "12-hour course on responsive layouts with HTML5, CSS3, and JavaScript.",
        image: "/images/certificates/responsive-portfolio-udemy-2025.jpg",
    },
    {
        category: "Education",
        title: "BSc (Hons) Computing",
        issuer: "University of Greenwich",
        date: "2019 - 2022",
        description: "Undergraduate computing degree covering software, systems, and core engineering foundations.",
        image: "/images/certificates/greenwich-bachelor.png",
    },
]
