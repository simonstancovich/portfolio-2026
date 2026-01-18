import Link from "next/link";
import { Container } from "@/components/site/container";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
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

        <div className="flex items-center gap-2">
          <a
            href="mailto:youremail@domain.com"
            className="rounded-md bg-white/10 px-3 py-2 text-sm font-medium text-white hover:bg-white/15"
          >
            Email
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
