export const PROFILE = {
    name: "Do The Vinh",
    title: ".NET Backend Developer",
    headline: ".NET Backend Developer | ERP & Logistics Systems",
    supporting: "3+ years in enterprise ERP/logistics systems with strong SQL, reporting, and business-rule depth.",
    location: "Hanoi, Vietnam",
    summary:
        "Production experience across WinForms/WPF clients, hybrid WCF/Web API flows, finance/import workflows, and data reconciliation. Intentionally moving deeper into ASP.NET Core Web API and backend service roles on top of that enterprise foundation.",
    cvLink: "https://drive.google.com/file/d/10wdQDhaehoLF9H0JlTtEFaPUCnCRPFhZ/view?usp=sharing",
    email: "vinhdt1406@gmail.com",
    phone: "+84 964 063 455",
    linkedin: "https://www.linkedin.com/in/vinhdt10",
    github: "https://github.com/Jeussu",
}

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
        "C# / .NET",
        "ASP.NET Core Web API",
        "REST APIs",
        "WCF / Hybrid Service Integration",
        "DTO / Request-Response Patterns",
        "Dependency Injection",
        "Validation / Logging / Exception Handling",
    ],
    data: [
        "SQL Server",
        "MySQL",
        "Reporting & Data Reconciliation",
        "Query Review & Performance Tuning",
        "Transaction-Heavy Business Logic",
        "PostgreSQL (Current Focus)",
        "EF Core (Current Focus)",
    ],
    integration: [
        "Hybrid WCF + Web API Environments",
        "RabbitMQ / MassTransit (Learning Direction)",
        "Docker / Docker Compose (Current Focus)",
        "GitHub Actions (Current Focus)",
        "xUnit / Moq (Current Focus)",
    ],
    desktop: [
        "WinForms",
        "WPF",
        "DevExpress",
        "Enterprise UI to BL/DL/DB Tracing",
        "Workflow-Heavy Production Clients",
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

export const PROJECTS = [
    {
        slug: "bulkybook-v2",
        title: "BulkyBook (v2)",
        relevance:
            "Public proof of ASP.NET Core MVC delivery across auth, admin workflows, and persistence-oriented backend thinking.",
        description:
            "Public ASP.NET Core MVC project used to demonstrate backend-oriented delivery across auth, admin workflows, reporting, and Stripe-backed checkout flows.",
        tags: ["ASP.NET Core MVC", "C#", "MySQL", "Identity", "Stripe", "Reporting"],
        links: {
            live: "https://mybulkybook.azurewebsites.net",
            github: "https://github.com/Jeussu/BulkyBook1",
        },
        status: "Public Supporting Project",
        featured: true,
    },
    {
        slug: "portfolio-v1-to-v2",
        title: "Portfolio Website (V1 -> V2)",
        relevance:
            "Shows portfolio engineering, content hierarchy, and recruiter-facing UI refinement in support of the backend-first profile.",
        description:
            "A self-directed portfolio rebuild that evolved from a static HTML/CSS/JavaScript site into a structured Next.js/TypeScript experience with clearer recruiter-facing messaging, stronger case-study presentation, and better positioning for .NET backend roles. The two public repositories document that progression from the earlier version to the current portfolio.",
        tags: ["HTML5", "CSS3 / SCSS", "JavaScript", "Next.js", "TypeScript", "Responsive UI", "Content Architecture"],
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
            "Transition work showing current backend growth in Web API, EF Core, PostgreSQL, messaging, and containerized development.",
        description:
            "Capstone/transition project used to strengthen Web API, persistence, messaging, and containerized development. Included as backend-growth work, not enterprise production.",
        tags: [".NET Web API", "EF Core", "PostgreSQL", "RabbitMQ", "Docker", "Capstone"],
        links: {},
        status: "Capstone / Transition Work",
        featured: true,
    },
]

export const EXPERIENCE = [
    {
        company: "HNC International JSC",
        role: ".NET Developer | ERP & Logistics Systems",
        period: "02/2023 - Present",
        description:
            "Worked on assigned modules inside the H2ALL / FastLink enterprise ERP/logistics platform, focusing on finance-related workflows, import operations, reporting, data reconciliation, and backend-oriented tracing across WinForms clients and hybrid service flows.",
        achievements: [
            "Owned logic in import finance and reporting workflows, including detailed debt reports, beginning-balance handling, import fee processing, and debt-collection handoff support.",
            "Improved legacy import debt reconciliation by refining business-key mapping, beginning-balance logic, and cross-source consistency to strengthen reporting accuracy and maintainability.",
            "Supported production changes in workflow-heavy modules and traced issues end to end across UI -> service wrapper -> handler -> business logic -> data layer -> database to validate business rules and improve maintainability.",
            "Improved heavy report and search flows handling 30k+ rows, contributing to ~40% faster report runtime and ~30% lower DB/query cost in supported areas.",
        ],
    },
    {
        company: "FPT Software",
        role: ".NET Backend Developer",
        period: "06/2022 - 01/2023",
        description:
            "Early backend foundation in enterprise application support, focused on maintaining backend modules and API-related flows.",
        achievements: [
            "Supported production-safe changes in ASP.NET Core backend modules and endpoints, including validation updates, bug fixing, defect investigation, and logging-related improvements.",
            "Worked with teammates on API enhancements, testing support, and query review to help keep backend changes stable and release-ready.",
        ],
    },
]

export const UPSKILL_PLAN = [
    {
        week: 1,
        title: "ASP.NET Core Web API",
        topics: [
            "API design, controllers, and DTO contracts",
            "Service boundaries and dependency injection",
            "Validation, error handling, and logging",
            "Backend flows that mirror ERP-style business rules",
        ],
        status: "active",
    },
    {
        week: 2,
        title: "Data & Persistence",
        topics: [
            "EF Core and PostgreSQL",
            "SQL-first thinking for reporting and reconciliation",
            "Query review and performance tuning",
            "Data consistency and maintainable persistence logic",
        ],
        status: "active",
    },
    {
        week: 3,
        title: "Testing & Reliability",
        topics: [
            "xUnit and Moq",
            "Testing workflow-heavy business logic",
            "Regression safety for backend changes",
            "Validation and error-path coverage",
        ],
        status: "active",
    },
    {
        week: 4,
        title: "Messaging & Delivery",
        topics: [
            "RabbitMQ / MassTransit basics",
            "Docker / Docker Compose",
            "GitHub Actions",
            "Async workflow patterns for backend services",
        ],
        status: "active",
    },
]

export const CASE_STUDY = {
    title: "H2ALL / FastLink",
    role: ".NET Developer | ERP & Logistics Systems",
    duration: "2023 - Present",
    overview:
        "H2ALL / FastLink is a large, long-lived enterprise logistics ERP/platform supporting end-to-end operations across warehouse, checkpoint, finance, dispatch, reporting, and internal tooling.",
    architecture: {
        description:
            "Modular client-server enterprise system with a heavily WinForms-based client and layered backend flow commonly described internally through MessageTier / NetworkTier / DataTier style boundaries.",
        layers: [
            "Client Side: WinForms-heavy production client, with WPF/desktop engineering background and DevExpress-based operational UI.",
            "Service / Network Direction: Hybrid communication using WCF, Web API, and internal network wrappers.",
            "Business Logic Direction: Workflow-heavy business modules, request/response flows, validation, and enterprise rule handling.",
            "Data Direction: SQL Server, MySQL, reporting logic, multi-source aggregation, and reconciliation-heavy queries.",
        ],
    },
    scope: [
        "Finance-related logic",
        "Import operations and import fee workflows",
        "Receivables / debt / revenue reporting",
        "Customs-clearance mail workflows",
        "Business-logic validation and maintainability refactoring",
    ],
    representativeContribution: {
        title: "Import Debt Reporting Reconciliation",
        summary:
            "A representative contribution was improving detailed import debt reporting and beginning-balance reconciliation logic in a legacy reporting flow.",
        points: [
            "Identified that SO_HOA_DON in the legacy debt-balance table corresponded to SO_HOUSE_AWB.",
            "Applied the correct reconciliation key using MA_KHACH_HANG + SO_HOUSE_AWB.",
            "Integrated TONG_TIEN_TON into TON_THANG_TRUOC for more accurate beginning-balance handling.",
            "Filtered incomplete keys to avoid incorrect reconciliation and improve maintainability.",
        ],
    },
}

export const BACKEND_DIRECTION = [
    {
        title: "API & Service Design",
        description:
            "Extending production experience in workflow-heavy systems into clearer API boundaries, DTO design, and service-layer structure.",
    },
    {
        title: "Persistence & Reliability",
        description:
            "Building on reporting and SQL depth with stronger persistence patterns, automated tests, and safer backend change validation.",
    },
    {
        title: "Async Workflows & Delivery",
        description:
            "Adding practical familiarity with messaging, containerized development, and lightweight delivery practices that complement enterprise application work.",
    },
]

export const CERTIFICATES = [
    {
        title: "Responsive Portfolio Website HTML5, CSS3, JavaScript (2024)",
        issuer: "Udemy / Cheetah Academy",
        date: "Dec 2025",
        description:
            "A 12-hour hands-on course focused on responsive portfolio implementation with HTML, CSS, and JavaScript. Included as supporting evidence for frontend presentation fundamentals and the evolution of the portfolio project.",
        image: "/images/certificates/responsive-portfolio-udemy-2025.jpg",
    },
    {
        title: "Complete guide to ASP.NET Core MVC (.NET 6)",
        issuer: "Udemy (Bhrugen Patel)",
        date: "Oct 2022",
        description: "Coursework focused on ASP.NET Core MVC, authentication, and deployment-oriented fundamentals.",
        image: "/images/certificates/aspnet-core-mvc-udemy.png",
    },
    {
        title: "Bachelor of Science in Computing (Honours)",
        issuer: "University of Greenwich",
        date: "Jul 2022",
        description: "Undergraduate computing degree with a formal software and systems foundation.",
        image: "/images/certificates/greenwich-bachelor.png",
    },
    {
        title: "BTEC Level 5 Higher National Diploma",
        issuer: "Pearson BTEC",
        date: "Feb 2021",
        description: "Higher National Diploma in Computing.",
        image: "/images/certificates/pearson-btec-hnd.png",
    },
]
