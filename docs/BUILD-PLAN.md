# ZENNARA — Website Build Plan

> Property & Facility Management · Nairobi, Kenya
> Source of truth: [zennar-deck.html](./zennar-deck.html) (Brand & Developer Deck 2026)
> Last updated: 2026-06-18

---

## 0. Decisions locked in

| Decision | Choice | Why |
|---|---|---|
| Framework | **Vite + React 18 + TypeScript** (existing) | Deck's Next.js note is a *recommendation*, not a brand standard. We build on the stack we know and can maintain. |
| Hosting | **Railway** (existing) | Already configured with Nixpacks + `vite preview`. |
| Rendering | **Pre-render at build** via `vite-react-ssg` | Static HTML for public pages = full SEO, no SSR server to babysit. Portal stays a client-rendered SPA route. |
| Styling | **CSS custom properties + ported deck CSS** | Deck ships complete, polished CSS — porting it directly gives higher fidelity than re-deriving in Tailwind. Tokens live as CSS variables (`--zennara-*`). (Deviation from deck's Tailwind suggestion.) |
| CMS | **None — content managed in code** | Per developer preference: all content (services, portfolio, blog) lives in the repo as data/MDX files. Versioned in Git, pre-rendered to static HTML, no external service. Add a file → commit → deploy. |
| Brand name | **ZENNARA** (trailing A) | Matches all deck copy, tokens, wordmark, footer. Repo folder `zennar` is just shorthand. |
| Animations | **Framer Motion** | Per deck; subtle hero/scroll reveals only. |

### Hard brand standards (non-negotiable — from deck "Brand Standards")
- **Colours:** gold `#C9A030` = primary accent, used sparingly. Green `#2D7A4F` = **eco/sustainability ONLY**, never a general accent. Never gold-on-gold, green-on-green, or swap roles.
- **Fonts:** Cormorant Garamond (display/headlines/property names), Barlow Condensed (labels/nav/buttons/UI), Barlow (body). **Never** Arial/Calibri/Inter/system fonts in branded materials.
- **Logo:** wordmark as supplied; min 120px digital / 25mm print; dark surfaces → white logo, light → colour, eco → white + eco badge. Never stretch/rotate/recolour/outline.
- **Tone:** authoritative but approachable. **No hyphens in headings. No exclamation marks in formal copy.** Lead with client benefit, then capability.
- **Positioning:** management & operations partner ONLY. **Never** describe as handling property transactions/sales.
- **Eco:** 🌿 Eco Certified badge on marketing + client docs. Every property report includes a green performance section (energy + waste). Eco FM is the headline differentiator.
- **Terminology:** "Client Portal" is the correct term for the digital client interface.

---

## 1. Design tokens

```css
/* src/styles/tokens.css — :root */
--zennara-black:    #080808;   /* primary premium background */
--zennara-charcoal: #1C1C1C;   /* deck also uses #181818 / #222 surfaces */
--zennara-card:     #222222;
--zennara-mid:      #2A2A2A;
--zennara-gold:     #C9A030;   /* primary accent — sparingly */
--zennara-gold-l:   #E2B84A;
--zennara-gold-d:   #9A7520;
--zennara-eco:      #2D7A4F;   /* ECO CONTEXTS ONLY */
--zennara-eco-l:    #3BAA6A;
--zennara-eco-pale: #A8D5B8;
--zennara-eco-d:    #1D5235;
--zennara-platinum: #888888;
--zennara-lgrey:    #BBBBBB;
--zennara-off:      #FAF8F4;   /* light/print surface */
--zennara-white:    #FFFFFF;
/* borders / glows mirror deck: rgba(201,160,48,.18), rgba(45,122,79,.28) etc. */
```

Fonts (Google Fonts, imported in `index.html` `<head>`):
`Cormorant Garamond` (300,400,600,700 + italics) · `Barlow Condensed` (300,400,600,700,800) · `Barlow` (300,400,500,600,700).

---

## 2. Dependencies to add

```
# runtime (installed)
react-router-dom          # routing (vite-react-ssg builds on it)
vite-react-ssg            # build-time pre-rendering / static generation

# later, if needed
framer-motion             # scroll-reveal animations (deferred)
@mdx-js/rollup            # if blog posts are authored in MDX
```

`vite-react-ssg` replaces the plain `createRoot` entry: pages export route objects; the tool crawls routes and emits static HTML per page, hydrated on load. No CMS or Tailwind dependencies — content is code-managed, styling is plain CSS with the deck's tokens.

---

## 3. File structure

```
src/
  main.tsx                 # vite-react-ssg entry (ViteReactSSG(routes))  ✓ built
  routes.tsx               # route table (public pages + /portal)          ✓ built
  styles/
    tokens.css             # CSS variables (design tokens)                 ✓ built
    app.css                # base + homepage/layout component styles        ✓ built
    pages.css              # about/contact/portal/page-specific styles      ✓ built
  components/
    Seo.tsx                # per-route <title>/meta via react-head          ✓ built
    layout/   Nav, Footer, EcoStrip, Layout                                ✓ built
    sections/ Hero, StatsBar, Services, Portfolio, EcoSection              ✓ built
    portal/   (PortalShell, Widget, MaintenanceList — later)
  pages/
    Home, ServicesPage, PortfolioPage, EcoPage, AboutPage, ContactPage     ✓ built
    Blog, BlogPost           # code/MDX-authored posts — later
    portal/ PortalLogin                                                    ✓ built
    portal/ PortalDashboard  # later
  data/
    content.ts             # ALL content in code: services, portfolio,     ✓ built
                           #   stats, eco pills, values, site config
public/
  logo-dark.svg, logo-light.svg, favicon, og-image, robots.txt, sitemap.xml  # later
```

---

## 4. Pages (sitemap from deck)

| Route | Rendering | Content |
|---|---|---|
| `/` Home | pre-rendered | Hero + eco strip + stats (500+/98%/78%/22%) + services teaser + featured portfolio + eco commitment + CTA |
| `/services` | pre-rendered | All FM service lines: Property Mgmt, Facility Mgmt, **Eco FM (featured)**, Building Maintenance, Eco Cleaning, Security Coordination, Inspections, FM Consultancy |
| `/portfolio` | pre-rendered (code data) | Managed properties grid w/ eco badges + status tags. From `data/content.ts`: Pinnacle Business Park (Westlands), UN Crescent Residences (Gigiri), Karen Eco Business Hub (Karen) |
| `/eco` | pre-rendered | Eco FM page + commitments (waste/energy/green procurement/water/carbon/solar). Live dashboard = **Phase 2** placeholder |
| `/about` | pre-rendered | Team + history. Values: Luxury, Trust, Precision, Sustainability |
| `/contact` | pre-rendered | Form (Resend/Mailchimp — planned) + WhatsApp + Google Map |
| `/blog`, `/blog/:slug` | pre-rendered (code/MDX) | FM insights + eco news. Posts authored as files in the repo |
| `/portal`, `/portal/dashboard` | **client SPA** (noindex) | Client Portal: login + maintenance dashboard widgets |

---

## 5. Integrations

| Service | Status (deck) | Plan |
|---|---|---|
| WhatsApp Business API | Required | Floating chat widget + click-to-chat links (`wa.me`) using business number from `site.ts` |
| Google Maps | Required | Embedded map on `/contact` + property locations. Needs API key (`VITE_GOOGLE_MAPS_KEY`) |
| Mailchimp / Resend | Planned | Contact form + lead capture. Stub form first; wire provider when key supplied |
| Eco Data Dashboard | Phase 2 | `/eco` shows static metric widgets now; live data later |

All keys via Railway env vars (`VITE_*` for client-exposed). Document required vars in `.env.example`.

---

## 6. Pre-rendering & SEO

- `vite-react-ssg` statically generates every public route to HTML at `npm run build`.
- `/portal/*` excluded from pre-render + `robots noindex` (it's an app, not a page).
- Per-page `<title>`, meta description, Open Graph, JSON-LD `LocalBusiness` (name, Nairobi address, services) via `lib/seo.ts`.
- Generate `sitemap.xml` + `robots.txt` at build.
- Railway: `npm run build` (now runs ssg) then `vite preview` serves `dist/` (static). No config change needed beyond build script.

---

## 7. Milestones (mapped to deck's 8-week timeline)

| # | Deck weeks | Deliverable | Acceptance |
|---|---|---|---|
| **M1** ✓ | Wk 1–2 | Foundation: tokens + fonts + Nav/Footer/EcoStrip + sections + `vite-react-ssg` + routing (7 pre-rendered pages) | DONE — `npm run build` pre-renders 7 routes, one clean title/meta each |
| **M2** | Wk 3–4 | Flesh out Home + Services + Portfolio from `data/content.ts` (real copy, logo asset, polish) | All pages match deck visuals, responsive, pre-rendered |
| **M3** | Wk 3–4 | `/blog` + post template, posts authored as code/MDX files in repo (no CMS) | New post = new file, committed and pre-rendered |
| **M4** | Wk 5–6 | Client Portal (login + maintenance dashboard) + WhatsApp widget + Google Maps on Contact | Portal routes work as SPA, noindexed; map + chat live |
| **M5** | Wk 7 | `/eco` page + eco metric widgets + SEO meta/JSON-LD/sitemap + mobile QA | Lighthouse SEO ≥ 95, mobile clean |
| **M6** | Wk 8 | Perf audit, a11y pass, Railway deploy verification, handoff docs | Deployed build verified on Railway |

> Auth depth for the portal (real backend vs. mock/demo) is the one open question for M4 — decide before then.

---

## 8. Immediate next step (M1, first PR)

1. Add Tailwind + PostCSS, `vite-react-ssg`, `react-router-dom`, `framer-motion`.
2. Create `tokens.css` + wire Google Fonts in `index.html`.
3. Map tokens into `tailwind.config`.
4. Convert entry to `vite-react-ssg` with a `routes.tsx` skeleton (empty pages).
5. Build `Nav`, `Footer`, `EcoStrip`, `Button`, `EcoBadge`, `SectionLabel`.
6. Replace placeholder `App.tsx`; confirm `npm run build` pre-renders routes.

All work on a feature branch off `main` (currently a single initial commit).
