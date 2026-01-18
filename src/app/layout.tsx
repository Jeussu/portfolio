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
  title: "Do The Vinh | Full-Stack .NET Desktop Developer (WPF/WinForms)",
  description: "Portfolio of Do The Vinh, a Full-Stack .NET Desktop Developer (WPF/WinForms) specialized in high-performance Logistics & ERP Systems.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vinh-portfolio-self.vercel.app",
    title: "Do The Vinh | Full-Stack .NET Desktop Developer",
    description: "Specialized in Logistics & ERP Systems (WPF, WinForms, SQL Server).",
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
