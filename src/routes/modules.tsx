import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { PageShell } from "../components/site-chrome";

const SITE_URL = "https://argonaddon.com";

export const Route = createFileRoute("/modules")({
  component: ModulesPage,
  head: () => ({
    meta: [
      {
        title: "Argon Addon Modules — Full List Of 90+ Meteor Client Modules For DonutSMP",
      },
      {
        name: "description",
        content:
          "Every Argon Addon module — 90+ Meteor Client modules for DonutSMP. CrystalAura, AH Sniper, StorageESP, Donut Bypass fly, Base Finder, and more. Search the full module list.",
      },
      {
        name: "keywords",
        content:
          "argon addon modules, meteor client modules donutsmp, argon ah sniper, argon crystalaura, argon storageesp, argon base finder, argon donut bypass, argon addon module list",
      },
      { property: "og:title", content: "Argon Addon — Full Module List (90+)" },
      {
        property: "og:description",
        content:
          "Every Argon Addon module: Crystal PvP, Base Finding, DonutSMP utilities, Render & HUD.",
      },
      { property: "og:url", content: `${SITE_URL}/modules` },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/modules` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Modules", item: `${SITE_URL}/modules` },
          ],
        }),
      },
    ],
  }),
});

type Mod = { name: string; desc: string; tags?: string[] };
type Cat = { id: string; title: string; intro: string; mods: Mod[] };

const catalogue: Cat[] = [
  {
    id: "esp",
    title: "ESP & Base Finding",
    intro:
      "Argon's base-finder stack. Each module catches a signal another one misses — stack them and you find bases in minutes, not days.",
    mods: [
      {
        name: "1x1 Hole Finder",
        desc: "Spots 1x1 trap holes other players dig to lock you in.",
        tags: ["pvp", "esp"],
      },
      {
        name: "StorageESP",
        desc: "Highlights chests, barrels, shulkers, and trapped chests through walls. Groups by type, filters by content.",
        tags: ["base"],
      },
      {
        name: "Block Finder V2",
        desc: "Search every loaded chunk for any block type. Renamed and rewritten for 4× faster scan in v3.2.",
        tags: ["base"],
      },
      {
        name: "Chunk Finder",
        desc: "Detects chunks loaded outside normal spawn radius — usually means someone's online there.",
        tags: ["base"],
      },
      {
        name: "ClusterFinder",
        desc: "Identifies unnatural block density that indicates man-made structure underground.",
        tags: ["base"],
      },
      {
        name: "HoleTunnelESP",
        desc: "Renders mining tunnels and hidden passages through stone.",
        tags: ["base"],
      },
      {
        name: "LightESP",
        desc: "Visualises light levels — finds lit-up rooms inside otherwise dark terrain.",
        tags: ["base"],
      },
      {
        name: "ShulkerHole ESP",
        desc: "Detects shulker boxes buried in 1x1s or behind walls.",
        tags: ["base"],
      },
      {
        name: "Player ESP+",
        desc: "Per-player colour, distance, health, armour. Filters by name regex.",
        tags: ["esp", "pvp"],
      },
      {
        name: "Item ESP",
        desc: "Highlights dropped items through terrain. Filter by item type.",
        tags: ["esp"],
      },
      {
        name: "Entity ESP",
        desc: "Custom entity highlighting — mobs, item frames, end crystals, vehicles.",
        tags: ["esp"],
      },
      {
        name: "Container ESP",
        desc: "Tracker for opened containers — shows what got looted recently.",
        tags: ["esp", "base"],
      },
      {
        name: "Tracer Lines",
        desc: "Draws tracer lines from your camera to players/entities. Per-type colour.",
        tags: ["esp"],
      },
      {
        name: "X-Ray",
        desc: "Highlights configurable block types and hides the rest. Diamond ore preset included.",
        tags: ["base"],
      },
      {
        name: "Cave Finder",
        desc: "Renders cave systems as a 3D mesh through the world. Useful for stash hunts.",
        tags: ["base"],
      },
    ],
  },
  {
    id: "pvp",
    title: "Crystal PvP & Combat Macros",
    intro:
      "Crystal PvP modules tuned for DonutSMP's fast fights. Default to Manual+ — you place, Argon perfects the timing.",
    mods: [
      {
        name: "Aim Assist Macro",
        desc: "Smooth aim correction for crystal and sword combat. Adjustable FOV and snap strength.",
        tags: ["pvp"],
      },
      {
        name: "Anchor Macro",
        desc: "Auto-places and detonates respawn anchors in nether-style PvP.",
        tags: ["pvp"],
      },
      {
        name: "Auto Inv Totem",
        desc: "Pulls totems from inventory to offhand the second you pop. Works through hotbar swaps.",
        tags: ["pvp"],
      },
      {
        name: "Elytra Swap",
        desc: "Instantly swaps to elytra after a fight for post-engagement escape.",
        tags: ["pvp", "movement"],
      },
      {
        name: "Hover Totem",
        desc: "Keeps a totem in offhand while you hover-spam during crystal exchanges.",
        tags: ["pvp"],
      },
      {
        name: "Tap Reset Macro",
        desc: "Frame-perfect tap-reset combos for consistent CPS during sword fights.",
        tags: ["pvp"],
      },
      {
        name: "Wind Jump Macro",
        desc: "Chains wind charges with jumps for absurd vertical mobility bursts.",
        tags: ["pvp", "movement"],
      },
      {
        name: "Wind Pearl Macro",
        desc: "Combines wind charges with ender pearl throws for long-range gap-closes.",
        tags: ["pvp", "movement"],
      },
      {
        name: "CrystalAura (Manual+)",
        desc: "Frame-perfect crystal break timing on your manual places. No auto-place — stays under flag threshold.",
        tags: ["pvp"],
      },
      {
        name: "AutoTotem",
        desc: "Offhand totem replacement with packet-level pop detection.",
        tags: ["pvp"],
      },
      {
        name: "AutoArmour",
        desc: "Equips best available armour set based on enchant priority.",
        tags: ["pvp"],
      },
      {
        name: "Burrow",
        desc: "1x1 enderpearl/end crystal burrow with auto-place option.",
        tags: ["pvp"],
      },
      {
        name: "HoleFiller",
        desc: "Auto-fills enemy 1x1s with obsidian or crystals for trap setups.",
        tags: ["pvp"],
      },
      {
        name: "Surround",
        desc: "Surrounds you with obsidian blocks to block crystal damage.",
        tags: ["pvp"],
      },
      {
        name: "Speedmine",
        desc: "Tunes mining tick rate to break obsidian faster in fights.",
        tags: ["pvp", "utility"],
      },
      {
        name: "OffhandSpoof",
        desc: "Hides your offhand item from enemy ESP overlays.",
        tags: ["pvp"],
      },
      {
        name: "Smart Eat",
        desc: "Auto-switches to gapples mid-fight, swaps back to combat item after.",
        tags: ["pvp"],
      },
    ],
  },
  {
    id: "donutsmp",
    title: "DonutSMP Utilities",
    intro:
      "The reason Argon exists. Server-specific modules that survive DonutSMP's anti-cheat and make actual money on the auction house.",
    mods: [
      {
        name: "Donut Bypass Fly",
        desc: "The only working fly mode on DonutSMP. Packet mimicry, not raw fly. See /donutsmp-fly-bypass.",
        tags: ["donutsmp", "movement"],
      },
      {
        name: "AH Sniper",
        desc: "Watches the DonutSMP auction house and auto-buys underpriced listings. Sub-110ms latency in v3.2.",
        tags: ["donutsmp"],
      },
      {
        name: "Auto Mine",
        desc: "AFK-mines a defined area for overnight resource runs. 8-hour stability tested every release.",
        tags: ["donutsmp", "afk"],
      },
      {
        name: "Auto Tree Farmer",
        desc: "Chops trees and replants saplings in a loop. Works with Sweeping Edge.",
        tags: ["afk"],
      },
      {
        name: "BiomeGetter",
        desc: "Shows current biome and coordinates to nearest target biome.",
        tags: ["utility"],
      },
      {
        name: "Home Reset",
        desc: "Resets /home in two clicks after a base move.",
        tags: ["donutsmp"],
      },
      {
        name: "SpawnerProtect",
        desc: "Blocks misclicks that would destroy spawners near you.",
        tags: ["donutsmp"],
      },
      {
        name: "TpaDisconnect",
        desc: "Auto-disconnects when a danger-listed player sends a TPA request.",
        tags: ["donutsmp"],
      },
      {
        name: "TpaMacro",
        desc: "Auto-accepts or rejects TPAs based on configurable whitelist/blacklist.",
        tags: ["donutsmp"],
      },
      {
        name: "Coord Logger",
        desc: "Logs player coordinates seen on screen to a searchable file.",
        tags: ["donutsmp", "base"],
      },
      {
        name: "Stash Finder",
        desc: "Cross-references chunk visits, container ESP, and player movement to flag likely stashes.",
        tags: ["base"],
      },
      {
        name: "Anti-Disconnect",
        desc: "Auto-rejoins after kick. Configurable cooldown.",
        tags: ["utility"],
      },
      {
        name: "Auto Fish",
        desc: "Fishes infinitely with auto-recast and AFK detection.",
        tags: ["afk"],
      },
      {
        name: "Auto Eat",
        desc: "Auto-eats when hunger drops below threshold. Configurable food preference.",
        tags: ["utility"],
      },
    ],
  },
  {
    id: "render",
    title: "Render & HUD",
    intro: "The visual layer. Designed to be readable — no rainbow seizures, no nameplate spam.",
    mods: [
      {
        name: "Custom Crosshair",
        desc: "Replaces the vanilla crosshair with full style, gap, colour, and shape control.",
        tags: ["hud"],
      },
      {
        name: "ESP Particles",
        desc: "Adds particle trails to ESP entities so they remain visible in dense terrain.",
        tags: ["hud"],
      },
      {
        name: "Fake Scoreboard",
        desc: "Overlays a configurable fake sidebar to hide real server data on stream.",
        tags: ["hud"],
      },
      {
        name: "Jump ESP",
        desc: "Predicts and visualises player jump arcs and landing zones.",
        tags: ["hud", "pvp"],
      },
      {
        name: "Player Map",
        desc: "Live minimap showing nearby players in real time. Filters by name.",
        tags: ["hud"],
      },
      {
        name: "Target HUD",
        desc: "Full target panel: health, armour, totem count, distance. New in v3.2.",
        tags: ["hud", "pvp"],
      },
      {
        name: "Coords HUD",
        desc: "Configurable on-screen coordinates with biome and direction.",
        tags: ["hud"],
      },
      {
        name: "Inventory Tweaks",
        desc: "Hotbar swap, auto-sort, instant shulker preview on hover.",
        tags: ["utility"],
      },
    ],
  },
];

function ModulesPage() {
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return catalogue.map((c) => ({
      ...c,
      mods: c.mods.filter((m) => {
        const matchesQ =
          !q ||
          m.name.toLowerCase().includes(q.toLowerCase()) ||
          m.desc.toLowerCase().includes(q.toLowerCase());
        const matchesTag = !filter || (m.tags ?? []).includes(filter);
        return matchesQ && matchesTag;
      }),
    }));
  }, [q, filter]);

  const totalShown = filtered.reduce((n, c) => n + c.mods.length, 0);
  const totalAll = catalogue.reduce((n, c) => n + c.mods.length, 0);
  const tags = ["pvp", "base", "donutsmp", "movement", "afk", "hud", "esp", "utility"];

  return (
    <PageShell>
      <article className="mx-auto max-w-6xl px-6 pb-24">
        <nav aria-label="Breadcrumb" className="mb-4 font-mono text-xs text-muted-foreground">
          <Link to="/" className="hover:text-foreground">
            Home
          </Link>
          <span className="mx-2 opacity-60">/</span>
          <span className="text-foreground">Modules</span>
        </nav>

        <div className="font-mono text-xs uppercase tracking-widest text-primary">
          Modules · 90+ shipped, {totalAll} featured below
        </div>
        <h1 className="reveal mt-3 text-4xl font-bold tracking-tight md:text-5xl">
          Every featured Argon Addon module.
        </h1>
        <p className="reveal reveal-delay-1 mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          The full module list. Every Meteor Client addon module Argon ships for DonutSMP and
          Minecraft 1.21.11 — Crystal PvP, base finding, auction house, render, and the Donut Bypass
          fly. Search or filter below. 90+ modules total, more in every release.
        </p>

        {/* Search + filter */}
        <div className="reveal reveal-delay-2 mt-10 flex flex-col gap-4 rounded-2xl border border-border bg-card p-4 md:flex-row md:items-center">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search 90+ modules — try 'fly', 'crystal', 'ah'…"
              className="w-full rounded-xl border border-border bg-background px-9 py-2.5 text-sm outline-none focus:border-primary/60"
              data-testid="modules-search"
            />
          </div>
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => setFilter(null)}
              className={`rounded-full border px-3 py-1 font-mono text-xs transition ${
                filter === null
                  ? "border-primary bg-primary/15 text-foreground"
                  : "border-border bg-secondary text-muted-foreground hover:text-foreground"
              }`}
              data-testid="modules-filter-all"
            >
              all
            </button>
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setFilter(filter === t ? null : t)}
                className={`rounded-full border px-3 py-1 font-mono text-xs transition ${
                  filter === t
                    ? "border-primary bg-primary/15 text-foreground"
                    : "border-border bg-secondary text-muted-foreground hover:text-foreground"
                }`}
                data-testid={`modules-filter-${t}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-3 font-mono text-xs text-muted-foreground">
          Showing {totalShown} / {totalAll} modules
        </div>

        {/* Category sections */}
        <div className="mt-10 space-y-14">
          {filtered.map((cat) =>
            cat.mods.length === 0 ? null : (
              <section key={cat.id} id={cat.id} className="scroll-mt-32">
                <div className="mb-5 flex items-baseline justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{cat.title}</h2>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                      {cat.intro}
                    </p>
                  </div>
                  <div className="font-mono text-xs text-muted-foreground">{cat.mods.length}</div>
                </div>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                  {cat.mods.map((m) => (
                    <div
                      key={m.name}
                      className="group rounded-xl border border-border bg-card p-5 transition hover:border-primary/40 hover:shadow-glow"
                    >
                      <div className="flex items-baseline justify-between gap-3">
                        <h3 className="font-semibold">{m.name}</h3>
                        <div className="flex shrink-0 gap-1">
                          {(m.tags ?? []).slice(0, 2).map((t) => (
                            <span
                              key={t}
                              className="rounded-full border border-border bg-secondary/60 px-1.5 py-0.5 font-mono text-[10px] uppercase text-muted-foreground"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {m.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            ),
          )}
        </div>

        {/* CTA */}
        <section className="mt-20 rounded-2xl border border-primary/30 bg-gradient-to-br from-card to-secondary/40 p-8 text-center shadow-glow">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            That's the whole list. Free .jar — every module included.
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/"
              hash="download"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-90"
              data-testid="modules-download-btn"
            >
              <Download className="h-4 w-4" /> Download Argon Addon
            </Link>
            <Link
              to="/donutsmp-guide"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold transition hover:border-primary/50"
            >
              DonutSMP setup guide
            </Link>
          </div>
        </section>
      </article>
    </PageShell>
  );
}
