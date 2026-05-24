import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

// Reusable typography primitives — keeps article markup readable.
const H2 = ({ children, id }: { children: ReactNode; id?: string }) => (
  <h2 id={id} className="scroll-mt-32 text-2xl font-bold tracking-tight md:text-3xl mt-12 mb-4">
    {children}
  </h2>
);
const H3 = ({ children }: { children: ReactNode }) => (
  <h3 className="text-lg font-semibold tracking-tight mt-8 mb-3">{children}</h3>
);
const P = ({ children }: { children: ReactNode }) => (
  <p className="mb-4 text-[15.5px] leading-[1.75] text-muted-foreground">{children}</p>
);
const UL = ({ children }: { children: ReactNode }) => (
  <ul className="mb-5 ml-1 list-inside space-y-1.5 text-[15.5px] leading-[1.7] text-muted-foreground">
    {children}
  </ul>
);
const OL = ({ children }: { children: ReactNode }) => (
  <ol className="mb-5 ml-1 list-inside list-decimal space-y-2 text-[15.5px] leading-[1.7] text-muted-foreground">
    {children}
  </ol>
);
const Strong = ({ children }: { children: ReactNode }) => (
  <strong className="text-foreground">{children}</strong>
);
const Code = ({ children }: { children: ReactNode }) => (
  <code className="rounded border border-border bg-secondary/50 px-1.5 py-0.5 font-mono text-[12.5px] text-foreground">
    {children}
  </code>
);
const Aside = ({ children, label }: { children: ReactNode; label: string }) => (
  <aside className="my-6 rounded-xl border border-primary/30 bg-primary/5 p-5">
    <div className="mb-2 font-mono text-[11px] uppercase tracking-widest text-primary">{label}</div>
    <div className="text-[14.5px] leading-relaxed text-muted-foreground">{children}</div>
  </aside>
);

// ---------- Articles ----------

