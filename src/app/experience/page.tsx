"use client"

import Image from "next/image"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Award, Briefcase, Calendar, X } from "lucide-react"

import { CERTIFICATES, EXPERIENCE } from "@/lib/data"

export default function ExperiencePage() {
    const [selectedCert, setSelectedCert] = useState<typeof CERTIFICATES[number] | null>(null)

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="mx-auto mb-20 max-w-3xl">
                <div className="mb-12 text-center">
                    <h1 className="mb-4 text-4xl font-bold">Experience</h1>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                        Enterprise ERP/logistics experience across finance workflows, reporting accuracy,
                        hybrid services, and end-to-end backend tracing.
                    </p>
                </div>

                <div className="relative ml-3 space-y-12 border-l border-border pb-12 md:ml-6">
                    {EXPERIENCE.map((exp, index) => (
                        <motion.div
                            key={exp.company}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="relative pl-8 md:pl-12"
                        >
                            <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full border border-primary bg-background ring-4 ring-background" />

                            <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                <h3 className="text-xl font-bold text-foreground">{exp.company}</h3>
                                <div className="mt-1 flex items-center text-sm text-muted-foreground sm:mt-0">
                                    <Calendar className="mr-1 h-3 w-3" />
                                    {exp.period}
                                </div>
                            </div>

                            <div className="mb-4 flex items-center font-medium text-primary">
                                <Briefcase className="mr-2 h-4 w-4" />
                                {exp.role}
                            </div>

                            <p className="mb-4 italic text-muted-foreground">{exp.description}</p>

                            <ul className="space-y-2">
                                {exp.achievements.map((item, i) => (
                                    <li key={i} className="flex items-start text-sm text-foreground/90 md:text-base">
                                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/50" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="mx-auto max-w-4xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mb-4 text-center text-3xl font-bold"
                >
                    Education & Selected Credentials
                </motion.h2>
                <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
                    Selected background items that support the .NET/backend profile without competing with production experience.
                </p>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {CERTIFICATES.map((cert, index) => (
                        <motion.div
                            layoutId={`cert-${cert.title}`}
                            key={cert.title}
                            onClick={() => setSelectedCert(cert)}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            className="group cursor-pointer overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
                        >
                            <div className="relative h-48 w-full bg-muted">
                                <motion.div layoutId={`image-${cert.title}`} className="relative h-full w-full">
                                    <Image
                                        src={cert.image}
                                        alt={cert.title}
                                        fill
                                        className="object-contain p-2 transition-transform group-hover:scale-105"
                                    />
                                </motion.div>
                            </div>
                            <div className="p-6">
                                <div className="mb-2 flex items-start justify-between">
                                    <Award className="mt-1 h-5 w-5 shrink-0 text-primary" />
                                    <span className="rounded-full border border-border bg-muted px-2 py-1 text-xs text-muted-foreground">
                                        {cert.date}
                                    </span>
                                </div>
                                <motion.h3 layoutId={`title-${cert.title}`} className="mb-1 text-lg font-bold leading-tight">
                                    {cert.title}
                                </motion.h3>
                                <p className="mb-3 text-sm font-medium text-primary">{cert.issuer}</p>
                                <p className="text-sm text-muted-foreground">{cert.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedCert && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4" style={{ perspective: "1000px" }}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
                            onClick={() => setSelectedCert(null)}
                        />
                        <motion.div
                            layoutId={`cert-${selectedCert.title}`}
                            className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-xl border border-border bg-card shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedCert(null)}
                                className="absolute right-4 top-4 z-10 rounded-full bg-background/50 p-2 transition-colors hover:bg-background"
                            >
                                <X className="h-5 w-5" />
                            </button>

                            <div className="relative h-[50vh] w-full flex-shrink-0 bg-muted sm:h-[60vh]">
                                <motion.div layoutId={`image-${selectedCert.title}`} className="relative h-full w-full">
                                    <Image
                                        src={selectedCert.image}
                                        alt={selectedCert.title}
                                        fill
                                        className="object-contain p-4"
                                    />
                                </motion.div>
                            </div>

                            <div className="overflow-y-auto p-6 sm:p-8">
                                <div className="mb-4 flex items-start justify-between">
                                    <div className="flex items-center gap-2">
                                        <Award className="h-6 w-6 text-primary" />
                                        <span className="rounded-full border border-border bg-muted px-3 py-1 text-sm text-muted-foreground">
                                            {selectedCert.date}
                                        </span>
                                    </div>
                                </div>

                                <motion.h3 layoutId={`title-${selectedCert.title}`} className="mb-2 text-2xl font-bold">
                                    {selectedCert.title}
                                </motion.h3>
                                <p className="mb-4 text-lg font-medium text-primary">{selectedCert.issuer}</p>
                                <p className="leading-relaxed text-muted-foreground">{selectedCert.description}</p>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    )
}
