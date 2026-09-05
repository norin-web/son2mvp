import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { animationsEnabled } from "../utils/enter";

/**
 * Moves its child against the scroll direction as the section passes through
 * the viewport. `distance` is the total travel in pixels across that pass.
 */
export default function Parallax({
  children,
  distance = 80,
  className,
}: {
  children: ReactNode;
  distance?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance / 2, -distance / 2]);

  if (!animationsEnabled()) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}
