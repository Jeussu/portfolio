import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-border/40 bg-background py-8">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex flex-col items-center md:items-start">
                    <p className="text-sm font-medium">Do The Vinh</p>
                    <p className="text-xs text-muted-foreground mt-1">Backend Developer (.NET)</p>
                </div>

                <div className="flex items-center space-x-4">
                    <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link href="mailto:contact@example.com" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Mail className="h-5 w-5" />
                        <span className="sr-only">Email</span>
                    </Link>
                </div>

                <div className="text-center md:text-right">
                    <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} All rights reserved.</p>
                    <p className="text-xs text-muted-foreground mt-1">Built with Next.js 14, Tailwind & Framer Motion</p>
                </div>
            </div>
        </footer>
    );
}
