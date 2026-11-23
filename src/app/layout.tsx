import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"

import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { MotionProvider } from "@/components/shared/MotionProvider"
import { ThemeProvider } from "@/components/shared/ThemeProvider"
import { PROFILE, SITE_URL } from "@/lib/data"
import { DEFAULT_TITLE, SITE_NAME } from "@/lib/metadata"

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
})

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
})

const description =
    "Portfolio of Do The Vinh, a Fullstack .NET Developer (backend-focused) with 3+ years of ERP/logistics experience and end-to-end delivery of a production ASP.NET Core + Next.js platform."

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: DEFAULT_TITLE,
        template: `%s | ${PROFILE.name}`,
    },
    description,
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "/",
        title: DEFAULT_TITLE,
        description:
            "Backend-focused full-stack .NET developer: ASP.NET Core, SQL Server, ReactJS/Next.js; ERP/logistics depth and a production full-stack delivery.",
        siteName: SITE_NAME,
    },
    twitter: {
        card: "summary_large_image",
        title: DEFAULT_TITLE,
        description,
    },
}

const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PROFILE.name,
    jobTitle: PROFILE.title,
    url: SITE_URL,
    sameAs: [PROFILE.linkedin, PROFILE.github],
    address: {
        "@type": "PostalAddress",
        addressLocality: "Hanoi",
        addressCountry: "VN",
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
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
                />
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <MotionProvider>
                        <Navbar />
                        <main className="flex flex-1 flex-col">{children}</main>
                        <Footer />
                    </MotionProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}
