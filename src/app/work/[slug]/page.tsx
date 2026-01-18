import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject } from "@/lib/get-project";
import {
  CaseStudyLayout,
  Section,
  Card,
  BulletList,
} from "@/components/site/case-study";
import { CaseMedia } from "@/components/site/case-media";
import { DecisionBlock } from "@/components/site/case-study";
import { projects } from "@/lib/projects";
import { CaseNav } from "@/components/site/case-nav";


export default async function WorkSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = getProject(slug);
  if (!project) return notFound();

  const cs = project.caseStudy;

  return (
    <CaseStudyLayout title={project.title} tagline={project.tagline}>
            <CaseMedia
        eyebrow={cs.media?.eyebrow}
        headline={cs.media?.headline}
        sub={cs.media?.sub}
        gradient={cs.media?.gradient}
      />

      <Section title="Key decisions">
        <div className="grid gap-4">
          {cs.keyDecisions.map((kd) => (
            <DecisionBlock key={kd.title} title={kd.title} bullets={kd.bullets} />
          ))}
        </div>
      </Section>
      <Section title="Overview">
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <div className="text-sm font-semibold text-white">Problem</div>
            <p className="mt-2 text-sm leading-relaxed text-white/75 md:text-base">
              {cs.problem}
            </p>
          </Card>
          <Card>
            <div className="text-sm font-semibold text-white">Role</div>
            <p className="mt-2 text-sm leading-relaxed text-white/75 md:text-base">
              {cs.role}
            </p>
            <div className="mt-4 text-xs text-white/60">Stack</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {cs.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-white/7 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10"
                >
                  {t}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      <Section title="Highlights">
        <Card>
          <BulletList items={cs.highlights} />
        </Card>
      </Section>

      <Section title="Architecture">
        <Card>
          <p className="text-sm leading-relaxed text-white/75 md:text-base">
            {cs.architecture.summary}
          </p>

          <div className="mt-5 rounded-2xl bg-black/30 p-5 ring-1 ring-white/10">
            <div className="text-xs font-semibold uppercase tracking-wider text-white/60">
              System view
            </div>
            <div className="mt-3 text-sm text-white/70">UI → API → DB</div>
            <div className="mt-4">
              <BulletList items={cs.architecture.bullets} />
            </div>
          </div>
        </Card>
      </Section>

      <Section title="Tradeoffs">
        <div className="grid gap-4">
          {cs.tradeoffs.map((t) => (
            <Card key={t.decision}>
              <div className="text-sm font-semibold text-white">{t.decision}</div>
              <p className="mt-2 text-sm leading-relaxed text-white/75 md:text-base">
                {t.why}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Results">
        <Card>
          <BulletList items={cs.results} />
        </Card>
      </Section>

      <Section title="Next">
        <CaseNav slug={project.slug} />
      </Section>
    </CaseStudyLayout>
  );
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
