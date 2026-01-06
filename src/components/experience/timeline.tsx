"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
    {
        company: "HNC International",
        role: "ERP/.NET Developer",
        period: "Feb 2023 – Present",
        description: "Building core modules for H2ALL/FastLink logistics platform.",
        achievements: [
            "Developed Warehouse V3 module managing Inbound/Outbound/Inventory for 3 branches.",
            "Implemented Checkpoint & Handover workflows integrating with GPS and E-commerce APIs.",
            "Optimized Finance module reports, reducing runtime by ~40%.",
            "Set up CI/CD pipelines using GitHub Actions deploying to Azure App Service."
        ],
        tech: [".NET 6/8", "SQL Server", "WinForms", "DevExpress", "Azure"]
    },
    {
        company: "FPT Software",
        role: ".NET Core Backend Developer",
        period: "Jun 2022 – Jan 2023",
        description: "Backend development for enterprise clients.",
        achievements: [
            "Built REST APIs using ASP.NET Core and Entity Framework.",
            "Implemented caching strategies (Redis) to improve endpoint performance.",
            "Participated in code reviews and query tuning sessions."
        ],
        tech: ["ASP.NET Core", "EF Core", "Redis", "Rest API"]
    }
]

export function Timeline() {
    return (
        <div className="max-w-3xl mx-auto relative border-l-2 border-muted pl-8 ml-4 md:ml-auto space-y-16">
            {experiences.map((exp, index) => (
                <div key={index} className="relative">
                    {/* Dot */}
                    <span className="absolute -left-[42px] top-1 h-5 w-5 rounded-full border-4 border-background bg-primary ring-4 ring-background" />

                    <div className="space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                            <div>
                                <h3 className="text-2xl font-bold">{exp.role}</h3>
                                <div className="text-lg text-primary font-medium">{exp.company}</div>
                            </div>
                            <div className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full w-fit">
                                {exp.period}
                            </div>
                        </div>

                        <Card className="border-none shadow-sm bg-muted/30">
                            <CardContent className="pt-6">
                                <ul className="list-disc list-outside ml-4 space-y-2 text-base text-muted-foreground mb-6">
                                    {exp.achievements.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                                <div className="flex flex-wrap gap-2">
                                    {exp.tech.map(t => <Badge key={t} variant="secondary" className="text-xs font-normal border-transparent bg-background/50 hover:bg-background">{t}</Badge>)}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            ))}
        </div>
    )
}
