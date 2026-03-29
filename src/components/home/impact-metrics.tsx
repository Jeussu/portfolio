"use client"

import { motion } from "framer-motion"

import { METRICS } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"

export function ImpactMetrics() {
    return (
        <section className="relative overflow-hidden border-y border-border/60 bg-muted/20 py-16 md:py-20">
            <div className="absolute inset-x-0 top-0 -z-10 h-full bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent" />
            <div className="container mx-auto px-4">
                <div className="mb-10 max-w-3xl">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                        Production Proof
                    </p>
                    <h2 className="text-3xl font-black tracking-tight md:text-4xl">Evidence From Production Work</h2>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                        Selected evidence around reporting performance, data correctness, and large-result-set handling in ERP/logistics workflows.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
                    {METRICS.map((metric, index) => (
                        <motion.div
                            key={metric.label}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.08, duration: 0.35 }}
                            viewport={{ once: true }}
                            className="h-full"
                        >
                            <Card className="group h-full overflow-hidden border-border/70 bg-gradient-to-b from-card via-card to-primary/[0.04] transition-transform duration-200 hover:-translate-y-1">
                                <CardContent className="flex h-full flex-col gap-6 p-7">
                                    <div className="h-1 w-12 rounded-full bg-primary/70" />
                                    <div>
                                        <span className="block text-5xl font-black tracking-tight text-primary">{metric.value}</span>
                                        <p className="mt-4 text-lg font-semibold text-foreground">{metric.label}</p>
                                    </div>
                                    <p className="text-sm leading-7 text-muted-foreground">{metric.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
