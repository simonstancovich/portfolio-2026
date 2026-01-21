import { Container } from "@/components/site/container";
import { Hero } from "@/components/site/hero";
import { ProofStrip } from "@/components/site/proof-strip";
import { WorkGrid } from "@/components/site/work-grid";
import { client } from "@/sanity/lib/client";
import { projectsQuery } from "@/sanity/lib/queries";
import type { Project } from "@/sanity/lib/types";

export const revalidate = 60;

export default async function HomePage() {
  const projects = await client.fetch<Project[]>(projectsQuery) ?? [];

  return (
    <main>
      <Hero />
      <ProofStrip />
      <section className="py-12 md:py-16">
        <Container>
          <h2 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
            Work that shows taste and execution
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-white/65 md:text-base">
            Recruiter-friendly case studies: problem, approach, architecture,
            tradeoffs, results.
          </p>

          <WorkGrid projects={projects} />
        </Container>
      </section>

      <section className="py-12 md:py-16">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            <Pillar
              title="Good UI is engineering"
              body="Consistent components, clean states, predictable flows, and sharp copy."
            />
            <Pillar
              title="Systems you can scale"
              body="Type-safe boundaries, maintainable architecture, and pragmatic tradeoffs."
            />
            <Pillar
              title="Fast, accessible, professional"
              body="Performance + keyboard support + clear hierarchy. Feels expensive."
            />
          </div>
        </Container>
      </section>
    </main>
  );
}

function Pillar({ title, body }: { title: string; body: string }) {
  return (
    <div className="glass rounded-3xl p-6">
      <div className="text-sm font-semibold text-white">{title}</div>
      <div className="mt-2 text-sm leading-relaxed text-white/70">{body}</div>
    </div>
  );
}
