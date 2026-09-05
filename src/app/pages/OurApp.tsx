import { Link } from "react-router";
import { motion } from "motion/react";
import { img } from "../utils/img";
import { enter } from "../utils/enter";
import { app, studio, partner, features, capabilities, steps } from "../content/site";
import AppStoreBadge from "../components/AppStoreBadge";
import Reveal from "../components/Reveal";
import SplitLines from "../components/SplitLines";
import DrawRule from "../components/DrawRule";
import Parallax from "../components/Parallax";

const specs: Array<[string, string]> = [
  ["Developer", studio.legalName],
  ["Category", `${app.category} · ${app.secondaryCategory}`],
  ["Platform", app.devices],
  ["Requires", `${app.minOs} or later`],
  ["Languages", app.languages],
  ["Size", app.size],
  ["Age rating", app.ageRating],
  ["Price", app.monetisation],
];

const strips = [
  "/images/strip1.jpg",
  "/images/strip2.jpg",
  "/images/strip3.jpg",
  "/images/strip4.jpg",
  "/images/strip5.jpg",
];

export default function OurApp() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[var(--near-black)] pt-16 text-white md:pt-24">

        <div className="u-container">
          <motion.div className="flex items-center gap-3" {...enter(0, 10, 0.5)}>
            <span
              aria-hidden="true"
              className="h-px w-10 shrink-0 bg-[var(--ink)]"
            />
            <p className="u-eyebrow !text-white/70">
              {app.category} · iPhone &amp; iPad
            </p>
          </motion.div>

          <SplitLines
            as="h1"
            text={app.name}
            className="mt-5 max-w-[18ch] text-white"
            delay={0.08}
            stagger={0.055}
          />

          <motion.p
            className="u-lead mt-7 max-w-[54ch] !text-white/70"
            {...enter(0.34, 14)}
          >
            {app.subtitle}. Full command over your audio system from your phone — connect devices,
            play music from various sources, identify what is playing, and control playback.
          </motion.p>

          <motion.div className="mt-9 flex flex-wrap items-center gap-4" {...enter(0.44, 14)}>
            <AppStoreBadge />
            <a href="#screenshots" className="u-btn u-btn--outline-on-dark">
              See screenshots
            </a>
          </motion.div>
        </div>

        <div className="relative mt-14 h-[46vh] max-h-[560px] min-h-[320px] overflow-hidden md:mt-20">
          <Parallax distance={110} className="absolute inset-0">
            <img
              src={img("/images/device-hero.jpg")}
              alt="A Sonos soundbar photographed against a lit wall"
              className="h-[calc(46vh+110px)] max-h-[670px] min-h-[430px] w-full object-cover"
            />
          </Parallax>
        </div>
      </section>

      {/* ── Feature blocks ───────────────────────────────────────── */}
      <section className="u-band overflow-hidden bg-white">
        <div className="u-container">
          <Reveal>
            <p className="u-eyebrow">Capabilities</p>
          </Reveal>
          <SplitLines text="What you actually do with it." className="mt-5 max-w-[18ch]" />

          <div className="mt-16 flex flex-col gap-20 md:mt-24 md:gap-28">
            {features.map((f, i) => (
              <Reveal key={f.n}>
                <div
                  className={[
                    "grid items-center gap-10 lg:grid-cols-2 lg:gap-[var(--gx)]",
                    i % 2 === 1 ? "lg:[&>figure]:order-2" : "",
                  ].join(" ")}
                >
                  <figure className="group m-0">
                    <Parallax distance={40}>
                      <div className="relative mx-auto max-w-[340px]">
                        <div className="relative overflow-hidden rounded-[24px] bg-black">
                          <img
                            src={img(f.image)}
                            alt={f.alt}
                            loading="lazy"
                            className="block h-auto w-full transition-transform duration-700 group-hover:scale-[1.04]"
                          />
                        </div>
                      </div>
                    </Parallax>
                  </figure>

                  <div>
                    <span
                      aria-hidden="true"
                      className="block select-none text-[3.5rem] font-medium leading-[0.8] text-transparent md:text-[4.5rem]"
                      style={{ WebkitTextStroke: "1px var(--gray-line)" }}
                    >
                      {f.n}
                    </span>
                    <h3 className="mt-5 !text-[var(--text-h2)]">{f.title}</h3>
                    <p className="u-lead mt-5 max-w-[46ch]">{f.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Store screenshots ────────────────────────────────────── */}
      <section id="screenshots" className="u-band scroll-mt-24 bg-[var(--paper)]">
        <div className="u-container">
          <Reveal>
            <p className="u-eyebrow">Screenshots</p>
          </Reveal>
          <SplitLines text="As it appears on the App Store." className="mt-5 max-w-[16ch]" />
        </div>

        {/* w-max + mx-auto centres the row when it fits, and lets it scroll when it doesn't */}
        <div className="mt-12 overflow-x-auto md:mt-16">
          <ul className="mx-auto flex w-max list-none gap-5 px-6">
            {strips.map((src, i) => (
              <li key={src} className="w-[200px] shrink-0 md:w-[220px]">
                <Reveal delay={i * 0.07}>
                  <div className="group overflow-hidden rounded-[20px] bg-black">
                    <img
                      src={img(src)}
                      alt={`App Store screenshot ${i + 1} of ${strips.length}`}
                      loading="lazy"
                      className="block h-auto w-full transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Setup ────────────────────────────────────────────────── */}
      <section className="u-band bg-white">
        <div className="u-container grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-[var(--gx)]">
          <div>
            <Reveal>
              <p className="u-eyebrow">Getting started</p>
            </Reveal>
            <SplitLines text="Setup takes about a minute." className="mt-5 max-w-[14ch]" />
          </div>
          <div>
            {steps.map((s, i) => (
              <div key={s.n}>
                {i > 0 && <DrawRule />}
                <Reveal delay={i * 0.07}>
                  <div className="grid grid-cols-[auto_1fr] gap-6 py-8">
                    <span className="u-eyebrow pt-1.5">{s.n}</span>
                    <div>
                      <h3 className="!text-[1.375rem]">{s.title}</h3>
                      <p className="mt-3 max-w-[52ch] leading-relaxed text-[var(--gray-text)]">
                        {s.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── More capabilities ────────────────────────────────────── */}
      <section className="u-band bg-[var(--near-black)] text-white">
        <div className="u-container">
          <Reveal>
            <p className="u-eyebrow !text-white/55">Also included</p>
          </Reveal>
          <SplitLines
            text="Everything else it handles."
            className="mt-5 max-w-[18ch] text-white"
          />
          <ul className="mt-14 grid list-none gap-x-10 p-0 sm:grid-cols-2 md:mt-20">
            {capabilities.map((c, i) => (
              <li key={c} className="border-t border-[var(--gray-line-dk)]">
                <Reveal delay={(i % 2) * 0.06}>
                  <div className="group flex items-baseline gap-4 py-6">
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/40 transition-transform duration-300 group-hover:scale-150"
                    />
                    <span className="text-lg text-white/85">{c}</span>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Spec table ───────────────────────────────────────────── */}
      <section className="u-band bg-white">
        <div className="u-container grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-[var(--gx)]">
          <div>
            <Reveal>
              <p className="u-eyebrow">App details</p>
            </Reveal>
            <SplitLines text="The specifics." className="mt-5 max-w-[12ch]" />
            <Reveal delay={0.12}>
              <div className="mt-8">
                <AppStoreBadge dark />
              </div>
            </Reveal>
          </div>

          <dl className="m-0">
            {specs.map(([k, v], i) => (
              <div key={k}>
                {i > 0 && <DrawRule />}
                <Reveal delay={Math.min(i, 5) * 0.04}>
                  <div className="grid grid-cols-[minmax(120px,0.5fr)_1fr] gap-6 py-5">
                    <dt className="u-eyebrow">{k}</dt>
                    <dd className="m-0 text-base">{v}</dd>
                  </div>
                </Reveal>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Relationship note ────────────────────────────────────── */}
      <section className="u-band bg-[var(--paper)]">
        <div className="u-container">
          <Reveal>
            <p className="u-eyebrow">{partner.name} licence</p>
            <p className="u-lead mt-5 max-w-[62ch] !text-ink">
              {studio.legalName} works with {partner.legalName} under a written commercial agreement
              covering the development and distribution of compatible applications and the authorized
              use of approved {partner.name} brand assets. The app is independently developed,
              published, operated and supported by {studio.legalName}.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/terms" className="u-btn u-btn--outline">
                Terms of Use
              </Link>
              <Link to="/support" className="u-btn u-btn--outline">
                Support
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
