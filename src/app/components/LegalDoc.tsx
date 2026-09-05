import { Link } from "react-router";
import { motion } from "motion/react";
import type { Section } from "../content/legal";
import { legalEffectiveDate, studio } from "../content/site";
import SplitLines from "./SplitLines";
import { enter } from "../utils/enter";

/**
 * Shared shell for Terms and Privacy. Long-form reading: a narrow measure,
 * a sticky section index on wide screens, generous leading.
 */
export default function LegalDoc({
  kind,
  title,
  sections,
}: {
  kind: string;
  title: string;
  sections: Section[];
}) {
  return (
    <>
      <section className="pt-16 md:pt-24 pb-10 md:pb-14 bg-white">
        <div className="u-container">
          <motion.div className="flex items-center gap-3" {...enter(0, 10, 0.5)}>
            <span
              aria-hidden="true"
              className="h-px w-10 shrink-0 bg-[var(--ink)]"
            />
            <p className="u-eyebrow">{kind}</p>
          </motion.div>
          <SplitLines as="h1" text={title} className="mt-5 max-w-[18ch]" delay={0.08} />
          <p className="u-eyebrow mt-6">Effective date: {legalEffectiveDate}</p>
        </div>
      </section>

      <section className="pb-20 md:pb-28 bg-white">
        <div className="u-container grid gap-12 lg:grid-cols-[0.42fr_1.58fr] lg:gap-[var(--gx)] items-start">
          <nav aria-label={`${title} contents`} className="lg:sticky lg:top-28">
            <h2 className="u-eyebrow">Contents</h2>
            <ol className="mt-4 space-y-2 list-none p-0 m-0">
              {sections.map((s) => (
                <li key={s.n}>
                  <a
                    href={`#s${s.n}`}
                    className="text-sm text-[var(--gray-text)] hover:text-black transition-colors"
                  >
                    {s.n}. {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="max-w-[68ch]">
            {sections.map((s, i) => (
              <section
                key={s.n}
                id={`s${s.n}`}
                className={["scroll-mt-28 py-8", i === 0 ? "" : "u-rule"].join(" ")}
              >
                <h2 className="!text-[1.5rem]">
                  {s.n}. {s.title}
                </h2>

                <div className="mt-5 space-y-4">
                  {s.blocks.map((b, bi) => {
                    if ("p" in b) {
                      return (
                        <p key={bi} className="leading-relaxed text-[var(--gray-text)]">
                          {b.p}
                        </p>
                      );
                    }
                    if ("ul" in b) {
                      return (
                        <ul key={bi} className="space-y-2 pl-5 list-disc marker:text-[var(--gray-line)]">
                          {b.ul.map((item) => (
                            <li key={item} className="leading-relaxed text-[var(--gray-text)]">
                              {item}
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    return (
                      <address
                        key={bi}
                        className="not-italic leading-relaxed bg-[var(--paper)] rounded-[12px] p-5 text-ink"
                      >
                        {b.address.map((line) =>
                          line.startsWith("Email:") ? (
                            <span key={line} className="block">
                              Email:{" "}
                              <a
                                href={`mailto:${studio.email}`}
                                className="underline underline-offset-4"
                              >
                                {studio.email}
                              </a>
                            </span>
                          ) : (
                            <span key={line} className="block">
                              {line}
                            </span>
                          )
                        )}
                      </address>
                    );
                  })}
                </div>
              </section>
            ))}

            <div className="mt-12 pt-8 u-rule flex flex-wrap gap-4">
              <Link to="/privacy" className="u-btn u-btn--outline !py-3 !px-6 !text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="u-btn u-btn--outline !py-3 !px-6 !text-sm">
                Terms of Use
              </Link>
              <Link to="/contact" className="u-btn u-btn--outline !py-3 !px-6 !text-sm">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
