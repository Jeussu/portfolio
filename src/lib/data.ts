export const PROFILE = {
    name: "Do The Vinh",
    title: "Full-Stack .NET Desktop Developer (WPF/WinForms) – Logistics & ERP Systems",
    location: "Hanoi, Vietnam",
    summary: "3 years building ERP/Logistics systems (H2ALL/FastLink) using multi-tier .NET architecture. Specialized in end-to-end development: robust WPF/WinForms UI, complex Business Logic, and SQL Server performance tuning for high-volume Warehouse & Checkpoint operations.",
    cvLink: "https://drive.google.com/file/d/10wdQDhaehoLF9H0JlTtEFaPUCnCRPFhZ/view?usp=sharing",
    email: "vinhdt1406@gmail.com",
    phone: "+84 964 063 455",
    linkedin: "https://www.linkedin.com/in/vinhdt10",
    github: "https://github.com/Jeussu"
}

export const METRICS = [
    { label: "Report Runtime Reduced", value: "~40%", description: "Optimized critical financial reports" },
    { label: "DB Query Cost Lowered", value: "~30%", description: "Through execution plan tuning and indexing" },
    { label: "Warehouses Standardized", value: "Multiple", description: "Across branches with V3 workflow" }
]

export const SKILLS = {
    languages: ["C#", ".NET", "WPF", "WinForms", "LINQ", "ASP.NET Core"],
    data: ["SQL Server", "MySQL", "Indexing", "Batching", "Execution Plans", "Entity Framework"],
    architecture: ["Multi-tier (BL/DL/DTO)", "Event-Driven", "DTO contracts", "TransactionScope"],
    domain: ["Logistics & ERP", "Warehouse V3", "Checkpoint/Handover", "Finance/Revenue", "GPS"],
    tools: ["DevExpress", "Git/GitHub", "GitHub Actions CI", "Azure App Service"]
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
        description: "Develop and maintain the H2ALL/FastLink ERP ecosystem. Responsible for end-to-end delivery of desktop modules: from DB schema design to Business Logic and WinForms UI.",
        achievements: [
            "Performance: Reduced report runtimes by ~40% and DB query cost by ~30% through batching, tuned indexes, and execution-plan improvements.",
            "Warehouse V3 rollout: Standardized inbound/outbound workflows, cell/location mapping, and stock counting across branches.",
            "End-to-End Ownership: Built full-stack features for Checkpoint, Finance, and GPS modules using multi-tier architecture (WinForms Client ↔ WCF/API ↔ BL ↔ DL ↔ SQL).",
            "Reporting Platform: Created reusable DevExpress templates and parameterized queries, accelerating financial reporting delivery.",
            "DevOps & Quality: Maintained Git workflows, GitHub Actions CI/CD pipelines, and contributed to code review standards."
        ]
    },
    {
        company: "FPT Software",
        role: ".NET Core Backend Developer",
        period: "06/2022 – 01/2023",
        description: "Built and optimized REST APIs for high-read endpoints; introduced caching and query tuning to lower latency.",
        achievements: [
            "Collaborated with BA/QA to refine requirements; participated in code reviews and API hardening.",
            "Stack: .NET Core, SQL Server, Git, CI/CD."
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
        title: "Testing & Architecture",
        topics: ["xUnit", "Moq (40+ tests)", "MongoDB Read Model", "Clean Architecture"],
        status: "in-progress"
    },
    {
        week: 3,
        title: "Event-Driven & Workflow",
        topics: ["RabbitMQ/MassTransit", "Approval Workflow", "Idempotency"],
        status: "pending"
    },
    {
        week: 4,
        title: "DevOps & Gateway",
        topics: ["YARP Gateway", "GitHub Actions CI", "Azure Deployment"],
        status: "pending"
    }
]

export const CASE_STUDY = {
    title: "H2ALL/FastLink",
    role: "Full-Stack .NET Desktop Developer",
    duration: "2023 - Present",
    overview: "A comprehensive ERP/Logistics system managing the entire lifecycle of freight forwarding, from warehousing to last-mile delivery. The system handles high-volume transactions for inbound/outbound processing, financial reconciliation, and cross-border customs clearance.",
    architecture: {
        description: "Multi-tier architecture ensuring separation of concerns and scalability.",
        layers: [
            "Client: WinForms (Heavy Client) for high-density data entry.",
            "Network Tier: WCF/REST services handling communication.",
            "Business Logic (BL): Domain rules, transaction management (TransactionScope).",
            "Data Logic (DL): SQL Server/MySQL interactions, Stored Procedures, BulkCopy."
        ]
    },
    boundedContexts: [
        { name: "Warehouse V3", description: "Inbound, Outbound, Inventory, Location-Cell logic, Stock Counting." },
        { name: "Checkpoint", description: "Handover, POD (Proof of Delivery), Cross-border customs, DRS." },
        { name: "Finance", description: "Revenue/Cost calculation, AR/AP, Invoicing, Daily Sales Reports." },
        { name: "HR Framework", description: "Employee profiles, Payroll, Attendance, Approval workflows." }
    ],
    workflow: [
        { step: "WinForms UI", description: "User triggers action (e.g., Create Inbound)" },
        { step: "Handler", description: "Auth, Session Policy, Request Validation" },
        { step: "Business Logic", description: "Transactional processing, Inventory calculation" },
        { step: "Data Layer", description: "Efficient SQL execution (Bulk Insert, SPs)" }
    ]
}

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
