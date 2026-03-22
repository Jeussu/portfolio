import type { Metadata } from "next"
import { Check, Database, FileSearch, Network, ReceiptText, Workflow } from "lucide-react"

import { ArchitectureDiagram } from "@/components/case-study/architecture"
import { TOC } from "@/components/case-study/toc"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
    title: "H2ALL / FastLink Case Study | Do The Vinh",
    description:
        "Flagship case study covering enterprise ERP/logistics work in finance-related reporting, reconciliation, hybrid service flows, and backend-oriented .NET problem solving.",
}

const platformAreas = [
    "Checkpoint",
    "WareHouse",
    "Finance",
    "DailySales / Pricing",
    "HR",
    "GPS / Dispatch",
    "International Operations",
    "E-commerce",
    "Reporting / BI",
    "Internal Support / Tooling",
]

const scopeAreas = [
    "Finance-related logic and reporting flows",
    "Import operations and import fee workflows",
    "Receivables / debt / revenue reporting",
    "Customs-clearance bulk mail workflows",
    "International statement handover approval workflow",
    "End-to-end tracing from WinForms form to BL / DL / DB",
]

const backendRelevance = [
    "Comfortable tracing enterprise request flows from client UI to service wrappers, handlers, business logic, data logic, and database queries.",
    "Strong fit for backend roles that require workflow-heavy business rules, reporting correctness, and SQL-heavy investigation.",
    "Production experience with hybrid service environments where WCF, Web API, wrappers, DTOs, and data validation all matter.",
    "Legacy/desktop background becomes a strength because it comes with real enterprise complexity, not only CRUD examples.",
]

