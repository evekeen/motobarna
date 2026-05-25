# MotoBarna

Astro static landing page for the MotoBarna MotoGymkhana and motorcycle community in Barcelona.

## Commands

```sh
npm install
npm run dev
npm run check
npm run build
npm run preview
```

## Configuration

- Telegram destination is defined once in `src/data/site.ts` as `https://t.me/motobarna`.
- Production site URL defaults to `https://motobarna.com`. Override it for builds with `SITE_URL=https://your-domain.example npm run build`.
- Mixpanel is initialized in `src/scripts/analytics.ts` with the EU API host and tracks Telegram CTA clicks plus key section views.
- The current Mixpanel config uses autocapture and 100% session recording because that was the provided project snippet. Review masking/session-recording settings before public launch.

## Content

- English route: `/`
- Russian route: `/ru/`
- Shared content lives in `src/data/content.ts`.
- Current real MotoBarna photos live in `public/images/motobarna-gymkhana.png`, `public/images/motobarna-hanging-out.jpg`, and `public/images/motobarna-trip.jpg`.
- The practice section includes a public Gymkhana GP 2025 Stage 1 course map from `gymkhana-cup.com`; keep the visible attribution/link if the image remains on the public site.
- Photo slots should use community-owned images: MotoGymkhana runs, course walks, Sunday hangouts, and Catalunya trip viewpoints. Blur license plates and avoid publishing the exact parking-lot location.

## SEO

The site ships static HTML with localized canonical/hreflang links, Open Graph tags, JSON-LD, `robots.txt`, and an Astro-generated sitemap. Update `SITE_URL` before deployment if the production domain differs from `https://motobarna.com`.
