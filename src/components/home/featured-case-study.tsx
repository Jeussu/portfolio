"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Database, FileSearch, Server } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function FeaturedCaseStudy() {
    return (
        <section className="py-20 md:py-24">
            <div className="container mx-auto px-4">
                <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div className="max-w-3xl">
                        <Badge className="mb-4" variant="secondary">
                            Flagship Enterprise Work
                        </Badge>
                        <h2 className="text-3xl font-black tracking-tight md:text-4xl">H2ALL / FastLink</h2>
                        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                            My strongest production story comes from finance, import, reporting, reconciliation, and
                            workflow-heavy modules inside a large enterprise ERP/logistics platform.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2 text-sm">
                        <span className="rounded-full border border-border/70 bg-background/80 px-3 py-1.5 font-medium text-foreground/75">
                            ~40% faster reports
                        </span>
                        <span className="rounded-full border border-border/70 bg-background/80 px-3 py-1.5 font-medium text-foreground/75">
                            ~30% lower query cost
                        </span>
                        <span className="rounded-full border border-border/70 bg-background/80 px-3 py-1.5 font-medium text-foreground/75">
                            30k+ rows handled
                        </span>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-gradient-to-br from-card via-card to-primary/[0.05] p-6 shadow-[0_34px_90px_-54px_hsl(var(--foreground)/0.55)] md:p-10"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsl(var(--primary)/0.12),transparent_34%)]" />
                    <div className="relative grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
                        <div className="space-y-7">
                            <div className="grid gap-4">
                                <SignalRow
                                    icon={<FileSearch className="h-5 w-5 text-primary" />}
                                    title="Debt & Reporting Logic"
                                    description="Import debt reports, beginning-balance handling, and reporting accuracy in finance-heavy flows."
                                />
                                <SignalRow
                                    icon={<Server className="h-5 w-5 text-primary" />}
                                    title="Hybrid Service Flow"
                                    description="WinForms clients working through WCF, Web API, and internal service wrappers."
                                />
                                <SignalRow
                                    icon={<Database className="h-5 w-5 text-primary" />}
                                    title="Large Result-Set Handling"
                                    description="Reporting and search flows improved through SQL tuning, batching, and reconciliation work."
                                />
                            </div>

                            <div className="rounded-[1.4rem] border border-border/70 bg-background/75 p-5">
                                <p className="text-sm font-medium leading-7 text-foreground/85">
                                    The case study keeps ownership scoped carefully: assigned backend-oriented business logic,
                                    reporting, and cross-layer tracing inside a complex ERP platform rather than ownership of the full system.
                                </p>
                            </div>

                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                                        Recruiter Priority Read
                                    </p>
                                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                        Start here for the clearest view of enterprise scope, technical depth, and backend fit.
                                    </p>
                                </div>
                                <Button asChild size="lg" className="w-full sm:w-auto">
                                    <Link href="/case-studies/h2all-fastlink">
                                        Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        <div className="rounded-[1.8rem] border border-white/10 bg-slate-950 p-6 shadow-[0_30px_80px_-44px_rgba(0,0,0,0.8)]">
                            <div className="mb-6 flex items-start justify-between gap-4">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                                        Architecture Direction
                                    </p>
                                    <h3 className="mt-3 text-2xl font-semibold text-white">Hybrid enterprise flow</h3>
                                </div>
                                <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-medium text-slate-300">
                                    UI -&gt; Services -&gt; SQL
                                </span>
                            </div>

                            <div className="space-y-4">
                                <ArchitectureStep title="WinForms / WPF Client" description="Operational UI, reporting, workflow-heavy screens" />
                                <div className="flex justify-center">
                                    <ArrowRight className="rotate-90 text-slate-500" />
                                </div>
                                <ArchitectureStep
                                    title="WCF + Web API + Internal Wrappers"
                                    description="Hybrid request flow through service wrappers and endpoints"
                                    accent
                                />
                                <div className="grid grid-cols-3 gap-3">
                                    {["Handler", "BL", "DL"].map((layer) => (
                                        <div
                                            key={layer}
                                            className="rounded-2xl border border-slate-800 bg-slate-900/80 px-3 py-4 text-center text-xs font-medium text-slate-300"
                                        >
                                            {layer}
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-center">
                                    <ArrowRight className="rotate-90 text-slate-500" />
                                </div>
                                <ArchitectureStep
                                    title="SQL Server / MySQL Reporting & Reconciliation"
                                    description="Performance-sensitive reporting, reconciliation logic, and large-result-set handling"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

function SignalRow({
    icon,
    title,
    description,
}: {
    icon: React.ReactNode
    title: string
    description: string
}) {
    return (
        <div className="flex items-start gap-4 rounded-[1.4rem] border border-border/70 bg-background/75 p-5 shadow-[0_18px_40px_-32px_hsl(var(--foreground)/0.35)]">
            <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                {icon}
            </div>
            <div>
                <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{description}</p>
            </div>
        </div>
    )
}

function ArchitectureStep({
    title,
    description,
    accent = false,
}: {
    title: string
    description: string
    accent?: boolean
}) {
    return (
        <div
            className={`rounded-[1.4rem] border px-4 py-5 ${
                accent
                    ? "border-blue-800 bg-blue-900/35"
                    : "border-slate-800 bg-slate-900/80"
            }`}
        >
            <p className={`text-sm font-semibold ${accent ? "text-blue-100" : "text-slate-100"}`}>{title}</p>
            <p className={`mt-2 text-xs leading-6 ${accent ? "text-blue-200/80" : "text-slate-400"}`}>{description}</p>
        </div>
    )
}
