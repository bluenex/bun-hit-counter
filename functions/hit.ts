/// <reference types="@cloudflare/workers-types" />

export interface Env {
  HIT_COUNTER: KVNamespace;
}

export async function onRequest(context: { env: Env }): Promise<Response> {
  const { env } = context;

  let rawCount = await env.HIT_COUNTER.get("count");

  const count = rawCount ? parseInt(rawCount) + 1 : 1;

  await env.HIT_COUNTER.put("count", count.toString());

  return new Response(JSON.stringify({ hits: count }), {
    headers: { "Content-Type": "application/json" },
  });
}
