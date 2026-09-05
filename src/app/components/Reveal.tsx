import type { ReactNode } from "react";
import { useReveal } from "../utils/useReveal";

/**
 * Scroll-in reveal — a short rise and fade, once. CSS-transition driven so a
 * page that is hidden mid-reveal lands on the resting state instead of
 * freezing with the content invisible.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>("-80px");
  const ease = "cubic-bezier(.22,1,.36,1)";

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : "translateY(24px)",
        transition: `opacity .6s ${ease} ${delay}s, transform .6s ${ease} ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
