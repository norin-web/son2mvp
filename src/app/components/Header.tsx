import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { studio, app } from "../content/site";
import { img } from "../utils/img";

const nav = [
  { to: "/app", label: "The app" },
  { to: "/projects", label: "What we build" },
  { to: "/about", label: "About" },
  { to: "/support", label: "Support" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  // Lock body scroll while the mobile panel is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[var(--gray-line)]">
      <div className="u-container flex items-center justify-between h-16 md:h-20">
        <Link
          to="/"
          className="group flex items-center gap-2.5 shrink-0"
          aria-label={`${studio.name} — home`}
        >
          <img
            src={img("/images/logo-mark.png")}
            alt=""
            aria-hidden="true"
            className="h-7 w-7 md:h-8 md:w-8 transition-transform duration-500 group-hover:rotate-[-8deg]"
          />
          <span className="text-[15px] md:text-base tracking-[0.14em] uppercase leading-none">
            <span className="font-semibold">URA</span>{" "}
            <span className="font-light">MILAS</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Main">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  "text-base transition-colors",
                  isActive ? "text-black" : "text-[var(--gray-text)] hover:text-black",
                ].join(" ")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            className="u-btn u-btn--primary !py-3 !px-6"
            href={app.appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get the app
          </a>
        </div>

        <button
          type="button"
          className="md:hidden -mr-2 p-2"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block w-6 relative h-4" aria-hidden="true">
            <span
              className="absolute left-0 w-6 h-px bg-black transition-transform duration-200"
              style={{ top: open ? 8 : 3, transform: open ? "rotate(45deg)" : "none" }}
            />
            <span
              className="absolute left-0 w-6 h-px bg-black transition-transform duration-200"
              style={{ top: open ? 8 : 12, transform: open ? "rotate(-45deg)" : "none" }}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="md:hidden border-t border-[var(--gray-line)] bg-white"
          >
            <div className="u-container py-6 flex flex-col gap-5">
              {nav.map((item) => (
                <NavLink key={item.to} to={item.to} className="text-xl">
                  {item.label}
                </NavLink>
              ))}
              <a
                className="u-btn u-btn--primary mt-2 self-start"
                href={app.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get the app
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
