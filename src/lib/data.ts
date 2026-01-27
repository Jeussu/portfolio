export const PROFILE = {
    name: "Do The Vinh",
    title: "Full-Stack .NET Developer (Desktop + Services)",
    location: "Hanoi, Vietnam",
    summary: "Orchestrating scalable WinForms/WPF systems and .NET 8 services. Expert in multi-tier architecture, SQL performance tuning, and optimizing high-volume logistics operations for H2ALL/FastLink.",
    cvLink: "https://drive.google.com/file/d/10wdQDhaehoLF9H0JlTtEFaPUCnCRPFhZ/view?usp=sharing",
    email: "vinhdt1406@gmail.com",
    phone: "+84 964 063 455",
    linkedin: "https://www.linkedin.com/in/vinhdt10",
    github: "https://github.com/Jeussu"
}

export const METRICS = [
    { label: "~40% Report Runtime Reduced", value: "Performance", description: "Optimized critical financial reports via execution plan tuning & SQL indexing." },
    { label: "30k+ Rows Batch Processing", value: "Scalability", description: "Implemented distinct key extraction & 200-ID batching strategy to eliminate timeouts." },
    { label: "Multi-Branch Standardization", value: "Scale", description: "Rolled out standardized Warehouse V3 workflows across multiple branches." }
]

export const SKILLS = {
    desktop: ["C# .NET Framework (4.8+)", "WinForms / WPF", "DevExpress UI Suite", "ClickOnce Deployment", "Multi-threading / Async"],
    backend: [".NET 8 / .NET Core", "WCF (SOAP)", "ASP.NET WebAPI (REST)", "Windows Services", "IIS Hosting"],
    data: ["SQL Server (T-SQL)", "MySQL", "Entity Framework / Dapper", "Performance Tuning", "SSAS / Data Warehousing"],
    ops: ["Git / GitHub Actions", "CI/CD Pipelines", "Unit Testing (xUnit)", "Docker (Basics)", "Quartz.NET (Scheduling)"],
    domain: ["Logistics & Supply Chain", "ERP / WMS (Warehouse)", "Financial Accounting", "Multi-tier Architecture", "Event-Driven Design"]
}

export const PROJECTS = [
    {
        slug: "bulkybook-v2",
        title: "BulkyBook (v2)",
        description: "Full-stack E-commerce (solo): ASP.NET Core MVC, C#, MySQL. Implemented DevExpress-style reporting, Admin CRUD, Identity auth, and Stripe payments.",
        tags: ["ASP.NET Core MVC", "C#", "MySQL", "DevExpress Reports", "Identity", "Stripe"],
        links: { live: "https://mybulkybook.azurewebsites.net", github: "https://github.com/Jeussu/BulkyBook1" },
        featured: true
    },
    {
        slug: "bulkybook-v1",
        title: "BulkyBook (v1)",
        description: "E-commerce foundation covers Admin panel and Authentication flow.",
        tags: ["ASP.NET Core", "SQL Server", "Admin", "Authentication"],
        links: { live: "https://bulkybookwebv1406.azurewebsites.net", github: "https://github.com/Jeussu/BulkyBook" },
        featured: false
    },
    {
        slug: "shopee-ui",
        title: "Shopee Interface (learning)",
        description: "HTML/CSS clone UI for learning frontend structure.",
        tags: ["HTML", "CSS"],
        links: { github: "https://github.com/Jeussu/HTML-CSS" },
        featured: false
    },
    {
        slug: "mini-h2all",
        title: "Mini H2ALL (Capstone)",
        description: "Microservices-based logistics system replica. Demonstrating scalable backend with .NET 7, RabbitMQ, and Docker.",
        tags: [".NET 7 WebAPI", "EF Core", "PostgreSQL", "RabbitMQ", "Docker"],
        links: { github: "#" },
        status: "In Progress",
        featured: true
    }
]

export const EXPERIENCE = [
    {
        company: "HNC International",
        role: "Full-Stack .NET Desktop Developer (WPF/WinForms)",
        period: "02/2023 – Present",
        description: "Develop and maintain core modules of the H2ALL ERP system using .NET Framework 4.8 and .NET 8.",
        achievements: [
            "Engineered a high-performance batching mechanism to process 30k+ records, eliminating timeout issues.",
            "Optimized SQL Server performance, reducing query costs by ~30% via execution plan analysis and indexing.",
            "Designed a robust multi-tier architecture ensuring clean separation between WinForms UI, WCF Business Services, and Data Layers.",
            "Integrated hardware peripherals (scales, printers) and external APIs for seamless logistics operations.",
            "Automated build and deployment processes using GitHub Actions and ClickOnce technology."
        ]
    },
    {
        company: "FPT Software",
        role: ".NET Backend Developer",
        period: "06/2022 – 01/2023",
        description: "Developed scalable REST APIs using .NET Core for high-traffic enterprise applications.",
        achievements: [
            "Implemented aggressive caching strategies and optimized SQL queries to minimize API latency.",
            "Contributed to API hardening, logging standards, and unit testing coverage.",
            "Collaborated in Agile teams to deliver features and resolve defects in a timely manner."
        ]
    },
    {
        company: "Apollo English",
        role: "Teaching Assistant",
        period: "2019 – 2021",
        description: "Supported >300 learners; coordinated with international teaching staff and organized class events.",
        achievements: [
            "Coordinated with international teaching staff to ensure smooth class operations.",
            "Organized class events and supported over 300 learners in their educational journey."
        ]
    }
]

