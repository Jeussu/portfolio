"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Download, Mail } from "lucide-react"

import { PROFILE } from "@/lib/data"
import { Button } from "@/components/ui/button"

const quickSignals = [
    "ERP / Logistics",
    "Finance Reporting",
    "SQL Performance",
    "Workflow Systems",
]

export function Hero() {
    return (
        <section className="relative overflow-hidden py-16 md:py-24 lg:py-28">
            <div
                className="absolute inset-x-0 top-0 -z-10 h-[34rem] opacity-90"
                style={{
                    background:
                        "radial-gradient(circle at 12% 18%, hsl(var(--primary) / 0.16), transparent 34%), radial-gradient(circle at 85% 16%, hsl(var(--foreground) / 0.08), transparent 24%)",
                }}
            />
            <div className="absolute inset-x-0 top-28 -z-10 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="container mx-auto px-4">
                <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.7fr)_minmax(320px,0.95fr)] lg:gap-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="max-w-4xl"
                    >
                        <p className="mb-6 inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                            {PROFILE.title}
                        </p>
                        <h1 className="max-w-3xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                            <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.3em] text-foreground/55">
                                {PROFILE.name}
                            </span>
                            <span className="block">{PROFILE.headline}</span>
                        </h1>
                        <p className="mt-6 max-w-3xl text-lg font-medium leading-relaxed text-foreground/85 md:text-xl">
                            {PROFILE.supporting}
                        </p>
                        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                            {PROFILE.summary}
                        </p>

                        <ul className="mt-8 flex flex-wrap gap-3">
                            {quickSignals.map((signal) => (
                                <li
                                    key={signal}
                                    className="rounded-full border border-border/70 bg-background/80 px-4 py-2 text-sm font-medium text-foreground/75 shadow-[0_12px_32px_-24px_hsl(var(--foreground)/0.4)]"
                                >
                                    {signal}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-10 flex flex-wrap items-center gap-3 md:gap-4">
                            <Button asChild size="lg" className="h-12 w-full px-7 text-base sm:w-auto">
                                <Link href="/case-studies/h2all-fastlink">
                                    Read Case Study <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" className="h-12 w-full px-7 text-base sm:w-auto" asChild>
                                <a href={PROFILE.cvLink} target="_blank" rel="noopener noreferrer">
                                    View Resume <Download className="ml-2 h-5 w-5" />
                                </a>
                            </Button>
                            <Button variant="ghost" size="lg" className="h-12 w-full px-6 text-base sm:w-auto" asChild>
                                <Link href="/contact">
                                    Contact <Mail className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                        </div>

                        <p className="mt-5 text-sm text-muted-foreground">
                            Start with the H2ALL / FastLink case study for the clearest view of enterprise production depth.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
                        className="relative mx-auto w-full max-w-[24rem] lg:mx-0 lg:justify-self-end"
                    >
                        <div className="absolute inset-4 -z-10 rounded-[2rem] bg-primary/20 blur-3xl" />
                        <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-card/80 p-4 shadow-[0_30px_80px_-44px_hsl(var(--foreground)/0.55)]">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/12 via-transparent to-background/10" />
                            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.7rem] border border-border/70 bg-muted/40">
                                <Image
                                    src="/images/avatar.jpg"
                                    alt="Do The Vinh"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            <div className="relative mt-4 rounded-[1.4rem] border border-border/70 bg-background/85 p-4 shadow-[0_18px_40px_-30px_hsl(var(--foreground)/0.4)]">
                                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                                    Flagship Proof
                                </p>
                                <div className="mt-3 flex items-center justify-between gap-4">
                                    <div>
                                        <p className="text-base font-semibold">H2ALL / FastLink</p>
                                        <p className="text-sm text-muted-foreground">Enterprise ERP / logistics case study</p>
                                    </div>
                                    <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-semibold text-primary">
                                        3+ Years
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
