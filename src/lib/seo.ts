import { DOWNLOAD_FILENAME, SITE_URL, TRACKED_DOWNLOAD_URL } from "./site";

export const SITE_NAME = "Argon Addon";
export const OG_IMAGE = `${SITE_URL}/og-card.png`;
export const SOFTWARE_VERSION = "3.2.0";
export const MC_VERSION = "1.21.11";

export const DEFAULT_KEYWORDS =
  "argon addon, argon addon download, argon addon donutsmp, best addon donut smp, meteor client addons donutsmp, donutsmp fly bypass, meteor client donutsmp, argon meteor addon, donutsmp addon download";

export type PageHeadOptions = {
  title: string;
  description: string;
  /** Path including leading slash, e.g. `/install` */
  path: string;
  keywords?: string;
  ogType?: "website" | "article";
  noindex?: boolean;
};

export function pageUrl(path: string): string {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

export function pageHead({
  title,
  description,
  path,
  keywords = DEFAULT_KEYWORDS,
  ogType = "website",
  noindex = false,
}: PageHeadOptions) {
  const url = pageUrl(path);
  const robots = noindex
    ? "noindex, follow"
    : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      { name: "robots", content: robots },
      { name: "googlebot", content: "index, follow" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: "en_US" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: ogType },
      { property: "og:url", content: url },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:secure_url", content: OG_IMAGE },
      {
        property: "og:image:alt",
        content: `${SITE_NAME} — DonutSMP fly bypass and Meteor Client addon for Minecraft ${MC_VERSION}`,
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@argonaddon" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: OG_IMAGE },
      {
        name: "twitter:image:alt",
        content: `${SITE_NAME} — free Meteor Client addon for DonutSMP`,
      },
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hreflang: "en", href: url },
      { rel: "alternate", hreflang: "x-default", href: url },
    ],
  };
}

export function jsonLdScript(data: Record<string, unknown> | Record<string, unknown>[]) {
  return {
    type: "application/ld+json" as const,
    children: JSON.stringify(data),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: pageUrl(item.path),
    })),
  };
}

export function faqSchema(faqs: Array<[string, string]>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([name, text]) => ({
      "@type": "Question",
      name,
      acceptedAnswer: { "@type": "Answer", text },
    })),
  };
}

export function softwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    alternateName: [
      "Argon Addon for DonutSMP",
      "Argon Meteor Client Addon",
      "Argon DonutSMP Addon",
      "Argon Addon Download",
    ],
    applicationCategory: "GameApplication",
    applicationSubCategory: "Minecraft Mod",
    operatingSystem: "Windows, macOS, Linux",
    description:
      "Argon Addon download — Meteor Client addon for DonutSMP with the only working fly bypass. 90+ modules for Crystal PvP, base finding, and AH sniping on Minecraft 1.21.11.",
    softwareVersion: SOFTWARE_VERSION,
    downloadUrl: `${SITE_URL}${TRACKED_DOWNLOAD_URL}`,
    installUrl: `${SITE_URL}/install`,
    url: SITE_URL,
    image: OG_IMAGE,
    fileSize: "2.4 MB",
    featureList: [
      "DonutSMP fly bypass",
      "AH Sniper",
      "Base finder suite",
      "Crystal PvP macros",
      "90+ Meteor modules",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "2173",
      bestRating: "5",
    },
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };
}

/** Helps Google understand key landing pages (sitelinks). */
export function siteNavigationSchema() {
  const pages = [
    { name: "Argon Addon Download", path: "/#download" },
    { name: "Install Argon Addon", path: "/install" },
    { name: "DonutSMP Fly Bypass", path: "/donutsmp-fly-bypass" },
    { name: "DonutSMP Guide", path: "/donutsmp-guide" },
    { name: "Meteor Client Modules", path: "/modules" },
    { name: "Best Meteor Addons for DonutSMP", path: "/posts/best-meteor-client-addons-for-donutsmp" },
    { name: "How To Fly on DonutSMP", path: "/posts/how-to-fly-on-donutsmp" },
  ];
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Argon Addon — guides and downloads",
    itemListElement: pages.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      url: pageUrl(p.path),
    })),
  };
}

export function webPageSchema(path: string, title: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: pageUrl(path),
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
    about: { "@type": "SoftwareApplication", name: SITE_NAME },
    inLanguage: "en",
  };
}

export const SITEMAP_PAGES: Array<{ path: string; priority: string; changefreq: string }> = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/install", priority: "0.95", changefreq: "monthly" },
  { path: "/donutsmp-guide", priority: "0.95", changefreq: "weekly" },
  { path: "/donutsmp-fly-bypass", priority: "0.98", changefreq: "weekly" },
  { path: "/modules", priority: "0.9", changefreq: "weekly" },
  { path: "/changelog", priority: "0.75", changefreq: "weekly" },
  { path: "/posts", priority: "0.85", changefreq: "weekly" },
  { path: "/posts/best-meteor-client-addons-for-donutsmp", priority: "0.92", changefreq: "monthly" },
  { path: "/posts/how-to-fly-on-donutsmp", priority: "0.92", changefreq: "monthly" },
  { path: "/posts/donutsmp-ah-sniper-guide", priority: "0.9", changefreq: "monthly" },
  { path: "/posts/how-to-find-bases-on-donutsmp", priority: "0.9", changefreq: "monthly" },
];
