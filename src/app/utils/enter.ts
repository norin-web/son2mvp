// Entrance animation for above-the-fold content.
//
// Framer Motion drives animations with requestAnimationFrame, which browsers
// throttle while the document is hidden. An entrance that starts from
// `opacity: 0` therefore never completes if the page is loaded in a background
// tab or by a renderer that never shows a viewport — leaving hero copy
// invisible until the tab is focused.
//
// So: only opt into the entrance when the document is actually visible at
// mount. `initial: false` tells Motion to start at the resting state, which is
// the correct degradation — the content is simply there.

const EASE = [0.22, 1, 0.36, 1] as const;

const visible = () =>
  typeof document === "undefined" || document.visibilityState === "visible";

/** Public form of the same guard, for components that build their own motion. */
export const animationsEnabled = visible;

export function enter(delay = 0, y = 18, duration = 0.6) {
  const animate = { opacity: 1, y: 0 };
  return {
    initial: visible() ? { opacity: 0, y } : (false as const),
    animate,
    transition: { duration, delay, ease: EASE },
  };
}

/** Same guard for scroll-triggered reveals. */
export const revealInitial = () =>
  visible() ? { opacity: 0, y: 24 } : (false as const);
