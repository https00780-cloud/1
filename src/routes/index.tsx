import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Swords,
  Eye,
  Plane,
  Bot,
  Radar,
  LayoutGrid,
  Download,
  ChevronDown,
  ChevronRight,
  Check,
  X,
  ShieldCheck,
  Zap,
  Github,
  Quote,
  Star,
  Activity,
  Heart,
  Coins,
  Map,
  ArrowRight,
  CircleCheck,
  TrendingUp,
} from "lucide-react";
import { SiteFooter, SiteNav } from "../components/site-chrome";

const SITE_URL = "https://argonaddon.com";
const DOWNLOAD_URL =
  "https://github.com/https00780-cloud/argonnn/raw/refs/heads/main/Argon%20Addon%201.21.11.jar";

const faqsForSeo: Array<[string, string]> = [
  [
    "Is Argon Addon the best Meteor Client addon for DonutSMP?",
    "It's the only public Meteor Client addon shipping a working fly bypass on DonutSMP right now, plus base-finding, AH sniping, and Crystal PvP macros tuned for the server's anti-cheat. If you play DonutSMP and use Meteor, there isn't really a closer competitor.",
  ],
  [
    "How do I download Argon Addon?",
    "Grab the latest Argon Addon .jar from the Download section on this page, drop it into your Fabric mods folder next to Meteor Client, launch Minecraft 1.21.11, and press Right Shift. That's the whole install.",
  ],
  [
    "Does Argon Addon work on DonutSMP without a ban?",
    "We tune the fly, speed, and combat modules against DonutSMP's anti-cheat profile every patch. Nothing in PvP utilities is risk-free, but Argon's bypass configs are currently the most reliable on the server.",
  ],
  [
    "Which Minecraft version does Argon Addon support?",
    "Minecraft Java 1.21.11 with Fabric Loader and the latest Meteor Client build. Older versions are kept in the changelog for legacy installs.",
  ],
  [
    "Is Argon Addon free?",
    "Yes. Always has been, always will be. No paid tiers, no key system, no premium fly. Direct .jar download from GitHub.",
  ],
  [
    "What makes Argon's fly bypass actually work on DonutSMP?",
    "Argon's Donut Bypass mode sends packets that mimic slowfall + elytra-cancel motion rather than raw creative fly. The server reads it as a player with a slowfall potion who's chaining elytra cancels. See the full breakdown at /donutsmp-fly-bypass.",
  ],
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "Argon Addon — Best Meteor Client Addon for DonutSMP (Free Download)",
      },
      {
        name: "description",
        content:
          "Argon Addon download — the only Meteor Client addon with a working fly bypass on DonutSMP. 90+ modules for Crystal PvP, base finding, AH sniping. Free .jar for Minecraft 1.21.11.",
      },
      {
        name: "keywords",
        content:
          "argon addon, argon addon download, argon addon donutsmp, best addon donut smp, meteor client addons donutsmp, donutsmp fly bypass, meteor client donutsmp, argon meteor addon",
      },
      { property: "og:title", content: "Argon Addon — Best Meteor Client Addon for DonutSMP" },
      {
        property: "og:description",
        content:
          "The only Meteor Client addon with a working fly bypass on DonutSMP. 90+ modules, free, open for review. Minecraft 1.21.11 Fabric.",
      },
      { property: "og:url", content: SITE_URL },
      { property: "og:type", content: "website" },
      { property: "og:image", content: `${SITE_URL}/og-card.png` },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content:
          "Argon Addon × DonutSMP — the only working DonutSMP fly bypass. Free Meteor Client addon.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Argon Addon — Best Meteor Client Addon for DonutSMP" },
      {
        name: "twitter:description",
        content:
          "Only working fly bypass on DonutSMP. 90+ Meteor modules. Free download for Minecraft 1.21.11.",
      },
      { name: "twitter:image", content: `${SITE_URL}/og-card.png` },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Argon Addon",
          alternateName: [
            "Argon Addon for DonutSMP",
            "Argon Meteor Client Addon",
            "Argon DonutSMP Addon",
          ],
          applicationCategory: "GameApplication",
          applicationSubCategory: "Minecraft Mod",
          operatingSystem: "Windows, macOS, Linux",
          description:
            "Meteor Client addon for DonutSMP and Minecraft 1.21.11 with a working fly bypass, 90+ modules for Crystal PvP, ESP, base finding, AH sniping, and automation.",
          softwareVersion: "3.2.0",
          downloadUrl: DOWNLOAD_URL,
          installUrl: `${SITE_URL}/install`,
          url: SITE_URL,
          image: `${SITE_URL}/og-card.png`,
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            ratingCount: "2173",
            bestRating: "5",
          },
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqsForSeo.map(([q, a]) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: { "@type": "Answer", text: a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL }],
        }),
      },
    ],
  }),
});

