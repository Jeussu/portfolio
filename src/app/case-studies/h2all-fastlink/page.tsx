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
                            A mission-critical Logistics & Warehouse system orchestrating the entire supply chain
                            lifecycle from Inbound to Last-mile Delivery.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-6">
                            <Badge variant="outline">.NET Core / Framework</Badge>
                            <Badge variant="outline">SQL Server</Badge>
                            <Badge variant="outline">WinForms</Badge>
                            <Badge variant="outline">High Volume</Badge>
                        </div>
                    </div>

                    {/* Sections */}
                    <div className="space-y-24">

                        <section id="overview" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold mb-4">Overview</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                FastLink faced scalability challenges with their legacy logistics platform as order volumes surged.
                                The H2ALL V3 architecture was introduced to standardize workflows across multiple warehouse branches,
                                optimize financial reporting, and integrate real-time tracking (GPS) and E-commerce platforms.
                            </p>
                            <div className="bg-muted/50 p-6 rounded-lg border-l-4 border-primary">
                                <h4 className="font-semibold mb-2">My Role</h4>
                                <p className="text-muted-foreground">
                                    Lead Backend Developer responsible for core architecture, database optimization,
                                    and the implementation of Warehouse V3, Checkpoint, and Finance modules.
                                    Worked directly with the CTO and Operations team.
                                </p>
                            </div>
                        </section>

                        <section id="architecture" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold mb-6">System Architecture</h2>
                            <p className="mb-6 text-muted-foreground">
                                The solution utilizes a robust multi-tier architecture to ensure separation of concerns and
                                transactional integrity across the distributed system.
                            </p>
                            <ArchitectureDiagram />
                        </section>

                        <section id="lifecycle" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold mb-8">Request Lifecycle</h2>
                            <div className="space-y-0">
                                {/* Stepper items */}
                                {[
                                    { title: "WinForms UI", desc: "User triggers action (e.g., 'Confirm Inbound'). Input validation happens here." },
                                    { title: "Network Call", desc: "Encrypted request sent over TCP/HTTP to Load Balancer/App Server." },
                                    { title: "Handler Layer", desc: "Authentication, Section Policy check, and Request Deserialization." },
                                    { title: "Business Logic (BL)", desc: "Orchestrates the transaction. Validates rules (e.g., 'Is cell empty?')." },
                                    { title: "Data Layer (DL)", desc: "Executes SQL Command / Stored Procedure within the TransactionScope." },
                                    { title: "Response", desc: "DTO returned to UI. State updated." }
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
                            <h2 className="text-2xl font-bold mb-6">Bounded Contexts</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <ContextCard title="Warehouse V3" icon={<Database className="h-5 w-5 text-primary" />}>
                                    Inbound, Outbound, Inventory, Location-Cell Management, Transfers, Stock Counting.
                                </ContextCard>
                                <ContextCard title="Checkpoint" icon={<TrendingUp className="h-5 w-5 text-primary" />}>
                                    Check-in/out, Customs Handover, DRS (Delivery Run Sheet), POD (Proof of Delivery), Tracking.
                                </ContextCard>
                                <ContextCard title="Finance" icon={<Zap className="h-5 w-5 text-primary" />}>
                                    Pricing Tables, Invoicing, AR (Accounts Receivable), Cost Allocation, Revenue Reporting.
                                </ContextCard>
                                <ContextCard title="Integrations" icon={<Globe className="h-5 w-5 text-primary" />}>
                                    E-commerce (Shopee/Lazada APIs), Last-mile partners (NinjaVan, USPS), GPS Tracking.
                                </ContextCard>
                            </div>
                        </section>

                        <section id="flows" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold mb-6">Core Business Flows</h2>
                            <div className="space-y-6">
                                <div className="p-6 border rounded-xl bg-card">
                                    <h3 className="font-semibold mb-3">📦 Inbound Process</h3>
                                    <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                                        <span className="px-3 py-1 bg-muted rounded-full">Create Request</span>
                                        <span className="text-muted-foreground/50">→</span>
                                        <span className="px-3 py-1 bg-muted rounded-full">Map Location/Cell</span>
                                        <span className="text-muted-foreground/50">→</span>
                                        <span className="px-3 py-1 bg-muted rounded-full">Write Inbound + Update Inventory (Atomic)</span>
                                        <span className="text-muted-foreground/50">→</span>
                                        <span className="px-3 py-1 bg-muted rounded-full">Logs/Reports</span>
                                    </div>
                                </div>
                                <div className="p-6 border rounded-xl bg-card">
                                    <h3 className="font-semibold mb-3">🚚 Checkpoint Handover</h3>
                                    <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                                        <span className="px-3 py-1 bg-muted rounded-full">Booking</span>
                                        <span className="text-muted-foreground/50">→</span>
                                        <span className="px-3 py-1 bg-muted rounded-full">Check-in</span>
                                        <span className="text-muted-foreground/50">→</span>
                                        <span className="px-3 py-1 bg-muted rounded-full">Customs</span>
                                        <span className="text-muted-foreground/50">→</span>
                                        <span className="px-3 py-1 bg-muted rounded-full">Handover</span>
                                        <span className="text-muted-foreground/50">→</span>
                                        <span className="px-3 py-1 bg-muted rounded-full">DRS/POD</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="contributions" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold mb-6">Engineering Impact</h2>
                            <div className="grid gap-6 md:grid-cols-2">
                                <Card>
                                    <CardHeader><CardTitle className="text-lg flex items-center gap-2"><Zap className="text-amber-500 h-5 w-5" /> Performance Tuning</CardTitle></CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground mb-4">Reduced report runtimes by ~40% and query costs by ~30% through:</p>
                                        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                                            <li>Analyze Execution Plans to identify scan hot-spots.</li>
                                            <li>Applied covering indexes and filtered indexes.</li>
                                            <li>Refactored N+1 queries into bulk operations.</li>
                                        </ul>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader><CardTitle className="text-lg flex items-center gap-2"><Lock className="text-blue-500 h-5 w-5" /> Transaction Management</CardTitle></CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground mb-4">Ensured data integrity across modules using `TransactionScope`.</p>
                                        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                                            <li>Implemented atomic operations for Inbound/Inventory updates.</li>
                                            <li>Handled deadlocks by optimizing lock hierarchies.</li>
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                        </section>

                        <section id="security" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold mb-4">Security & Governance</h2>
                            <Card>
                                <CardContent className="pt-6">
                                    <p className="leading-relaxed text-muted-foreground">
                                        Implemented a robust Handler-level security gate. Every request is intercepted to validate
                                        <strong> Session Tokens</strong> and <strong>User Policy</strong> permissions before reaching Business Logic.
                                        This ensures that only authorized personnel can trigger critical actions like 'Approve PO' or 'Adjust Inventory'.
                                    </p>
                                </CardContent>
                            </Card>
                        </section>

                        <section id="outcomes" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold mb-6">Outcomes & Lessons</h2>
                            <ul className="space-y-4">
                                {[
                                    "Successfully migrated 3 branches to Warehouse V3 without downtime.",
                                    "Standardized the check-in/out process, reducing manual errors by 50%.",
                                    "Finance reports now run in seconds instead of minutes, enabling real-time decision making.",
                                    "Learned the importance of strict DTO contracts for maintaining backward compatibility."
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
