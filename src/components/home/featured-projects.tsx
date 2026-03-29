"use client"

import Link from "next/link"
import { ArrowRight, Github, Link as LinkIcon } from "lucide-react"

import { PROJECTS } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function FeaturedProjects() {
    const featured = PROJECTS.filter((project) => project.featured)

    return (
        <section className="py-20 md:py-24">
            <div className="container mx-auto px-4">
                <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div className="max-w-3xl">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                            Supporting Public Work
                        </p>
                        <h2 className="text-3xl font-black tracking-tight md:text-4xl">Supporting Backend Projects</h2>
                        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                            A small public project set that supports backend delivery, APIs, persistence, and transition work.
                            The flagship production proof remains the H2ALL / FastLink case study.
                        </p>
                    </div>
                    <Link
                        href="/projects"
                        className="hidden items-center rounded-full border border-border/70 bg-background/80 px-4 py-2 text-sm font-medium text-primary transition-colors hover:border-primary/30 hover:text-primary md:inline-flex"
                    >
                        View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>

                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
                    {featured.map((project) => (
                        <Card
                            key={project.slug}
                            className="flex h-full flex-col overflow-hidden border-border/70 bg-gradient-to-br from-card via-card to-primary/[0.04] transition-transform duration-200 hover:-translate-y-1"
                        >
                            <CardHeader>
                                <div className="mb-2 flex items-start justify-between gap-3">
                                    <CardTitle className="text-xl md:text-2xl">{project.title}</CardTitle>
                                    {project.status && (
                                        <Badge variant="outline" className="text-xs">
                                            {project.status}
                                        </Badge>
                                    )}
                                </div>
                                <CardDescription className="text-base">
                                    {project.description}
                                </CardDescription>
                                {project.relevance && (
                                    <p className="pt-2 text-sm font-medium text-foreground/80">{project.relevance}</p>
                                )}
                            </CardHeader>
                            <CardContent className="flex-1 pt-0">
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.tags.slice(0, 5).map((tag) => (
                                        <Badge
                                            key={tag}
                                            variant="secondary"
                                            className="border-input bg-muted/50 px-3 py-1 text-xs font-normal text-muted-foreground"
                                        >
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter className="flex min-h-16 flex-wrap gap-3">
                                {project.links.live && (
                                    <Button size="sm" asChild className="w-full sm:w-auto">
                                        <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                                            <LinkIcon className="mr-2 h-4 w-4" /> Demo
                                        </a>
                                    </Button>
                                )}
                                {project.links.github && (
                                    <Button variant="outline" size="sm" asChild className="w-full sm:w-auto">
                                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                                            <Github className="mr-2 h-4 w-4" /> Code
                                        </a>
                                    </Button>
                                )}
                                {project.links.more?.map((link) => (
                                    <Button key={link.href} variant="ghost" size="sm" asChild className="w-full sm:w-auto">
                                        <a href={link.href} target="_blank" rel="noopener noreferrer">
                                            <Github className="mr-2 h-4 w-4" /> {link.label}
                                        </a>
                                    </Button>
                                ))}
                                {!project.links.github && !project.links.live && !project.links.more?.length && (
                                    <p className="text-sm leading-relaxed text-muted-foreground">
                                        No public repo or demo is shared for this capstone. It is included to show current backend-growth direction only.
                                    </p>
                                )}
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link
                        href="/projects"
                        className="inline-flex items-center rounded-full border border-border/70 bg-background/80 px-4 py-2 text-sm font-medium text-primary"
                    >
                        View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
