"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { projects, type Project } from "@/lib/projects";

const filters = ["All", "Full-stack", "Frontend", "Mobile", "AI/Product"] as const;
type Filter = (typeof filters)[number];

function matches(p: Project, f: Filter) {
  if (f === "All") return true;
  return p.tags.includes(f);
}

export function WorkGrid() {
  const [filter, setFilter] = useState<Filter>("All");

  const items = useMemo(
    () => projects.filter((p) => matches(p, filter)),
    [filter]
  );

  return (
    <div className="mt-10">
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={[
              "rounded-full px-4 py-2 text-sm font-medium transition ring-1",
              filter === f
                ? "bg-white text-black ring-white/10"
                : "bg-white/5 text-white/70 ring-white/10 hover:bg-white/10 hover:text-white",
            ].join(" ")}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-12">
        {items.map((p, i) => (
          <NeoCard
            key={p.slug}
            p={p}
            span={i === 0 ? "md:col-span-7" : "md:col-span-5"}
            spotlight={i === 0}
          />
        ))}
      </div>
    </div>
  );
}

function NeoCard({
  p,
  span,
  spotlight,
}: {
  p: Project;
  span: string;
  spotlight?: boolean;
}) {
  return (
    <Link
      href={`/work/${p.slug}`}
      className={[
        "group relative overflow-hidden rounded-3xl p-6 ring-1 transition",
        "bg-white/5 ring-white/10 hover:bg-white/7 hover:ring-white/20",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))]/70",
        span,
      ].join(" ")}
    >
      {/* gradient edge */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute -top-20 right-[-40px] h-72 w-72 rounded-full bg-[rgb(var(--accent))]/16 blur-3xl" />
        <div className="absolute -bottom-24 left-[-60px] h-72 w-72 rounded-full bg-[rgb(var(--accent-2))]/14 blur-3xl" />
      </div>

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-lg font-semibold tracking-tight text-white">
              {p.title}
            </div>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              {p.tagline}
            </p>
          </div>

          <div
            className={[
              "rounded-full px-3 py-1 text-xs font-medium ring-1",
              spotlight
                ? "bg-gradient-to-r from-[rgb(var(--accent))]/25 to-[rgb(var(--accent-2))]/20 text-white ring-white/10"
                : "bg-white/10 text-white/75 ring-white/10",
            ].join(" ")}
          >
            {spotlight ? "Flagship" : "Case study"}
          </div>
        </div>

        <ul className="mt-5 space-y-2 text-sm text-white/70">
        {p.caseStudy.highlights.slice(0, 3).map((h) => (
            <li key={h} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {p.tags.slice(0, 5).map((t) => (
            <span
              key={t}
              className="rounded-full bg-white/7 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
