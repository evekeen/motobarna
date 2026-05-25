# MotoBarna Website Implementation Plan

## Solution Approach

Build MotoBarna as a static Astro site with TypeScript, semantic HTML, CSS custom properties, responsive components, static localized pages, and minimal client JavaScript. Astro is a strong fit because the site is mostly content and visuals: it can ship fast static HTML, hydrate only the language/analytics interactions that need JavaScript, and keep SEO text visible in the initial HTML.

Use `docs/website-spec.md` and `goals/motobarna-website/facts.md` as the source of truth. Implement the page as one logical landing page with English and Russian variants, a language switch, fixed Telegram destination `https://t.me/motobarna`, private location wording, real-photo slots, two YouTube embeds, SEO metadata, sitemap/robots, and Mixpanel tracking.

Trip video URLs:

- `https://youtu.be/bnCRspLZmpY`
- `https://youtu.be/INn4nUHFPHE`

## Ordered Steps

### 1. Scaffold Astro Static Site

Files/systems:

- `package.json`
- `astro.config.mjs`
- `tsconfig.json`
- `src/`
- `public/`

Work:

- Add Astro with TypeScript and static output.
- Add `@astrojs/check` for type checks.
- Add `@astrojs/sitemap` for sitemap generation.
- Add scripts: `dev`, `build`, `preview`, `check`.
- Keep the project dependency set small. Prefer plain Astro and CSS over React unless a specific interaction later requires it.

Verification:

- `npm install`
- `npm run check`
- `npm run build`

Facts covered: 1, 10, 13.

### 2. Create Shared Site Config And Localized Content

Files/systems:

- `src/data/site.ts`
- `src/data/content.ts`
- `src/pages/index.astro`
- `src/pages/ru/index.astro`

Work:

- Store shared constants in one place:
  - `TELEGRAM_URL = "https://t.me/motobarna"`
  - `TELEGRAM_HANDLE = "@motobarna"`
  - `YOUTUBE_VIDEO_URLS = ["https://youtu.be/bnCRspLZmpY", "https://youtu.be/INn4nUHFPHE"]`
  - Mixpanel token `cc034c68c05eec658685b1859a414b7c`
  - Mixpanel API host `https://api-eu.mixpanel.com`
  - site name, default locale, supported locales, domain placeholder, Mixpanel token placeholder.
- Create English and Russian content objects for the same landing-page sections.
- Include a Russian copy path that can state the community is run by Russian-speaking expats in Barcelona.
- Add language-switch links between English and Russian pages.
- Use static localized routes instead of a client-only language toggle so both languages are crawlable.

Verification:

- `rg "https://t.me/motobarna" src`
- `rg "Russian-speaking expats|русск" src`
- `npm run build`
- Confirm `dist/index.html` and `dist/ru/index.html` exist.

Facts covered: 2, 8, 9, 12, 13.

### 3. Build Page Layout And Core Sections

Files/systems:

- `src/layouts/BaseLayout.astro`
- `src/components/Header.astro`
- `src/components/Hero.astro`
- `src/components/ThreePillars.astro`
- `src/components/MotoGymkhanaExplainer.astro`
- `src/components/SundayRitual.astro`
- `src/components/CommunityGallery.astro`
- `src/components/Trips.astro`
- `src/components/VideoSection.astro`
- `src/components/NewHere.astro`
- `src/components/TelegramPanel.astro`
- `src/components/Faq.astro`
- `src/components/StickyTelegramCta.astro`
- `src/styles/global.css`

Work:

- Implement the landing page from the spec:
  - Hero: MotoBarna, Barcelona MotoGymkhana and motorcycle community, Telegram CTA.
  - MotoGymkhana explainer: time-trial sport, cone courses, course walking, timed runs, clean gates, line choice, penalties.
  - Community: Sunday parking-lot hangs, coffee, bike chat, help, come watch first.
  - Trips: Costa Brava, Montserrat, Montseny, Sitges, Collserola.
  - Privacy: exact parking-lot location is not public; meeting pin is in Telegram.
  - FAQ and final CTA.
- Add sticky mobile Telegram CTA after the initial hero.
- Use a responsive layout that feels like the selected "MotoBarna Community Hub" visual direction.

Verification:

- `npm run build`
- `rg "MotoGymkhana" dist/index.html`
- `rg "technical motorcycle time-trial sport|cone courses|timed runs|penalties" dist/index.html`
- `rg "coffee|bike chat|come watch first" dist/index.html`
- `rg "Costa Brava|Montserrat|Montseny|Sitges|Collserola" dist/index.html`
- `rg "meeting pin" dist/index.html`

Facts covered: 2, 3, 4, 5, 6, 12, 13.

### 4. Add Visual Assets, Photo Slots, And YouTube Trip Videos

Files/systems:

- `public/images/`
- `src/components/CommunityGallery.astro`
- `src/components/Trips.astro`
- `src/components/VideoSection.astro`
- `src/data/content.ts`

Work:

- Add real-photo slots for MotoGymkhana, hangouts, and trips.
- Use optimized placeholder assets until real community photos are available.
- Include two YouTube video embeds for past weekend trips in Catalonia:
  - `https://youtu.be/bnCRspLZmpY`
  - `https://youtu.be/INn4nUHFPHE`
- Use lazy loading for below-the-fold images and iframes.
- Add meaningful alt text and visible captions.
- Avoid publishing license plates or exact private location details.

Verification:

- `npm run build`
- Inspect generated HTML for `loading="lazy"` on below-the-fold media.
- Manually confirm image alt text and video titles exist.
- Browser QA confirms photo/video slots render without layout collapse.

