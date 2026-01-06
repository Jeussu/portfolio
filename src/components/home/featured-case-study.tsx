"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Database, Server, Box } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function FeaturedCaseStudy() {
    return (
        <section className="py-20">
            <div className="container px-4 mx-auto">
                <div className="mb-10">
                    <Badge className="mb-4" variant="secondary">Featured Case Study</Badge>
                    <h2 className="text-3xl font-bold tracking-tight mb-4">H2ALL / FastLink ERP System</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl">
                        A comprehensive Logistics & Warehouse Management System handling high-volume transactions,
                        complex inventory workflows, and multi-branch operations.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-2xl border bg-gradient-to-br from-card to-muted p-8 md:p-12 shadow-sm"
                >
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="grid gap-4">
                                <div className="flex items-center gap-4 p-4 rounded-lg bg-background border">
                                    <Server className="text-blue-600 h-8 w-8" />
                                    <div>
                                        <h4 className="font-semibold">Multi-tier Architecture</h4>
                                        <p className="text-sm text-muted-foreground">WinForms + Service Layer + DTOs</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 rounded-lg bg-background border">
                                    <Database className="text-blue-600 h-8 w-8" />
                                    <div>
                                        <h4 className="font-semibold">Data Optimization</h4>
                                        <p className="text-sm text-muted-foreground">~30% Lower Query Cost</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 rounded-lg bg-background border">
                                    <Box className="text-blue-600 h-8 w-8" />
                                    <div>
                                        <h4 className="font-semibold">Warehouse V3</h4>
                                        <p className="text-sm text-muted-foreground">Standardized Inbound/Outbound/Inventory</p>
                                    </div>
                                </div>
                            </div>

                            <p className="text-muted-foreground leading-relaxed">
                                Designed to replace legacy systems, reducing report runtimes by ~40%.
                                Seamlessly integrates Finance, Checkpoint Handover, and E-commerce flows.
                            </p>

                            <Button asChild size="lg" className="w-full md:w-auto">
                                <Link href="/case-studies/h2all-fastlink">
                                    Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>

                        <div className="relative aspect-video rounded-xl bg-slate-900 border flex items-center justify-center p-8 overflow-hidden group">
                            <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)]" />

                            {/* Abstract representation of system */}
                            <div className="relative z-10 grid grid-cols-3 gap-4 text-center opacity-80 group-hover:scale-105 transition-transform duration-500">
                                <div className="col-span-3 bg-slate-800 p-3 rounded border border-slate-700 text-slate-300 text-xs">WinForms Client</div>
                                <div className="col-span-3 flex justify-center"><ArrowRight className="rotate-90 text-slate-500" /></div>
                                <div className="col-span-3 bg-blue-900/50 p-3 rounded border border-blue-800 text-blue-200 font-mono text-sm">Application Server</div>
                                <div className="bg-slate-800 p-2 rounded border border-slate-700 text-xs text-slate-300">BL</div>
                                <div className="bg-slate-800 p-2 rounded border border-slate-700 text-xs text-slate-300">DL</div>
                                <div className="bg-slate-800 p-2 rounded border border-slate-700 text-xs text-slate-300">DTO</div>
                                <div className="col-span-3 flex justify-center"><ArrowRight className="rotate-90 text-slate-500" /></div>
                                <div className="col-span-3 bg-slate-800 p-3 rounded border border-slate-700 text-slate-300 text-xs">SQL Server / MySQL</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
