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
                    <Card key={project.slug} className="group flex h-full flex-col transition-all hover:shadow-lg">
                        <CardHeader>
                            <div className="mb-2 flex items-start justify-between gap-3">
                                <CardTitle className="text-xl transition-colors group-hover:text-primary">
                                    {project.title}
                                </CardTitle>
                                {project.status && (
                                    <Badge variant="outline" className="shrink-0 text-xs">
                                        {project.status}
                                    </Badge>
                                )}
                            </div>
                            <CardDescription className="line-clamp-4 leading-relaxed">
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
                        <CardFooter className="mt-auto flex flex-wrap gap-4 border-t bg-muted/10 pt-4">
                            {project.links.github && (
                                <Button variant="ghost" size="sm" asChild className="w-full border hover:border-input hover:bg-background">
                                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                                        <Github className="mr-2 h-4 w-4" /> Code
                                    </a>
                                </Button>
                            )}
                            {project.links.live && (
                                <Button variant="ghost" size="sm" asChild className="w-full border hover:border-input hover:bg-background">
                                    <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                                        <LinkIcon className="mr-2 h-4 w-4" /> Live
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
        </div>
    )
}
