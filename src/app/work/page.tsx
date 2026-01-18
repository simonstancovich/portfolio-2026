import { Container } from "@/components/site/container";
import { WorkGrid } from "@/components/site/work-grid";

export default function WorkPage() {
  return (
    <main className="py-12 md:py-16">
      <Container>
        <h1 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
          Work
        </h1>
        <p className="mt-3 max-w-2xl text-white/65">
          Case studies that show UX taste and engineering execution: clear
          decisions, stable architecture, and real tradeoffs.
        </p>

        <WorkGrid />
      </Container>
    </main>
  );
}