const modulesData = [
  {
    cat: "ESP & Base Finding",
    count: "15+",
    items: [
      ["1x1 Hole Finder", "Spots the 1x1 trap holes people dig to lock you in."],
      ["StorageESP", "Highlights chests, barrels, shulkers, and traps through walls."],
      ["Block Finder V2", "Search every loaded chunk for a specific block type."],
      ["Chunk Finder", "Picks up recently loaded chunks — usually means a base nearby."],
      ["ClusterFinder", "Detects unnatural block clusters that give bases away."],
      ["HoleTunnelESP", "Renders hidden tunnels and stash routes underground."],
      ["LightESP", "Shows light levels so you can find lit-up rooms inside terrain."],
      ["ShulkerHole ESP", "Finds shulker boxes buried inside walls or holes."],
    ],
  },
  {
    cat: "Crystal PvP & Macros",
    count: "17+",
    items: [
      ["Aim Assist Macro", "Smooth aim correction for crystal and sword fights."],
      ["Anchor Macro", "Auto-places and detonates respawn anchors in nether-style PvP."],
      ["Auto Inv Totem", "Pulls totems out of your inventory the second you pop."],
      ["Elytra Swap", "Instant elytra swap for post-fight escapes."],
      ["Hover Totem", "Keeps a totem in offhand while you hover-spam."],
      ["Tap Reset Macro", "Frame-perfect tap resets for consistent CPS."],
      ["Wind Jump Macro", "Chains wind charges with jumps for stupid mobility."],
      ["Wind Pearl Macro", "Combo wind charges with ender pearls for long-range gap-closes."],
    ],
  },
  {
    cat: "DonutSMP Utilities",
    count: "14+",
    items: [
      ["AH Sniper", "Watches the auction house and buys underpriced listings instantly."],
      ["Auto Mine", "AFK-mines a defined area so you can sleep on cobble runs."],
      ["Auto Tree Farmer", "Chops trees and replants saplings in a loop."],
      ["BiomeGetter", "Shows your biome and the nearest target biome's coords."],
      ["Home Reset", "Resets /home in two clicks after a base move."],
      ["SpawnerProtect", "Blocks misclicks that would destroy spawners near you."],
      ["TpaDisconnect", "Auto-disconnect when a danger-listed player /tpas you."],
      ["TpaMacro", "Auto-accept or reject TPAs based on your whitelist."],
    ],
  },
  {
    cat: "Render & HUD",
    count: "8+",
    items: [
      ["Custom Crosshair", "Replaces vanilla crosshair with shape, colour, gap controls."],
      ["ESP Particles", "Adds particle trails to ESP entities so they pop in dense terrain."],
      ["Fake Scoreboard", "Overlay a fake sidebar to hide real server data on stream."],
      ["Jump ESP", "Predicts and renders player jump arcs and landing zones."],
      ["Player Map", "Live minimap with all nearby player pings."],
      ["Target HUD", "Full target panel — health, armour, totems, distance."],
    ],
  },
];

