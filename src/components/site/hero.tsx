"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/site/container";
import type { Hero } from "@/sanity/lib/types";
import { urlFor } from "@/sanity/lib/image";

export function Hero({ hero }: { hero?: Hero }) {
  return (
    <section className="relative overflow-hidden">
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 left-1/2 h-80 w-[56rem] -translate-x-1/2 rounded-full bg-[rgb(var(--accent))]/20 blur-3xl" />
        <div className="absolute top-10 left-[8%] h-64 w-64 rounded-full bg-[rgb(var(--accent-2))]/12 blur-3xl" />
      </div>

      <Container className="relative py-18 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-[1.3fr_0.7fr]">
          {/* LEFT: content */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            {hero?.locationBadge && (
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10">
                {hero.locationBadge}
              </div>
            )}

            {hero?.headline && (
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-6xl">
                {hero.highlightedText && hero.headline.includes(hero.highlightedText) ? (
                  <>
                    {hero.headline.split(hero.highlightedText).map((part, i, arr) => (
                      <span key={i}>
                        {part}
                        {i < arr.length - 1 && (
                          <span className="relative">
                            <span className="relative z-10 bg-gradient-to-r from-[rgb(var(--accent))] to-[rgb(var(--accent-2))] bg-clip-text text-transparent">
                              {hero.highlightedText}
                            </span>
                            <span className="absolute -bottom-2 left-0 right-0 h-[10px] rounded-full bg-gradient-to-r from-[rgb(var(--accent))]/35 to-[rgb(var(--accent-2))]/35 blur-sm" />
                          </span>
                        )}
                      </span>
                    ))}
                  </>
                ) : (
                  hero.headline
                )}
              </h1>
            )}

            {hero?.subheadline && (
              <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">
                {hero.subheadline}
              </p>
            )}

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/work"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90"
              >
                View selected work
              </Link>
              <Link
                href="/contact"
                className="rounded-2xl bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15 ring-1 ring-white/10"
              >
                Contact
              </Link>
            </div>

            {hero?.kpis && hero.kpis.length > 0 && (
              <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
                {hero.kpis.map((kpi, i) => (
                  <Kpi key={i} label={kpi.label} value={kpi.value} />
                ))}
              </div>
            )}
          </motion.div>

          {/* RIGHT: portrait */}
          {hero?.portraitImage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative hidden md:flex justify-center"
            >
              <div className="relative">
                {/* soft glow */}
                <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-[rgb(var(--accent))]/25 to-[rgb(var(--accent-2))]/20 blur-2xl" />

                <div className="glass relative rounded-[28px] p-2">
                  <Image
                    src={urlFor(hero.portraitImage).width(360).height(360).quality(90).url()}
                    alt="Simon Stancovich"
                    width={360}
                    height={360}
                    className="rounded-[22px]"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </Container>
    </section>
  );
}

function Kpi({ label, value }: { label: string; value: string }) {
  return (
    <div className="glass rounded-3xl p-4">
      <div className="text-xs text-white/60">{label}</div>
      <div className="mt-1 text-sm font-semibold text-white">{value}</div>
    </div>
  );
}
