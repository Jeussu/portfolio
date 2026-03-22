"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Download, Mail } from "lucide-react"

import { PROFILE } from "@/lib/data"
import { Button } from "@/components/ui/button"

export function Hero() {
    return (
        <section className="relative overflow-hidden py-20 md:py-32">
            <div className="absolute top-0 right-0 -z-10 opacity-10 dark:opacity-5">
                <svg width="800" height="800" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" fill="none" />
                    <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" fill="none" />
                    <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="0.5" fill="none" />
                </svg>
            </div>

            <div className="container mx-auto px-4">
                <div className="grid items-center gap-12 md:grid-cols-[1.5fr_1fr]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-3xl"
                    >
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                            {PROFILE.title}
                        </p>
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight lg:text-6xl">
                            {PROFILE.name}
                        </h1>
                        <h2 className="mb-6 text-2xl font-semibold text-muted-foreground md:text-3xl">
                            {PROFILE.headline}
                        </h2>
                        <p className="mb-4 max-w-2xl text-base font-medium leading-relaxed text-foreground/80 md:text-lg">
                            {PROFILE.supporting}
                        </p>
                        <p className="mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                            {PROFILE.summary}
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Button asChild size="lg" className="h-12 px-8 text-base">
                                <Link href="/case-studies/h2all-fastlink">
                                    Read Case Study <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" className="h-12 px-8 text-base" asChild>
                                <a href={PROFILE.cvLink} target="_blank" rel="noopener noreferrer">
                                    View Resume <Download className="ml-2 h-5 w-5" />
                                </a>
                            </Button>
                            <Button variant="ghost" size="lg" className="h-12 px-8 text-base" asChild>
                                <Link href="/contact">
                                    Contact <Mail className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative mx-auto md:mx-0"
                    >
                        <div className="relative h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96">
                            <Image
                                src="/images/avatar.jpg"
                                alt="Do The Vinh"
                                fill
                                className="rounded-full border-4 border-background object-cover shadow-2xl"
                                priority
                            />
                            <div className="absolute inset-0 -z-10 scale-110 rounded-full border-2 border-primary/20" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
