import type { Metadata } from "next";
import { themeClass } from "@/styles/theme.css";
import "@/styles/global.css";

export const metadata: Metadata = {
  title: "Simon Stancovich — Full-stack Developer",
  description:
    "Full-stack developer building modern, scalable web products (React, TypeScript, Node/NestJS).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={themeClass}>
      <body>{children}</body>
    </html>
  );
}
