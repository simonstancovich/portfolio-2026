import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  headline?: string;
  sub?: string;
  gradient?: "violet" | "cyan" | "mix";
};

export function CaseMedia({ eyebrow, headline, sub, gradient = "mix" }: Props) {
  const bg =
    gradient === "violet"
      ? "from-[rgb(var(--accent))]/30 to-white/0"
      : gradient === "cyan"
      ? "from-[rgb(var(--accent-2))]/25 to-white/0"
      : "from-[rgb(var(--accent))]/25 via-[rgb(var(--accent-2))]/18 to-white/0";

  return (
    <div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10 bg-white/5">
      <div className={cn("absolute inset-0 bg-gradient-to-br", bg)} />
      <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,.25)_1px,transparent_0)] [background-size:22px_22px]" />
      <div className="relative p-7 md:p-10">
        {eyebrow ? (
          <div className="inline-flex items-center rounded-full bg-black/30 px-3 py-1 text-xs font-medium text-white/70 ring-1 ring-white/10">
            {eyebrow}
          </div>
        ) : null}

        <div className="mt-5 max-w-2xl">
          <div className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
            {headline ?? "Project overview"}
          </div>
          {sub ? (
            <p className="mt-3 text-sm leading-relaxed text-white/70 md:text-base">
              {sub}
            </p>
          ) : null}
        </div>

        {/* Placeholder “artifact bar” */}
        <div className="mt-8 grid gap-3 md:grid-cols-3">
          <MiniArtifact title="Architecture" body="UI → API → DB boundaries" />
          <MiniArtifact title="UX" body="Scan-first hierarchy" />
          <MiniArtifact title="Quality" body="Predictable states + polish" />
        </div>
      </div>
    </div>
  );
}

function MiniArtifact({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl bg-black/25 p-4 ring-1 ring-white/10">
      <div className="text-xs uppercase tracking-wider text-white/60">
        {title}
      </div>
      <div className="mt-2 text-sm text-white/75">{body}</div>
    </div>
  );
}
