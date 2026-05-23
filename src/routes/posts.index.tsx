import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock } from "lucide-react";
import { PageShell } from "../components/site-chrome";
import { POSTS } from "../lib/posts";

const SITE_URL = "https://argonaddon.com";

export const Route = createFileRoute("/posts/")({
  component: PostsIndex,
  head: () => ({
    meta: [
      {
        title: "Argon Addon Blog — Guides, Tutorials & DonutSMP Strategy",
      },
      {
        name: "description",
        content:
          "Argon Addon's guides and tutorials for DonutSMP and Meteor Client. AH sniper setups, fly bypass walkthroughs, base finder strategy, and module deep-dives.",
      },
      {
        name: "keywords",
        content:
          "argon addon blog, donutsmp guides, meteor client tutorials, donutsmp strategy, donutsmp ah sniper guide, how to fly donutsmp",
      },
      { property: "og:title", content: "Argon Addon Blog — DonutSMP Guides & Tutorials" },
      {
        property: "og:description",
        content: "Guides, tutorials, and DonutSMP strategy from the people who build Argon Addon.",
      },
      { property: "og:url", content: `${SITE_URL}/posts` },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/posts` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Argon Addon Blog",
          url: `${SITE_URL}/posts`,
          description: "Guides, tutorials, and DonutSMP strategy from the Argon Addon team.",
          blogPost: POSTS.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            description: p.description,
            datePublished: p.date,
            url: `${SITE_URL}/posts/${p.slug}`,
            wordCount: p.wordCount,
            keywords: p.keywords,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/posts` },
          ],
        }),
      },
    ],
  }),
});

function PostsIndex() {
  return (
    <PageShell>
      <article className="mx-auto max-w-5xl px-6 pb-24">
        <nav aria-label="Breadcrumb" className="mb-4 font-mono text-xs text-muted-foreground">
          <Link to="/" className="hover:text-foreground">
            Home
          </Link>
          <span className="mx-2 opacity-60">/</span>
          <span className="text-foreground">Blog</span>
        </nav>

        <div className="font-mono text-xs uppercase tracking-widest text-primary">
          Blog · {POSTS.length} articles
        </div>
        <h1 className="reveal mt-3 text-4xl font-bold tracking-tight md:text-5xl">
          DonutSMP guides, written by people who actually play.
        </h1>
        <p className="reveal reveal-delay-1 mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          AH sniper setups, fly bypass walkthroughs, base-finder workflows, and module deep-dives.
          No filler, no AI-spam, no "5 reasons why X is revolutionary." Just what works on the
          server right now.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {POSTS.map((p) => (
            <Link
              key={p.slug}
              to="/posts/$slug"
              params={{ slug: p.slug }}
              className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-7 transition hover:border-primary/50 hover:shadow-glow"
              data-testid={`post-card-${p.slug}`}
            >
              <div>
                <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
                  <span className="rounded-full bg-primary/15 px-2 py-0.5 uppercase tracking-wider text-primary">
                    {p.category}
                  </span>
                  <span>{p.date}</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {p.readMinutes} min
                  </span>
                </div>
                <h2 className="mt-4 text-xl font-bold leading-snug">{p.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
              </div>
              <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                Read article{" "}
                <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </article>
    </PageShell>
  );
}
