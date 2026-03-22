"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Database, FileSearch, Server } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function FeaturedCaseStudy() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="mb-10 max-w-3xl">
                    <Badge className="mb-4" variant="secondary">
                        Flagship Enterprise Work
                    </Badge>
                    <h2 className="mb-4 text-3xl font-bold tracking-tight">H2ALL / FastLink</h2>
                    <p className="text-lg text-muted-foreground">
                        My strongest production story comes from finance, import, reporting, reconciliation, and
                        workflow-heavy modules inside a large enterprise ERP/logistics platform.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-2xl border bg-gradient-to-br from-card to-muted p-8 shadow-sm md:p-12"
                >
                    <div className="grid items-center gap-12 md:grid-cols-2">
                        <div className="space-y-8">
                            <div className="grid gap-4">
                                <div className="flex items-center gap-4 rounded-lg border bg-background p-4">
                                    <FileSearch className="h-8 w-8 text-blue-600" />
                                    <div>
                                        <h4 className="font-semibold">Debt & Reporting Logic</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Import debt reports, beginning-balance handling, and reporting accuracy in finance-heavy flows.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 rounded-lg border bg-background p-4">
                                    <Server className="h-8 w-8 text-blue-600" />
                                    <div>
                                        <h4 className="font-semibold">Hybrid Service Flow</h4>
                                        <p className="text-sm text-muted-foreground">
                                            WinForms clients working through WCF, Web API, and internal service wrappers.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 rounded-lg border bg-background p-4">
                                    <Database className="h-8 w-8 text-blue-600" />
                                    <div>
                                        <h4 className="font-semibold">Large Result-Set Handling</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Reporting and search flows improved through SQL tuning, batching, and reconciliation work.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <p className="leading-relaxed text-muted-foreground">
                                The case study keeps ownership scoped carefully: assigned backend-oriented business logic,
                                reporting, and cross-layer tracing inside a complex ERP platform rather than ownership of the full system.
                            </p>

                            <p className="text-sm font-medium text-foreground/80">
                                Supported outcomes in key reporting/search flows include ~40% faster report runtime,
                                ~30% lower query cost, and safer handling of 30k+ rows.
                            </p>

                            <Button asChild size="lg" className="w-full md:w-auto">
                                <Link href="/case-studies/h2all-fastlink">
                                    Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>

                        <div className="group relative aspect-video overflow-hidden rounded-xl border bg-slate-900 p-8">
                            <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)]" />
                            <div className="relative z-10 grid grid-cols-3 gap-4 text-center opacity-80 transition-transform duration-500 group-hover:scale-105">
                                <div className="col-span-3 rounded border border-slate-700 bg-slate-800 p-3 text-xs text-slate-300">
                                    WinForms / WPF Client
                                </div>
                                <div className="col-span-3 flex justify-center">
                                    <ArrowRight className="rotate-90 text-slate-500" />
                                </div>
                                <div className="col-span-3 rounded border border-blue-800 bg-blue-900/50 p-3 font-mono text-sm text-blue-200">
                                    WCF + Web API + Internal Wrappers
                                </div>
                                <div className="rounded border border-slate-700 bg-slate-800 p-2 text-xs text-slate-300">
                                    Handler
                                </div>
                                <div className="rounded border border-slate-700 bg-slate-800 p-2 text-xs text-slate-300">
                                    BL
                                </div>
                                <div className="rounded border border-slate-700 bg-slate-800 p-2 text-xs text-slate-300">
                                    DL
                                </div>
                                <div className="col-span-3 flex justify-center">
                                    <ArrowRight className="rotate-90 text-slate-500" />
                                </div>
                                <div className="col-span-3 rounded border border-slate-700 bg-slate-800 p-3 text-xs text-slate-300">
                                    SQL Server / MySQL Reporting & Reconciliation
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
