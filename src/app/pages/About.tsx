import { Link } from "react-router";
import { motion } from "motion/react";
import { img } from "../utils/img";
import { enter } from "../utils/enter";
import { studio, partner, app } from "../content/site";
import Reveal from "../components/Reveal";
import SplitLines from "../components/SplitLines";
import DrawRule from "../components/DrawRule";
import Parallax from "../components/Parallax";

/** Studio copy, supplied by the company. */
const story = [
  "We are a small technology company based in Croatia, focused on the development, publishing, and long-term support of mobile applications across different platforms.",
  "For more than 10 years, our team has been working in mobile software development, turning ideas into practical digital products for users around the world. Over this time, we have gained experience across different categories, technologies, and distribution platforms.",
  "Our work includes both our own applications and products developed for clients. We handle the full development cycle — from early concepts and product design to implementation, testing, publishing, updates, and ongoing support.",
  "We believe that a small and focused team can move quickly, experiment with new ideas, and pay close attention to the details that make an application useful and enjoyable in everyday life.",
];

const partnership = [
  `Today, we are also working with ${partner.legalName} under a written commercial agreement covering the development and distribution of compatible applications and the authorized use of approved ${partner.name} brand assets.`,
  `This cooperation allows us to explore new experiences and functionality around compatible ${partner.name} products while continuing to independently develop, operate, and support our applications.`,
  "We continue to expand our portfolio, work with technology companies and brands, and build products designed for modern mobile platforms.",
];

const facts: Array<[string, string]> = [
  ["Based in", studio.location],
  ["In mobile since", "More than 10 years"],
  ["Registered as", studio.legalName],
  ["Current release", app.name],
];

export default function About() {
  return (
    <>
      <section className="bg-white pt-16 pb-14 md:pt-24 md:pb-20">
        <div className="u-container">
          <motion.div className="flex items-center gap-3" {...enter(0, 10, 0.5)}>
            <span
              aria-hidden="true"
              className="h-px w-10 shrink-0 bg-[var(--ink)]"
            />
            <p className="u-eyebrow">About us</p>
          </motion.div>
          <SplitLines
            as="h1"
            text={`${studio.legalName} — ${studio.location}.`}
            className="mt-5 max-w-[20ch]"
            delay={0.08}
          />
        </div>
      </section>

      <section className="overflow-hidden bg-white pb-14 md:pb-20">
        <div className="u-container">
          <div className="overflow-hidden rounded-[20px]">
            <Parallax distance={70}>
              <img
                src={img("/images/team2.jpg")}
                alt="The studio's workspace"
                className="block aspect-[21/9] h-auto w-full scale-110 object-cover"
              />
            </Parallax>
          </div>
        </div>
      </section>

      <section className="u-band bg-white pt-0 md:pt-0">
        <div className="u-container grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-[var(--gx)]">
          <SplitLines text="How we work." className="max-w-[12ch]" />
          <Reveal delay={0.06}>
            <div className="max-w-[62ch] space-y-6">
              {story.map((p) => (
                <p key={p} className="text-lg leading-relaxed text-[var(--gray-text)]">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="u-band overflow-hidden bg-[var(--paper)]">
        <div className="u-container grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-[var(--gx)]">
          <Parallax distance={60}>
            <div className="overflow-hidden rounded-[20px]">
              <img
                src={img("/images/team3.jpg")}
                alt="Team members reviewing work on screen"
                loading="lazy"
                className="block aspect-[4/3] h-auto w-full object-cover"
              />
            </div>
          </Parallax>
          <div>
            <Reveal>
              <p className="u-eyebrow">Working with {partner.name}</p>
            </Reveal>
            <SplitLines text="A licence, and a clear line." className="mt-5 max-w-[16ch]" />
            <Reveal delay={0.12}>
              <div className="mt-7 max-w-[52ch] space-y-5">
                {partnership.map((p) => (
                  <p key={p} className="leading-relaxed text-[var(--gray-text)]">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="u-band bg-white">
        <div className="u-container grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-[var(--gx)]">
          <div>
            <Reveal>
              <p className="u-eyebrow">At a glance</p>
            </Reveal>
            <SplitLines text="The details." className="mt-5 max-w-[12ch]" />
          </div>
          <div>
            <dl className="m-0">
              {facts.map(([k, v], i) => (
                <div key={k}>
                  {i > 0 && <DrawRule />}
                  <Reveal delay={i * 0.05}>
                    <div className="grid grid-cols-[minmax(130px,0.5fr)_1fr] gap-6 py-5">
                      <dt className="u-eyebrow">{k}</dt>
                      <dd className="m-0 text-base">{v}</dd>
                    </div>
                  </Reveal>
                </div>
              ))}
            </dl>
            <Reveal delay={0.1}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/projects" className="u-btn u-btn--outline">
                  What we build
                </Link>
                <Link to="/contact" className="u-btn u-btn--primary">
                  Get in touch
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
