/** Stable id — all download counts use one global Durable Object instance. */
const COUNTER_NAME = "global";

type CounterNamespace = DurableObjectNamespace;

function counterStub(namespace: CounterNamespace) {
  const id = namespace.idFromName(COUNTER_NAME);
  return namespace.get(id);
}

async function readCount(namespace: CounterNamespace): Promise<number> {
  const res = await counterStub(namespace).fetch("https://counter/");
  if (!res.ok) {
    throw new Error(`download counter read failed: ${res.status}`);
  }
  const data = (await res.json()) as { count?: number };
  return typeof data.count === "number" ? data.count : 0;
}

export async function getDownloadCount(namespace?: CounterNamespace): Promise<number> {
  if (!namespace) {
    console.warn("[download] DOWNLOAD_COUNTER binding missing — count unavailable");
    return 0;
  }
  return readCount(namespace);
}

export async function recordDownload(namespace?: CounterNamespace): Promise<number> {
  if (!namespace) {
    console.warn("[download] DOWNLOAD_COUNTER binding missing — download not counted");
    return 0;
  }
  const res = await counterStub(namespace).fetch("https://counter/increment", {
    method: "POST",
  });
  if (!res.ok) {
    throw new Error(`download counter increment failed: ${res.status}`);
  }
  const data = (await res.json()) as { count?: number };
  const count = typeof data.count === "number" ? data.count : 0;
  console.log(`[download] total=${count}`);
  return count;
}
