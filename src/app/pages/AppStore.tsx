import { useEffect, useState } from "react";
import { Link } from "react-router";
import { img } from "../utils/img";
import { app, studio } from "../content/site";
import AppStoreBadge from "../components/AppStoreBadge";

const DELAY_MS = 2200;

/** Thin redirect page — /app-store hands the visitor to the store listing. */
export default function AppStore() {
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => {
      window.location.href = app.appStoreUrl;
      // If the navigation is blocked (or the tab is restored), show the manual link.
      window.setTimeout(() => setBlocked(true), 1200);
    }, DELAY_MS);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-[80vh] flex items-center bg-[var(--near-black)] text-white overflow-hidden">
      <img
        src={img("/images/bg2.jpg")}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="relative u-container text-center py-20">
        <p className="u-eyebrow !text-white/60">Taking you to the App Store</p>
        <h1 className="mt-5 mx-auto max-w-[18ch] text-white">{app.name}</h1>
        <p className="u-lead mt-6 mx-auto max-w-[44ch] !text-white/70">
          {blocked
            ? "Your browser blocked the redirect. Use the badge below to open the listing."
            : "One moment — opening the listing on the App Store."}
        </p>

        <div className="mt-10 flex flex-col items-center gap-6">
          <AppStoreBadge />
          <Link to="/app" className="text-sm text-white/60 hover:text-white transition-colors">
            Back to the app page
          </Link>
        </div>

        <p className="mt-14 text-xs tracking-[0.08em] uppercase text-white/40">
          {app.price} · {app.minOs}+ · {studio.legalName}
        </p>
      </div>
    </section>
  );
}
