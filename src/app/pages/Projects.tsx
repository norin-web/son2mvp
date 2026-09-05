import { Link } from "react-router";
import { motion } from "motion/react";
import { img } from "../utils/img";
import { enter } from "../utils/enter";
import { studio, app, disciplines } from "../content/site";
import Reveal from "../components/Reveal";
import SplitLines from "../components/SplitLines";
import DrawRule from "../components/DrawRule";
import Parallax from "../components/Parallax";

export default function Projects() {
  return (
    <>
      <section className="bg-white pt-16 pb-14 md:pt-24 md:pb-20">
        <div className="u-container">
          <motion.div className="flex items-center gap-3" {...enter(0, 10, 0.5)}>
            <span
              aria-hidden="true"
              className="h-px w-10 shrink-0 bg-[var(--ink)]"
            />
            <p className="u-eyebrow">What we build</p>
          </motion.div>
          <SplitLines
            as="h1"
            text="The full cycle, kept in one small team."
            className="mt-5 max-w-[20ch]"
            delay={0.08}
          />
          <motion.p className="u-lead mt-7 max-w-[56ch]" {...enter(0.38, 14)}>
            {studio.legalName} takes a product from an early concept through to the updates it needs
            years later — for our own applications and for clients.
          </motion.p>
        </div>
      </section>

      {/* ── Current release ──────────────────────────────────────── */}
      <section className="u-band overflow-hidden bg-[var(--paper)] pt-0 md:pt-0">
        <div className="u-container">
          <Reveal>
            <p className="u-eyebrow">Current release</p>
          </Reveal>

          <Reveal delay={0.06}>
            <Link
              to="/app"
              className="group mt-8 grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-[var(--gx)]"
            >
              <div className="relative">
                <div className="relative overflow-hidden rounded-[20px] bg-black">
                  <img
                    src={img("/images/bg1.jpg")}
                    alt="An iPhone resting against a Sonos soundbar"
                    className="block aspect-[4/3] h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
              </div>

              <div>
                <span className="u-eyebrow">
                  {app.category} · {app.released}
                </span>
                <h2 className="mt-4 max-w-[16ch] transition-colors group-hover:text-[var(--gray-text)]">
                  {app.name}
                </h2>
                <p className="u-lead mt-5 max-w-[46ch]">
                  {app.subtitle} — an iOS companion for compatible audio devices, developed and
                  supported in house.
                </p>
                <span className="u-btn u-btn--outline mt-8 inline-flex">View the app</span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── Disciplines ──────────────────────────────────────────── */}
      <section className="u-band bg-white">
        <div className="u-container">
          <Reveal>
            <p className="u-eyebrow">How a product gets made here</p>
          </Reveal>
          <SplitLines text="Four stages, no hand-offs." className="mt-5 max-w-[18ch]" />

          <div className="mt-16 md:mt-24">
            {disciplines.map((d, i) => (
              <div key={d.n}>
                <DrawRule />
                <Reveal delay={i * 0.05}>
                  <div className="group grid gap-6 py-9 md:grid-cols-[auto_1fr_1.1fr] md:gap-[var(--gx)] md:py-12">
                    <span
                      aria-hidden="true"
                      className="block select-none text-[3.5rem] font-medium leading-[0.8] text-transparent transition-all duration-500 md:text-[4.5rem]"
                      style={{ WebkitTextStroke: "1px var(--gray-line)" }}
                    >
                      {d.n}
                    </span>
                    <h3 className="md:pt-2">{d.title}</h3>
                    <p className="leading-relaxed text-[var(--gray-text)] md:pt-3">{d.body}</p>
                  </div>
                </Reveal>
              </div>
            ))}
            <DrawRule />
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[var(--near-black)]">
        <div className="u-container grid gap-10 py-20 text-white md:py-28 lg:grid-cols-2 lg:items-center lg:gap-[var(--gx)]">
          <SplitLines
            text="Working on something that needs shipping?"
            className="max-w-[16ch] text-white"
          />
          <Reveal delay={0.1}>
            <p className="u-lead max-w-[46ch] !text-white/85">
              We take on client products alongside our own. Tell us what you have in mind and we will
              come back to you.
            </p>
            <div className="mt-8">
              <Link to="/contact" className="u-btn u-btn--on-dark">
                Get in touch
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
