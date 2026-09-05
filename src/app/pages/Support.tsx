import { Link } from "react-router";
import { motion } from "motion/react";
import { studio, app, partner } from "../content/site";
import Reveal from "../components/Reveal";
import SplitLines from "../components/SplitLines";
import { enter } from "../utils/enter";
import DrawRule from "../components/DrawRule";

const faqs = [
  {
    q: "The app does not find my device",
    a: "Check that your iPhone and the device are on the same Wi-Fi network. Guest networks and networks that isolate clients from each other will prevent discovery. If the network is correct, close the app fully and reopen it so discovery runs again.",
  },
  {
    q: "Which devices are supported?",
    a: "The app works with compatible audio devices reachable on your local network. Compatibility depends on the product model, its firmware version, your network configuration, and changes made by the manufacturer — so we cannot guarantee permanent compatibility with every product and firmware combination.",
  },
  {
    q: "Do I need an account?",
    a: "No. The app does not require a separate account with " + studio.legalName + ", and there is nothing to register or sign in to.",
  },
  {
    q: "How do I manage or cancel a subscription?",
    a: "Subscriptions are handled by Apple through your Apple account, not by us. Open Settings on your device, tap your name, then Subscriptions. Deleting the app does not by itself cancel an active subscription.",
  },
  {
    q: "How do I request a refund?",
    a: "Refunds for App Store purchases are administered by Apple under their policies. Use reportaproblem.apple.com with the Apple account that made the purchase.",
  },
  {
    q: "Is this app made by " + partner.name + "?",
    a: "No. " + studio.legalName + " develops, publishes, operates and supports the app independently, under a written agreement with " + partner.legalName + " covering compatible applications and the authorized use of approved brand assets.",
  },
  {
    q: "How do I request deletion of my data?",
    a: "Write to " + studio.email + " from the address you contacted us with. We may need to verify the request before responding.",
  },
];

export default function Support() {
  return (
    <>
      <section className="pt-16 md:pt-24 pb-12 md:pb-16 bg-white">
        <div className="u-container">
          <motion.div className="flex items-center gap-3" {...enter(0, 10, 0.5)}>
            <span
              aria-hidden="true"
              className="h-px w-10 shrink-0 bg-[var(--ink)]"
            />
            <p className="u-eyebrow">Support</p>
          </motion.div>
          <SplitLines
            as="h1"
            text="Answers first, then a real person."
            className="mt-5 max-w-[18ch]"
            delay={0.08}
          />
          <motion.p className="u-lead mt-7 max-w-[52ch]" {...enter(0.38, 14)}>
            Most problems with {app.shortName} come down to the network. If none of this helps, write
            to us — the address below is read by the team that builds the app.
          </motion.p>
        </div>
      </section>

      <section className="u-band bg-white pt-0 md:pt-0">
        <div className="u-container grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-[var(--gx)]">
          <Reveal>
            <h2 className="max-w-[12ch]">Common questions.</h2>
          </Reveal>

          <div>
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={Math.min(i, 4) * 0.05}>
                <>
                {i > 0 && <DrawRule />}
                <details className="group py-6">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                    <h3 className="!text-[1.25rem] !font-medium">{f.q}</h3>
                    <span
                      aria-hidden="true"
                      className="mt-1 shrink-0 text-2xl leading-none transition-transform duration-200 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-[58ch] leading-relaxed text-[var(--gray-text)]">{f.a}</p>
                </details>
                </>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="u-band bg-[var(--paper)]">
        <div className="u-container grid gap-10 lg:grid-cols-2 lg:gap-[var(--gx)] lg:items-center">
          <Reveal>
            <p className="u-eyebrow">Still stuck</p>
            <SplitLines text="Write to us directly." className="mt-5 max-w-[14ch]" />
          </Reveal>
          <Reveal delay={0.06}>
            <p className="u-lead max-w-[46ch]">
              Include your device model, its firmware version and your iOS version — it saves a round
              trip.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={`mailto:${studio.email}`} className="u-btn u-btn--primary">
                {studio.email}
              </a>
              <Link to="/feedback" className="u-btn u-btn--outline">
                Send feedback
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
