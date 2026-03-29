"use client"

import { Github, Link as LinkIcon } from "lucide-react"

import { PROJECTS } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function ProjectList() {
    return (
        <div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {PROJECTS.map((project) => (
                    <Card
                        key={project.slug}
                        className="group flex h-full flex-col overflow-hidden border-border/70 bg-gradient-to-br from-card via-card to-primary/[0.04] transition-all duration-200 hover:-translate-y-1"
                    >
                        <CardHeader className="pb-5">
                            <div className="mb-2 flex items-start justify-between gap-3">
                                <CardTitle className="text-2xl transition-colors group-hover:text-primary">
                                    {project.title}
                                </CardTitle>
                                {project.status && (
                                    <Badge variant="outline" className="shrink-0 text-xs">
                                        {project.status}
                                    </Badge>
                                )}
                            </div>
                            <CardDescription className="line-clamp-4 text-base">
                                {project.description}
                            </CardDescription>
                            {project.relevance && (
                                <div className="rounded-[1.25rem] border border-border/70 bg-background/75 p-4">
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                                        Why it matters
                                    </p>
                                    <p className="mt-2 text-sm font-medium leading-7 text-foreground/80">{project.relevance}</p>
                                </div>
                            )}
                        </CardHeader>
                        <CardContent className="flex-1 pt-0">
                            <div className="mt-4 flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
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
                        <CardFooter className="mt-auto flex flex-wrap gap-3 border-t border-border/60 bg-muted/10 pt-5">
                            {project.links.live && (
                                <Button size="sm" asChild className="w-full sm:w-auto">
                                    <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                                        <LinkIcon className="mr-2 h-4 w-4" /> Live
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
        </div>
    )
}
