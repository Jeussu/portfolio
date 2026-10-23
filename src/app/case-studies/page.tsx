import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card"

export const metadata: Metadata = {
    title: "Case Studies | Do The Vinh",
    description:
        "Case studies covering enterprise ERP/logistics work on H2ALL / FastLink and the end-to-end production delivery of the Thuý Nga Wedding & Event platform.",
}

const caseStudies = [
    {
        href: "/case-studies/h2all-fastlink",
        title: "H2ALL / FastLink",
        status: "Flagship Enterprise Case Study",
        description:
            "Assigned finance, import, reporting, and reconciliation work inside a large enterprise ERP/logistics platform built on WinForms clients and hybrid WCF / Web API services.",
        tags: [".NET / C#", "WinForms / WPF", "WCF + Web API", "SQL Server / MySQL"],
    },
    {
        href: "/case-studies/thuy-nga-wedding",
        title: "Thuý Nga Wedding & Event",
        status: "Client Production Delivery",
        description:
            "End-to-end delivery of a production platform: public website, CMS, CRM, appointments, quotations with PDF, and payment tracking, from an empty repository to go-live.",
        tags: ["ASP.NET Core 10", "Next.js 16", "SQL Server / EF Core", "2FA", "Playwright"],
    },
]

export default function CaseStudiesPage() {
    return (
        <div className="container mx-auto px-4 py-14 md:py-16">
            <div className="mx-auto mb-14 max-w-4xl text-center">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-primary">Production Proof</p>
                <h1 className="text-4xl font-black tracking-tight md:text-5xl">Case Studies</h1>
                <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                    Two complementary views of production work: assigned modules inside a large enterprise platform, and full
                    ownership of a client system from first commit to go-live.
                </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
                {caseStudies.map((study) => (
                    <Card
                        key={study.href}
                        className="group flex h-full flex-col overflow-hidden border-border/70 bg-gradient-to-br from-card via-card to-primary/[0.04] transition-all duration-200 hover:-translate-y-1"
                    >
                        <CardHeader className="pb-5">
                            <div className="mb-2 flex items-start justify-between gap-3">
                                <h2 className="text-2xl font-semibold leading-tight tracking-tight transition-colors group-hover:text-primary">
                                    {study.title}
                                </h2>
                                <Badge variant="outline" className="shrink-0 text-xs">
                                    {study.status}
                                </Badge>
                            </div>
                            <CardDescription className="text-base">{study.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1 pt-0">
                            <div className="flex flex-wrap gap-2">
                                {study.tags.map((tag) => (
                                    <Badge
                                        key={tag}
                                        variant="secondary"
                                        className="border-input bg-muted/50 px-3 py-1 text-xs font-normal text-muted-foreground"
                                    >
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter className="mt-auto border-t border-border/60 bg-muted/10 pt-5">
                            <Button size="sm" asChild className="w-full sm:w-auto">
                                <Link href={study.href} aria-label={`Read case study: ${study.title}`}>
                                    Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}
