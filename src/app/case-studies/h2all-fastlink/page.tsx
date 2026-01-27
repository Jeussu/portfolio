import { TOC } from "@/components/case-study/toc"
import { ArchitectureDiagram } from "@/components/case-study/architecture"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Zap, Database, Lock, TrendingUp, Globe } from "lucide-react"

export default function H2AllCaseStudy() {
    return (
        <div className="container mx-auto px-4 py-12 lg:py-24">
            <div className="flex flex-col lg:flex-row gap-12">
                <aside className="hidden lg:block w-64 flex-shrink-0">
                    <TOC />
                </aside>

                <main className="flex-1 min-w-0">
                    {/* Header */}
                    <div className="mb-12">
                        <Badge className="mb-4" variant="secondary">Case Study</Badge>
                        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">H2ALL / FastLink Ecosystem</h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            An end-to-end ERP system managing the complete logistics lifecycle from warehousing to last-mile delivery.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-6">
                            <Badge variant="outline">.NET 8 / Framework 4.8</Badge>
                            <Badge variant="outline">SQL Server / MySQL</Badge>
                            <Badge variant="outline">WinForms (ClickOnce)</Badge>
                            <Badge variant="outline">WCF / REST</Badge>
                        </div>
                    </div>

                    {/* Sections */}
                    <div className="space-y-24">

                        <section id="overview" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold mb-4">Overview</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                FastLink required a robust solution to handle surging order volumes and unify operations across branches.
                                The system manages high-volume transactional data with strict consistency requirements, integrating seamless workflows for Warehouse (WMS), Checkpoint, and Finance.
                            </p>
                            <div className="bg-muted/50 p-6 rounded-lg border-l-4 border-primary">
                                <h4 className="font-semibold mb-2">My Role: Full-Stack .NET Desktop Developer</h4>
                                <p className="text-muted-foreground">
                                    Solely responsible for end-to-end delivery of key desktop modules. Translated complex logistics requirements into robust WinForms UI and efficient backend logic. Managed the full lifecycle from Schema Design to Deployment.
                                </p>
                            </div>
                        </section>

                        <section id="architecture" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold mb-6">System Architecture</h2>
                            <p className="mb-6 text-muted-foreground">
                                Multi-Tier .NET Ecosystem ensuring separation of concerns. Hybrid communication using WCF (internal) and REST Gateway (external).
                            </p>
                            <ArchitectureDiagram />
                        </section>

                        <section id="lifecycle" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold mb-8">Request Lifecycle</h2>
                            <div className="space-y-0">
                                {[
                                    { title: "WinForms UI", desc: "Heavy Client (.NET 4.8) via ClickOnce. High-density data entry." },
                                    { title: "Gateway / Network", desc: "WCF (SOAP) for internal services, wrapper API for integrations." },
                                    { title: "Handler Layer", desc: "Auth, Session Policy, Request Deserialization & Validation." },
                                    { title: "Business Logic (BL)", desc: "Domain-centric logic. TransactionScope ensures atomicity." },
                                    { title: "Data Layer (DL)", desc: "DTO contracts mapping to SQL Stored Procedures." },
                                    { title: "Database", desc: "SQL Server / MySQL optimized with indexing & batching." }
                                ].map((step, i) => (
                                    <div key={i} className="flex gap-4 relative group">
                                        <div className="flex flex-col items-center">
                                            <div className="w-8 h-8 rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors flex items-center justify-center text-primary font-bold z-10 text-sm">
                                                {i + 1}
                                            </div>
                                            {i !== 5 && <div className="w-0.5 h-full bg-border -my-2" />}
                                        </div>
                                        <div className="pb-8 pt-1">
                                            <h4 className="font-bold text-lg">{step.title}</h4>
                                            <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="contexts" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold mb-6">Key Domain Areas</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <ContextCard title="Warehouse V3 (WMS)" icon={<Database className="h-5 w-5 text-primary" />}>
                                    Inbound/Outbound workflows, Granular Inventory (Location-Cell mapping), Stock Counting and adjustments.
                                </ContextCard>
                                <ContextCard title="Operations & Checkpoint" icon={<TrendingUp className="h-5 w-5 text-primary" />}>
                                    Tracking freight movement, Handover (POD), Cross-border routing, and Peripheral integration (Scales/Scanners).
                                </ContextCard>
                                <ContextCard title="Finance & Accounting" icon={<Zap className="h-5 w-5 text-primary" />}>
                                    Automated Revenue/Cost calculation, AR/Debt management, Invoicing, and Dynamic financial reporting.
                                </ContextCard>
                                <ContextCard title="HR & Workflow" icon={<Globe className="h-5 w-5 text-primary" />}>
                                    Employee profile management, Payroll calculation, Attendance tracking, and Multi-level approval workflows.
                                </ContextCard>
                            </div>
                        </section>

                        <section id="performance" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold mb-6">Performance & Scale</h2>
                            <div className="grid gap-6 md:grid-cols-2">
                                <Card>
                                    <CardHeader><CardTitle className="text-lg flex items-center gap-2"><Zap className="text-amber-500 h-5 w-5" /> 30k+ Rows Strategy</CardTitle></CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground mb-4">Resolved timeouts when processing large search results:</p>
                                        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                                            <li>Implemented "Divide & Conquer" batching.</li>
                                            <li>Extracted distinct keys first, then processed in batches of 200 IDs.</li>
                                            <li>Offloaded heavy aggregations to SQL Layer.</li>
                                        </ul>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader><CardTitle className="text-lg flex items-center gap-2"><Lock className="text-blue-500 h-5 w-5" /> Database Optimization</CardTitle></CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground mb-4">Lowered DB query costs by ~30%:</p>
                                        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                                            <li>Analyzed Execution Plans to find bottlenecks.</li>
                                            <li>Applied targeted indexing and refactored N+1 queries.</li>
                                            <li>Used parameterized queries to prevent injection and enable caching.</li>
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                        </section>

                        <section id="tooling" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold mb-6">Tooling & Delivery</h2>
                            <div className="bg-card border rounded-xl p-6">
                                <ul className="grid md:grid-cols-2 gap-4">
                                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> <span><strong>ClickOnce:</strong> Automated client updates.</span></li>
                                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> <span><strong>GitHub Actions:</strong> CI/CD pipelines.</span></li>
                                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> <span><strong>DevExpress:</strong> Rich UI & Reporting.</span></li>
                                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> <span><strong>Internal Tools:</strong> Code Generator & Refactory.</span></li>
                                </ul>
                            </div>
                        </section>

                        <section id="outcomes" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold mb-6">Outcomes</h2>
                            <ul className="space-y-4">
                                {[
                                    "Reduced critical report generation time by ~40%.",
                                    "Lowered database query costs by ~30% through rigorous optimization.",
                                    "Rolled out standardized Warehouse V3 workflows across multiple branches.",
                                    "Delivered stable, zero-downtime updates to users via optimized deployment pipelines."
                                ].map((outcome, i) => (
                                    <li key={i} className="flex gap-4 items-start p-4 border rounded-lg bg-background/50">
                                        <div className="mt-1 bg-green-100 dark:bg-green-900/30 p-1 rounded-full">
                                            <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                                        </div>
                                        <span className="text-foreground">{outcome}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <div className="bg-muted p-6 rounded-lg text-sm text-muted-foreground mt-12 mb-12 border-l-4 border-amber-500">
                            <strong>NDA Disclaimer:</strong> This case study describes architecture, challenges, and results without sharing
                            proprietary source code or sensitive business data. All diagrams and descriptions are conceptual.
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

function ContextCard({ title, icon, children }: { title: string, icon: React.ReactNode, children: React.ReactNode }) {
    return (
        <Card className="h-full">
            <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">{icon} {title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground leading-relaxed">{children}</p>
            </CardContent>
        </Card>
    )
}