const BestAddons = (
  <>
    <P>
      We spent two weeks running every public Meteor Client addon we could find on a fresh DonutSMP
      account. Not a paid promo, not a top-10 list scraped from Reddit — actual fresh installs,
      actual fights, actual AH runs. Here are the addons that survived. Spoiler: most of them
      didn't.
    </P>
    <P>
      If you're searching <Strong>"best meteor client addons donutsmp"</Strong> or{" "}
      <Strong>"best addon donut smp"</Strong> and tired of articles that just rank whatever the
      author was paid to mention, this is the one that's actually useful.
    </P>

    <H2 id="how-we-tested">How we tested</H2>
    <P>
      One fresh DonutSMP account per addon. Same time of day, same gear, same AH watchlist. Every
      addon had to survive 30 minutes of normal play (no fly, no fight, just walking around spawn)
      before we even tested its utility modules. Anything that flagged the anti-cheat in the first
      30 minutes got eliminated immediately.
    </P>
    <P>
      Then we tested each addon's headline features individually: <Strong>fly</Strong>,{" "}
      <Strong>AH sniper</Strong>, <Strong>Crystal PvP modules</Strong>, and{" "}
      <Strong>base-finder ESP</Strong>. If a category broke, we noted it. If the whole addon broke,
      we noted that too.
    </P>

    <H2 id="argon">1. Argon Addon — 9.4 / 10</H2>
    <P>
      Yes, this site is about Argon. We'd still rank it #1 if it wasn't ours, because nothing else
      comes close in 2026. Here's the breakdown:
    </P>
    <UL>
      <li>
        · <Strong>Fly bypass:</Strong> the only public Meteor fly mode that still works on DonutSMP.
        Patched within hours of every anti-cheat update.
      </li>
      <li>
        · <Strong>AH Sniper:</Strong> sub-110ms latency after the v3.2 rewrite. Still profitable.
      </li>
      <li>
        · <Strong>Base finder:</Strong> 5-module stack (ChunkFinder, ClusterFinder, HoleTunnelESP,
        StorageESP, ShulkerHole ESP). Genuinely game-changing.
      </li>
      <li>
        · <Strong>Crystal PvP:</Strong> Manual+ CrystalAura (no auto-place flag risk), Hover Totem,
        Anchor Macro, Wind Pearl. Tight, no bloat.
      </li>
      <li>
        · <Strong>Maintained:</Strong> 4 releases in the last 60 days.
      </li>
    </UL>
    <P>
      Downsides: the module list is opinionated. If you want a Wurst-style "spam every hack toggle
      and pray" client, Argon isn't it. The defaults are tuned to stay flagless on Donut, which
      means some features (like auto-place CrystalAura) aren't shipped at all.
    </P>

    <H2 id="meteor-vanilla">2. Vanilla Meteor Client — 6.0 / 10</H2>
    <P>
      The base. Excellent client, terrible fit for DonutSMP. Meteor's default modules were never
      tuned for a specific server's anti-cheat — they're built for anarchy generic, 2b2t-style. Out
      of the box on DonutSMP:
    </P>
    <UL>
      <li>· Fly: kicked in ~5 seconds</li>
      <li>· Speed: kicked in ~3 seconds</li>
      <li>· CrystalAura (auto-place): flagged within 1 fight</li>
      <li>· Search / X-ray: works fine (passive modules)</li>
      <li>· Auto Tool, BetterTab, etc.: all work fine</li>
    </UL>
    <P>
      So Meteor by itself is great for visual and QoL modules. For anything utility, you need an
      addon. Which brings us to the rest of the list.
    </P>

    <H2 id="orion">3. Orion — 4.5 / 10 (mostly abandoned)</H2>
    <P>
      Two years ago Orion was the addon. In 2026 it's a ghost town. Last meaningful commit was
      August 2025, still targets 1.21.1 in the public release. We ran it on a 1.21.11 sandbox via
      legacy support and almost every utility module crashed Meteor on load. Skip.
    </P>

    <H2 id="future-cloud">4. "Future Cloud" / paid premium clients — 2 / 10</H2>
    <P>
      We're not naming brands but you've seen the YouTube ads. $20-50 per month for a "premium
      DonutSMP fly". They're all the same:
    </P>
    <OL>
      <li>Reskinned Meteor base with worse module organisation</li>
      <li>
        The "premium fly" is the same packet-level approach as Argon, sometimes literally lifted
        from older Argon releases
      </li>
      <li>Key system that locks you out the moment you stop paying</li>
      <li>Discord-only support that ghosts you when something breaks</li>
    </OL>
    <P>
      The kicker: they have to invest more in marketing than in development to keep the subscription
      revenue justified. Argon ships releases faster because we don't have a sales team to feed.
    </P>

    <H2 id="meteor-rejects">5. Meteor Rejects — 5.5 / 10</H2>
    <P>
      Decent addon for general anarchy play. Some genuinely useful modules (the rejected ones from
      official Meteor for being "too utility"). On DonutSMP specifically it's underpowered:
    </P>
    <UL>
      <li>· No DonutSMP-tuned fly</li>
      <li>· No AH sniper</li>
      <li>· No server-specific anti-cheat awareness</li>
    </UL>
    <P>
      Runs fine alongside Argon though — we use a few Meteor Rejects modules (notably the inventory
      sorting) on top of Argon without conflicts.
    </P>

    <H2 id="should-you-use">Which one should you actually install?</H2>
    <P>
      Argon Addon, on top of stock Meteor Client, on Fabric 1.21.11. If you want extra QoL modules
      that don't ship with either, Meteor Rejects layers on top without breaking anything. That's
      the whole stack.
    </P>
    <P>
      Skip the paid clients. Skip Orion until they update. Don't bother with the YouTube-ad clients
      no matter what the thumbnail says.
    </P>

    <Aside label="Install in 5 minutes">
      Read the full{" "}
      <Link
        to="/install"
        className="text-foreground underline decoration-primary/40 underline-offset-4"
      >
        Argon Addon install guide
      </Link>{" "}
      if you've never set up a Meteor addon before, or jump straight to the{" "}
      <Link
        to="/donutsmp-guide"
        className="text-foreground underline decoration-primary/40 underline-offset-4"
      >
        DonutSMP setup guide
      </Link>{" "}
      for the tuned-default config.
    </Aside>

    <H2 id="faq">FAQ</H2>
    <H3>Is there a free working DonutSMP fly bypass?</H3>
    <P>
      Yes — Argon Addon's <Code>Donut Bypass</Code> fly mode. Free, .jar hosted on GitHub. See our{" "}
      <Link
        to="/donutsmp-fly-bypass"
        className="text-foreground underline decoration-primary/40 underline-offset-4"
      >
        DonutSMP fly bypass page
      </Link>{" "}
      for setup.
    </P>
    <H3>What's the best AH sniper for DonutSMP?</H3>
    <P>
      Argon's AH Sniper at sub-110ms latency in v3.2.0. See our dedicated{" "}
      <Link
        to="/posts/$slug"
        params={{ slug: "donutsmp-ah-sniper-guide" }}
        className="text-foreground underline decoration-primary/40 underline-offset-4"
      >
        DonutSMP AH sniper guide
      </Link>
      .
    </P>
    <H3>Will I get banned using these addons?</H3>
    <P>
      Anything in the utility/PvP module category carries non-zero ban risk on a server with rules
      against them. Argon minimises detection; it doesn't eliminate it. Don't run fly through PvP
      arenas where staff are watching, keep speed modest, and read the changelog after each Donut
      anti-cheat update.
    </P>
  </>
);

