"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function SectionNav({ items }: { items: { id: string; label: string }[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id);

  useEffect(() => {
    const ids = items.map((i) => i.id);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    // Activate when the section top enters the top "band" of the viewport.
    const io = new IntersectionObserver(
      (entries) => {
        // Collect intersecting entries and choose the one closest to the top
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (a.target as HTMLElement).offsetTop - (b.target as HTMLElement).offsetTop);

        if (visible.length) {
          setActiveId((visible[visible.length - 1].target as HTMLElement).id);
        }
      },
      {
        // This means: treat the section as "active" when its top is in the top ~35% of viewport.
        root: null,
        threshold: 0,
        rootMargin: "-20% 0px -65% 0px",
      }
    );

    elements.forEach((el) => io.observe(el));

    // Fallback: if near bottom, highlight the last section that exists on the page
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;

      if (scrolledToBottom) {
        // choose last item that has a DOM element
        for (let i = ids.length - 1; i >= 0; i--) {
          if (document.getElementById(ids[i])) {
            setActiveId(ids[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    // Also handle direct hash navigation (/work/x#results)
    const onHashChange = () => {
      const id = window.location.hash.replace("#", "");
      if (id && ids.includes(id)) setActiveId(id);
    };
    window.addEventListener("hashchange", onHashChange);

    // Initialize from current hash
    onHashChange();

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [items]);

  return (
    <nav className="glass rounded-3xl p-5">
      <div className="text-xs font-semibold uppercase tracking-wider text-white/50">
        On this page
      </div>

      <div className="mt-3 space-y-1">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "block rounded-xl px-3 py-2 text-sm transition",
                isActive
                  ? "bg-white text-black"
                  : "text-white/65 hover:text-white hover:bg-white/5"
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
