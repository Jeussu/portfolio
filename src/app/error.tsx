"use client"

import Link from "next/link"
import { RotateCcw } from "lucide-react"

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
    return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
            <h1 className="mb-4 text-3xl font-bold">Something went wrong</h1>
            <p className="mb-8 max-w-md text-muted-foreground">
                The page could not be displayed. Please try again, or go back to the home page.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                    type="button"
                    onClick={reset}
                    className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Try again
                </button>
                <Link
                    href="/"
                    className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 font-medium transition-colors hover:bg-accent"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    )
}
