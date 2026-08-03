import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server renders the polished portfolio shell", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Muhammad Bilal/);
  assert.match(html, /Building Modern Web Experiences and AI Solutions/);
  assert.match(html, /Available for Freelance/);
  assert.match(html, /Start a focused project conversation/);
  assert.doesNotMatch(html, /Your site is taking shape|codex-preview|react-loading-skeleton/i);
});

test("portfolio source includes production polish assets and data", async () => {
  const [data, hero, skills, readme] = await Promise.all([
    readFile(new URL("../data/portfolio.ts", import.meta.url), "utf8"),
    readFile(new URL("../sections/HeroSection.tsx", import.meta.url), "utf8"),
    readFile(new URL("../sections/SkillsSection.tsx", import.meta.url), "utf8"),
    readFile(new URL("../README.md", import.meta.url), "utf8"),
  ]);

  assert.match(data, /typingRoles/);
  assert.match(data, /br-chat-ai\.svg/);
  assert.match(data, /medibook-ai\.svg/);
  assert.match(hero, /useTypingText/);
  assert.match(skills, /progress/);
  assert.match(readme, /Screenshots/);

  await assert.rejects(access(new URL("../app/_sites-preview", import.meta.url)));
  await access(new URL("../public/og.png", import.meta.url));
  await access(new URL("../public/projects/br-chat-ai.svg", import.meta.url));
  await access(new URL("../public/projects/medibook-ai.svg", import.meta.url));
});
