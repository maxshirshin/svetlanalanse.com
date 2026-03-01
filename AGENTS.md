# AGENTS.md — Svetlana Lanse Website

> This file captures key principles, tech choices, and best practices for any
> human or AI agent working on this codebase.

---

## 1. Project Overview

Personal portfolio, gallery, blog, and shop website for botanical artist
**Svetlana Lanse**. The site is a statically pre-rendered React SPA deployed to
Netlify. Blog content is authored in MDX.

---

## 2. Tech Stack

| Layer             | Technology             | Version / Notes                            |
| ----------------- | ---------------------- | ------------------------------------------ |
| Framework         | React                  | 19.x                                       |
| Language          | TypeScript             | ~5.9                                       |
| Build tool        | Vite                   | 7.x                                        |
| SSR / SSG         | Vike (vite-plugin-ssr) | Pre-rendered (SSG) by default              |
| Styling           | Tailwind CSS           | v4 (via `@tailwindcss/vite`)               |
| Component library | shadcn/ui              | Radix UI + Tailwind; copy-paste components |
| Markdown / Blog   | MDX                    | `@mdx-js/rollup` with remark-frontmatter   |
| Image CDN         | Cloudinary             | URL-based transforms (`f_auto,q_auto`)     |
| Video streaming   | Mux                    | `@mux/mux-player-react` — free tier        |
| Hosting           | Netlify                | Static deploy; built-in form handling      |
| Package manager   | npm                    | lockfile committed                         |

---

## 3. Folder Structure

```
├── AGENTS.md                  ← You are here
├── content/
│   └── blog/                  ← MDX blog posts (one .mdx file per post)
├── pages/                     ← Vike file-system routing
│   ├── +config.ts             ← Global Vike config (prerender, title, etc.)
│   ├── +Head.tsx              ← Default <head> meta tags
│   ├── +Layout.tsx            ← Root layout (imports RootLayout)
│   ├── _error/+Page.tsx       ← 404 / error page
│   ├── index/+Page.tsx        ← Home page (/)
│   ├── gallery/
│   │   ├── +Page.tsx          ← Gallery index (/gallery)
│   │   └── @slug/
│   │       ├── +route.ts      ← Route string: /gallery/@slug
│   │       └── +Page.tsx      ← Sub-gallery page
│   ├── blog/
│   │   ├── +Page.tsx          ← Blog index (/blog)
│   │   └── @slug/
│   │       ├── +route.ts      ← Route string: /blog/@slug
│   │       └── +Page.tsx      ← Individual blog post
│   ├── news/+Page.tsx         ← News (/news)
│   ├── shop/+Page.tsx         ← Shop (/shop)
│   ├── contact/+Page.tsx      ← Contact form (/contact) — Netlify Forms
│   ├── privacy/+Page.tsx      ← Privacy Policy
│   ├── cookies/+Page.tsx      ← Cookie Policy
│   └── terms/+Page.tsx        ← Terms of Use
├── public/                    ← Static assets (favicon, robots.txt, etc.)
├── src/
│   ├── components/            ← Shared React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── NavLink.tsx
│   │   ├── CloudinaryImage.tsx
│   │   └── MuxVideo.tsx
│   ├── data/                  ← Data files (shop items, blog post registry)
│   │   ├── blogPosts.ts
│   │   └── shopItems.ts
│   ├── layouts/
│   │   └── RootLayout.tsx     ← Header + main + Footer wrapper
│   ├── styles/
│   │   └── global.css         ← Tailwind directives + theme variables
│   └── types/
│       └── mdx.d.ts           ← TypeScript declarations for .mdx imports
├── netlify.toml               ← Netlify build + redirect config
├── vite.config.ts             ← Vite plugins: react, tailwind, mdx, vike
├── tsconfig.json
├── tsconfig.app.json
└── tsconfig.node.json
```

---

## 4. Routing (Vike)

- **File-system based**: `pages/about/+Page.tsx` → `/about`
- **Parameterised routes**: `pages/gallery/@slug/+route.ts` exports the route string `/gallery/@slug`
- **Rendering mode**: SSG globally (`prerender: true` in `pages/+config.ts`). Can be overridden per-page.
- **Switching to SSR later**: Remove `prerender: true` and deploy a Node.js server or Netlify Function.
- **Navigation**: Use standard `<a href="...">` tags — Vike handles client-side navigation automatically.
- **Active link detection**: Use `usePageContext()` from `vike-react/usePageContext` to get `urlPathname`.