Facts covered: 7, 13, 14.

### 5. Implement SEO, Structured Data, Robots, And Sitemap

Files/systems:

- `src/layouts/BaseLayout.astro`
- `src/utils/schema.ts`
- `src/data/site.ts`
- `public/robots.txt`
- `astro.config.mjs`

Work:

- Add unique title, meta description, canonical URL, Open Graph, Twitter card, and `hreflang` alternates.
- Add `Organization` and `WebSite` JSON-LD that matches visible content.
- Generate sitemap with localized routes.
- Add `robots.txt` allowing public search crawling.
- Keep exact location out of schema and visible page content.
- Avoid `Event` schema unless future public event details are added.

Verification:

- `npm run build`
- `rg "<link rel=\"canonical\"" dist`
- `rg "application/ld\\+json" dist`
- `rg "hreflang" dist`
- `test -f dist/robots.txt`
- Confirm sitemap output exists in `dist/`.
- Manually validate JSON-LD shape before launch.

Facts covered: 6, 10, 13.

### 6. Add Mixpanel Analytics Hooks

Files/systems:

- `src/scripts/analytics.ts`
- `src/components/TelegramCta.astro` or shared CTA component
- `src/components/Trips.astro`
- `src/components/MotoGymkhanaExplainer.astro`

Work:

- Install `mixpanel-browser`.
- Initialize Mixpanel with the provided EU-hosted project snippet:

```ts
import mixpanel from "mixpanel-browser";

mixpanel.init("cc034c68c05eec658685b1859a414b7c", {
  autocapture: true,
  record_sessions_percent: 100,
  api_host: "https://api-eu.mixpanel.com",
});
```

- Wrap this in a small project analytics module so events are named consistently and the site can still build/preview if analytics initialization is disabled in local development.
- Treat session recording as a privacy review item before public launch; if needed, add masking rules or reduce/disable session recording while keeping Telegram click tracking.
- Track:
  - `telegram_cta_click`
  - `hero_cta_click`
  - `sticky_cta_click`
  - `section_view` for important sections such as trips and MotoGymkhana explainer.
- Ensure Telegram navigation still works if analytics fails.

Verification:

- `npm run build`
- `rg "telegram_cta_click|hero_cta_click|sticky_cta_click|section_view" src`
- Browser QA: clicking CTA opens `https://t.me/motobarna`.
- With a test token, confirm Mixpanel receives Telegram CTA click events.

Facts covered: 11, 12, 13.

### 7. Polish Responsive Design And Accessibility

Files/systems:

- `src/styles/global.css`
- all components

Work:

- Implement final visual polish from the selected concept:
  - asphalt/cone/Telegram/Mediterranean palette,
  - course-map linework,
  - timing chips,
  - route cards,
  - readable hero overlays,
  - no giant rounded marketing cards.
- Use semantic landmarks, headings, accessible link names, visible focus states, alt text, and touch-friendly CTA sizes.
- Ensure text does not overlap or overflow on narrow mobile screens.
- Respect `prefers-reduced-motion`.

Verification:

- `npm run build`
- Run local dev/preview server.
- Browser QA screenshots for mobile and desktop.
- Check keyboard focus through header, language switch, CTA buttons, FAQ, and video controls.
- Run Lighthouse or equivalent accessibility/performance/SEO checks.

Facts covered: 2, 13, 14.

### 8. Final Verification And Documentation

Files/systems:

- `README.md`
- `goals/motobarna-website/`
- generated `dist/`

Work:

- Document setup, required environment variables, and deployment notes.
- Include notes for replacing placeholder photos and YouTube IDs.
- Ensure all accepted facts have either automated verification or a documented manual check.

Verification:

- `npm run check`
- `npm run build`
- `npm run preview`
- Responsive browser QA on at least:
  - mobile narrow viewport,
  - tablet-ish viewport,
  - desktop viewport.
- Manual fact trace against `goals/motobarna-website/facts.md`.

Facts covered: 1-14.

## Risks And Open Questions

| Risk or open question | Impact | Mitigation |
| --- | --- | --- |
| Production domain is not known yet. | Canonical, sitemap, and Open Graph URLs need final values. | Use a single configurable `SITE_URL`; update before launch. |
| Mixpanel session recording may be too broad for the "privacy-light" goal. | Autocapture plus 100% session recording can collect more behavioral data than simple CTA metrics. | Implement the provided snippet, but make session recording a launch privacy review item and support masking/reduction if needed. |
| Real photos may not be available during implementation. | Visual completeness depends on placeholders. | Build slots with placeholders and clear replacement instructions. |
| Russian translation quality matters. | Poor copy can hurt trust. | Keep translation in a single content file for easy review by a Russian speaker. |
| Generated or placeholder images can feel generic. | Trust and community appeal suffer. | Replace with real MotoBarna photos as soon as available. |
| Astro sitemap/canonical need a valid site URL. | SEO checks may be incomplete locally. | Use a placeholder locally, but make final domain a launch checklist item. |

## Recommended Tech Stack

- **Astro static site** for fast content-first pages and minimal JavaScript.
- **TypeScript** for safer shared content/config.
- **CSS custom properties and scoped/global CSS** for a small, expressive design system without unnecessary UI framework weight.
- **Static localized routes** for English and Russian, with `hreflang`.
- **Mixpanel browser SDK** for CTA and section analytics, initialized with the provided EU Mixpanel project config and wrapped for consistent event names.
- **Astro sitemap integration** for sitemap generation.
- **Vercel or Cloudflare Pages** for deployment; both fit static Astro well. Use whichever account/domain setup is simpler for MotoBarna.
