import { useReveal } from "../utils/useReveal";

/** Hairline that draws itself in when scrolled into view. */
export default function DrawRule({ className = "" }: { className?: string }) {
  const { ref, shown } = useReveal<HTMLDivElement>("-40px");

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`relative h-px overflow-hidden bg-[var(--gray-line)] ${className}`}
    >
      <span
        className="absolute inset-0 block origin-left bg-[var(--ink)]"
        style={{
          transform: shown ? "scaleX(1)" : "scaleX(0)",
          transition: "transform 1s cubic-bezier(.22,1,.36,1)",
        }}
      />
    </div>
  );
}
