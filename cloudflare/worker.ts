interface Env {
  ASSETS: {
    fetch(request: Request): Promise<Response>;
  };
}

const SPA_FALLBACK = "/index.html";

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const assetResponse = await env.ASSETS.fetch(request);

    if (assetResponse.status !== 404) {
      return assetResponse;
    }

    const isNavigationRequest =
      request.method === "GET" || request.method === "HEAD";
    const acceptsHTML = (request.headers.get("accept") ?? "").includes(
      "text/html"
    );

    if (isNavigationRequest && acceptsHTML) {
      const fallbackUrl = new URL(request.url);
      fallbackUrl.pathname = SPA_FALLBACK;

      return env.ASSETS.fetch(new Request(fallbackUrl.toString(), request));
    }

    return new Response("Not Found", { status: 404 });
  },
};
