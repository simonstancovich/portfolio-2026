import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { adjacentProjectsQuery, projectBySlugQuery, projectSlugsQuery } from "@/sanity/lib/queries";
import type { Project } from "@/sanity/lib/types";

import { CasePortableText } from "@/components/site/portable-text";
import { CaseMedia } from "@/components/site/case-media";
import { SectionNav } from "@/components/site/section-nav";

import {
  CaseStudyLayout,
  Section,
  Card,
  BulletList,
  DecisionBlock,
} from "@/components/site/case-study";
import { CaseNavSanity } from "@/components/site/case-nav-sanity";
import { CaseMediaGallery } from "@/components/site/case-media-gallery";
import { Reveal } from "@/components/site/reveal";

export default async function WorkSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = await client.fetch<Project | null>(projectBySlugQuery, { slug });
  if (!project) return notFound();
  const navItems = await client.fetch<{ slug: string; title: string }[]>(
    adjacentProjectsQuery
  );

  const cs = project.caseStudy;

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "key-decisions", label: "Key decisions" },
    { id: "highlights", label: "Highlights" },
    ...(cs?.mediaGallery?.length ? [{ id: "media", label: "Media" }] : []),
    { id: "architecture", label: "Architecture" },
    { id: "tradeoffs", label: "Tradeoffs" },
    { id: "results", label: "Results" },
    ...(cs?.body?.length ? [{ id: "details", label: "Details" }] : []),

  ];

  return (
    <CaseStudyLayout title={project.title} tagline={project.tagline ?? ""}>
      <div className="grid gap-8 md:grid-cols-[260px_1fr]">
        <aside className="hidden md:block">
          <div className="sticky top-20">
            <SectionNav items={sections} />
          </div>
        </aside>

        <div className="space-y-10">

          <CaseMedia
            eyebrow={cs?.media?.eyebrow}
            headline={cs?.media?.headline}
            sub={cs?.media?.sub}
            gradient={cs?.media?.gradient ?? "mix"}
          />

          <div id="overview" className="section-anchor">
            <Section title="Overview">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <div className="text-sm font-semibold text-white">Problem</div>
                  <p className="mt-2 text-sm leading-relaxed text-white/75 md:text-base">
                    {cs?.problem ?? "—"}
                  </p>
                </Card>

                <Card>
                  <div className="text-sm font-semibold text-white">Role</div>
                  <p className="mt-2 text-sm leading-relaxed text-white/75 md:text-base">
                    {cs?.role ?? "—"}
                  </p>

                  <div className="mt-4 text-xs text-white/60">Stack</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {(cs?.stack ?? []).map((t: string) => (
                      <span
                        key={t}
                        className="rounded-full bg-white/7 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.links?.live ? (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90"
                      >
                        Live
                      </a>
                    ) : null}
                    {project.links?.repo ? (
                      <a
                        href={project.links.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-2xl bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/15 ring-1 ring-white/10"
                      >
                        Repo
                      </a>
                    ) : null}
                  </div>
                </Card>
              </div>
            </Section>
          </div>

          <div id="key-decisions" className="section-anchor">
            <Reveal>
              <Section title="Key decisions">
                <div className="grid gap-4">
                  {(cs?.keyDecisions ?? []).map((kd) => (
                    <DecisionBlock key={kd.title} title={kd.title} bullets={kd.bullets} />
                  ))}
                </div>
              </Section>
            </Reveal>
          </div>

          <div id="highlights" className="section-anchor">
            <Reveal>
              <Section title="Highlights">
                <Card>
                  <BulletList items={cs?.highlights ?? []} />
                </Card>
              </Section>
            </Reveal>
          </div>
          {cs?.mediaGallery?.length ? (
            <div id="media" className="section-anchor">
              <Reveal>
                <Section title="Media">
                  <CaseMediaGallery items={cs.mediaGallery} />
                </Section>
              </Reveal>
            </div>
          ) : null}

          <div id="architecture" className="section-anchor">
            <Reveal>

              <Section title="Architecture">
                <Card>
                  <p className="text-sm leading-relaxed text-white/75 md:text-base">
                    {cs?.architecture?.summary ?? "—"}
                  </p>
                  <div className="mt-5 rounded-2xl bg-black/30 p-5 ring-1 ring-white/10">
                    <div className="text-xs font-semibold uppercase tracking-wider text-white/60">
                      System view
                    </div>
                    <div className="mt-3 text-sm text-white/70">UI → API → DB</div>
                    <div className="mt-4">
                      <BulletList items={cs?.architecture?.bullets ?? []} />
                    </div>
                  </div>
                </Card>
              </Section>
            </Reveal>
          </div>

          <div id="tradeoffs" className="section-anchor">
            <Reveal>

              <Section title="Tradeoffs">
                <div className="grid gap-4">
                  {(cs?.tradeoffs ?? []).map((t: { decision: string; why: string }) => (
                    <Card key={t.decision}>
                      <div className="text-sm font-semibold text-white">{t.decision}</div>
                      <p className="mt-2 text-sm leading-relaxed text-white/75 md:text-base">
                        {t.why}
                      </p>
                    </Card>
                  ))}
                </div>
              </Section>
            </Reveal>
          </div>

          <div id="results" className="section-anchor">
            <Reveal>

              <Section title="Results">
                <Card>
                  <BulletList items={cs?.results ?? []} />
                </Card>
              </Section>
            </Reveal>
          </div>

          {cs?.body?.length ? (
            <div id="details" className="section-anchor">
              <Reveal>
                <Section title="Details">
                  <Card>
                    <CasePortableText value={cs.body} />
                  </Card>
                </Section>
              </Reveal>
            </div>
          ) : null}

          <Reveal>
            <Section title="">
              <div className="mt-2">
                <CaseNavSanity currentSlug={project.slug} items={navItems} />
              </div>
            </Section>
          </Reveal>
        </div>
      </div>
    </CaseStudyLayout >
  );
}

export async function generateStaticParams() {
  const slugs = await client.fetch<{ slug: string }[]>(projectSlugsQuery);
  return slugs.map((s: { slug: string }) => ({ slug: s.slug }));
}
