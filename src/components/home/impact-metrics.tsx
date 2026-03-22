"use client"

import { motion } from "framer-motion"

import { METRICS } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"

export function ImpactMetrics() {
    return (
        <section className="border-y bg-muted/30 py-12">
            <div className="container mx-auto px-4">
                <div className="mb-8 max-w-3xl">
                    <h3 className="text-2xl font-bold">Production Proof</h3>
                    <p className="mt-3 text-muted-foreground">
                        Selected evidence around reporting performance, data correctness, and large-result-set handling in ERP/logistics workflows.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
                    {METRICS.map((metric, index) => (
                        <motion.div
                            key={metric.label}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full border-none shadow-md transition-shadow hover:shadow-lg">
                                <CardContent className="p-6">
                                    <span className="mb-3 block text-4xl font-extrabold text-primary">{metric.value}</span>
                                    <p className="text-lg font-bold text-foreground">{metric.label}</p>
                                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{metric.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
