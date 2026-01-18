import { Container } from "@/components/site/container";

export default function ContactPage() {
  return (
    <main className="py-12 md:py-16">
      <Container>
        <h1 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
          Contact
        </h1>
        <p className="mt-3 max-w-2xl text-white/65">
          If you’re hiring or need a high-quality build, send a short message
          with context and what success looks like.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="glass rounded-3xl p-6">
            <div className="text-sm font-semibold text-white">Email</div>
            <p className="mt-2 text-sm text-white/70">
              Fastest way. I usually reply within 24–48 hours.
            </p>

            <a
              href="mailto:youremail@domain.com?subject=Project%20inquiry"
              className="mt-5 inline-flex rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90"
            >
              Email me
            </a>

            <div className="mt-5 text-xs text-white/55">
              Tip: include timeline, stack, and a link to the job/project.
            </div>
          </div>

          <div className="glass rounded-3xl p-6">
            <div className="text-sm font-semibold text-white">Links</div>
            <p className="mt-2 text-sm text-white/70">
              For quick verification and code samples.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15 ring-1 ring-white/10"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15 ring-1 ring-white/10"
              >
                LinkedIn
              </a>
            </div>

            <div className="mt-6 rounded-2xl bg-black/30 p-4 ring-1 ring-white/10">
              <div className="text-xs uppercase tracking-wider text-white/60">
                Availability
              </div>
              <div className="mt-2 text-sm text-white/75">
                Open to: full-time • contract • consulting
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
