"use client"

import { useState } from "react"
import { PROJECTS } from "@/lib/data"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Link as LinkIcon, Calendar } from "lucide-react"

export function ProjectList() {
    const allTags = Array.from(new Set(PROJECTS.flatMap(p => p.tags)))
    const [selectedTag, setSelectedTag] = useState<string | null>(null)

    const filteredProjects = selectedTag
        ? PROJECTS.filter(p => p.tags.includes(selectedTag))
        : PROJECTS

    return (
        <div>
            <div className="flex flex-wrap gap-2 mb-12 justify-center max-w-4xl mx-auto">
                <Button
                    variant={selectedTag === null ? "default" : "outline"}
                    onClick={() => setSelectedTag(null)}
                    size="sm"
                    className="rounded-full"
                >
                    All
                </Button>
                {allTags.map(tag => (
                    <Button
                        key={tag}
                        variant={selectedTag === tag ? "default" : "outline"}
                        onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                        size="sm"
                        className="rounded-full"
                    >
                        {tag}
                    </Button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map(project => (
                    <Card key={project.slug} className="flex flex-col h-full hover:shadow-lg transition-all group">
                        <CardHeader>
                            <div className="flex justify-between items-start mb-2">
                                <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                                {project.status === "In Progress" && <Badge variant="outline" className="text-xs shrink-0">{project.status}</Badge>}
                            </div>
                            <CardDescription className="line-clamp-3 leading-relaxed">{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1 pt-0">
                            <div className="flex flex-wrap gap-2 mt-4">
                                {project.tags.map(tag => (
                                    <Badge key={tag} variant="secondary" className="text-xs font-normal text-muted-foreground bg-muted/50 border-input">{tag}</Badge>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter className="flex gap-4 border-t pt-4 bg-muted/10 mt-auto">
                            {project.links.github && (
                                <Button variant="ghost" size="sm" asChild className="w-full hover:bg-background border hover:border-input">
                                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                                        <Github className="mr-2 h-4 w-4" /> Code
                                    </a>
                                </Button>
                            )}
                            {project.links.live && (
                                <Button variant="ghost" size="sm" asChild className="w-full hover:bg-background border hover:border-input">
                                    <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                                        <LinkIcon className="mr-2 h-4 w-4" /> Live
                                    </a>
                                </Button>
                            )}
                        </CardFooter>
                    </Card>
                ))}
            </div>

            {filteredProjects.length === 0 && (
                <div className="text-center py-20 text-muted-foreground">
                    No projects found with tag &quot;{selectedTag}&quot;.
                </div>
            )}
        </div>
    )
}