export const UPSKILL_PLAN = [
    {
        week: 1,
        title: "Microservices Foundation",
        topics: [".NET 7 WebAPI", "EF Core", "PostgreSQL", "Docker Compose", "Swagger"],
        status: "completed"
    },
    {
        week: 2,
        title: "Testing & Quality Assurance",
        topics: ["xUnit", "Moq (40+ tests)", "Service Layer Validation", "Clean Architecture"],
        status: "in-progress"
    },
    {
        week: 3,
        title: "Event-Driven Architecture",
        topics: ["RabbitMQ/MassTransit", "Async Messaging", "Decoupling Logic"],
        status: "pending"
    },
    {
        week: 4,
        title: "Containerization & Orchestration",
        topics: ["Docker", "Docker Compose", "Multi-Container Setup"],
        status: "pending"
    },
    {
        week: 5,
        title: "API Gateway & Security",
        topics: ["YARP Gateway", "IdentityServer", "Centralized Auth"],
        status: "pending"
    },
    {
        week: 6,
        title: "Observability",
        topics: ["OpenTelemetry", "ELK Stack", "Distributed Tracing"],
        status: "pending"
    }
]

export const CASE_STUDY = {
    title: "H2ALL / FastLink Ecosystem",
    role: "Full-Stack .NET Desktop Developer",
    duration: "2023 - Present",
    overview: "An end-to-end ERP system managing the complete logistics lifecycle from warehousing to last-mile delivery. The system handles high-volume transactional data with strict consistency requirements, integrating seamlessly with scales, printers, and external carrier APIs.",
    architecture: {
        description: "Multi-Tier .NET Ecosystem ensuring separation of concerns and reusability.",
        layers: [
            "Client Layer: WinForms (.NET Framework 4.8) distributed via ClickOnce; utilized DevExpress for rich UI and Reporting.",
            "Network Tier: Hybrid communication using WCF (BasicHttpBinding/SOAP) for internal services and a REST Gateway (/api/_gateway) for external integrations.",
            "Business Layer: Domain-centric logic encapsulated in service tiers.",
            "Data Layer: Optimized access to SQL Server & MySQL using DTO contracts and stored procedures."
        ]
    },
    boundedContexts: [
        { name: "Warehouse V3 (WMS)", description: "Inbound/Outbound workflow, Granular Inventory (Location-Cell), Stock Counting." },
        { name: "Operations & Checkpoint", description: "Handover tracking (POD), Cross-border routing, Peripheral integration (Scales/Scanners)." },
        { name: "Finance & Accounting", description: "Revenue/Cost automation, AR/Debt management, Dynamic financial reporting." },
        { name: "HR & Workflow", description: "Employee profiles, Payroll calculation, Approval workflows." }
    ],
    workflow: [
        { step: "Challenge", description: "Search results and reporting queries exceeding 30,000 rows caused timeouts." },
        { step: "Solution", description: "Implemented 'Divide & Conquer' batching strategy with distinct key extraction." },
        { step: "Optimization", description: "Analyzed Execution Plans for targeted indexing; offloaded heavy aggregations to SQL." },
        { step: "Outcome", description: "Reduced critical report runtime by ~40% and eliminated timeout errors." }
    ]
}

export const AI_STRATEGIES = [
    {
        title: "Prompt Engineering",
        description: "Utilized structured prompts to scaffold domain entities, DTOs, and Service interfaces, reducing boilerplate coding time by 30%."
    },
    {
        title: "Optimization Analysis",
        description: "Leveraged AI to interpret complex SQL execution plans and suggest index strategies for legacy query optimization."
    },
    {
        title: "Verification & Triage",
        description: "Generated anonymized test scenarios and unit tests from business requirements to validate logic before deployment."
    }
]

export const CERTIFICATES = [
    {
        title: "Responsive Portfolio Website HTML5, CSS3, JavaScript (2024)",
        issuer: "Udemy (Cheetah Academy)",
        date: "Dec 2025",
        description: "Comprehensive training on building responsive portfolio websites using modern web technologies.",
        image: "/images/certificates/responsive-portfolio-udemy.png"
    },
    {
        title: "Complete guide to ASP.NET Core MVC (.NET 6)",
        issuer: "Udemy (Bhrugen Patel)",
        date: "Oct 2022",
        description: "In-depth course covering ASP.NET Core MVC, from basics to advanced concepts like Identity and Deployment.",
        image: "/images/certificates/aspnet-core-mvc-udemy.png"
    },
    {
        title: "Bachelor of Science in Computing (Honours)",
        issuer: "University of Greenwich",
        date: "Jul 2022",
        description: "Second Class Honours (2nd Division).",
        image: "/images/certificates/greenwich-bachelor.png"
    },
    {
        title: "Teaching Assistant",
        issuer: "Apollo English",
        date: "Apr 2021",
        description: "Awarded for successful work as an intern Teaching Assistant.",
        image: "/images/certificates/apollo-teaching-assistant.png"
    },
    {
        title: "BTEC Level 5 Higher National Diploma",
        issuer: "Pearson BTEC",
        date: "Feb 2021",
        description: "Higher National Diploma in Computing with Grade Pass.",
        image: "/images/certificates/pearson-btec-hnd.png"
    }
]
