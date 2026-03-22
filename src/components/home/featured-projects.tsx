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
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="mb-10 flex items-end justify-between">
                    <div className="max-w-2xl">
                        <h2 className="mb-2 text-3xl font-bold">Supporting Backend Projects</h2>
                        <p className="text-muted-foreground">
                            A small public project set that supports backend delivery, APIs, persistence, and transition work.
                            The flagship production proof remains the H2ALL / FastLink case study.
                        </p>
                    </div>
                    <Link href="/projects" className="hidden items-center font-medium text-primary hover:underline md:flex">
                        View All Projects <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                </div>

                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
                    {featured.map((project) => (
                        <Card key={project.slug} className="flex h-full flex-col transition-shadow hover:shadow-md">
                            <CardHeader>
                                <div className="mb-2 flex items-start justify-between gap-3">
                                    <CardTitle className="text-xl">{project.title}</CardTitle>
                                    {project.status && (
                                        <Badge variant="outline" className="text-xs">
                                            {project.status}
                                        </Badge>
                                    )}
                                </div>
                                <CardDescription className="text-base leading-relaxed">
                                    {project.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1 pt-0">
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <Badge
                                            key={tag}
                                            variant="secondary"
                                            className="border-input bg-muted/50 text-xs font-normal text-muted-foreground"
                                        >
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter className="flex min-h-16 flex-wrap gap-4">
                                {project.links.github && (
                                    <Button variant="outline" size="sm" asChild>
                                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                                            <Github className="mr-2 h-4 w-4" /> Code
                                        </a>
                                    </Button>
                                )}
                                {project.links.live && (
                                    <Button variant="outline" size="sm" asChild>
                                        <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                                            <LinkIcon className="mr-2 h-4 w-4" /> Demo
                                        </a>
                                    </Button>
                                )}
                                {!project.links.github && !project.links.live && (
                                    <p className="text-sm leading-relaxed text-muted-foreground">
                                        No public repo or demo is shared for this capstone. It is included to show current backend-growth direction only.
                                    </p>
                                )}
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link href="/projects" className="inline-flex items-center font-medium text-primary hover:underline">
                        View All Projects <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
