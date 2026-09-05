import { createElement, Fragment } from "react";
import { useReveal } from "../utils/useReveal";

/**
 * Heading reveal: each word sits in an overflow-hidden mask and rises into
 * place, staggered left to right.
 *
 * Driven by CSS transitions rather than a rAF animation. If the reveal is
 * triggered while the page is hidden the transition is skipped and the words
 * land at their resting position — the text can never be left inside its mask.
 *
 * The inter-word space lives BETWEEN the masks, never inside one: a trailing
 * space at the end of an inline-block is dropped by the browser, which runs
 * every word together.
 */
export default function SplitLines({
  text,
  as = "h2",
  className = "",
  delay = 0,
  stagger = 0.045,
}: {
  text: string;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const { ref, shown } = useReveal<HTMLHeadingElement>();
  const words = text.split(" ");

  return createElement(
    as,
    { ref, className, "aria-label": text },
    <span aria-hidden="true">
      {words.map((word, i) => (
        <Fragment key={`${word}-${i}`}>
          <span
            className="inline-block overflow-hidden align-bottom"
            style={{ paddingBottom: "0.12em", marginBottom: "-0.12em" }}
          >
            <span
              className="inline-block"
              style={{
                transform: shown ? "translateY(0)" : "translateY(110%)",
                transition: `transform .8s cubic-bezier(.16,1,.3,1) ${delay + i * stagger}s`,
              }}
            >
              {word}
            </span>
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </span>
  );
}
