import { useEffect, useState } from "react";

async function fetchDownloadCount(): Promise<number | null> {
  try {
    const res = await fetch("/api/downloads", { cache: "no-store" });
    if (!res.ok) return null;
    const data = (await res.json()) as { count?: number };
    return typeof data.count === "number" ? data.count : null;
  } catch {
    return null;
  }
}

export function useDownloadCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    void fetchDownloadCount().then(setCount);
  }, []);

  return count;
}

export function DownloadCountBadge({
  className = "inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-3 py-1 font-mono text-xs text-muted-foreground",
}: {
  className?: string;
}) {
  const count = useDownloadCount();
  if (count === null) return null;

  return (
    <span className={className} data-testid="download-count-badge" title="Total .jar downloads">
      {count.toLocaleString()} downloads
    </span>
  );
}

export function DownloadCountLine({ className = "" }: { className?: string }) {
  const count = useDownloadCount();
  if (count === null) return null;

  return (
    <p
      className={`font-mono text-xs text-muted-foreground ${className}`}
      data-testid="download-count-line"
    >
      {count.toLocaleString()} total downloads
    </p>
  );
}