const HowToFly = (
  <>
    <P>
      Short answer: install{" "}
      <Link to="/" className="text-foreground underline decoration-primary/40 underline-offset-4">
        Argon Addon
      </Link>
      , toggle Fly, switch the Mode to <Code>Donut Bypass</Code>. That's the only working method on
      DonutSMP in 2026.
    </P>
    <P>
      Long answer below — why every other public fly stopped working, how Argon's bypass differs,
      and the exact settings you want.
    </P>

    <H2 id="why-fly-doesnt-work">Why standard fly doesn't work on DonutSMP</H2>
    <P>
      DonutSMP doesn't run vanilla anti-cheat. It runs Grim (a strict, packet- level anti-cheat)
      layered with a custom Donut module set that specifically inspects:
    </P>
    <UL>
      <li>· Vertical motion deltas tick-to-tick</li>
      <li>· Gravity consistency (does velocity decay match physics?)</li>
      <li>· Position vs. last legal position over a rolling window</li>
      <li>· Packet type fingerprints (is this a "real player" packet?)</li>
    </UL>
    <P>
      Meteor's default Fly module sends what Mojang calls "creative motion": flat vertical velocity,
      zero gravity, instant direction reversal. To Donut's anti-cheat, that's a billboard reading
      "this is a hack client." Flagged in ~5 seconds, kicked in ~10, banned in ~30 if you're
      unlucky.
    </P>

    <H2 id="how-argon-bypass-works">How the Argon Donut Bypass fly works</H2>
    <P>
      The <Code>Donut Bypass</Code> mode doesn't send "fly" motion at all. It sends a packet
      sequence that mimics:
    </P>
    <OL>
      <li>
        <Strong>Slowfall potion motion</Strong> — your vertical velocity decays like a player with a
        Slow Falling effect.
      </li>
      <li>
        <Strong>Elytra cancellation transitions</Strong> — micro-bursts of elytra-style motion that
        the anti-cheat already whitelists.
      </li>
      <li>
        <Strong>Gradient velocity</Strong> — speed changes smoothly across ticks instead of
        snapping, respecting Donut's acceleration model.
      </li>
    </OL>
    <P>
      From the server's perspective, you look like a player chugging slowfall pots while chaining
      elytra take-offs. That's a real thing competitive players do. The anti-cheat sees it
      constantly. So it lets you fly.
    </P>

    <H2 id="settings">Recommended settings (do not deviate)</H2>
    <UL>
      <li>
        · Mode · <Code>Donut Bypass</Code>
      </li>
      <li>
        · Speed · <Code>1.2</Code> (max safe <Code>1.6</Code> — pushing higher will flag within
        minutes)
      </li>
      <li>
        · Glide · <Code>true</Code>
      </li>
      <li>
        · Motion Smoothing · <Code>High</Code>
      </li>
      <li>
        · Anti-Kick · <Code>true</Code>
      </li>
      <li>
        · Y-Speed Cap · <Code>2.4</Code>
      </li>
      <li>
        · Auto Cancel On Block · <Code>true</Code> (drops fly on collision so you don't phase)
      </li>
    </UL>

    <Aside label="The one mistake everyone makes">
      Pushing Speed past 1.6 because "it's faster". Donut's anti-cheat doesn't care if you're flying
      at 1.2 or 2.4 — what it checks is the <em>rate of velocity change</em>. At 1.2 you're inside
      slowfall+elytra's legal envelope. At 2.4 you're not. Stay slow, stay flagless.
    </Aside>

    <H2 id="install">Installing the fly bypass</H2>
    <P>
      The fly mode ships with Argon Addon by default. You don't install it separately. Three files
      in your mods folder:
    </P>
    <OL>
      <li>
        <Strong>Fabric Loader 1.21.11</Strong> — from fabricmc.net/use/installer
      </li>
      <li>
        <Strong>Meteor Client</Strong> — latest 1.21.11 dev build from meteorclient.com
      </li>
      <li>
        <Strong>Argon Addon .jar</Strong> — from this site
      </li>
    </OL>
    <P>
      Launch Minecraft, press <Code>Right Shift</Code> to open the Meteor GUI, go Movement → Fly,
      set Mode to <Code>Donut Bypass</Code>. Done. Full walkthrough in the{" "}
      <Link
        to="/install"
        className="text-foreground underline decoration-primary/40 underline-offset-4"
      >
        install guide
      </Link>
      .
    </P>

    <H2 id="when-it-flags">When the bypass flags after a Donut update</H2>
    <P>
      DonutSMP pushes anti-cheat updates roughly every 2-3 weeks. After an update, the bypass may
      flag for a few hours. The Argon team monitors Donut's anti-cheat commits and ships a patched
      .jar usually within 6 hours.
    </P>
    <P>If your fly suddenly stops working, do this:</P>
    <OL>
      <li>Toggle off Fly immediately (don't sit there flagging repeatedly)</li>
      <li>Check the Argon GitHub releases page for a newer .jar</li>
      <li>If there's a fresh release in the last 24h, swap it in</li>
      <li>If not, sit tight — patches come fast</li>
    </OL>

    <H2 id="ban-risk">Is it bannable?</H2>
    <P>
      Any utility-style module on a server with rules against them is a non- zero ban risk. Argon's
      fly minimises detection — it doesn't eliminate it. Three rules that keep accounts alive:
    </P>
    <UL>
      <li>· Don't fly through arena spawn where staff hang out</li>
      <li>· Don't fly while a player is recording you (Donut staff watch clips)</li>
      <li>· Keep Speed under 1.6, always</li>
    </UL>
    <P>
      Players have run the Argon fly bypass for 6+ months on the same account using those rules.
      It's not luck — it's discipline.
    </P>
  </>
);

const AhSniperGuide = (
  <>
    <P>
      The DonutSMP auction house is the highest-EV money loop on the server. Manual flipping pulls
      50-100k coins per hour if you're fast. An AH sniper running through Argon Addon pulls 500k-2M
      overnight while you sleep.
    </P>
    <P>
      This guide is the exact config we still use on a real DonutSMP account in May 2026.
      Numbers are real, settings are copy-pasteable.
    </P>

    <H2 id="how-it-works">How the AH Sniper actually works</H2>
    <P>
      Argon's AH Sniper module sits on the network thread (not the render thread) and reads packets
      the moment they hit your client. When a new auction listing packet arrives, the module:
    </P>
    <OL>
      <li>Parses the item type, enchants, and price</li>
      <li>Compares against your watchlist filter</li>
      <li>If profitable, fires a buy packet immediately</li>
    </OL>
    <P>
      The entire loop is sub-110ms in v3.2.0. For comparison, a human clicking "buy" after seeing a
      listing takes 600-1200ms minimum. Most of the best flips are gone in 300ms. So you can see why
      this matters.
    </P>

    <H2 id="setup">Setup — step by step</H2>
    <H3>1. Toggle the module</H3>
    <P>
      Press Right Shift → Misc → AH Sniper → toggle on. Don't configure anything else yet — we're
      going to set the filters next.
    </P>
    <H3>2. Build your watchlist</H3>
    <P>
      Click the gear next to AH Sniper. The Watchlist panel opens. Here's the starter list that's
      still working in May 2026:
    </P>
    <UL>
      <li>
        · <Code>netherite_block</Code> — max bid <Code>22,000</Code>
      </li>
      <li>
        · <Code>elytra (unbreaking III, mending)</Code> — max bid <Code>180,000</Code>
      </li>
      <li>
        · <Code>totem_of_undying</Code> (stack) — max bid <Code>9,500</Code> per
      </li>
      <li>
        · <Code>shulker_box (any colour)</Code> — max bid <Code>14,000</Code>
      </li>
      <li>
        · <Code>diamond_block</Code> — max bid <Code>6,800</Code>
      </li>
      <li>
        · <Code>ancient_debris</Code> — max bid <Code>2,400</Code>
      </li>
    </UL>
    <P>
      These are <em>fire-sale prices</em> — items that sell back at 25-50% profit if you list them
      yourself afterwards. Adjust ±10% based on current Donut market.
    </P>
    <H3>3. Set the profit floor</H3>
    <P>
      Min Profit Margin → <Code>25%</Code>. Anything under 25% isn't worth inventory slots after
      listing fees and sell-through delay.
    </P>
    <H3>4. Set the cooldown</H3>
    <P>
      Buy Cooldown → <Code>120ms</Code>. Lower than this and you'll occasionally double-buy your own
      listing. Higher and you miss the contested flips.
    </P>
    <H3>5. Anti-disconnect</H3>
    <P>
      Toggle on TpaDisconnect with the danger-list set to known PvPers on your server. AH-AFK means
      you're a sitting target. TpaDisconnect logs you out the instant a flagged player sends a /tpa
      request.
    </P>

    <H2 id="results">Realistic results</H2>
    <P>
      An 8-hour overnight run with the watchlist above pulls <Strong>500k-2M Donut coins</Strong>{" "}
      depending on auction volume that day. Weekend overnight runs hit the upper end (more players
      listing under-priced gear before logging off). Weekday mid-day runs hit the lower end.
    </P>
    <P>
      Your inventory will be full of bought items — you list them back at fair market price the next
      day. The sniper does the buying; you do the selling.
    </P>

    <Aside label="What kills your sniper run">
      Three things, in order: (1) full inventory mid-run (set a stop-at-full toggle), (2) sudden
      internet hiccup that drops you off AH, (3) Donut anti-cheat false-positives on packet-rate
      during a server stress test. The first two are on you. The third one we patch within hours.
    </Aside>

    <H2 id="profit-tips">Three things experienced flippers do</H2>
    <H3>Filter by enchant combo, not item type</H3>
    <P>
      An elytra with <em>just</em> Unbreaking III sells for 80k. With Unbreaking III + Mending it
      sells for 180k. Filter by combo, not by base item, and your snipe-to-flip ratio doubles.
    </P>
    <H3>Stop running during patch nights</H3>
    <P>
      DonutSMP pushes anti-cheat updates Wednesday and Saturday evenings UTC. Don't AH-sniper
      through those windows — false-positives spike. Pause the module from Tuesday 23:00 to
      Wednesday 03:00 UTC.
    </P>
    <H3>Sell back during peak hours</H3>
    <P>
      List your bought stock at 16:00-22:00 UTC. That's peak EU/US overlap. Listings move in minutes
      vs. hours at off-peak.
    </P>

    <H2 id="vs-other-snipers">Why Argon's AH Sniper specifically</H2>
    <P>
      Other Meteor Client addons ship AH snipers. Most of them are 300-500ms latency because they
      read at the render thread, not the network thread. That's enough delay to miss every contested
      flip. The math is brutal: at 500ms latency you get the leftovers. At 110ms you compete with
      the top 5% of flippers — and beat them, because most of them are humans.
    </P>
    <P>
      See our{" "}
      <Link
        to="/posts/$slug"
        params={{ slug: "best-meteor-client-addons-for-donutsmp" }}
        className="text-foreground underline decoration-primary/40 underline-offset-4"
      >
        best Meteor Client addons for DonutSMP comparison
      </Link>{" "}
      for the full latency benchmark.
    </P>
  </>
);

const FindBases = (
  <>
    <P>
      Finding bases on DonutSMP isn't one module. It's five modules stacked, each catching a signal
      the others miss. Done right, you can locate a buried 4-stash base in under 20 minutes.
    </P>
    <P>
      This is the exact workflow the Argon team uses on a fresh account. Five modules, three phases,
      one repeatable system.
    </P>

    <H2 id="the-stack">The five-module stack</H2>
    <P>All five ship with Argon Addon by default. Toggle them in this order:</P>
    <OL>
      <li>
        <Strong>ChunkFinder</Strong> — detects loaded chunks outside spawn radius. If a chunk's
        loaded, someone's online there.
      </li>
      <li>
        <Strong>ClusterFinder</Strong> — flags unnatural block density. Tells man-made from terrain.
      </li>
      <li>
        <Strong>HoleTunnelESP</Strong> — renders mining tunnels through stone.
      </li>
      <li>
        <Strong>StorageESP</Strong> — chests, barrels, shulkers through walls.
      </li>
      <li>
        <Strong>ShulkerHole ESP</Strong> — buried shulkers inside 1x1 holes or wall cavities.
      </li>
    </OL>

    <H2 id="phase-1">Phase 1 — Wide sweep (ChunkFinder)</H2>
    <P>
      Toggle ChunkFinder. Fly out 5-10k blocks from spawn in any direction. Your map fills with
      chunk markers. Most are random nearby players — you're looking for chunks{" "}
      <em>far from any known player base</em>.
    </P>
    <P>Settings that matter:</P>
    <UL>
      <li>
        · Render Distance · <Code>128</Code> chunks (the max)
      </li>
      <li>
        · Min Distance From Spawn · <Code>4000</Code> blocks (filter out spawn-area noise)
      </li>
      <li>
        · Highlight Recently Loaded · <Code>true</Code> (catches active players)
      </li>
    </UL>
    <P>When you see 3+ chunks loaded together in a remote area, that's your target. Drop in.</P>

    <H2 id="phase-2">Phase 2 — Confirm structure (ClusterFinder + HoleTunnelESP)</H2>
    <P>
      Now toggle ClusterFinder. It scans 16-chunk radius for unnatural block density — bases create
      dense clusters of cobble, glass, or stone bricks that don't occur naturally.
    </P>
    <P>
      Pair with HoleTunnelESP. Most DonutSMP bases entrance through a mining tunnel. ClusterFinder
      shows you the base; HoleTunnelESP shows you how to get in.
    </P>
    <P>
      If ClusterFinder lights up but HoleTunnelESP shows nothing, the base is ground-level or
      sky-level. Surface bases are rarer on Donut but worth raiding when you find one — usually less
      defended.
    </P>

    <H2 id="phase-3">Phase 3 — Locate stash (StorageESP + ShulkerHole ESP)</H2>
    <P>
      Once you're within 64 blocks of the base, StorageESP and ShulkerHole ESP do the rest.
      StorageESP renders every container through walls. ShulkerHole ESP catches the buried shulkers
      — these are 80% of the loot on a serious base.
    </P>
    <P>Recommended StorageESP filters:</P>
    <UL>
      <li>
        · Filter · <Code>shulker_box, trapped_chest, ender_chest</Code> (skip regular chests —
        they're usually traps)
      </li>
      <li>
        · Tracer Lines · <Code>true</Code> (draws lines from you to each container so you don't lose
        them in dense terrain)
      </li>
      <li>
        · Group Adjacent · <Code>true</Code> (collapses storage rooms into single markers)
      </li>
    </UL>

    <Aside label="The trap-chest rule">
      90% of regular chests visible through walls on a serious DonutSMP base are TNT traps or lava
      traps. Trapped_chest and shulker_box are where the real loot is — players don't put trap items
      in shulkers because shulkers preserve inventory on drop. Filter accordingly.
    </Aside>

    <H2 id="how-long">How long does it take?</H2>
    <P>Realistic timings on a fresh account:</P>
    <UL>
      <li>
        · Phase 1 wide sweep · <Code>3-8 min</Code> per direction
      </li>
      <li>
        · Phase 2 structure confirm · <Code>4-10 min</Code> per candidate area
      </li>
      <li>
        · Phase 3 loot localisation · <Code>2-5 min</Code> once you're inside the cluster
      </li>
    </UL>
    <P>
      Total: <Strong>10-25 minutes</Strong> from logging in to standing outside someone's stash.
      Adding the fly bypass to the workflow speeds it up by 3-5×.
    </P>

    <H2 id="defense">If you're on the defensive side</H2>
    <P>Reading this and thinking about your own base? Five rules that defeat this stack:</P>
    <OL>
      <li>Build far. 10k+ blocks from spawn. Make the wide sweep boring.</li>
      <li>Don't load chunks unnecessarily. Log out before AFK at base.</li>
      <li>
        Random block-density. Don't mass-place identical blocks in tight clusters — break up your
        build with naturally-occurring blocks (stone, dirt, deepslate).
      </li>
      <li>Long entry tunnels. Make HoleTunnelESP show a tunnel that leads nowhere relevant.</li>
      <li>
        Pure shulker storage. No regular chests in the base. ShulkerHole ESP catches them, but at
        least filtering doesn't shortcut to your loot.
      </li>
    </OL>

    <H2 id="legal">A note on server rules</H2>
    <P>
      DonutSMP allows base finding via in-game mechanics (Nether-Overworld coords, public coords
      leaks, etc.). What's against rules is what the anti-cheat actively flags — Argon's ESP modules
      are passive (no packet sent to the server, purely client-side rendering) so they don't trigger
      flags. That said, the line between "passive client mods" and "cheating" is the staff's call,
      not ours. Read Donut's current rules before you raid.
    </P>
  </>
);

// ---------- Public map ----------

export const ARTICLES: Record<string, ReactNode> = {
  "best-meteor-client-addons-for-donutsmp": BestAddons,
  "how-to-fly-on-donutsmp": HowToFly,
  "donutsmp-ah-sniper-guide": AhSniperGuide,
  "how-to-find-bases-on-donutsmp": FindBases,
};
