"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/shared/ThemeToggle";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Case Study", href: "/case-studies/h2all-fastlink" },
    { name: "Projects", href: "/projects" },
    { name: "Experience", href: "/experience" },
    { name: "Backend Growth", href: "/upskill" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/70">
            <div className="container mx-auto flex h-[4.25rem] items-center justify-between px-4">
                <Link href="/" className="mr-6 flex items-center space-x-2 font-bold text-xl">
                    <span className="tracking-tight">Do The Vinh</span>
                </Link>
                <div className="hidden md:flex flex-1 items-center justify-end space-x-6">
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "relative py-1 transition-colors hover:text-foreground/80",
                                    pathname === item.href
                                        ? "text-foreground after:absolute after:left-0 after:right-0 after:-bottom-[0.85rem] after:h-px after:bg-primary"
                                        : "text-foreground/60"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                    <ThemeToggle />
                </div>
                <div className="flex items-center md:hidden space-x-4">
                    <ThemeToggle />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                        className="inline-flex items-center justify-center rounded-md p-2 text-foreground/50 hover:bg-accent hover:text-accent-foreground focus:outline-none"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="border-b border-border/40 bg-background md:hidden"
                    >
                        <div className="container mx-auto flex flex-col space-y-2 px-4 py-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "rounded-xl px-3 py-2 text-sm font-medium transition-colors hover:bg-accent/80 hover:text-foreground/80",
                                        pathname === item.href ? "bg-accent/70 text-foreground" : "text-foreground/60"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
