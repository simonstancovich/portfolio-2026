import { Container } from "@/components/site/container";
import { cn } from "@/lib/utils";

export function CaseStudyLayout({
  title,
  tagline,
  children,
}: {
  title: string;
  tagline: string;
  children: React.ReactNode;
}) {
  return (
    <main className="py-12 md:py-16">
      <Container>
        <header className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10">
            Case study
          </div>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
            {tagline}
          </p>
        </header>

        <div className="mt-10 space-y-10">{children}</div>
      </Container>
    </main>
  );
}

export function Section({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("grid gap-4 md:grid-cols-12", className)}>
      <div className="md:col-span-4">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-white/70">
          {title}
        </h2>
      </div>
      <div className="md:col-span-8">{children}</div>
    </section>
  );
}

export function Card({ children }: { children: React.ReactNode }) {
  return <div className="glass rounded-3xl p-6">{children}</div>;
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-sm leading-relaxed text-white/75 md:text-base">
      {items.map((it) => (
        <li key={it} className="flex gap-2">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

export function DecisionBlock({
  title,
  bullets,
}: {
  title: string;
  bullets: string[];
}) {
  return (
    <div className="glass rounded-3xl p-6">
      <div className="text-sm font-semibold text-white">{title}</div>
      <div className="mt-4">
        <BulletList items={bullets} />
      </div>
    </div>
  );
}
