import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "msvalidate.01", content: "2F5FBB210D978E81CF8D081D87F0921F" },
      { title: "Argon Addon — Best Meteor Client Addon for DonutSMP (Free Download)" },
      {
        name: "description",
        content:
          "Argon Addon — the only Meteor Client addon with a working fly bypass on DonutSMP. Free .jar download, 90+ modules for Crystal PvP, base finding, and AH sniping on Minecraft 1.21.11.",
      },
      {
        name: "keywords",
        content:
          "argon addon, argon addon download, argon addon donutsmp, best addon donut smp, meteor client addons donutsmp, donutsmp fly bypass, meteor client donutsmp",
      },
      { name: "author", content: "Argon Addon" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "googlebot", content: "index, follow" },
      { name: "application-name", content: "Argon Addon" },
      { name: "apple-mobile-web-app-title", content: "Argon Addon" },
      { property: "og:site_name", content: "Argon Addon" },
      { property: "og:locale", content: "en_US" },
      { property: "og:title", content: "Argon Addon — Best Meteor Client Addon for DonutSMP" },
      {
        property: "og:description",
        content:
          "Only working fly bypass on DonutSMP. 90+ Meteor Client modules. Free .jar for Minecraft 1.21.11.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://argonaddon.com" },
      {
        property: "og:image",
        content: "https://argonaddon.com/og-card.png",
      },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:secure_url", content: "https://argonaddon.com/og-card.png" },
      {
        property: "og:image:alt",
        content:
          "Argon Addon × DonutSMP — the only working DonutSMP fly bypass. Free Meteor Client addon for Minecraft 1.21.11.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@argonaddon" },
      { name: "twitter:title", content: "Argon Addon — Best Meteor Client Addon for DonutSMP" },
      {
        name: "twitter:description",
        content: "Only working fly bypass on DonutSMP. 90+ Meteor Client modules. Free download.",
      },
      {
        name: "twitter:image",
        content: "https://argonaddon.com/og-card.png",
      },
      {
        name: "twitter:image:alt",
        content: "Argon Addon × DonutSMP — the only working DonutSMP fly bypass.",
      },
      { name: "theme-color", content: "#e63a2e" },
      { name: "format-detection", content: "telephone=no" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", sizes: "any", href: "/favicon.png" },
      { rel: "shortcut icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", sizes: "1024x1024", href: "/favicon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Argon Addon",
          alternateName: ["Argon Meteor Client Addon", "Argon DonutSMP Addon"],
          url: "https://argonaddon.com",
          image: "https://argonaddon.com/og-card.png",
          logo: "https://argonaddon.com/favicon.png",
          description:
            "Argon Addon — the Meteor Client addon for DonutSMP and Minecraft 1.21.11. Working fly bypass, 90+ modules, free .jar download.",
          inLanguage: "en",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://argonaddon.com/?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Argon Addon",
          url: "https://argonaddon.com",
          logo: "https://argonaddon.com/favicon.png",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
