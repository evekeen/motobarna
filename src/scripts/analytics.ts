import { SITE } from "@/data/site";

type MixpanelClient = typeof import("mixpanel-browser").default;

let initialized = false;
let loading: Promise<MixpanelClient | null> | null = null;
let client: MixpanelClient | null = null;

async function initMixpanel() {
  if (initialized) return client;
  if (loading) return loading;
  if (typeof window === "undefined") return null;

  loading = import("mixpanel-browser")
    .then((module) => {
      const mixpanel = module.default;
      mixpanel.init(SITE.mixpanelToken, {
        autocapture: true,
        record_sessions_percent: 100,
        api_host: SITE.mixpanelApiHost,
      });
      initialized = true;
      client = mixpanel;
      return mixpanel;
    })
    .catch((error) => {
      console.warn("Mixpanel initialization failed", error);
      return null;
    });

  return loading;
}

async function track(eventName: string, properties: Record<string, unknown> = {}) {
  const mixpanel = await initMixpanel();

  if (!mixpanel) return;

  try {
    mixpanel.track(eventName, {
      page_path: window.location.pathname,
      ...properties,
    });
  } catch (error) {
    console.warn("Mixpanel tracking failed", error);
  }
}

function configureTelegramTargets() {
  const ctas = document.querySelectorAll<HTMLAnchorElement>("[data-telegram-cta]");
  const opensNewTab = window.matchMedia("(min-width: 760px)").matches;

  ctas.forEach((cta) => {
    if (opensNewTab) {
      cta.target = "_blank";
      cta.rel = "noopener noreferrer";
    } else {
      cta.removeAttribute("target");
      cta.removeAttribute("rel");
    }
  });
}

function bindTelegramCtas() {
  const ctas = document.querySelectorAll<HTMLAnchorElement>("[data-telegram-cta]");

  ctas.forEach((cta) => {
    cta.addEventListener("click", () => {
      const placement = cta.dataset.telegramCta ?? "unknown";
      track("telegram_cta_click", { placement });

      if (placement === "hero") {
        track("hero_cta_click");
      }

      if (placement === "sticky") {
        track("sticky_cta_click");
      }
    });
  });
}

function observeSections() {
  const sections = document.querySelectorAll<HTMLElement>("[data-track-section]");
  if (!("IntersectionObserver" in window) || sections.length === 0) return;

  const seen = new Set<string>();
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const name = (entry.target as HTMLElement).dataset.trackSection;
        if (!name || seen.has(name)) return;

        seen.add(name);
        track("section_view", { section: name });
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.35 },
  );

  sections.forEach((section) => observer.observe(section));
}

function configureStickyCta() {
  const sticky = document.querySelector<HTMLElement>(".sticky-telegram");
  const hero = document.querySelector<HTMLElement>(".hero");
  if (!sticky || !hero || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      sticky.classList.toggle("is-visible", !entry.isIntersecting);
    },
    { threshold: 0.08 },
  );

  observer.observe(hero);
}

window.addEventListener("DOMContentLoaded", () => {
  configureTelegramTargets();
  bindTelegramCtas();
  configureStickyCta();
  observeSections();

  window.setTimeout(() => {
    void initMixpanel();
  }, 1200);
});
