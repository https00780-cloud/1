import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, Plane, ShieldCheck, AlertTriangle, Check } from "lucide-react";
import { PageShell } from "../components/site-chrome";

const SITE_URL = "https://argonaddon.com";
const DOWNLOAD_URL =
  "https://github.com/https00780-cloud/argonnn/raw/refs/heads/main/Argon%20Addon%201.21.11.jar";

export const Route = createFileRoute("/donutsmp-fly-bypass")({
  component: FlyBypassPage,
  head: () => ({
    meta: [
      {
        title: "DonutSMP Fly Bypass 2026 — The Only Working Fly On DonutSMP (Argon Addon)",
      },
      {
        name: "description",
        content:
          "How to fly on DonutSMP in 2026 without getting kicked or banned. Argon Addon ships the only working DonutSMP fly bypass. Recommended settings, anti-cheat notes, and free .jar download.",
      },
      {
        name: "keywords",
        content:
          "donutsmp fly bypass, fly bypass donutsmp, donutsmp fly, how to fly on donutsmp, meteor client fly donutsmp, argon fly bypass, donut smp fly hack",
      },
      { property: "og:title", content: "DonutSMP Fly Bypass — Argon Addon (Working in 2026)" },
      {
        property: "og:description",
        content:
          "The only working DonutSMP fly bypass in 2026. Free .jar, 5-minute install, re-tuned every anti-cheat update.",
      },
      { property: "og:url", content: `${SITE_URL}/donutsmp-fly-bypass` },
      { property: "og:type", content: "article" },
      { property: "og:image", content: `${SITE_URL}/og-card.png` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/donutsmp-fly-bypass` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "DonutSMP Fly Bypass — The Only Working Fly On DonutSMP",
          description:
            "How to fly on DonutSMP without getting flagged. Recommended Argon Addon settings, anti-cheat tuning notes, free download.",
          datePublished: "2026-05-02",
          dateModified: "2026-05-02",
          author: { "@type": "Organization", name: "Argon Addon" },
          publisher: {
            "@type": "Organization",
            name: "Argon Addon",
            logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon.png` },
          },
          mainEntityOfPage: `${SITE_URL}/donutsmp-fly-bypass`,
          image: `${SITE_URL}/og-card.png`,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Is there a working fly bypass on DonutSMP in 2026?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Argon Addon's Donut Bypass fly mode is the only public Meteor Client fly that survives DonutSMP's anti-cheat as of May 2026. Every other public fly module gets flagged within seconds.",
              },
            },
            {
              "@type": "Question",
              name: "Will I get banned for using the Argon fly bypass on DonutSMP?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Argon's fly is tuned to mimic legitimate packets (slowfall, elytra cancel). It minimises detection risk but doesn't eliminate it. Keep speed under 1.6, motion smoothing on High, and watch the changelog for hotfixes after each DonutSMP anti-cheat update.",
              },
            },
            {
              "@type": "Question",
              name: "How long does the fly bypass stay working after a DonutSMP update?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "When DonutSMP pushes an anti-cheat update — usually every 2-3 weeks — the bypass may flag for a few hours. Argon ships a patched build within 24 hours, usually closer to 6.",
              },
            },
            {
              "@type": "Question",
              name: "Is the Argon fly bypass free?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. The whole Argon Addon is free, including the fly bypass. No paid tier, no key system, no Discord verification. Direct .jar download from GitHub.",
              },
            },
          ],
        }),
      },
    ],
  }),
});

