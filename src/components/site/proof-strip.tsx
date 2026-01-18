import { Container } from "@/components/site/container";

type ProofItem = {
  title: string;
  value: string;
  note: string;
};

const proof: ProofItem[] = [
  {
    title: "Shipping",
    value: "Product-first",
    note: "I optimize for real users, not demo code.",
  },
  {
    title: "Architecture",
    value: "Type-safe",
    note: "Clear boundaries: UI → API → DB.",
  },
  {
    title: "UX taste",
    value: "Scan-first",
    note: "Hierarchy, spacing, and intentional motion.",
  },
  {
    title: "Performance",
    value: "Fast by default",
    note: "Fewer waterfalls, predictable loading states.",
  },
];

export function ProofStrip() {
  return (
    <section className="py-10 md:py-12">
      <Container>
        <div className="grid gap-4 md:grid-cols-4">
          {proof.map((p) => (
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
      </Container>
    </section>
  );
}
