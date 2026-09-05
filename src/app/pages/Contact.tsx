import { useState } from "react";
import { motion } from "motion/react";
import { studio } from "../content/site";
import Reveal from "../components/Reveal";
import SplitLines from "../components/SplitLines";
import DrawRule from "../components/DrawRule";
import { enter } from "../utils/enter";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend on a static host — hand the message to the visitor's mail client.
    const subject = encodeURIComponent(`Website enquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`);
    window.location.href = `mailto:${studio.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const field =
    "w-full bg-white border border-[var(--gray-line)] rounded-[10px] px-4 py-3.5 text-base " +
    "outline-none focus:border-black transition-colors";

  return (
    <section className="u-band bg-white">
      <div className="u-container grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-[var(--gx)]">
        <div>
          <motion.div className="flex items-center gap-3" {...enter(0, 10, 0.5)}>
            <span
              aria-hidden="true"
              className="h-px w-10 shrink-0 bg-[var(--ink)]"
            />
            <p className="u-eyebrow">Contact</p>
          </motion.div>
          <SplitLines as="h1" text="Write to us." className="mt-5 max-w-[14ch]" delay={0.08} />
          <p className="u-lead mt-6 max-w-[42ch]">
            Questions about the app, a client project, or anything else — this reaches the team
            directly.
          </p>

          <dl className="mt-10 m-0">
            <div className="py-5 u-rule">
              <dt className="u-eyebrow">Email</dt>
              <dd className="m-0 mt-2">
                <a href={`mailto:${studio.email}`} className="text-base underline underline-offset-4">
                  {studio.email}
                </a>
              </dd>
            </div>
            <DrawRule />
            <div className="py-5">
              <dt className="u-eyebrow">Address</dt>
              <dd className="m-0 mt-2 text-base leading-relaxed">
                {studio.legalName}
                <br />
                {studio.address.street}
                <br />
                {studio.address.city}, {studio.address.country}
              </dd>
            </div>
          </dl>
        </div>

        <Reveal delay={0.06}>
          <form onSubmit={onSubmit} className="bg-[var(--paper)] rounded-[20px] p-7 md:p-10">
            <div className="grid gap-5">
              <div>
                <label htmlFor="name" className="u-eyebrow block mb-2">
                  Your name
                </label>
                <input
                  id="name"
                  required
                  className={field}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="email" className="u-eyebrow block mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className={field}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="message" className="u-eyebrow block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  className={field + " resize-y"}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>

              <button type="submit" className="u-btn u-btn--primary mt-2 justify-self-start">
                Send message
              </button>

              {sent && (
                <p className="text-sm text-[var(--gray-text)]" role="status">
                  Your mail app should have opened with the message ready. If nothing happened, write
                  to{" "}
                  <a href={`mailto:${studio.email}`} className="underline underline-offset-4">
                    {studio.email}
                  </a>
                  .
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
