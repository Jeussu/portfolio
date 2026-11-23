"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Award, Briefcase, Calendar, X } from "lucide-react"

import { CERTIFICATES, EXPERIENCE } from "@/lib/data"

export function ExperienceContent() {
    const [selectedCert, setSelectedCert] = useState<typeof CERTIFICATES[number] | null>(null)
    const closeButtonRef = useRef<HTMLButtonElement>(null)
    const triggerRef = useRef<HTMLElement | null>(null)

    useEffect(() => {
        if (!selectedCert) return

        closeButtonRef.current?.focus()
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setSelectedCert(null)
        }
        document.addEventListener("keydown", onKeyDown)

        return () => {
            document.removeEventListener("keydown", onKeyDown)
            triggerRef.current?.focus()
        }
    }, [selectedCert])

    return (
        <div className="container mx-auto px-4 py-14 md:py-16">
            <div className="mx-auto max-w-6xl space-y-16">
                <section className="mx-auto max-w-3xl text-center">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                        Production Delivery
                    </p>
                    <h1 className="text-4xl font-black tracking-tight md:text-5xl">Experience</h1>
                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                        Freelance full-stack production delivery on ASP.NET Core and Next.js, built on enterprise
                        ERP/logistics experience across finance workflows, reporting accuracy, and hybrid services.
                    </p>
                </section>

                <section className="relative mx-auto max-w-5xl">
                    <div className="absolute left-4 top-2 bottom-2 hidden w-px bg-gradient-to-b from-primary/40 via-border to-transparent md:block" />
                    <div className="space-y-8">
                        {EXPERIENCE.map((exp, index) => (
                            <motion.article
                                key={exp.company}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.16, duration: 0.35 }}
                                className="relative md:pl-12"
                            >
                                <div className="absolute left-[9px] top-10 hidden h-4 w-4 rounded-full border border-primary bg-background ring-8 ring-background md:block" />
                                <div className="rounded-[1.8rem] border border-border/70 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 shadow-[0_28px_80px_-52px_hsl(var(--foreground)/0.5)] md:p-8">
                                    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                                        <div className="max-w-3xl">
                                            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                                                Company
                                            </p>
                                            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                                                {exp.company}
                                            </h2>
                                            <div className="mt-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
                                                <Briefcase className="mr-2 h-4 w-4" />
                                                {exp.role}
                                            </div>
                                        </div>

                                        <div className="inline-flex items-center rounded-full border border-border/70 bg-background/80 px-4 py-2 text-sm font-medium text-muted-foreground">
                                            <Calendar className="mr-2 h-4 w-4" />
                                            {exp.period}
                                        </div>
                                    </div>

                                    <p className="mb-6 max-w-3xl leading-8 text-muted-foreground">
                                        <span className="font-semibold text-foreground">Tech: </span>
                                        {exp.tech}
                                    </p>

                                    <ul className="grid gap-3">
                                        {exp.achievements.map((item, i) => (
                                            <li
                                                key={i}
                                                className="flex items-start gap-3 rounded-[1.25rem] border border-border/70 bg-background/75 p-4 text-sm leading-7 text-foreground/90 md:text-base"
                                            >
                                                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary/65" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {exp.links.length > 0 && (
                                        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
                                            {exp.links.map((link) =>
                                                link.href.startsWith("/") ? (
                                                    <Link key={link.href} href={link.href} className="text-primary underline-offset-4 hover:underline">
                                                        {link.label}
                                                    </Link>
                                                ) : (
                                                    <a
                                                        key={link.href}
                                                        href={link.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-primary underline-offset-4 hover:underline"
                                                    >
                                                        {link.label}
                                                        <span className="sr-only"> (opens in a new tab)</span>
                                                    </a>
                                                )
                                            )}
                                        </div>
                                    )}
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </section>

                <section className="rounded-[2rem] border border-border/70 bg-gradient-to-br from-card via-card to-primary/[0.03] p-6 shadow-[0_30px_90px_-58px_hsl(var(--foreground)/0.55)] md:p-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 }}
                        className="mx-auto mb-10 max-w-3xl text-center"
                    >
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                            Selected Credentials
                        </p>
                        <h2 className="text-3xl font-black tracking-tight md:text-4xl">Education & certifications</h2>
                        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                            Education and certifications that support the full-stack .NET profile alongside production experience.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {CERTIFICATES.map((cert, index) => (
                            <motion.button
                                layoutId={`cert-${cert.title}`}
                                key={cert.title}
                                onClick={(event) => {
                                    triggerRef.current = event.currentTarget
                                    setSelectedCert(cert)
                                }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.32 + index * 0.08 }}
                                className="group flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-border/70 bg-background/80 text-left shadow-[0_20px_50px_-36px_hsl(var(--foreground)/0.45)] transition-transform duration-200 hover:-translate-y-1"
                            >
                                <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-border/70 bg-gradient-to-br from-muted via-muted/70 to-primary/[0.06]">
                                    <motion.div layoutId={`image-${cert.title}`} className="relative h-full w-full">
                                        <Image
                                            src={cert.image}
                                            alt={cert.title}
                                            fill
                                            className="object-contain p-4 transition-transform duration-300 group-hover:scale-[1.02]"
                                        />
                                    </motion.div>
                                </div>
                                <div className="flex flex-1 flex-col p-6">
                                    <div className="mb-4 flex min-h-14 items-start justify-between gap-3">
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                                                {cert.category}
                                            </p>
                                            <p className="mt-2 text-sm font-medium text-primary">{cert.issuer}</p>
                                        </div>
                                        <span className="shrink-0 rounded-full border border-border/70 bg-muted/70 px-3 py-1 text-xs text-muted-foreground">
                                            {cert.date}
                                        </span>
                                    </div>
                                    <motion.h3
                                        layoutId={`title-${cert.title}`}
                                        className="min-h-14 line-clamp-2 text-lg font-semibold leading-tight"
                                    >
                                        {cert.title}
                                    </motion.h3>
                                    <p className="mt-3 min-h-[5.25rem] line-clamp-3 text-sm leading-7 text-muted-foreground">
                                        {cert.description}
                                    </p>
                                </div>
                            </motion.button>
                        ))}
                    </div>
                </section>
            </div>

            <AnimatePresence>
                {selectedCert && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4" style={{ perspective: "1000px" }}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-background/85 backdrop-blur-md"
                            onClick={() => setSelectedCert(null)}
                        />
                        <motion.div
                            layoutId={`cert-${selectedCert.title}`}
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="certificate-dialog-title"
                            className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-[1.8rem] border border-border/70 bg-card shadow-[0_40px_120px_-60px_hsl(var(--foreground)/0.7)]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                ref={closeButtonRef}
                                onClick={() => setSelectedCert(null)}
                                aria-label="Close"
                                className="absolute right-4 top-4 z-10 rounded-full bg-background/75 p-2 transition-colors hover:bg-background"
                            >
                                <X className="h-5 w-5" />
                            </button>

                            <div className="relative h-[44vh] w-full flex-shrink-0 border-b border-border/70 bg-gradient-to-br from-muted via-muted/70 to-primary/[0.06] sm:h-[52vh]">
                                <motion.div layoutId={`image-${selectedCert.title}`} className="relative h-full w-full">
                                    <Image
                                        src={selectedCert.image}
                                        alt={selectedCert.title}
                                        fill
                                        className="object-contain p-5"
                                    />
                                </motion.div>
                            </div>

                            <div className="overflow-y-auto p-6 sm:p-8">
                                <div className="mb-4 flex items-start justify-between gap-4">
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                                            {selectedCert.category}
                                        </p>
                                        <p className="mt-2 text-lg font-medium text-primary">{selectedCert.issuer}</p>
                                    </div>
                                    <div className="flex items-center gap-2 rounded-full border border-border/70 bg-muted/70 px-3 py-1 text-sm text-muted-foreground">
                                        <Award className="h-4 w-4 text-primary" />
                                        {selectedCert.date}
                                    </div>
                                </div>

                                <motion.h3
                                    id="certificate-dialog-title"
                                    layoutId={`title-${selectedCert.title}`}
                                    className="text-2xl font-semibold leading-tight sm:text-3xl"
                                >
                                    {selectedCert.title}
                                </motion.h3>
                                <p className="mt-4 max-w-3xl leading-8 text-muted-foreground">{selectedCert.description}</p>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    )
}
