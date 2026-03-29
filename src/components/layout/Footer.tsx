import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

import { PROFILE } from "@/lib/data"

export function Footer() {
    return (
        <footer className="border-t border-border/40 bg-background/95 py-8 backdrop-blur">
            <div className="container mx-auto flex flex-col items-center justify-between gap-5 px-4 md:flex-row">
                <div className="flex flex-col items-center md:items-start">
                    <p className="text-sm font-semibold tracking-tight">{PROFILE.name}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{PROFILE.headline}</p>
                </div>

                <div className="flex items-center space-x-4">
                    <Link
                        href={PROFILE.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link
                        href={PROFILE.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link
                        href={`mailto:${PROFILE.email}`}
                        className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                        <Mail className="h-5 w-5" />
                        <span className="sr-only">Email</span>
                    </Link>
                </div>

                <div className="text-center md:text-right">
                    <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} All rights reserved.</p>
                    <p className="mt-1 max-w-sm text-xs leading-6 text-muted-foreground">
                        Focused on .NET backend opportunities in ERP/logistics systems, reporting, and workflow-heavy business applications.
                    </p>
                </div>
            </div>
        </footer>
    )
}
