import { Link } from "react-router";
import { studio, app, disclaimer } from "../content/site";
import AppStoreBadge from "./AppStoreBadge";
import { img } from "../utils/img";

const columns = [
  {
    heading: "Company",
    links: [
      { to: "/about", label: "About us" },
      { to: "/projects", label: "What we build" },
      { to: "/contact", label: "Contact" },
      { to: "/feedback", label: "Feedback" },
    ],
  },
  {
    heading: "App",
    links: [
      { to: "/app", label: "The app" },
      { to: "/support", label: "Support" },
      { to: "/app-store", label: "App Store" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { to: "/privacy", label: "Privacy Policy" },
      { to: "/terms", label: "Terms of Use" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--paper)] text-ink">
      <div className="u-container py-14 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="max-w-sm">
            <img
              src={img("/images/logo.png")}
              alt={`${studio.legalName} logo`}
              width={347}
              height={87}
              className="w-[240px] max-w-full h-auto"
            />
            <p className="mt-4 text-sm leading-relaxed text-[var(--gray-text)]">
              {app.name} — a companion app for compatible {"Sonos"} audio devices, developed and
              supported by {studio.legalName}.
            </p>
            <div className="mt-6">
              <AppStoreBadge />
            </div>
          </div>

          {columns.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h2 className="u-eyebrow">{col.heading}</h2>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-sm text-[var(--gray-text)] hover:text-black transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 pt-8 u-rule">
          <p className="text-xs leading-relaxed text-[var(--gray-text)] max-w-4xl">
            {disclaimer}
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-xs text-[var(--gray-text)]">
          <p>
            © {new Date().getFullYear()} {studio.legalName}. All rights reserved.
            {"  "}
            <span>
              {studio.address.street}, {studio.address.city}, {studio.address.country}.
            </span>
          </p>
          <a href={`mailto:${studio.email}`} className="hover:text-black transition-colors">
            {studio.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
