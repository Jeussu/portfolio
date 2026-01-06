"use client"

import { Card, CardContent } from "@/components/ui/card"
import { METRICS } from "@/lib/data"
import { motion } from "framer-motion"

export function ImpactMetrics() {
    return (
        <section className="py-12 bg-muted/30 border-y">
            <div className="container px-4 mx-auto">
                <h3 className="text-2xl font-bold mb-8">Key Impact Metrics</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {METRICS.map((metric, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <span className="text-5xl font-extrabold text-primary block mb-2">{metric.value}</span>
                                    <p className="font-bold text-lg text-foreground">{metric.label}</p>
                                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{metric.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
