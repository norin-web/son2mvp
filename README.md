# URA MILAS

Promotional site for **URA MILAS d.o.o.** (Zagreb, Croatia) and its iOS app
[Sonos｜S1 & S2 Controller](https://apps.apple.com/app/id6760191648).

Live: <https://norin-web.github.io/son2mvp/>

## Stack

React 18 · TypeScript · Vite 6 · Tailwind CSS 4 · motion/react · React Router 7 · pnpm

## Local development

```bash
pnpm install
pnpm dev
```

The dev server honours `base`, so the site is served at `http://localhost:<port>/son2mvp/`,
not at the root.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds and publishes to
GitHub Pages. Pages must be set to **Settings → Pages → Source: GitHub Actions**; without
it the `configure-pages` step fails.

### ⚠️ `base` and custom domains

`vite.config.ts` currently sets `base: '/son2mvp/'`, because Pages serves the site from a
repository subpath. **Attaching a custom domain breaks the site until this changes**, since
every asset URL is then wrong:

```ts
base: '/'          // custom domain
base: '/son2mvp/'  // norin-web.github.io/son2mvp/
```

Add `public/CNAME` containing the bare domain at the same time.

## Things worth knowing before editing

- **`src/app/utils/img.ts`** — every image `src` goes through `img()`. Vite rewrites asset
  URLs in imports but *not* string literals in JSX, so a plain `src="/images/x.jpg"` 404s
  under a subpath. There should be zero plain image paths in the markup.

- **`src/app/utils/useReveal.ts`** — drives every scroll reveal. Content must never depend
  on an animation finishing: browsers throttle `requestAnimationFrame` while a document is
  hidden, so a reveal starting from `opacity: 0` or a masked `translateY(110%)` can freeze
  and leave the text invisible. The hook uses CSS transitions plus three triggers
  (intersection, `visibilitychange`, a short failsafe), each gated on the element actually
  being in the viewport — ungated fallbacks reveal the whole page at once and detach the
  animation from scrolling. Use this hook for any new reveal.

- **`src/app/content/site.ts`** — single source of truth for studio, partner and app facts.
  Change them here, not in the pages.

- **`src/app/content/legal.ts`** — the Privacy Policy and Terms of Use are the company's
  own legal text, reproduced verbatim. Do not paraphrase or reword it.

- **`src/app/pages/Projects.tsx`** — describes stages of work rather than a product list,
  because the developer account currently has one shipped app. Add real releases here when
  there are more; do not invent entries.

## Design

Grid and typography follow a 27-column viewport grid (`--gx: 100/27 vw`, content spans 24
columns). Headings are Inter 500, sentence case, `line-height: 1.2` at every step. The
palette is deliberately monochrome — white, `#f2f2f2`, `#0a0a0a` — and the logo is the only
place brand colour appears.
