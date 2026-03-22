import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"

import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { ThemeProvider } from "@/components/shared/ThemeProvider"
import { PROFILE } from "@/lib/data"

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
})

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
})

export const metadata: Metadata = {
    metadataBase: new URL("https://vinh-portfolio-self.vercel.app"),
    title: `${PROFILE.name} | ${PROFILE.headline}`,
    description:
        "Portfolio of Do The Vinh, a .NET Backend Developer with 3+ years of ERP/logistics experience across reporting, reconciliation, workflow-heavy business modules, and hybrid service environments.",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://vinh-portfolio-self.vercel.app",
        title: `${PROFILE.name} | ${PROFILE.headline}`,
        description:
            "Backend-oriented .NET engineer with enterprise ERP/logistics experience in reporting, reconciliation, SQL-heavy workflows, and hybrid WinForms/service systems.",
        siteName: "Do The Vinh Portfolio",
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col bg-background text-foreground antialiased transition-colors duration-300`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Navbar />
                    <main className="flex flex-1 flex-col">{children}</main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    )
}