export default function H2AllCaseStudy() {
    return (
        <div className="container mx-auto px-4 py-12 lg:py-24">
            <div className="flex flex-col gap-12 lg:flex-row">
                <aside className="hidden w-64 flex-shrink-0 lg:block">
                    <TOC />
                </aside>

                <main className="min-w-0 flex-1">
                    <div className="mb-12">
                        <Badge className="mb-4" variant="secondary">
                            Flagship Case Study
                        </Badge>
                        <h1 className="mb-6 text-4xl font-extrabold tracking-tight lg:text-5xl">H2ALL / FastLink</h1>
                        <p className="text-xl leading-relaxed text-muted-foreground">
                            Enterprise ERP/logistics experience focused on reporting, reconciliation, finance-related logic,
                            import workflows, and backend-oriented tracing in a large modular WinForms + services environment.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-2">
                            <Badge variant="outline">.NET / C#</Badge>
                            <Badge variant="outline">WinForms / WPF</Badge>
                            <Badge variant="outline">WCF + Web API</Badge>
                            <Badge variant="outline">SQL Server / MySQL</Badge>
                            <Badge variant="outline">ERP / Logistics / Finance</Badge>
                        </div>
                        <p className="mt-6 max-w-4xl text-sm leading-relaxed text-foreground/80">
                            Supported outcomes in key areas include ~40% faster report runtime, ~30% lower query cost,
                            and safer handling of 30k+ rows in heavy report/search flows.
                        </p>
                    </div>

                    <div className="space-y-24">
                        <section id="overview" className="scroll-mt-24">
                            <h2 className="mb-4 text-2xl font-bold">Overview</h2>
                            <p className="mb-6 text-lg leading-relaxed">
                                H2ALL / FastLink is a large, long-lived enterprise logistics ERP/platform supporting
                                end-to-end operations. My work was not ownership of the full platform. I worked on
                                assigned finance, import, reporting, and reconciliation workflows inside that broader
                                system, with emphasis on correctness, maintainability, and enterprise code tracing.
                            </p>
                            <div className="mb-6 grid gap-4 md:grid-cols-3">
                                <Card>
                                    <CardHeader className="pb-2">
                                        <CardTitle className="text-base">Assigned Scope</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm leading-relaxed text-muted-foreground">
                                            Finance-related workflows, import operations, reporting, reconciliation, and workflow-heavy business modules.
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader className="pb-2">
                                        <CardTitle className="text-base">System Direction</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm leading-relaxed text-muted-foreground">
                                            WinForms/WPF client work tied to WCF, Web API, internal wrappers, business logic, and SQL-heavy persistence.
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader className="pb-2">
                                        <CardTitle className="text-base">Representative Outcomes</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm leading-relaxed text-muted-foreground">
                                            Faster reporting, lower query cost, stronger reconciliation accuracy, and safer large-result handling in supported areas.
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                            <div className="rounded-lg border-l-4 border-primary bg-muted/50 p-6">
                                <h4 className="mb-2 font-semibold">My role in this environment</h4>
                                <p className="leading-relaxed text-muted-foreground">
                                    I worked on business-rule-heavy modules and reporting flows where correctness,
                                    maintainability, and cross-layer tracing mattered. A large part of the job was
                                    following production logic from WinForms screens into service wrappers, handlers,
                                    business logic, data access, and SQL queries to validate or improve the result.
                                </p>
                            </div>
                        </section>

                        <section id="business-context" className="scroll-mt-24">
                            <h2 className="mb-6 text-2xl font-bold">Business Context</h2>
                            <p className="mb-6 leading-relaxed text-muted-foreground">
                                The platform supports operational, finance, and reporting workflows across multiple parts
                                of the logistics business. It is not a simple CRUD application; it is a workflow-heavy
                                enterprise system with long-lived modules, legacy logic, and integration-heavy operations.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {platformAreas.map((area) => (
                                    <Badge key={area} variant="secondary" className="px-3 py-1 text-sm font-normal">
                                        {area}
                                    </Badge>
                                ))}
                            </div>
                        </section>

                        <section id="platform" className="scroll-mt-24">
                            <h2 className="mb-6 text-2xl font-bold">What the Platform Is</h2>
                            <div className="grid gap-6 md:grid-cols-2">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-lg">Large Enterprise ERP / Platform</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="leading-relaxed text-muted-foreground">
                                            A long-lived logistics platform supporting operations, finance, dispatch,
                                            reporting, and internal support processes across multiple business areas.
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-lg">Modular Client-Server System</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="leading-relaxed text-muted-foreground">
                                            Heavily WinForms-based on the client side, with modular backend/service
                                            flows, reporting logic, hybrid communication, and multiple persistence sources.
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </section>

                        <section id="architecture" className="scroll-mt-24">
                            <h2 className="mb-6 text-2xl font-bold">Architecture Direction</h2>
                            <p className="mb-6 text-muted-foreground">
                                The system followed a layered, modular enterprise direction often described internally
                                through MessageTier / NetworkTier / DataTier style boundaries. In practice, work moved
                                through WinForms clients, hybrid WCF/Web API/internal wrappers, business logic, data logic,
                                and SQL-heavy persistence/reporting layers.
                            </p>
                            <ArchitectureDiagram />

                            <div className="mt-8 grid gap-4 md:grid-cols-5">
                                {[
                                    "WinForms / WPF UI",
                                    "Service Wrapper / Network Layer",
                                    "Handler / Validation",
                                    "Business Logic",
                                    "Data Layer / DB",
                                ].map((step, index) => (
                                    <div key={step} className="rounded-lg border bg-card p-4 text-center">
                                        <div className="mb-2 text-sm font-semibold text-primary">Step {index + 1}</div>
                                        <p className="text-sm text-muted-foreground">{step}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="scope" className="scroll-mt-24">
                            <h2 className="mb-6 text-2xl font-bold">My Scope</h2>
                            <div className="grid gap-6 md:grid-cols-2">
                                {scopeAreas.map((item) => (
                                    <Card key={item} className="h-full">
                                        <CardContent className="flex items-start gap-3 p-6">
                                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                                            <p className="leading-relaxed text-muted-foreground">{item}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </section>

                        <section id="problems" className="scroll-mt-24">
                            <h2 className="mb-6 text-2xl font-bold">Key Problems I Worked On</h2>
                            <div className="grid gap-6 md:grid-cols-2">
                                <ProblemCard
                                    icon={<ReceiptText className="h-5 w-5 text-primary" />}
                                    title="Import Finance & Reporting"
                                    description="Detailed import debt reports, beginning-balance logic, and revenue/report validation in finance-related flows."
                                />
                                <ProblemCard
                                    icon={<Workflow className="h-5 w-5 text-primary" />}
                                    title="Workflow-Heavy Operations"
                                    description="Import fee workflows, debt handoff, approval flows, and customs-clearance bulk mail processing."
                                />
                                <ProblemCard
                                    icon={<FileSearch className="h-5 w-5 text-primary" />}
                                    title="Data Correctness"
                                    description="Reconciliation rules, multi-source aggregation, and validation of legacy reporting/business logic."
                                />
                                <ProblemCard
                                    icon={<Network className="h-5 w-5 text-primary" />}
                                    title="Cross-Layer Tracing"
                                    description="Following production logic from UI into wrappers, handlers, BL, DL, and SQL to find the real source of issues."
                                />
                            </div>
                        </section>

                        <section id="reconciliation" className="scroll-mt-24">
                            <h2 className="mb-6 text-2xl font-bold">Representative Contribution: Import Debt Reporting Reconciliation</h2>
                            <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
                                <p className="mb-4 text-lg leading-relaxed">
                                    One representative contribution was improving detailed import debt reporting and
                                    beginning-balance reconciliation logic in a legacy reporting flow.
                                </p>
                                <ul className="space-y-3 text-muted-foreground">
                                    <li className="flex items-start gap-3">
                                        <Database className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                        <span>Identified the correct business-key relationship between legacy debt-balance data and shipment/reference data.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Database className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                        <span>Refined beginning-balance handling so prior balances were carried into the report correctly.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Database className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                        <span>Filtered incomplete keys and reconciliation edge cases to reduce incorrect matches across data sources.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Database className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                        <span>Made the reporting logic easier to validate and maintain, which improved confidence in finance-facing outputs.</span>
                                    </li>
                                </ul>
                                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                                    The low-level mapping details stayed important during implementation, but the public takeaway is stronger cross-source consistency,
                                    better beginning-balance correctness, and more maintainable reporting logic.
                                </p>
                            </div>
                        </section>

                        <section id="performance" className="scroll-mt-24">
                            <h2 className="mb-6 text-2xl font-bold">Performance & Data Handling</h2>
                            <div className="grid gap-6 md:grid-cols-3">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-lg">30k+ Rows</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="leading-relaxed text-muted-foreground">
                                            Worked on heavy search/report flows where batching and result-set handling were needed to keep production usage stable.
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-lg">~40% Faster Reports</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="leading-relaxed text-muted-foreground">
                                            Contributed to performance improvements in critical reporting paths used by finance and operations teams.
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-lg">~30% Lower Query Cost</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="leading-relaxed text-muted-foreground">
                                            Helped reduce expensive query paths through execution plan review, SQL adjustments, and targeted optimization.
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>

                            <div className="mt-6 rounded-lg border-l-4 border-amber-500 bg-muted p-6 text-sm text-muted-foreground">
                                <strong>Why this matters:</strong> the work was not only about speed. It was equally about
                                business correctness, safe reconciliation, and maintaining trust in finance/report outputs.
                            </div>
                        </section>

                        <section id="backend-fit" className="scroll-mt-24">
                            <h2 className="mb-6 text-2xl font-bold">Why This Experience Matters for Backend Roles</h2>
                            <ul className="space-y-4">
                                {backendRelevance.map((item) => (
                                    <li key={item} className="flex items-start gap-4 rounded-lg border bg-background/50 p-4">
                                        <div className="rounded-full bg-green-100 p-1 dark:bg-green-900/30">
                                            <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                                        </div>
                                        <span className="text-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <div className="mt-12 mb-12 rounded-lg border-l-4 border-amber-500 bg-muted p-6 text-sm text-muted-foreground">
                            <strong>NDA Disclaimer:</strong> This case study describes system context, architecture direction,
                            assigned work areas, and safe public outcomes without exposing proprietary source code or sensitive business data.
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

function ProblemCard({
    icon,
    title,
    description,
}: {
    icon: React.ReactNode
    title: string
    description: string
}) {
    return (
        <Card className="h-full">
            <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg">
                    {icon}
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="leading-relaxed text-muted-foreground">{description}</p>
            </CardContent>
        </Card>
    )
}
