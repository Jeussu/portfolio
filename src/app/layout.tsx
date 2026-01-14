import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Do The Vinh | Backend Developer (.NET) – Logistics & Warehouse Systems",
  description: "Portfolio of Do The Vinh, a Backend Developer with 3 years experience building ERP/Logistics systems using .NET, SQL Server, and Cloud technologies.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vinh-portfolio-self.vercel.app",
    title: "Do The Vinh | Backend Developer (.NET)",
    description: "Specialized in High-Performance Logistics & Warehouse Systems.",
    siteName: "Do The Vinh Portfolio",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
