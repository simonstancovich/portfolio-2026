import type { Metadata } from "next";
import "./globals.css";
import { SiteNav } from "@/components/site/nav";
import { Geist, Geist_Mono } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Simon Stancovich — Full-stack Developer",
  description:
    "Product-grade web apps: scalable systems, crisp UX, modern UI. React, TypeScript, Node.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
};




export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="font-sans">
        <div className="bg-noise" />
        <SiteNav />
        {children}
        <footer className="border-t border-white/10 py-10">
          <div className="mx-auto w-full max-w-6xl px-5 text-sm text-white/60 md:px-8">
            © {new Date().getFullYear()} Simon Stancovich · Built with Next.js
          </div>
        </footer>
      </body>
    </html>
  );
}