function FlyBypassPage() {
  return (
    <PageShell>
      <article className="mx-auto max-w-3xl px-6 pb-24">
        <nav aria-label="Breadcrumb" className="mb-4 font-mono text-xs text-muted-foreground">
          <Link to="/" className="hover:text-foreground">
            Home
          </Link>
          <span className="mx-2 opacity-60">/</span>
          <Link to="/donutsmp-guide" className="hover:text-foreground">
            DonutSMP Guide
          </Link>
          <span className="mx-2 opacity-60">/</span>
          <span className="text-foreground">DonutSMP Fly Bypass</span>
        </nav>

        <div className="font-mono text-xs uppercase tracking-widest text-primary">
          DonutSMP · Fly Bypass · May 2026
        </div>
        <h1 className="reveal mt-3 text-4xl font-bold tracking-tight md:text-5xl">
          The only working DonutSMP fly bypass in 2026.
        </h1>
        <p className="reveal reveal-delay-1 mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Short version: every public Meteor Client fly module gets flagged on DonutSMP within
          seconds. Argon Addon's <span className="font-mono text-foreground">Donut Bypass</span>{" "}
          mode is the one exception — and it's been the only working DonutSMP fly since spring 2025.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={DOWNLOAD_URL}
            download
            className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-90"
            data-testid="fly-download-btn"
          >
            <Download className="h-4 w-4" /> Download Argon (fly bypass included)
          </a>
          <Link
            to="/install"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold transition hover:border-primary/50"
          >
            Install guide
          </Link>
        </div>

        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Why standard Meteor Client fly doesn't work on DonutSMP.
          </h2>
          <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
            <p>
              DonutSMP runs a custom anti-cheat layered on top of Grim. It specifically inspects
              vertical motion packets, gravity consistency, and the difference between client
              position and what's physically possible in the last 20 ticks.
            </p>
            <p>
              Meteor's default Fly module sends "creative" motion — flat vertical velocity, zero
              gravity, instant direction changes. The second packet hits Donut's anti-cheat it's
              flagged. Same for every fork that's just rebranded Meteor's fly module.
            </p>
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-primary/30 bg-primary/5 p-7">
          <div className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary">
            <Plane className="h-3.5 w-3.5" /> How Argon's bypass works
          </div>
          <h2 className="text-2xl font-bold tracking-tight">
            Donut Bypass mode — packet mimicry, not raw fly.
          </h2>
          <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
            <p>
              Argon's <span className="font-mono text-foreground">Donut Bypass</span> doesn't send
              "fly" motion to the server. It sends a sequence of legitimate packets —
              slowfall-tinted vertical motion, elytra-cancel transitions, gradient velocity that
              respects the anti-cheat's gravity model.
            </p>
            <p>
              From the server's perspective, you look like someone with a slowfall potion who's also
              chaining elytra cancels. That's a real thing players do. Argon just does it perfectly
              every tick.
            </p>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Recommended settings (stay flagless).
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Don't push these. The whole point is staying boring to the anti-cheat.
          </p>
          <div className="mt-5 overflow-hidden rounded-2xl border border-border bg-card">
            <table className="w-full text-sm">
              <tbody className="font-mono text-xs">
                {[
                  ["Module", "Movement → Fly"],
                  ["Mode", "Donut Bypass"],
                  ["Speed", "1.2 (max safe 1.6)"],
                  ["Glide", "true"],
                  ["Motion Smoothing", "High"],
                  ["Anti-Kick", "true"],
                  ["Y-Speed Cap", "2.4"],
                  ["Toggle key", "Right Shift → Movement → Fly"],
                ].map(([k, v], i) => (
                  <tr key={k} className={i % 2 ? "bg-secondary/20" : ""}>
                    <td className="border-r border-border px-5 py-3 text-muted-foreground">{k}</td>
                    <td className="px-5 py-3 text-foreground">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-border bg-card p-7">
          <div className="mb-2 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary">
            <AlertTriangle className="h-3.5 w-3.5" /> Reality check
          </div>
          <h2 className="text-2xl font-bold tracking-tight">When the bypass flags.</h2>
          <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-muted-foreground">
            <li>· DonutSMP pushes an anti-cheat update (usually every 2-3 weeks).</li>
            <li>· The bypass flags for 0-24 hours.</li>
            <li>· Argon ships a hotfix to GitHub releases.</li>
            <li>· You re-download the .jar, drop it in mods, you're back.</li>
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            We monitor Donut's anti-cheat commits and ship patches usually within 6 hours of
            detection. Subscribe to the GitHub repo for release notifications.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            What about other &quot;DonutSMP fly bypass&quot; downloads I see on YouTube?
          </h2>
          <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
            <p>Three categories, all bad:</p>
            <ol className="ml-1 list-inside list-decimal space-y-2">
              <li>
                <span className="text-foreground">Reupload-scam .jars.</span> Random fork hosted on
                a sketchy file-share with a token-grabbing payload. Don't run unsigned .jars from
                anywhere except the Argon GitHub releases.
              </li>
              <li>
                <span className="text-foreground">Outdated Meteor forks.</span> A fly mode that
                worked on Donut nine months ago. Anti-cheat has moved on; you'll be kicked in 5
                seconds and flagged in 30.
              </li>
              <li>
                <span className="text-foreground">Paid "premium" clients.</span> $20-50 for a fly
                that's the same Meteor base as Argon, repackaged. We ship Argon free because the
                code matters, not the gatekeeping.
              </li>
            </ol>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-primary/30 bg-gradient-to-br from-card to-secondary/40 p-8 text-center shadow-glow">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
            <ShieldCheck className="h-3.5 w-3.5" /> Working as of{" "}
            {new Date().toISOString().slice(0, 10)}
          </div>
          <h2 className="mt-4 text-2xl font-bold tracking-tight md:text-3xl">
            Download Argon. Get the working DonutSMP fly bypass.
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground">
            Free .jar. 5-minute install. Donut Bypass mode ready out of the box.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={DOWNLOAD_URL}
              download
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-90"
              data-testid="fly-cta-download-btn"
            >
              <Download className="h-4 w-4" /> Download Argon Addon .jar
            </a>
            <Link
              to="/donutsmp-guide"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold transition hover:border-primary/50"
            >
              Full DonutSMP guide
            </Link>
          </div>
          <p className="mt-5 text-xs text-muted-foreground">
            <Check className="-mt-0.5 mr-1 inline h-3 w-3 text-primary" /> No paid tier ·
            <Check className="-mt-0.5 mx-1 inline h-3 w-3 text-primary" /> No key system ·
            <Check className="-mt-0.5 mx-1 inline h-3 w-3 text-primary" /> Updated within 24h of
            every Donut patch
          </p>
        </section>
      </article>
    </PageShell>
  );
}
