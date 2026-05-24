const COUNT_KEY = "count";

/** Single global counter — one DO instance, durable storage, survives deploys. */
export class DownloadCounter {
  constructor(private state: DurableObjectState) {}

  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/increment" && request.method === "POST") {
      const count = await this.increment();
      return Response.json({ count });
    }

    const count = await this.getCount();
    return Response.json({ count });
  }

  private async getCount(): Promise<number> {
    const stored = await this.state.storage.get<number>(COUNT_KEY);
    return typeof stored === "number" && Number.isFinite(stored) ? stored : 0;
  }

  private async increment(): Promise<number> {
    const next = (await this.getCount()) + 1;
    await this.state.storage.put(COUNT_KEY, next);
    return next;
  }
}
