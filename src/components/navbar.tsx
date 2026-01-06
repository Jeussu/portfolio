"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toggle"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Experience", href: "/experience" },
    { name: "Upskill", href: "/upskill" },
    { name: "Contact", href: "/contact" },
]

export function Navbar() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <div className="mr-4 hidden md:flex items-center">
                    <Link href="/" className="mr-8 flex items-center space-x-2 font-bold text-xl tracking-tight">
                        DO THE VINH
                    </Link>
                    <div className="flex items-center space-x-6 text-sm font-medium">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "transition-colors hover:text-black dark:hover:text-white",
                                    pathname === item.href ? "text-black dark:text-white" : "text-gray-500 dark:text-gray-400"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Mobile Logo */}
                <Link href="/" className="mr-6 flex items-center space-x-2 font-bold text-xl md:hidden tracking-tight">
                    DO THE VINH
                </Link>

                <div className="flex items-center gap-2">
                    <ModeToggle />
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-700 dark:text-gray-300">
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden border-t border-gray-200 dark:border-gray-800 p-4 bg-white dark:bg-black">
                    <nav className="flex flex-col space-y-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-black dark:hover:text-white",
                                    pathname === item.href ? "text-black dark:text-white" : "text-gray-500 dark:text-gray-400"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </nav>
    )
}
