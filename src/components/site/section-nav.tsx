"use client";

import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

type Item = { id: string; label: string };

export function SectionNav({ items }: { items: Item[] }) {
  const [active, setActive] = useState(items[0]?.id);

  const ids = useMemo(() => items.map((i) => i.id), [items]);

  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) setActive(visible.target.id);
      },
      {
        root: null,
        threshold: [0.15, 0.25, 0.35],
        rootMargin: "-20% 0px -65% 0px",
      }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return (
    <nav className="glass rounded-3xl p-4">
      <div className="text-xs font-semibold uppercase tracking-wider text-white/60">
        On this page
      </div>

      <div className="mt-3 grid gap-1">
        {items.map((it) => (
          <a
            key={it.id}
            href={`#${it.id}`}
            className={cn(
              "rounded-xl px-3 py-2 text-sm transition",
              active === it.id
                ? "bg-white text-black"
                : "text-white/70 hover:bg-white/7 hover:text-white"
            )}
          >
            {it.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
