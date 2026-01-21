import Link from "next/link";
import { Container } from "@/components/site/container";
import { cn } from "@/lib/utils";
import { CommandK } from "./command-k";
import { Mail } from "lucide-react";


const navItems = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/cv", label: "CV" },
  { href: "/contact", label: "Contact" },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgb(var(--bg))]/75 backdrop-blur">
      <Container className="flex h-14 items-center justify-between">
        <Link
          href="/"
          className={cn(
            "group inline-flex items-center gap-2 rounded-md px-2 py-1",
            "text-sm font-medium text-white/90 hover:text-white"
          )}
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
            S
          </span>
          <span className="tracking-tight">Simon Stancovich</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-white/70 hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <CommandK />
          <a
            href="mailto:youremail@domain.com"
            aria-label="Email Simon"
            className="
    inline-flex items-center justify-center
    rounded-xl ring-1 ring-white/10 transition
    bg-white/10 text-white hover:bg-white/15
    h-9 w-9 md:h-auto md:w-auto
    md:px-3 md:py-2
  "
          >
            {/* icon on mobile */}
            <Mail className="h-4 w-4 md:hidden" />

            {/* text on desktop */}
            <span className="hidden md:inline text-sm font-medium">
              Email
            </span>
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-md px-3 py-2 text-sm text-white/70 hover:bg-white/5 hover:text-white md:inline-flex"
          >
            GitHub
          </a>
        </div>
      </Container>
    </header>
  );
}
