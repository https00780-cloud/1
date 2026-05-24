import { createFileRoute, Link } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { PageShell } from "../components/site-chrome";

const SITE_URL = "https://argonaddon.com";

export const Route = createFileRoute("/changelog")({
  component: ChangelogPage,
  head: () => ({
    meta: [
      {
        title: "Argon Addon Changelog & Version History — All Releases (1.21.x)",
      },
      {
        name: "description",
        content:
          "Full Argon Addon changelog. Every Meteor Client addon release for DonutSMP, including fly-bypass patches, AH sniper updates, and Crystal PvP fixes from v2.0 to v3.2.0.",
      },
      {
        name: "keywords",
        content:
          "argon addon changelog, argon addon version history, argon addon updates, argon addon download old version, meteor client addon updates donutsmp",
      },
      { property: "og:title", content: "Argon Addon Changelog & Version History" },
      {
        property: "og:description",
        content:
          "Every Argon Addon release for DonutSMP — fly-bypass patches, AH sniper updates, Crystal PvP fixes.",
      },
      { property: "og:url", content: `${SITE_URL}/changelog` },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/changelog` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Changelog", item: `${SITE_URL}/changelog` },
          ],
        }),
      },
    ],
  }),
});

const releases: Array<{
  version: string;
  date: string;
  mc: string;
  notes: string[];
  highlight?: boolean;
}> = [
  {
    version: "3.2.0",
    date: "2026-05-02",
    mc: "1.21.11",
    highlight: true,
    notes: [
      "Re-tuned Donut Bypass fly mode against the May 2026 anti-cheat push.",
      "Added Wind Jump and Wind Pearl macros for 1.21.11 wind charges.",
      "New Target HUD with health, armour, totem count, distance.",
      "AH Sniper latency cut from ~380ms to ~110ms.",
      "Block Finder V2 rewrite — chunk scan ~4× faster.",
      "Fixed CrystalAura double-place when packet drop > 60ms.",
      "Fixed StorageESP not rendering trapped chests through stone.",
    ],
  },
  {
    version: "3.1.2",
    date: "2026-04-12",
    mc: "1.21.11",
    notes: [
      "Hotfix: Donut Bypass fly mode flagging after 1/26 anti-cheat update.",
      "Reduced motion delta variance to stay under flag threshold.",
      "Added 'Anti-Kick' sub-option to all movement modules.",
    ],
  },
  {
    version: "3.1.0",
    date: "2026-03-24",
    mc: "1.21.11",
    notes: [
      "Migrated full module set to Minecraft 1.21.11.",
      "Updated Meteor API integration for the new addon loader.",
      "New module: SpawnerProtect — blocks misclicks that would destroy spawners.",
      "Removed BetterScreenshots (Meteor now ships this natively).",
    ],
  },
  {
    version: "3.0.0",
    date: "2025-11-22",
    mc: "1.21.4",
    notes: [
      "Major rewrite. New module loader, faster startup, half the RAM footprint.",
      "Crystal PvP suite revamped: Manual+, Hover Totem, Anchor Macro.",
      "New base-finder stack: ChunkFinder, ClusterFinder, HoleTunnelESP.",
      "Profile import/export added to the GUI.",
    ],
  },
  {
    version: "2.4.0",
    date: "2025-08-14",
    mc: "1.21.4",
    notes: [
      "AH Sniper v2 — moved to packet-level listening.",
      "TpaDisconnect: configurable danger list, regex support.",
      "First public Donut Bypass fly mode (v1).",
      "Various module renames to match Meteor conventions.",
    ],
  },
  {
    version: "2.0.0",
    date: "2025-04-02",
    mc: "1.21.1",
    notes: [
      "Initial public release of Argon Addon.",
      "30 modules at launch focused on DonutSMP utilities.",
      "Free, GitHub-hosted .jar. No key system from day one.",
    ],
  },
];

function ChangelogPage() {
  return (
    <PageShell>
      <article className="mx-auto max-w-3xl px-6 pb-24">
        <div className="font-mono text-xs uppercase tracking-widest text-primary">Changelog</div>
        <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
          Argon Addon — every release.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Full version history for Argon Addon. Each entry covers what shipped, what got patched,
          and which DonutSMP anti-cheat update forced our hand that week.
        </p>

        <div className="mt-12 space-y-8">
          {releases.map((r) => (
            <section
              key={r.version}
              className={`rounded-2xl border ${r.highlight ? "border-primary/40 bg-primary/5" : "border-border bg-card"} p-7`}
              data-testid={`release-${r.version}`}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h2 className="text-2xl font-bold tracking-tight">
                  v{r.version}{" "}
                  {r.highlight && (
                    <span className="ml-2 rounded-full bg-primary/20 px-2 py-0.5 align-middle font-mono text-[10px] uppercase tracking-widest text-primary">
                      Latest
                    </span>
                  )}
                </h2>
                <div className="font-mono text-xs text-muted-foreground">
                  {r.date} · MC {r.mc}
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-muted-foreground">
                {r.notes.map((n) => (
                  <li key={n}>· {n}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <section className="mt-12 rounded-2xl border border-border bg-card p-7">
          <h2 className="text-xl font-bold tracking-tight">Roadmap — what's next.</h2>
          <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-muted-foreground">
            <li>· v3.3 — Inventory move queue (faster shulker dump on raids).</li>
            <li>· v3.3 — AH Sniper v3 with per-item profit overlay.</li>
            <li>· v3.4 — Module sharing: import profiles by URL.</li>
            <li>· When Donut moves to 1.22 — same-day support, as always.</li>
          </ul>
        </section>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            to="/"
            hash="download"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-90"
            data-testid="changelog-download-btn"
          >
            <Download className="h-4 w-4" /> Download latest Argon Addon
          </Link>
          <Link
            to="/install"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold transition hover:border-primary/50"
          >
            Install guide
          </Link>
        </div>
      </article>
    </PageShell>
  );
}
