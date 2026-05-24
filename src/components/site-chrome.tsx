import { Link } from "@tanstack/react-router";
import { Download } from "lucide-react";
import type { ReactNode } from "react";

const ArgonLogo = () => (
  <div className="flex items-center gap-2.5">
    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-brand font-mono text-sm font-bold text-primary-foreground shadow-glow ring-1 ring-primary/60">
      AR
    </div>
    <span className="text-lg font-semibold tracking-tight">Argon</span>
  </div>
);

export function SiteNav() {
  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-border bg-card/70 px-5 py-2.5 backdrop-blur-xl">
        <Link to="/" className="contents" data-testid="nav-home-link">
          <ArgonLogo />
        </Link>
        <div className="hidden items-center gap-6 text-sm text-muted-foreground lg:flex">
          <Link
            to="/modules"
            className="transition hover:text-foreground"
            data-testid="nav-modules"
          >
            Modules
          </Link>
          <Link
            to="/install"
            className="transition hover:text-foreground"
            data-testid="nav-install"
          >
            Install
          </Link>
          <Link
            to="/donutsmp-guide"
            className="transition hover:text-foreground"
            data-testid="nav-guide"
          >
            DonutSMP Guide
          </Link>
          <Link
            to="/donutsmp-fly-bypass"
            className="transition hover:text-foreground"
            data-testid="nav-fly"
          >
            Fly Bypass
          </Link>
          <Link to="/posts" className="transition hover:text-foreground" data-testid="nav-blog">
            Blog
          </Link>
          <Link
            to="/changelog"
            className="transition hover:text-foreground"
            data-testid="nav-changelog"
          >
            Changelog
          </Link>
        </div>
        <Link
          to="/"
          hash="download"
          className="inline-flex items-center gap-1.5 rounded-full bg-gradient-brand px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow transition hover:opacity-90"
          data-testid="nav-download-btn"
        >
          <Download className="h-3.5 w-3.5" /> Download
        </Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 md:flex-row md:items-start md:justify-between">
        <div className="flex max-w-md flex-col gap-3">
          <ArgonLogo />
          <p className="text-xs leading-relaxed text-muted-foreground">
            Argon Addon is a community Meteor Client addon for DonutSMP and Minecraft 1.21.11. The
            only public addon with a working DonutSMP fly bypass. Not affiliated with Mojang,
            Microsoft, Meteor Development, or DonutSMP.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm text-muted-foreground md:grid-cols-3">
          <Link to="/modules" className="hover:text-foreground">
            Modules
          </Link>
          <Link to="/install" className="hover:text-foreground">
            Install Guide
          </Link>
          <Link to="/donutsmp-guide" className="hover:text-foreground">
            DonutSMP Guide
          </Link>
          <Link to="/donutsmp-fly-bypass" className="hover:text-foreground">
            DonutSMP Fly Bypass
          </Link>
          <Link to="/posts" className="hover:text-foreground">
            Blog
          </Link>
          <Link to="/changelog" className="hover:text-foreground">
            Changelog
          </Link>
          <Link to="/" hash="download" className="hover:text-foreground">
            Download
          </Link>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl border-t border-border px-6 pt-6 font-mono text-xs text-muted-foreground">
        © 2026 Argon Addon · Built by players, for players
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="pt-32">{children}</main>
      <SiteFooter />
    </div>
  );
}
