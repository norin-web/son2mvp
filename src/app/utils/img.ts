// Vite rewrites asset URLs it can see in JS/CSS imports, but NOT string
// literals in JSX `src=`. Routing every image path through this helper keeps
// them correct whether the site is served from a domain root (base '/') or
// from a GitHub Pages subpath (base '/repo-name/').
const BASE = import.meta.env.BASE_URL;

export const img = (path: string) => BASE + path.replace(/^\//, "");
