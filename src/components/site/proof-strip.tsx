import { Container } from "@/components/site/container";
import type { ProofStripItem } from "@/sanity/lib/types";

export function ProofStrip({ items }: { items?: ProofStripItem[] }) {
  return (
    <section className="py-10 md:py-12">
      <Container>
        {items && items.length > 0 && (
          <div className="grid gap-4 md:grid-cols-4">
            {items.map((p) => (
              <div key={p.title} className="glass rounded-3xl p-5">
                <div className="text-xs uppercase tracking-wider text-white/55">
                  {p.title}
                </div>
                <div className="mt-2 text-lg font-semibold tracking-tight text-white">
                  {p.value}
                </div>
                <div className="mt-2 text-sm leading-relaxed text-white/70">
                  {p.note}
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
