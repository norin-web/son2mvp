import { marqueeWords } from "../content/site";

/**
 * Continuous ticker. The word list is rendered twice inside a track that
 * translates by exactly -50%, so the loop is seamless.
 */
export default function Marquee({ dark = false }: { dark?: boolean }) {
  const run = [...marqueeWords, ...marqueeWords];

  return (
    <div
      className={[
        "overflow-hidden py-5 border-y",
        dark
          ? "bg-[var(--near-black)] text-white border-[var(--gray-line-dk)]"
          : "bg-white text-black border-[var(--gray-line)]",
      ].join(" ")}
      aria-hidden="true"
    >
      <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap">
        {run.map((word, i) => (
          <span key={i} className="flex items-center gap-8 text-sm">
            <span className="opacity-70">{word}</span>
            <span className="opacity-30">·</span>
          </span>
        ))}
      </div>

      <style>{`
        .marquee-track { animation: marquee 38s linear infinite; }
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}</style>
    </div>
  );
}
