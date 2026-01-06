"use client"

import { PROJECTS } from "@/lib/data"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Link as LinkIcon } from "lucide-react"
import Link from "next/link"

export function FeaturedProjects() {
    const featured = PROJECTS.filter(p => p.featured)

    return (
        <section className="py-20">
            <div className="container px-4 mx-auto">
                <div className="flex justify-between items-end mb-10">
                    <div>
                        <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
                        <p className="text-muted-foreground">Select personal and academic projects</p>
                    </div>
                    <Link href="/projects" className="hidden md:flex items-center text-primary hover:underline font-medium">
                        View All Projects <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {featured.map(project => (
                        <Card key={project.slug} className="flex flex-col h-full hover:shadow-md transition-shadow">
                            <CardHeader>
                                <div className="flex justify-between items-start mb-2">
                                    <CardTitle className="text-xl">{project.title}</CardTitle>
                                    {project.status === "In Progress" && <Badge variant="outline" className="text-xs">{project.status}</Badge>}
                                </div>
                                <CardDescription className="line-clamp-2 text-base">{project.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1 pt-0">
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.tags.map(tag => (
                                        <Badge key={tag} variant="secondary" className="text-xs font-normal text-muted-foreground bg-muted/50 border-input">{tag}</Badge>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter className="flex gap-4">
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
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link href="/projects" className="inline-flex items-center text-primary hover:underline font-medium">
                        View All Projects <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
