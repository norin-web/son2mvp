import { useRef } from "react";
import { Link } from "react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { img } from "../utils/img";
import { enter } from "../utils/enter";
import { studio, app, features, steps, capabilities } from "../content/site";
import AppStoreBadge from "../components/AppStoreBadge";
import Marquee from "../components/Marquee";
import Reveal from "../components/Reveal";
import SplitLines from "../components/SplitLines";
import DrawRule from "../components/DrawRule";
import Parallax from "../components/Parallax";

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  // The photograph drifts down and swells as the copy leaves — the section
  // reads as one plate sliding over another rather than a flat scroll.
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section ref={ref} className="relative bg-[var(--near-black)] text-white">
      <div className="relative h-[86vh] min-h-[560px] max-h-[900px] overflow-hidden">
        <motion.img
          src={img("/images/device-hero.jpg")}
          alt="A Sonos soundbar photographed against a lit wall"
          className="absolute inset-0 h-full w-full object-cover will-change-transform"
          style={{ y: imgY, scale: imgScale }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,.55) 0%, rgba(0,0,0,.12) 38%, rgba(0,0,0,.9) 100%)",
          }}
        />

        <motion.div
          className="absolute inset-x-0 bottom-0"
          style={{ y: copyY, opacity: copyOpacity }}
        >
          <div className="u-container pb-14 md:pb-20">
            <motion.div className="flex items-center gap-3" {...enter(0, 10, 0.5)}>
              <span
                aria-hidden="true"
                className="h-px w-10 shrink-0 bg-[var(--ink)]"
              />
              <p className="u-eyebrow !text-white/75">{studio.name} · iOS</p>
            </motion.div>

            <SplitLines
              as="h1"
              text="Take the room in hand."
              className="mt-5 max-w-[16ch] text-white"
              delay={0.1}
              stagger={0.06}
            />

            <motion.div className="mt-9 flex flex-wrap items-center gap-4" {...enter(0.42, 16)}>
              <AppStoreBadge />
              <Link to="/app" className="u-btn u-btn--outline-on-dark">
                See the app
              </Link>
            </motion.div>

            <motion.p
              className="mt-7 text-xs uppercase tracking-[0.08em] text-white/55"
              {...enter(0.55, 0)}
            >
              {app.price} · {app.minOs}+ · {studio.legalName}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />

      {/* ── What it is ───────────────────────────────────────────── */}
      <section className="u-band bg-white">
        <div className="u-container">
          <Reveal>
            <p className="u-eyebrow">The app</p>
          </Reveal>
          <SplitLines
            text="Everything the room is doing, on one screen."
            className="mt-5 max-w-[18ch]"
          />
          <Reveal delay={0.12}>
            <p className="u-lead mt-7 max-w-[58ch]">
              {app.name} finds compatible devices on your network and puts playback, sound settings
              and song identification in a single place — no account, no manual pairing.
            </p>
          </Reveal>

          {/* Oversized outlined numerals give the list its own signature
              instead of the reference's three anonymous columns. */}
          <div className="mt-16 md:mt-24">
            {features.map((f, i) => (
              <div key={f.n}>
                <DrawRule />
                <Reveal delay={i * 0.06}>
                  <div className="grid gap-6 py-9 md:py-12 md:grid-cols-[auto_1fr_1.1fr] md:gap-[var(--gx)] md:items-start">
                    <span
                      aria-hidden="true"
                      className="block select-none text-[3.5rem] font-medium leading-[0.8] text-transparent md:text-[4.5rem]"
                      style={{ WebkitTextStroke: "1px var(--gray-line)" }}
                    >
                      {f.n}
                    </span>
                    <h3 className="md:pt-2">{f.title}</h3>
                    <p className="leading-relaxed text-[var(--gray-text)] md:pt-3">{f.body}</p>
                  </div>
                </Reveal>
              </div>
            ))}
            <DrawRule />
          </div>

          <Reveal delay={0.1}>
            <div className="mt-12">
              <Link to="/app" className="u-btn u-btn--primary">
                All features
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Screens ──────────────────────────────────────────────── */}
      <section className="u-band overflow-hidden bg-[var(--paper)]">
        <div className="u-container">
          <Reveal>
            <p className="u-eyebrow">Inside</p>
          </Reveal>
          <SplitLines text="Built to be reached for, not studied." className="mt-5 max-w-[20ch]" />

          <div className="mt-16 md:mt-24 grid gap-10 sm:grid-cols-3">
            {features.map((f, i) => (
              // Staggered offsets break the flat three-up row
              <Parallax key={f.n} distance={i === 1 ? 90 : 40} className={i === 1 ? "sm:mt-14" : ""}>
                <Reveal delay={i * 0.08}>
                  <figure className="group m-0">
                    <div className="relative">
                      <div className="relative overflow-hidden rounded-[20px] bg-black">
                        <img
                          src={img(f.image)}
                          alt={f.alt}
                          loading="lazy"
                          className="block h-auto w-full transition-transform duration-700 group-hover:scale-[1.04]"
                        />
                      </div>
                    </div>
                    <figcaption className="mt-5">
                      <span className="u-eyebrow">{f.n}</span>
                      <h3 className="mt-2 !text-[1.25rem]">{f.title}</h3>
                    </figcaption>
                  </figure>
                </Reveal>
              </Parallax>
            ))}
          </div>
        </div>
      </section>

      {/* ── Setup ────────────────────────────────────────────────── */}
      <section className="u-band bg-white">
        <div className="u-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-[var(--gx)]">
          <div>
            <Reveal>
              <p className="u-eyebrow">Setup</p>
            </Reveal>
            <SplitLines
              text="Three steps, then it stays out of the way."
              className="mt-5 max-w-[14ch]"
            />
          </div>

          <div>
            {steps.map((s, i) => (
              <div key={s.n}>
                {i > 0 && <DrawRule />}
                <Reveal delay={i * 0.08}>
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

      {/* ── Capabilities ─────────────────────────────────────────── */}
      <section className="u-band bg-[var(--near-black)] text-white">
        <div className="u-container">
          <Reveal>
            <p className="u-eyebrow !text-white/55">Also in the app</p>
          </Reveal>
          <SplitLines
            text="The rest of what it does, without the tour."
            className="mt-5 max-w-[18ch] text-white"
          />

          <ul className="mt-14 md:mt-20 grid list-none gap-x-10 p-0 sm:grid-cols-2">
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

      <Marquee />

      {/* ── Studio teaser ────────────────────────────────────────── */}
      <section className="u-band overflow-hidden bg-white">
        <div className="u-container grid gap-12 lg:grid-cols-2 lg:gap-[var(--gx)] lg:items-center">
          <Parallax distance={70}>
            <div className="overflow-hidden rounded-[20px]">
              <img
                src={img("/images/team1.jpg")}
                alt="Members of the studio working together at a shared desk"
                loading="lazy"
                className="block aspect-[4/3] h-auto w-full object-cover"
              />
            </div>
          </Parallax>

          <div>
            <Reveal>
              <p className="u-eyebrow">The studio</p>
            </Reveal>
            <SplitLines
              text={`A small team, ${studio.yearsActive} years of shipping.`}
              className="mt-5 max-w-[16ch]"
            />
            <Reveal delay={0.12}>
              <p className="u-lead mt-7 max-w-[52ch]">
                {studio.legalName} is a technology company in {studio.location}, focused on the
                development, publishing and long-term support of mobile applications — our own
                products and products built for clients.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link to="/about" className="u-btn u-btn--outline">
                  About us
                </Link>
                <Link to="/projects" className="u-btn u-btn--outline">
                  What we build
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Closing CTA ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[var(--near-black)]">
        <div className="u-container py-20 text-center text-white md:py-28">
          <Reveal>
            <p className="u-eyebrow !text-white/80">Available now</p>
          </Reveal>
          <SplitLines
            text="Free on the App Store."
            className="mt-5 mx-auto max-w-[16ch] text-white"
          />
          <Reveal delay={0.12}>
            <p className="u-lead mt-6 mx-auto max-w-[46ch] !text-white/85">
              No account needed. Works with compatible devices on your Wi-Fi network.
            </p>
            <div className="mt-10 flex justify-center">
              <AppStoreBadge />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
