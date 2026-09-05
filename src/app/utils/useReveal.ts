import { useLayoutEffect, useRef, useState } from "react";
import { animationsEnabled } from "./enter";

/** Is any part of the element inside the viewport right now? */
function inViewport(el: Element) {
  const r = el.getBoundingClientRect();
  const h = window.innerHeight || document.documentElement.clientHeight;
  return r.top < h && r.bottom > 0;
}

/**
 * Drives a scroll-in reveal, with the resting state as the guaranteed outcome.
 *
 * Content must never depend on an animation finishing: a transform-based mask
 * has no graceful degradation, so if the reveal does not run the text is
 * simply gone. But the safety nets must not fire for content the reader has
 * not reached yet, or the whole page reveals at once and nothing is tied to
 * scrolling. So every fallback below is gated on the element actually being
 * in the viewport.
 *
 * Reveal happens when:
 *   1. the element scrolls into view — the normal path,
 *   2. the document is hidden while the element is on screen (skip the
 *      animation and show it; a hidden page cannot run transitions),
 *   3. the element is on screen but IntersectionObserver has not reported
 *      shortly after mount — a last resort for renderers that never deliver.
 *
 * Consumers animate with CSS transitions, so a flip that happens on a hidden
 * page skips the transition and lands on the resting state.
 */
export function useReveal<T extends HTMLElement>(rootMargin = "-60px") {
  const ref = useRef<T>(null);
  // A document already hidden at mount never animates at all.
  const [shown, setShown] = useState(() => !animationsEnabled());

  useLayoutEffect(() => {
    if (shown) return;
    const el = ref.current;
    if (!el) return;

    let done = false;
    const show = () => {
      if (done) return;
      done = true;
      setShown(true);
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) show();
      },
      { rootMargin }
    );
    io.observe(el);

    const onVisibility = () => {
      if (document.visibilityState === "hidden" && inViewport(el)) show();
    };
    document.addEventListener("visibilitychange", onVisibility);

    // Only rescues content the reader can already see; anything further down
    // keeps waiting for the observer, so the reveal stays tied to scrolling.
    const failsafe = window.setTimeout(() => {
      if (inViewport(el)) show();
    }, 1200);

    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.clearTimeout(failsafe);
    };
  }, [shown, rootMargin]);

  return { ref, shown };
}
