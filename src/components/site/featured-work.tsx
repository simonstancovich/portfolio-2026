import Link from "next/link";
import { Container } from "@/components/site/container";
import { projects } from "@/lib/projects";

export function FeaturedWork() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
              Selected work
            </h2>
            <p className="mt-2 max-w-xl text-sm text-white/65 md:text-base">
              Case studies that show decision-making, architecture, UX, and the
              ability to ship.
            </p>
          </div>

          <Link
            href="/work"
            className="hidden rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/15 md:inline-flex"
          >
            See all
          </Link>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-12">
          {featured.map((p, idx) => (
            <Card
              key={p.slug}
              href={`/work/${p.slug}`}
              title={p.title}
              tagline={p.tagline}
              tags={p.tags}
              highlights={p.highlights}
              span={idx === 0 ? "md:col-span-7" : "md:col-span-5"}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

function Card({
  href,
  title,
  tagline,
  tags,
  highlights,
  span,
}: {
  href: string;
  title: string;
  tagline: string;
  tags: string[];
  highlights: string[];
  span: string;
}) {
  return (
    <Link
      href={href}
      className={[
        "group relative overflow-hidden rounded-3xl bg-white/5 p-6 ring-1 ring-white/10",
        "hover:bg-white/7 hover:ring-white/15 transition",
        span,
      ].join(" ")}
    >
      <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute -top-16 right-0 h-56 w-56 rounded-full bg-[rgb(var(--accent))]/12 blur-3xl" />
      </div>

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-white">
              {title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              {tagline}
            </p>
          </div>
          <div className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
            Case study
          </div>
        </div>

        <ul className="mt-5 space-y-2 text-sm text-white/70">
          {highlights.slice(0, 3).map((h) => (
            <li key={h} className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {tags.slice(0, 4).map((t) => (
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
