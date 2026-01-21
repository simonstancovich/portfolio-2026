import { Container } from "@/components/site";
import { client } from "@/sanity/lib/client";
import { cvQuery, siteSettingsQuery } from "@/sanity/lib/queries";
import type { CV, SiteSettings } from "@/sanity/lib/types";

export const revalidate = 60;

export default async function ContactPage() {
  const [cv, siteSettings] = await Promise.all([
    client.fetch<CV | null>(cvQuery),
    client.fetch<SiteSettings | null>(siteSettingsQuery),
  ]);

  return (
    <main className="py-12 md:py-16">
      <Container>
        <h1 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
          Contact
        </h1>
        {siteSettings?.contactPage?.description && (
          <p className="mt-3 max-w-2xl text-white/65">
            {siteSettings.contactPage.description}
          </p>
        )}

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="glass rounded-3xl p-6">
            <div className="text-sm font-semibold text-white">Email</div>
            {siteSettings?.contactPage?.emailSection?.description && (
              <p className="mt-2 text-sm text-white/70">
                {siteSettings.contactPage.emailSection.description}
              </p>
            )}

            {cv?.email && (
              <a
                href={`mailto:${cv.email}?subject=Project%20inquiry`}
                className="mt-5 inline-flex rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90"
              >
                Email me
              </a>
            )}

            {siteSettings?.contactPage?.emailSection?.tip && (
              <div className="mt-5 text-xs text-white/55">
                {siteSettings.contactPage.emailSection.tip}
              </div>
            )}
          </div>

          <div className="glass rounded-3xl p-6">
            <div className="text-sm font-semibold text-white">Links</div>
            {siteSettings?.contactPage?.linksSection?.description && (
              <p className="mt-2 text-sm text-white/70">
                {siteSettings.contactPage.linksSection.description}
              </p>
            )}

            <div className="mt-5 flex flex-wrap gap-3">
              {cv?.github && (
                <a
                  href={cv.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15 ring-1 ring-white/10"
                >
                  GitHub
                </a>
              )}
              {cv?.linkedin && (
                <a
                  href={cv.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15 ring-1 ring-white/10"
                >
                  LinkedIn
                </a>
              )}
            </div>

            {siteSettings?.contactPage?.availability && (
              <div className="mt-6 rounded-2xl bg-black/30 p-4 ring-1 ring-white/10">
                <div className="text-xs uppercase tracking-wider text-white/60">
                  Availability
                </div>
                <div className="mt-2 text-sm text-white/75">
                  {siteSettings.contactPage.availability}
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </main>
  );
}
