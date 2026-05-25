export const SITE = {
  name: "MotoBarna",
  url: import.meta.env.SITE ?? "https://motobarna.com",
  defaultLocale: "en",
  locales: ["en", "ru"] as const,
  telegramUrl: "https://t.me/motobarna",
  telegramHandle: "@motobarna",
  mixpanelToken: "cc034c68c05eec658685b1859a414b7c",
  mixpanelApiHost: "https://api-eu.mixpanel.com",
  youtubeVideos: [
    {
      id: "bnCRspLZmpY",
      url: "https://youtu.be/bnCRspLZmpY",
    },
    {
      id: "INn4nUHFPHE",
      url: "https://youtu.be/INn4nUHFPHE",
    },
  ],
} as const;

export type Locale = (typeof SITE.locales)[number];

export const localePaths: Record<Locale, string> = {
  en: "/",
  ru: "/ru/",
};

export function localizedUrl(locale: Locale) {
  return new URL(localePaths[locale], SITE.url).toString();
}