---

## 5. MDX Blog Posts

### Authoring

Create a new `.mdx` file in `content/blog/` with YAML frontmatter:

```mdx
---
title: "Post Title"
slug: my-post-slug
date: "2026-03-01"
excerpt: "A short description for the blog index."
lang: en # "en" (default) or "ru" for Russian posts
---

# Post Title

Your markdown content here. You can use React components inline.
```

### Registration

After creating the file, import it in `src/data/blogPosts.ts` and add it to the
`blogPosts` array. The blog index and slug-based routing will pick it up
automatically.

### Language handling

- The `lang` frontmatter field sets the `lang` attribute on the `<article>`
  wrapper in the blog post template.
- Default site language is `en` (set in `pages/+config.ts` and `index.html`).
- Russian posts use `lang: "ru"` and display a language badge on the blog index.

---

## 6. Cloudinary Images

Use the `<CloudinaryImage>` component:

```tsx
import { CloudinaryImage } from "@/components/CloudinaryImage";

<CloudinaryImage
  publicId="gallery/breath-of-fire"
  alt="Breath of Fire — watercolour botanical painting"
  width={800}
/>;
```

- **TODO**: Replace `CLOUD_NAME` in `CloudinaryImage.tsx` with the actual
  Cloudinary cloud name once the account is set up.
- Automatic format (`f_auto`) and quality (`q_auto`) are applied.
- Responsive `srcSet` is generated automatically from the `width` prop.

---

## 7. Mux Video

Use the `<MuxVideo>` component:

```tsx
import { MuxVideo } from "@/components/MuxVideo";

<MuxVideo playbackId="YOUR_MUX_PLAYBACK_ID" title="Studio tour video" />;
```

- **TODO**: Upload videos to Mux and use real playback IDs.
- The component renders a placeholder during SSR and lazy-loads the Mux web
  component on the client.
- Free tier: 10 videos, 100K delivery minutes/month.

---

## 8. Shop Items

Edit `src/data/shopItems.ts` to add, remove, or update items. Each item has:

```ts
{
  slug: string
  title: string
  description: string
  price: string       // e.g., "£120"
  image?: string      // Cloudinary public ID
  externalUrl: string // Link to external checkout/payment
  availability?: string
}
```

When payment integration is added later, `externalUrl` will point to the
checkout (e.g., Stripe Payment Link or Shopify Buy Button).

---

## 9. Netlify Deployment

- **Build command**: `npm run build`
- **Publish directory**: `dist/client`
- **Forms**: The contact form uses `data-netlify="true"` — Netlify detects it at
  build time. No serverless function needed.
- **Redirects**: SPA fallback `/* → /index.html` is configured in `netlify.toml`.
- **Asset caching**: `/assets/*` gets `Cache-Control: public, max-age=31536000, immutable`.

---

## 10. shadcn/ui

- MCP server configured in `.vscode/mcp.json` for AI-assisted component addition.
- To add a component: `npx shadcn@latest add <component-name>`
- Components are copied into `src/components/ui/` and can be freely customised.
- Theme tokens are defined in `src/styles/global.css` under `@theme { ... }`.

---

## 11. Styling Conventions

- **Tailwind CSS v4** — use utility classes in JSX.
- **CSS variables** for theme colours — defined in `src/styles/global.css` under
  `@theme`. Reference as `var(--color-primary)`, etc.
- **Fonts**: Cormorant Garamond (headings), Inter (body) — loaded from Google
  Fonts in `+Head.tsx`.
- Prefer `style={{ color: 'var(--color-...)' }}` for theme colours that Tailwind
  v4 doesn't have direct utilities for.

---

## 12. Key Principles

1. **Content-first**: The artist's work should be the focal point. Keep UI
   minimal and elegant.
2. **Performance**: Pre-render everything; lazy-load images and video; use
   Cloudinary's automatic format/quality optimisation.
3. **Accessibility**: Semantic HTML, proper alt text on all images, ARIA labels
   on interactive elements.
4. **UK legal compliance**: Privacy Policy, Cookie Policy, and Terms of Use are
   required. Cookie consent banner will be needed before analytics are added.
5. **Bilingual support**: Blog posts may be in English or Russian. The `lang`
   attribute is set per-post.
6. **Copyright protection**: All artwork images are copyrighted. The Terms page
   explicitly states this. Consider right-click protection and watermarks later.
