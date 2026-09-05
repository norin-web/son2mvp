import { motion, useScroll, useSpring } from "motion/react";

/** Thin reading indicator pinned to the top of the viewport. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-[var(--ink)]"
      style={{ scaleX }}
    />
  );
}
