"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Download, Mail } from "lucide-react"
import { PROFILE } from "@/lib/data"

export function Hero() {
    return (
        <section className="py-20 md:py-32 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 -z-10 opacity-10 dark:opacity-5">
                <svg width="800" height="800" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" fill="none" />
                    <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" fill="none" />
                    <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="0.5" fill="none" />
                </svg>
            </div>

            <div className="container px-4 mx-auto">
                <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl mb-6">
                            Hi, I&apos;m Do The Vinh.
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-8">
                            Backend Developer (.NET) – Logistics & Warehouse Systems
                        </h2>
                        <p className="text-lg text-muted-foreground mb-10 max-w-2xl leading-relaxed">
                            3 years building robust ERP/Logistics systems. Specialized in multi-tier .NET architecture,
                            SQL Server optimization, and complex warehouse workflows.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Button asChild size="lg" className="h-12 px-8 text-base">
                                <Link href="/case-studies/h2all-fastlink">
                                    View Case Study <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" className="h-12 px-8 text-base" asChild>
                                <a href={PROFILE.cvLink} target="_blank" rel="noopener noreferrer">
                                    View CV <ArrowRight className="ml-2 h-5 w-5" />
                                </a>
                            </Button>
                            <Button variant="ghost" size="lg" className="h-12 px-8 text-base" asChild>
                                <Link href="/contact">
                                    Contact Me <Mail className="ml-2 h-5 w-5" />
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
                        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                            <Image
                                src="/images/avatar.jpg"
                                alt="Do The Vinh"
                                fill
                                className="object-cover rounded-full border-4 border-background shadow-2xl"
                                priority
                            />
                            {/* Decorative ring */}
                            <div className="absolute inset-0 rounded-full border-2 border-primary/20 scale-110 -z-10" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
