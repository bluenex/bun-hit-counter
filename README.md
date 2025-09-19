# Bun Hit Counter

A simple hit counter built with Bun, React, Tailwind CSS, and Cloudflare Pages with KV storage.

## Quick Start

To install dependencies:

```bash
bun install
```

To build and run local preview using wrangler:

```bash
bun run preview
```

This will build the project and start a local Cloudflare Pages development server with KV namespace support.

## Setup

The KV namespace was created using:

```bash
npx wrangler kv namespace create HIT_COUNTER
```

## Deployment

Deploy to Cloudflare Pages by connecting your repository. The hit counter will automatically work with Cloudflare KV in production.

This project was created using `bun init` in bun v1.2.21. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.
