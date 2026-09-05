import { app } from "../content/site";

/**
 * Apple's "Download on the App Store" badge, drawn inline so it stays crisp
 * and needs no network request. `dark` renders the light-on-dark variant.
 */
export default function AppStoreBadge({ dark = false }: { dark?: boolean }) {
  const fg = dark ? "#000000" : "#ffffff";
  const bg = dark ? "#ffffff" : "#000000";

  return (
    <a
      href={app.appStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Download ${app.name} on the App Store`}
      className="inline-flex transition-opacity hover:opacity-80"
    >
      <svg
        width="162"
        height="54"
        viewBox="0 0 162 54"
        role="img"
        aria-hidden="true"
        focusable="false"
      >
        <rect width="162" height="54" rx="9" fill={bg} />
        <rect x="0.5" y="0.5" width="161" height="53" rx="8.5" fill="none" stroke={fg} strokeOpacity="0.25" />
        <g fill={fg}>
          {/* Apple mark */}
          <path d="M33.9 27.6c0-3 2.4-4.4 2.5-4.5-1.4-2-3.5-2.3-4.2-2.3-1.8-.2-3.5 1-4.4 1-.9 0-2.3-1-3.8-1-2 0-3.8 1.1-4.8 2.9-2 3.5-.5 8.8 1.5 11.7 1 1.4 2.1 3 3.6 2.9 1.5-.1 2-.9 3.8-.9s2.3.9 3.8.9c1.6 0 2.6-1.4 3.5-2.9 1.1-1.6 1.6-3.2 1.6-3.3 0-.1-3.1-1.2-3.1-4.5zM31 18.9c.8-1 1.3-2.4 1.2-3.8-1.2 0-2.7.8-3.6 1.8-.8.9-1.4 2.3-1.2 3.7 1.3.1 2.7-.7 3.6-1.7z" />
          <text
            x="49"
            y="23"
            fontFamily="Inter, Helvetica, Arial, sans-serif"
            fontSize="10"
            fontWeight="400"
            letterSpacing="0.4"
          >
            Download on the
          </text>
          <text
            x="49"
            y="40"
            fontFamily="Inter, Helvetica, Arial, sans-serif"
            fontSize="19"
            fontWeight="500"
            letterSpacing="-0.3"
          >
            App Store
          </text>
        </g>
      </svg>
    </a>
  );
}
