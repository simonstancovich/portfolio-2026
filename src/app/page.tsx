import { Container } from "@/components/site/container";
import { Hero } from "@/components/site/hero";
import { ProofStrip } from "@/components/site/proof-strip";
import { WorkGrid } from "@/components/site/work-grid";
import { client } from "@/sanity/lib/client";
import { projectsQuery, siteSettingsQuery } from "@/sanity/lib/queries";
import type { Project, SiteSettings } from "@/sanity/lib/types";

export const revalidate = 60;

export default async function HomePage() {
  const [projects, siteSettings] = await Promise.all([
    client.fetch<Project[]>(projectsQuery) ?? [],
    client.fetch<SiteSettings | null>(siteSettingsQuery),
  ]);

  return (
    <main>
      <Hero hero={siteSettings?.hero} />
      <ProofStrip items={siteSettings?.proofStrip} />
      <section className="py-12 md:py-16">
        <Container>
          {siteSettings?.workSection?.heading && (
            <h2 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
              {siteSettings.workSection.heading}
            </h2>
          )}
          {siteSettings?.workSection?.description && (
            <p className="mt-2 max-w-2xl text-sm text-white/65 md:text-base">
              {siteSettings.workSection.description}
            </p>
          )}

          <WorkGrid projects={projects} />
        </Container>
      </section>

      {siteSettings?.pillars && siteSettings.pillars.length > 0 && (
        <section className="py-12 md:py-16">
          <Container>
            <div className="grid gap-4 md:grid-cols-3">
              {siteSettings.pillars.map((pillar, i) => (
                <Pillar key={i} title={pillar.title} body={pillar.body} />
              ))}
            </div>
          </Container>
        </section>
      )}
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
