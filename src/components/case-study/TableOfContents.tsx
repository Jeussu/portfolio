"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ToCItem {
    id: string;
    label: string;
}

const items: ToCItem[] = [
    { id: "overview", label: "Overview" },
    { id: "architecture", label: "Architecture" },
    { id: "request-lifecycle", label: "Request Lifecycle" },
    { id: "bounded-contexts", label: "Bounded Contexts" },
    { id: "key-contributions", label: "Key Contributions" },
    { id: "outcomes", label: "Outcomes" },
];

export function TableOfContents() {
    const [activeId, setActiveId] = useState("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "-20% 0px -35% 0px" }
        );

        items.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <nav className="hidden lg:block sticky top-24 self-start w-64 p-4 border-l border-border/50">
            <h4 className="font-medium mb-4 text-sm text-foreground/80">On this page</h4>
            <ul className="space-y-3 text-sm">
                {items.map((item) => (
                    <li key={item.id}>
                        <a
                            href={`#${item.id}`}
                            className={cn(
                                "block transition-colors hover:text-primary",
                                activeId === item.id
                                    ? "text-primary font-medium"
                                    : "text-muted-foreground"
                            )}
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                                setActiveId(item.id);
                            }}
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
