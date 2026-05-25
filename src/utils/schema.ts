import { SITE, localizedUrl, type Locale } from "@/data/site";
import type { LandingContent } from "@/data/content";

export function buildSchema(locale: Locale, page: LandingContent) {
  const pageUrl = localizedUrl(locale);

  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SITE.name,
      url: pageUrl,
      sameAs: [SITE.telegramUrl],
      description: page.seo.description,
      areaServed: [
        {
          "@type": "City",
          name: "Barcelona",
        },
        {
          "@type": "AdministrativeArea",
          name: "Catalunya",
        },
      ],
      knowsAbout: [
        "MotoGymkhana",
        "motorcycle community",
        "motorcycle trips",
        "Barcelona motorcycling",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE.name,
      url: pageUrl,
      inLanguage: locale === "ru" ? "ru" : "en",
      description: page.seo.description,
    },
  ];
}
