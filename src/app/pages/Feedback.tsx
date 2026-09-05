import { useState } from "react";
import { motion } from "motion/react";
import { studio, app } from "../content/site";
import Reveal from "../components/Reveal";
import SplitLines from "../components/SplitLines";
import { enter } from "../utils/enter";

const topics = ["A bug", "A feature request", "Device compatibility", "Something else"] as const;

export default function Feedback() {
  const [topic, setTopic] = useState<string>(topics[0]);
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`${app.shortName} feedback — ${topic}`);
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${studio.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section className="u-band bg-white">
      <div className="u-container grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-[var(--gx)]">
        <div>
          <motion.div className="flex items-center gap-3" {...enter(0, 10, 0.5)}>
            <span
              aria-hidden="true"
              className="h-px w-10 shrink-0 bg-[var(--ink)]"
            />
            <p className="u-eyebrow">Feedback</p>
          </motion.div>
          <SplitLines as="h1" text="Tell us what is missing." className="mt-5 max-w-[16ch]" delay={0.08} />
          <p className="u-lead mt-6 max-w-[42ch]">
            We read everything that comes in. Bug reports with a device model and firmware version
            get fixed fastest.
          </p>
        </div>

        <Reveal delay={0.06}>
          <form onSubmit={onSubmit} className="bg-[var(--paper)] rounded-[20px] p-7 md:p-10">
            <fieldset className="border-0 p-0 m-0">
              <legend className="u-eyebrow mb-4">What is this about?</legend>
              <div className="flex flex-wrap gap-3">
                {topics.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTopic(t)}
                    aria-pressed={topic === t}
                    className={[
                      "u-btn !py-2.5 !px-5 !text-sm",
                      topic === t ? "u-btn--primary" : "u-btn--outline",
                    ].join(" ")}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="mt-7">
              <label htmlFor="fb" className="u-eyebrow block mb-2">
                Your message
              </label>
              <textarea
                id="fb"
                required
                rows={7}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-white border border-[var(--gray-line)] rounded-[10px] px-4 py-3.5 text-base outline-none focus:border-black transition-colors resize-y"
              />
            </div>

            <button type="submit" className="u-btn u-btn--primary mt-6">
              Send feedback
            </button>

            {sent && (
              <p className="mt-5 text-sm text-[var(--gray-text)]" role="status">
                Your mail app should have opened. If nothing happened, write to{" "}
                <a href={`mailto:${studio.email}`} className="underline underline-offset-4">
                  {studio.email}
                </a>
                .
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