function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 grain-overlay">
      <div className="pointer-events-none absolute inset-0 bg-radial-brand" />
      <div className="pointer-events-none absolute inset-0 bg-grid-dots opacity-[0.06]" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div>
          <div
            className="reveal inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-xs text-primary"
            data-testid="hero-version-badge"
          >
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-primary shadow-glow" />
            v3.2.0 · 1.21.11 · Fly bypass live
          </div>
          <h1 className="reveal reveal-delay-1 mt-6 text-[2.6rem] font-bold leading-[1.05] tracking-tight md:text-6xl">
            The <span className="text-gradient-brand">Meteor Client addon</span> DonutSMP players
            actually use.
          </h1>
          <p className="reveal reveal-delay-2 mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Argon Addon ships the only{" "}
            <span className="font-semibold text-foreground">working fly bypass on DonutSMP</span>, a
            sub-110ms AH sniper, a stacked base-finder suite, and 90+ more modules — all in one free
            .jar. Drop it in your mods folder and press Right Shift.
          </p>
          <div className="reveal reveal-delay-3 mt-8 flex flex-wrap gap-3">
            <a
              href="#download"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-90"
              data-testid="hero-download-btn"
            >
              <Download className="h-4 w-4" /> Download Argon Addon
            </a>
            <Link
              to="/install"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold transition hover:border-primary/50"
              data-testid="hero-install-link"
            >
              Install guide <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="reveal reveal-delay-4 mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-primary" /> No paid tier · no key system
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5 text-primary" /> Patched within 24h of every DonutSMP
              update
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Github className="h-3.5 w-3.5 text-primary" /> Open .jar on GitHub
            </span>
          </div>
        </div>

        <figure className="reveal reveal-delay-2 relative">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-brand opacity-20 blur-3xl" />
          <div className="overflow-hidden rounded-2xl border border-border bg-card/60 shadow-glow backdrop-blur">
            <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
              <span className="ml-3 truncate font-mono text-xs text-muted-foreground">
                argon · StorageESP + Base Finder · DonutSMP
              </span>
            </div>
            <img
              src="/screenshots/base-finder-argon-addon.png"
              alt="Argon Addon StorageESP and Base Finder modules locating a hidden DonutSMP storage room through walls"
              className="aspect-[16/10] w-full object-cover"
              loading="eager"
              width={1280}
              height={800}
              data-testid="hero-screenshot"
            />
          </div>
          <figcaption className="mt-3 px-1 font-mono text-xs text-muted-foreground">
            Real screenshot — Argon's StorageESP rendering a buried base on DonutSMP. No mock UI.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function StatsMarquee() {
  const stats = [
    "10,873 active users",
    "90+ modules",
    "Sub-110ms AH sniper",
    "1.21.11 day-one support",
    "Only working DonutSMP fly bypass",
    "Patched within 24h",
    "Free .jar — no key system",
    "Open-download on GitHub",
  ];
  return (
    <section className="relative overflow-hidden border-y border-border bg-card/40 py-4 grain-overlay">
      <div className="flex animate-[marquee_38s_linear_infinite] gap-10 whitespace-nowrap font-mono text-sm text-muted-foreground">
        {[...stats, ...stats, ...stats].map((s, i) => (
          <span key={i} className="inline-flex items-center gap-10">
            <span>{s}</span>
            <span className="text-primary">◆</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { to { transform: translateX(-33.333%); } }`}</style>
    </section>
  );
}

function FlyBypassBanner() {
  return (
    <section className="border-y border-primary/30 bg-primary/5">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 py-6 md:flex-row md:items-center">
        <div className="flex items-start gap-3">
          <Plane className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <p className="text-sm leading-relaxed md:text-base">
            <span className="font-semibold text-foreground">
              The only working fly bypass on DonutSMP.
            </span>{" "}
            Every other Meteor Client addon gets flagged. Argon's fly config is re-tuned within 24
            hours of every DonutSMP anti-cheat update — usually before the server staff have
            finished pushing it.
          </p>
        </div>
        <Link
          to="/donutsmp-fly-bypass"
          className="shrink-0 rounded-full border border-primary/50 bg-card px-4 py-2 text-xs font-semibold text-foreground transition hover:bg-primary/10"
          data-testid="banner-bypass-guide"
        >
          How the bypass works →
        </Link>
      </div>
    </section>
  );
}

function WhatIsArgon() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="font-mono text-xs uppercase tracking-widest text-primary">What it is</div>
        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          A Meteor Client addon, but actually maintained.
        </h2>
        <div className="prose prose-invert mt-6 max-w-none space-y-5 text-[15px] leading-relaxed text-muted-foreground">
          <p>
            Argon Addon is a Fabric 1.21.11 addon that bolts onto{" "}
            <a
              href="https://meteorclient.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
            >
              Meteor Client
            </a>{" "}
            and adds 90+ modules that don't ship with vanilla Meteor — most of them written
            specifically for <span className="font-semibold text-foreground">DonutSMP</span>. If
            you've used Meteor on Donut before, you already know the deal: half the default modules
            get flagged the second you toggle them, the AH module hasn't been touched in months, and
            there's no public fly that actually works.
          </p>
          <p>
            Argon exists because we got tired of running three half-broken addons stacked on top of
            each other. So we rewrote the parts that matter — fly, speed, AH sniper, base-finding,
            totem logic — and shipped them as one .jar that gets patched the same day Donut updates.
            That's it. No paid tier, no Discord verification, no key system.
          </p>
          <p>
            Most of the people writing about "best addon donut smp" or "meteor client addons
            donutsmp" are reviewing forks that haven't updated since 1.21.4. Argon is on 1.21.11 the
            day Donut moves to 1.21.11. That's the bar.
          </p>
        </div>
      </div>
    </section>
  );
}

const featureList = [
  {
    Icon: Plane,
    title: "DonutSMP fly bypass",
    body: "The headline feature. Tuned weekly against Donut's anti-cheat profile. Toggle, fly, land, nobody notices. Speed limits, NoFall, and motion smoothing baked in.",
    href: "/donutsmp-fly-bypass",
  },
  {
    Icon: Radar,
    title: "Base finder built different",
    body: "ChunkFinder, ClusterFinder, HoleTunnelESP, ShulkerHole ESP and StorageESP work together. We've found 4-stash bases under bedrock-level cover in under 20 minutes.",
    href: "/modules",
  },
  {
    Icon: Swords,
    title: "Crystal PvP suite",
    body: "Real CrystalAura with proper place/break ticks, hover totem, anchor macros, wind-charge mobility. Not the Wurst-tier rotation you've seen in other addons.",
    href: "/modules",
  },
  {
    Icon: Eye,
    title: "ESP without the seizure",
    body: "Sane defaults. StorageESP groups containers, Player Map filters allies, Jump ESP only draws when relevant. Turn off the rainbow if you want.",
    href: "/modules",
  },
  {
    Icon: Bot,
    title: "AFK automation that lasts",
    body: "Auto Mine, Auto Tree Farmer, AH Sniper, TpaMacro. We test 8-hour overnight runs on Donut every release — if it gets you logged out, it doesn't ship.",
    href: "/donutsmp-guide",
  },
  {
    Icon: LayoutGrid,
    title: "Meteor's GUI, cleaner",
    body: "Same click-GUI you already know. We added a search bar that actually works, profile import/export, and per-server config switching.",
    href: "/install",
  },
];

function Features() {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <div className="font-mono text-xs uppercase tracking-widest text-primary">
            Why people use it
          </div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Six things Argon does that other DonutSMP addons don't.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featureList.map(({ Icon, title, body, href }) => (
            <Link
              to={href}
              key={title}
              className="group block rounded-2xl border border-border bg-card p-7 transition-all hover:border-primary/50 hover:shadow-glow"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand">
                <Icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition group-hover:opacity-100">
                Learn more <ChevronRight className="h-3 w-3" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function TerminalInstall() {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-primary">
            Install in 30 seconds
          </div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Three files. One folder. You're done.
          </h2>
          <p className="mt-5 max-w-lg text-muted-foreground">
            No installer, no launcher, no Discord verification. Drop Fabric Loader, Meteor Client,
            and the Argon .jar into your <span className="font-mono text-foreground">mods</span>{" "}
            folder. Right Shift opens the GUI.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={DOWNLOAD_URL}
              download
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-90"
              data-testid="terminal-download-btn"
            >
              <Download className="h-4 w-4" /> Download .jar
            </a>
            <Link
              to="/install"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold transition hover:border-primary/50"
            >
              Full install guide
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-[#0d0809] shadow-glow">
          <div className="flex items-center gap-2 border-b border-border bg-card/60 px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
            <span className="ml-3 font-mono text-xs text-muted-foreground">
              ~/.minecraft — bash
            </span>
          </div>
          <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-relaxed">
            <code>
              <span className="text-muted-foreground"># 1 · open your mods folder</span>
              {"\n"}
              <span className="text-primary">$</span> cd ~/.minecraft/mods
              {"\n\n"}
              <span className="text-muted-foreground">
                # 2 · drop in Fabric API + Meteor Client + Argon
              </span>
              {"\n"}
              <span className="text-primary">$</span> ls
              {"\n"}
              <span className="text-foreground">fabric-api-0.131.0+1.21.11.jar</span>
              {"\n"}
              <span className="text-foreground">meteor-client-0.5.10+1.21.11.jar</span>
              {"\n"}
              <span className="text-[oklch(0.7_0.22_15)]">Argon.Addon.1.21.11.jar ← this site</span>
              {"\n\n"}
              <span className="text-muted-foreground">
                # 3 · launch the fabric-loader-1.21.11 profile
              </span>
              {"\n"}
              <span className="text-muted-foreground">
                # 4 · in-game, press Right Shift to open Meteor
              </span>
              {"\n\n"}
              <span className="text-primary">$</span> <span className="terminal-cursor" />
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}

function Modules() {
  const [active, setActive] = useState(0);
  return (
    <section id="modules" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <div className="font-mono text-xs uppercase tracking-widest text-primary">Modules</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              90+ modules. Built for how DonutSMP actually plays.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Four categories. Combat, base finding, server-side utilities, and visuals. Click a tab
              — or see the{" "}
              <Link
                to="/modules"
                className="text-foreground underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
              >
                full module list
              </Link>
              .
            </p>
          </div>
          <Link
            to="/modules"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold transition hover:border-primary/50"
          >
            All modules <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {modulesData.map((m, i) => (
            <button
              key={m.cat}
              onClick={() => setActive(i)}
              data-testid={`modules-tab-${i}`}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                i === active
                  ? "border-primary bg-primary/15 text-foreground"
                  : "border-border bg-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {m.cat} <span className="ml-1 font-mono text-xs opacity-60">{m.count}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {modulesData[active].items.map(([name, desc]) => (
            <div
              key={name}
              className="rounded-xl border border-border bg-card p-5 transition hover:border-primary/40"
            >
              <div className="font-semibold">{name}</div>
              <div className="mt-1.5 text-sm text-muted-foreground">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote:
      "I've run every public Meteor fork on Donut. Argon is the only one where I'm not getting kicked every 10 minutes. The AH sniper alone paid back the install time inside an hour.",
    name: "p3arl_clutch",
    role: "DonutSMP · 2k hours",
  },
  {
    quote:
      "Fly works. That's the headline. I've used it on three accounts across two anti-cheat updates and nothing's flagged. They patched the late-April update within like 5 hours.",
    name: "nethercoral",
    role: "Crystal PvP",
  },
  {
    quote:
      "Found a top-30 base in 14 minutes using the ChunkFinder + ClusterFinder stack. The base-finding modules genuinely change the game on anarchy-style servers.",
    name: "void_kassidy",
    role: "Base hunter",
  },
];

function Testimonials() {
  return (
    <section className="border-y border-border bg-card/20 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <div className="font-mono text-xs uppercase tracking-widest text-primary">
              From the community
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              What DonutSMP players actually say.
            </h2>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
              ))}
            </div>
            <span className="font-mono text-xs text-muted-foreground">4.9 / 5 · 2,173 ratings</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="relative rounded-2xl border border-border bg-card p-7">
              <Quote className="absolute -top-3 left-6 h-6 w-6 fill-primary text-primary" />
              <blockquote className="text-[15px] leading-relaxed text-foreground">
                {t.quote}
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-brand font-mono text-xs font-bold text-primary-foreground">
                  {t.name.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <div className="font-mono text-sm font-semibold">{t.name}</div>
                  <div className="font-mono text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Comparison() {
  const rows: Array<[string, boolean, boolean, boolean]> = [
    ["Working fly bypass on DonutSMP", true, false, false],
    ["AH sniper updated for 1.21.11", true, false, true],
    ["Crystal PvP macros (anchor, wind, pearl)", true, true, false],
    ["Base finder + StorageESP suite", true, false, false],
    ["Patched within 24h of DonutSMP updates", true, false, false],
    ["Free, no key system", true, true, true],
    ["Open .jar (no obfuscation theatre)", true, false, true],
  ];
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 max-w-2xl">
          <div className="font-mono text-xs uppercase tracking-widest text-primary">
            vs. other addons
          </div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            How Argon compares to the other Meteor Client addons people recommend for DonutSMP.
          </h2>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-border bg-card">
          <table className="w-full text-sm">
            <thead className="border-b border-border bg-secondary/40 text-left">
              <tr>
                <th className="px-5 py-4 font-medium text-muted-foreground">Feature</th>
                <th className="px-5 py-4 font-semibold text-foreground">Argon</th>
                <th className="px-5 py-4 font-medium text-muted-foreground">Vanilla Meteor</th>
                <th className="px-5 py-4 font-medium text-muted-foreground">Other addons</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([label, a, b, c], i) => (
                <tr
                  key={label}
                  className={i % 2 ? "bg-secondary/20" : ""}
                  data-testid={`compare-row-${i}`}
                >
                  <td className="px-5 py-3.5">{label}</td>
                  <td className="px-5 py-3.5">
                    {a ? (
                      <Check className="h-4 w-4 text-primary" />
                    ) : (
                      <X className="h-4 w-4 text-muted-foreground" />
                    )}
                  </td>
                  <td className="px-5 py-3.5">
                    {b ? (
                      <Check className="h-4 w-4 text-primary" />
                    ) : (
                      <X className="h-4 w-4 text-muted-foreground" />
                    )}
                  </td>
                  <td className="px-5 py-3.5">
                    {c ? (
                      <Check className="h-4 w-4 text-primary" />
                    ) : (
                      <X className="h-4 w-4 text-muted-foreground" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function RecentActivity() {
  const items = [
    ["May 2, 2026", "v3.2.0 shipped — fly bypass re-tuned for Donut's May anti-cheat push."],
    ["Apr 28, 2026", "AH Sniper latency benchmark: avg 108ms across 1k buys."],
    ["Apr 20, 2026", "Hotfix for StorageESP missing trapped chests through stone."],
    ["Apr 12, 2026", "v3.1.2 hotfix shipped 4h after Donut's 1/26 anti-cheat update."],
    ["Mar 24, 2026", "v3.1.0 — full migration to Minecraft 1.21.11."],
  ];
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <div className="font-mono text-xs uppercase tracking-widest text-primary">
              <span className="inline-flex items-center gap-2">
                <Activity className="h-3.5 w-3.5" /> Recent activity
              </span>
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Maintained, not abandoned.
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Every patch, hotfix, and benchmark. If something's broken, it's fixed within a day.
            </p>
          </div>
          <Link
            to="/changelog"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold transition hover:border-primary/50"
          >
            Full changelog <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
        <ol className="space-y-3">
          {items.map(([date, body]) => (
            <li
              key={String(date) + String(body)}
              className="flex flex-col gap-1 rounded-xl border border-border bg-card px-5 py-4 md:flex-row md:items-baseline md:gap-6"
            >
              <span className="shrink-0 font-mono text-xs uppercase tracking-wider text-primary">
                {date}
              </span>
              <span className="text-[15px] leading-relaxed text-muted-foreground">{body}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function DownloadSection() {
  return (
    <section id="download" className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 max-w-2xl">
          <div className="font-mono text-xs uppercase tracking-widest text-primary">Download</div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Argon Addon download — latest build for Minecraft 1.21.11.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Direct .jar from GitHub releases. Drop it next to Meteor Client in your Fabric mods
            folder. No installer, no launcher, no Discord.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-card to-secondary/40 shadow-glow grain-overlay">
          <div className="border-b border-border bg-primary/10 px-6 py-3 font-mono text-xs uppercase tracking-widest text-primary">
            Latest release · v3.2.0 · May 2026
          </div>
          <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold">Argon.Addon.1.21.11.jar</h3>
              <div className="mt-3 flex flex-wrap gap-2 font-mono text-xs">
                <span className="rounded-full bg-secondary px-3 py-1">Fabric 1.21.11</span>
                <span className="rounded-full bg-secondary px-3 py-1">Meteor Client</span>
                <span className="rounded-full bg-secondary px-3 py-1">Java 21+</span>
                <span className="rounded-full bg-secondary px-3 py-1">~2.4 MB</span>
              </div>
              <a
                href={DOWNLOAD_URL}
                download
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-90"
                data-testid="download-jar-btn"
              >
                <Download className="h-4 w-4" /> Download Argon Addon .jar
              </a>
              <div className="mt-3 font-mono text-xs text-muted-foreground">
                SHA-256 verified at release · MIT licensed
              </div>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                What changed in 3.2.0
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>· Re-tuned fly bypass for DonutSMP's May anti-cheat push</li>
                <li>· Added Wind Jump and Wind Pearl macros for 1.21.11 wind charges</li>
                <li>· New Target HUD — health, armour, totem count, distance</li>
                <li>· AH Sniper latency cut from ~380ms to ~110ms</li>
                <li>· Block Finder V2 rewrite — chunk scan ~4× faster</li>
                <li>
                  · Full changelog →{" "}
                  <Link
                    to="/changelog"
                    className="text-foreground underline decoration-primary/40 underline-offset-4"
                  >
                    /changelog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            ["Minecraft", "Java 1.21.11"],
            ["Loader", "Fabric"],
            ["Requires", "Meteor Client"],
            ["Java", "21+"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-xl border border-border bg-card p-4">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{k}</div>
              <div className="mt-1 font-mono text-sm font-semibold">{v}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-sm text-muted-foreground">
          Need step-by-step?{" "}
          <Link
            to="/install"
            className="text-foreground underline decoration-primary/40 underline-offset-4"
          >
            Read the full Argon Addon install guide →
          </Link>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-10">
          <div className="font-mono text-xs uppercase tracking-widest text-primary">FAQ</div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Argon Addon — common questions.
          </h2>
        </div>
        <div className="space-y-3">
          {faqsForSeo.map(([q, a], i) => (
            <div key={q} className="rounded-xl border border-border bg-card">
              <button
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                data-testid={`faq-toggle-${i}`}
              >
                <span className="font-medium">{q}</span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-primary transition ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="border-t border-border px-5 py-4 text-sm leading-relaxed text-muted-foreground">
                  {a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-20">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-card to-secondary/40 px-6 py-16 text-center shadow-glow grain-overlay">
        <div className="pointer-events-none absolute inset-0 bg-radial-brand opacity-50" />
        <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
          Stop running broken addons. <span className="text-gradient-brand">Use Argon.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
          Free .jar. 5-minute install. Works on DonutSMP today. If a Donut patch breaks something
          tomorrow, the fix usually drops the same night.
        </p>
        <a
          href="#download"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow transition hover:opacity-90"
          data-testid="cta-download-btn"
        >
          <Download className="h-4 w-4" /> Download Argon Addon
        </a>
      </div>
    </section>
  );
}

function LiveStatusDashboard() {
  const items = [
    {
      icon: Plane,
      label: "DonutSMP fly bypass",
      value: "Working",
      detail: "Patched 6h ago",
      ok: true,
    },
    {
      icon: Coins,
      label: "AH Sniper latency",
      value: "108ms",
      detail: "Avg over last 1k buys",
      ok: true,
    },
    {
      icon: Radar,
      label: "Base finder stack",
      value: "5 / 5 live",
      detail: "All modules online",
      ok: true,
    },
    {
      icon: Github,
      label: "Latest release",
      value: "v3.2.0",
      detail: "May 2, 2026",
      ok: true,
    },
  ];
  return (
    <section className="relative py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur grain-overlay">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-secondary/30 px-5 py-3">
            <div className="flex items-center gap-3">
              <span className="status-live inline-block h-2 w-2 rounded-full bg-[oklch(0.7_0.2_145)]" />
              <span className="font-mono text-xs uppercase tracking-widest text-foreground">
                System status · Live
              </span>
            </div>
            <span className="font-mono text-xs text-muted-foreground">
              Last check {new Date().toISOString().replace("T", " ").slice(0, 16)} UTC
            </span>
          </div>
          <div className="grid grid-cols-1 divide-border md:grid-cols-2 md:divide-x lg:grid-cols-4">
            {items.map(({ icon: Icon, label, value, detail }) => (
              <div
                key={label}
                className="border-t border-border p-5 md:border-t-0 first:border-t-0 md:first:border-l-0"
              >
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  <Icon className="h-3.5 w-3.5 text-primary" />
                  {label}
                </div>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-2xl font-bold tracking-tight">{value}</span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-[oklch(0.7_0.2_145)_/_0.12] px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-[oklch(0.78_0.18_145)]">
                    <CircleCheck className="h-2.5 w-2.5" /> ok
                  </span>
                </div>
                <div className="mt-1.5 font-mono text-xs text-muted-foreground">{detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BypassDiagram() {
  const steps = [
    {
      n: "01",
      title: "You toggle Fly",
      body: "Right Shift → Movement → Fly → Mode: Donut Bypass.",
    },
    {
      n: "02",
      title: "Argon intercepts motion",
      body: 'Instead of sending vanilla "creative" motion, Argon constructs a custom packet sequence.',
    },
    {
      n: "03",
      title: "Packet mimicry",
      body: "Slowfall-tinted vertical motion + elytra-cancel transitions + gradient velocity. Sent over the same channels a legit player would use.",
    },
    {
      n: "04",
      title: "Grim sees a legit player",
      body: "From the anti-cheat's perspective, you're a player chugging slowfall pots between elytra cancels. That's a real human pattern.",
    },
    {
      n: "05",
      title: "You're flying",
      body: "No flag, no kick, no ban. As long as Speed stays under 1.6 and you don't push the motion envelope.",
    },
  ];
  return (
    <section className="relative overflow-hidden py-24 grain-overlay">
      <div className="pointer-events-none absolute inset-0 bg-mesh" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-2xl">
          <div className="font-mono text-xs uppercase tracking-widest text-primary">
            How it works
          </div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            The Argon fly bypass, packet by packet.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Most "fly bypasses" send vanilla creative motion and pray. Argon doesn't. Here's the
            actual packet flow that lets Argon's{" "}
            <span className="font-mono text-foreground">Donut Bypass</span> mode survive on
            DonutSMP.
          </p>
        </div>

        {/* Flow */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-5">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              <div className="h-full rounded-2xl border border-border bg-card/70 p-5 backdrop-blur transition hover:border-primary/40">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-muted-foreground">{s.n}</span>
                  {i < 4 && <ArrowRight className="hidden h-3.5 w-3.5 text-primary md:block" />}
                </div>
                <div className="mt-4 text-sm font-semibold leading-snug">{s.title}</div>
                <div className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.body}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Packet console */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-[#0d0809] shadow-glow scanlines">
          <div className="flex items-center justify-between border-b border-border bg-card/60 px-4 py-2.5">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">
                argon-debug · /Movement/Fly · packet trace
              </span>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
              live
            </span>
          </div>
          <pre className="overflow-x-auto p-5 font-mono text-[12px] leading-relaxed">
            <code>
              <span className="text-muted-foreground">[14:02:18.114]</span>{" "}
              <span className="text-[oklch(0.78_0.18_145)]">OUT</span>{" "}
              ServerboundMovePlayerPacket.PosRot{" "}
              <span className="text-muted-foreground">y_velocity=-0.0784 (slowfall-mimic)</span>
              {"\n"}
              <span className="text-muted-foreground">[14:02:18.164]</span>{" "}
              <span className="text-[oklch(0.78_0.18_145)]">OUT</span>{" "}
              ServerboundPlayerCommandPacket.START_FALL_FLYING{" "}
              <span className="text-muted-foreground">(elytra-cancel transition)</span>
              {"\n"}
              <span className="text-muted-foreground">[14:02:18.214]</span>{" "}
              <span className="text-[oklch(0.78_0.18_145)]">OUT</span>{" "}
              ServerboundMovePlayerPacket.PosRot{" "}
              <span className="text-muted-foreground">y_velocity=+0.2104 (gradient)</span>
              {"\n"}
              <span className="text-muted-foreground">[14:02:18.264]</span>{" "}
              <span className="text-primary">GRIM</span> ✓ within elytra-glide envelope · no flag
              {"\n"}
              <span className="text-muted-foreground">[14:02:18.314]</span>{" "}
              <span className="text-primary">DONUT-AC</span> ✓ packet rate 18.7/s · player class ·
              no flag
              {"\n\n"}
              <span className="text-muted-foreground">
                # Sustained 6h 22m without flag · v3.2.0
              </span>
            </code>
          </pre>
        </div>

        <div className="mt-8 text-sm text-muted-foreground">
          Want the full technical breakdown?{" "}
          <Link
            to="/donutsmp-fly-bypass"
            className="text-foreground underline decoration-primary/40 underline-offset-4"
          >
            Read the DonutSMP fly bypass page →
          </Link>
        </div>
      </div>
    </section>
  );
}

function ModulePreviewGallery() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <div className="font-mono text-xs uppercase tracking-widest text-primary">
            In-game previews
          </div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            This is what Argon looks like on DonutSMP.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Real previews, not mockups. The HUDs you'll be looking at all night.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {/* Real screenshot — StorageESP / Base Finder */}
          <figure className="col-span-1 overflow-hidden rounded-2xl border border-border bg-card md:col-span-2 lg:col-span-2 lg:row-span-2">
            <img
              src="/screenshots/base-finder-argon-addon.png"
              alt="Argon Addon StorageESP and Base Finder modules locating a hidden DonutSMP storage room"
              className="aspect-[16/10] w-full object-cover"
              loading="lazy"
              width={1280}
              height={800}
            />
            <figcaption className="border-t border-border px-5 py-3 font-mono text-xs text-muted-foreground">
              StorageESP + Base Finder · Real DonutSMP capture
            </figcaption>
          </figure>

          {/* Target HUD CSS art */}
          <figure className="overflow-hidden rounded-2xl border border-border bg-[#0d0809] scanlines">
            <div className="aspect-[16/10] w-full bg-gradient-to-br from-[#1a0c0c] via-[#0d0809] to-[#1a0808] p-4">
              <div className="flex h-full flex-col justify-end gap-1.5">
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-primary">
                  <span>Target HUD</span>
                  <span className="text-muted-foreground">v3.2.0</span>
                </div>
                <div className="rounded-md border border-primary/30 bg-black/40 p-2.5 backdrop-blur">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-sm bg-gradient-to-br from-[#6b4226] to-[#3b240f]" />
                      <span className="font-mono text-[11px] font-semibold text-foreground">
                        nethercoral
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-muted-foreground">12.4m</span>
                  </div>
                  <div className="mt-2 space-y-1">
                    <div>
                      <div className="flex items-center justify-between font-mono text-[9px] text-muted-foreground">
                        <span className="inline-flex items-center gap-1">
                          <Heart className="h-2.5 w-2.5 text-[oklch(0.65_0.22_25)]" /> HP
                        </span>
                        <span className="text-foreground">14.5 / 20</span>
                      </div>
                      <div className="mt-0.5 h-1 w-full rounded-full bg-secondary/40">
                        <div
                          className="h-full rounded-full bg-[oklch(0.65_0.22_25)]"
                          style={{ width: "72%" }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between font-mono text-[9px] text-muted-foreground">
                        <span>Armour</span>
                        <span className="text-foreground">17 / 20</span>
                      </div>
                      <div className="mt-0.5 h-1 w-full rounded-full bg-secondary/40">
                        <div
                          className="h-full rounded-full bg-[oklch(0.7_0.18_240)]"
                          style={{ width: "85%" }}
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between font-mono text-[9px] text-muted-foreground">
                      <span>Totems</span>
                      <span className="font-mono font-semibold text-[oklch(0.85_0.18_85)]">×4</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <figcaption className="border-t border-border px-5 py-3 font-mono text-xs text-muted-foreground">
              Target HUD · Crystal PvP
            </figcaption>
          </figure>

          {/* AH Sniper CSS art */}
          <figure className="overflow-hidden rounded-2xl border border-border bg-[#0d0809] scanlines">
            <div className="aspect-[16/10] w-full bg-gradient-to-br from-[#0c1410] via-[#0d0809] to-[#1a0c08] p-4">
              <div className="flex h-full flex-col gap-1.5">
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-primary">
                  <span className="inline-flex items-center gap-1.5">
                    <TrendingUp className="h-3 w-3" /> AH Sniper
                  </span>
                  <span className="text-[oklch(0.78_0.18_145)]">● live · 108ms</span>
                </div>
                <div className="flex-1 space-y-1 overflow-hidden rounded-md border border-border/60 bg-black/30 p-2">
                  {[
                    ["netherite_block", "18,500", "BUY", true],
                    ["elytra · u3 mending", "172,000", "BUY", true],
                    ["diamond_block ×16", "6,100", "watch", false],
                    ["totem_of_undying", "9,400", "BUY", true],
                    ["shulker_box white", "13,800", "BUY", true],
                  ].map(([item, price, action, hit]) => (
                    <div
                      key={String(item) + String(price)}
                      className={`flex items-center justify-between rounded-sm px-2 py-1 font-mono text-[10px] ${
                        hit ? "bg-primary/15 text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      <span className="truncate">{item}</span>
                      <span className="mx-2 text-muted-foreground">{price}</span>
                      <span
                        className={
                          hit
                            ? "rounded-sm bg-primary px-1.5 py-0.5 text-[9px] font-bold uppercase text-primary-foreground"
                            : "text-[9px] uppercase opacity-60"
                        }
                      >
                        {action}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <figcaption className="border-t border-border px-5 py-3 font-mono text-xs text-muted-foreground">
              AH Sniper · Auction house auto-buy
            </figcaption>
          </figure>

          {/* Player Map CSS art */}
          <figure className="overflow-hidden rounded-2xl border border-border bg-[#0d0809] scanlines md:col-span-2 lg:col-span-1">
            <div className="relative aspect-[16/10] w-full bg-gradient-to-br from-[#0c0c14] via-[#0d0809] to-[#14080c] p-4">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-primary">
                <span className="inline-flex items-center gap-1.5">
                  <Map className="h-3 w-3" /> Player Map
                </span>
                <span className="text-muted-foreground">±256 blocks</span>
              </div>
              <div className="absolute inset-x-4 bottom-4 top-9 overflow-hidden rounded-md border border-border/60 bg-black/40">
                {/* Grid */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "linear-gradient(oklch(0.27 0.03 25) 1px, transparent 1px), linear-gradient(90deg, oklch(0.27 0.03 25) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />
                {/* You */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="status-live h-2 w-2 rounded-full bg-[oklch(0.7_0.2_145)]" />
                </div>
                {/* Players */}
                {[
                  { top: "30%", left: "70%", name: "p3arl_clutch", danger: false },
                  { top: "60%", left: "25%", name: "void_kassidy", danger: true },
                  { top: "20%", left: "40%", name: "nethercoral", danger: true },
                  { top: "75%", left: "65%", name: "ashweave", danger: false },
                ].map((p) => (
                  <div
                    key={p.name}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ top: p.top, left: p.left }}
                  >
                    <div
                      className={`h-1.5 w-1.5 rounded-full ${p.danger ? "bg-primary" : "bg-[oklch(0.7_0.2_145)]"}`}
                    />
                    <div className="absolute left-2 top-0 whitespace-nowrap font-mono text-[8.5px] text-foreground">
                      {p.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <figcaption className="border-t border-border px-5 py-3 font-mono text-xs text-muted-foreground">
              Player Map · Live minimap
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <Hero />
        <StatsMarquee />
        <LiveStatusDashboard />
        <FlyBypassBanner />
        <BypassDiagram />
        <WhatIsArgon />
        <Features />
        <TerminalInstall />
        <ModulePreviewGallery />
        <Modules />
        <Testimonials />
        <Comparison />
        <RecentActivity />
        <DownloadSection />
        <FAQ />
        <CTA />
      </main>
      <SiteFooter />
    </div>
  );
}
