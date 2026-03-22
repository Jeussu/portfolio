"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

import { BACKEND_DIRECTION, UPSKILL_PLAN } from "@/lib/data"

export function BackendGrowthContent() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="mx-auto max-w-3xl">
                <div className="mb-12 text-center">
                    <h1 className="mb-4 text-4xl font-bold">Backend Growth</h1>
                    <p className="text-muted-foreground">
                        Practical areas I am strengthening on top of real ERP/logistics production work. This page is
                        meant to support the backend narrative, not replace the flagship enterprise proof.
                    </p>
                </div>

                <div className="space-y-8">
                    {UPSKILL_PLAN.map((focus, focusIndex) => (
                        <motion.div
                            key={focus.week}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: focusIndex * 0.1 }}
                            className="overflow-hidden rounded-xl border border-border bg-card"
                        >
                            <div className="border-b border-border bg-muted/50 p-4">
                                <h2 className="text-lg font-bold">{focus.title}</h2>
                            </div>

                            <div className="p-4">
                                <ul className="space-y-3">
                                    {focus.topics.map((topic) => (
                                        <li key={topic} className="flex items-start rounded-lg bg-background p-3">
                                            <CheckCircle2 className="mr-3 mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                            <span className="flex-1">{topic}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="mt-20">
                <h2 className="mb-4 text-center text-3xl font-bold">How This Builds on Production Experience</h2>
                <p className="mx-auto mb-8 max-w-3xl text-center text-muted-foreground">
                    These areas extend existing strengths in workflow-heavy business logic, SQL/reporting work, and cross-layer enterprise tracing.
                </p>
                <div className="grid gap-6 md:grid-cols-3">
                    {BACKEND_DIRECTION.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="rounded-xl border border-border bg-card p-6 shadow-sm"
                        >
                            <h3 className="mb-2 text-lg font-bold text-primary">{item.title}</h3>
                            <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}
