import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Clock, Download, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { PageShell } from "../components/site-chrome";
import { POSTS, postBySlug } from "../lib/posts";
import { ARTICLES } from "../lib/post-content";
import { SITE_URL, TRACKED_DOWNLOAD_URL } from "../lib/site";

export const Route = createFileRoute("/posts/$slug")({
  component: PostPage,
  beforeLoad: ({ params }) => {
    if (!postBySlug(params.slug) || !ARTICLES[params.slug]) {
      throw notFound();
    }
  },
  head: ({ params }) => {
    const meta = postBySlug(params.slug);
    if (!meta) return {};
    const url = `${SITE_URL}/posts/${meta.slug}`;
    return {
      meta: [
        { title: meta.title },
        { name: "description", content: meta.description },
        { name: "keywords", content: meta.keywords },
        { name: "article:published_time", content: meta.date },
        { property: "og:title", content: meta.title },
        { property: "og:description", content: meta.description },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        { property: "article:published_time", content: meta.date },
        { property: "article:section", content: meta.category },
        { property: "og:image", content: `${SITE_URL}/og-card.png` },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: meta.title },
        { name: "twitter:description", content: meta.description },
        { name: "twitter:image", content: `${SITE_URL}/og-card.png` },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: meta.title,
            description: meta.description,
            datePublished: meta.date,
            dateModified: meta.date,
            wordCount: meta.wordCount,
            keywords: meta.keywords,
            articleSection: meta.category,
            author: {
              "@type": "Organization",
              name: "Argon Addon",
              url: SITE_URL,
            },
            publisher: {
              "@type": "Organization",
              name: "Argon Addon",
              logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon.png` },
            },
            mainEntityOfPage: url,
            image: `${SITE_URL}/og-card.png`,
            url,
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
              { "@type": "ListItem", position: 3, name: meta.title, item: url },
            ],
          }),
        },
      ],
    };
  },
});

function PostPage() {
  const { slug } = Route.useParams();
  const meta = postBySlug(slug);
  const body = ARTICLES[slug];
  if (!meta || !body) return null;

  const related = POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <PageShell>
      <article className="mx-auto max-w-3xl px-6 pb-24">
        <nav aria-label="Breadcrumb" className="mb-4 font-mono text-xs text-muted-foreground">
          <Link to="/" className="hover:text-foreground">
            Home
          </Link>
          <span className="mx-2 opacity-60">/</span>
          <Link to="/posts" className="hover:text-foreground">
            Blog
          </Link>
          <span className="mx-2 opacity-60">/</span>
          <span className="text-foreground">{meta.category}</span>
        </nav>

        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-primary">
          <span>{meta.category}</span>
          <span className="opacity-50">·</span>
          <span>{meta.date}</span>
          <span className="opacity-50">·</span>
          <span className="inline-flex items-center gap-1 normal-case tracking-normal">
            <Clock className="h-3 w-3" /> {meta.readMinutes} min read
          </span>
        </div>

        <h1 className="reveal mt-4 text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl">
          {meta.title}
        </h1>
        <p className="reveal reveal-delay-1 mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {meta.description}
        </p>

        <hr className="my-10 border-border" />

        <div className="prose-article">{body}</div>

        {/* Inline CTA */}
        <section className="mt-14 rounded-2xl border border-primary/30 bg-gradient-to-br from-card to-secondary/40 p-7 shadow-glow">
          <h2 className="text-xl font-bold tracking-tight md:text-2xl">
            Want the .jar? It's free.
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Everything in this guide ships in the one Argon Addon .jar. Drop it in your Fabric mods
            folder.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={TRACKED_DOWNLOAD_URL}
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-90"
              data-testid="post-download-btn"
            >
              <Download className="h-4 w-4" /> Download Argon Addon
            </a>
            <Link
              to="/install"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold transition hover:border-primary/50"
            >
              Install guide
            </Link>
          </div>
        </section>

        {/* Related */}
        <section className="mt-16">
          <h2 className="font-mono text-xs uppercase tracking-widest text-primary">Read next</h2>
          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                to="/posts/$slug"
                params={{ slug: r.slug }}
                className="group rounded-xl border border-border bg-card p-5 transition hover:border-primary/40"
              >
                <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  {r.category} · {r.readMinutes} min
                </div>
                <div className="mt-2 text-sm font-semibold leading-snug">{r.title}</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-primary opacity-0 transition group-hover:opacity-100">
                  Read <ChevronRight className="h-3 w-3" />
                </div>
              </Link>
            ))}
          </div>
          <Link
            to="/posts"
            className="mt-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> All posts
          </Link>
        </section>
      </article>
    </PageShell>
  );
}

// Shared prose styles for article bodies (referenced as className="prose-article")
// Defined locally because there's no @tailwindcss/typography in this project.
export function ProseArticle({ children }: { children: ReactNode }) {
  return <div className="prose-article">{children}</div>;
}
