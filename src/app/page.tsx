import { Container, Hero, ProofStrip, WorkGrid } from "@/components/site";
import { client } from "@/sanity/lib/client";
import { getProjects } from "@/sanity/lib/projects";
import { siteSettingsQuery } from "@/sanity/lib/queries";
import type { Project, SiteSettings } from "@/sanity/lib/types";

export const revalidate = 60;

export default async function HomePage() {
  let projects: Project[] = [];
  let siteSettings: SiteSettings | null = null;

  const results = await Promise.allSettled([
    getProjects(),
    client.fetch<SiteSettings | null>(siteSettingsQuery),
  ]);

  if (results[0].status === 'fulfilled') {
    projects = results[0].value ?? [];
  } else {
    const message = results[0].reason instanceof Error
      ? results[0].reason.message
      : 'Unknown error';
    console.error("Error fetching projects:", message, results[0].reason);
  }

  if (results[1].status === 'fulfilled') {
    siteSettings = results[1].value;
  } else {
    const message = results[1].reason instanceof Error
      ? results[1].reason.message
      : 'Unknown error';
    console.error("Error fetching site settings:", message, results[1].reason);
  }

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
              {siteSettings.pillars.map((pillar) => (
                <Pillar key={pillar.title} title={pillar.title} body={pillar.body} />
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
