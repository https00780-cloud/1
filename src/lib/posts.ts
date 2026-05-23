// Shared metadata for posts. Centralised so the hub + sitemap stay in sync.

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  keywords: string;
  date: string;
  readMinutes: number;
  wordCount: number;
  category: string;
  excerpt: string;
};

export const POSTS: PostMeta[] = [
  {
    slug: "best-meteor-client-addons-for-donutsmp",
    title: "Best Meteor Client Addons For DonutSMP In 2026 — Ranked & Reviewed",
    description:
      "The honest list of the best Meteor Client addons for DonutSMP in 2026. What still works, what's abandoned, and why Argon Addon tops every category we tested.",
    keywords:
      "best meteor client addons donutsmp, meteor client addons donutsmp, best addon donut smp, donutsmp addons 2026, meteor addons ranked",
    date: "2026-05-02",
    readMinutes: 9,
    wordCount: 1620,
    category: "Reviews",
    excerpt:
      "We ran every public Meteor Client addon we could find on a fresh DonutSMP account for two weeks. Here's what survived.",
  },
  {
    slug: "how-to-fly-on-donutsmp",
    title: "How To Fly On DonutSMP In 2026 — The Only Method That Actually Works",
    description:
      "Want to fly on DonutSMP without getting kicked or banned in 2026? The Argon Addon Donut Bypass fly mode is the only working method. Full setup, settings, and risk notes.",
    keywords:
      "how to fly on donutsmp, donutsmp fly, donutsmp fly hack, donutsmp fly bypass, fly on donut smp, donut smp fly",
    date: "2026-04-28",
    readMinutes: 7,
    wordCount: 1280,
    category: "Tutorials",
    excerpt:
      "Vanilla Meteor fly gets you kicked in 5 seconds. Forks get you banned in 30. Here's the one method left.",
  },
  {
    slug: "donutsmp-ah-sniper-guide",
    title: "DonutSMP AH Sniper Guide — Print Coins With Argon Addon (2026)",
    description:
      "Set up a DonutSMP AH sniper that prints coins overnight. Recommended filters, profit margins, and the exact Argon Addon config that's still pulling 5-10× returns in 2026.",
    keywords:
      "donutsmp ah sniper, donutsmp auction house sniper, donutsmp ah flip, ah sniper meteor, argon ah sniper, donutsmp money making",
    date: "2026-04-25",
    readMinutes: 8,
    wordCount: 1410,
    category: "Tutorials",
    excerpt:
      "Auction-house flipping is still the highest-EV move on DonutSMP. Here's the exact AH Sniper config that's still working.",
  },
  {
    slug: "how-to-find-bases-on-donutsmp",
    title: "How To Find Bases On DonutSMP — The Argon Base Finder Stack",
    description:
      "How to find player bases on DonutSMP using ChunkFinder, ClusterFinder, HoleTunnelESP, StorageESP, and ShulkerHole ESP — the complete Argon Addon base-finder workflow.",
    keywords:
      "how to find bases on donutsmp, donutsmp base finder, donutsmp stash finder, find bases minecraft anarchy, argon base finder, chunk finder donutsmp",
    date: "2026-04-19",
    readMinutes: 11,
    wordCount: 1980,
    category: "Tutorials",
    excerpt:
      "Five modules. One workflow. We've found 4-stash bases in under 20 minutes using this exact stack.",
  },
];

export function postBySlug(slug: string): PostMeta | undefined {
  return POSTS.find((p) => p.slug === slug);
}
