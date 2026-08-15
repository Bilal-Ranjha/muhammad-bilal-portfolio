import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("portfolio source keeps the production UI content", async () => {
  const [page, layout, data, hero, skills, contact] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../data/portfolio.ts", import.meta.url), "utf8"),
    readFile(new URL("../sections/HeroSection.tsx", import.meta.url), "utf8"),
    readFile(new URL("../sections/SkillsSection.tsx", import.meta.url), "utf8"),
    readFile(new URL("../sections/ContactSection.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(page, /PortfolioApp/);
  assert.match(layout, /Bilal Ranjha \| React Developer & AI Chatbot Developer/);
  assert.match(data, /m\.bilalranjha030@gmail\.com/);
  assert.match(data, /https:\/\/www\.fiverr\.com\/s\/WE9qWvB/);
  assert.match(data, /BR Chat AI/);
  assert.match(data, /MediBook AI/);
  assert.match(data, /Tax Wiser/);
  assert.match(hero, /useTypingText/);
  assert.doesNotMatch(skills, /progress/);
  assert.match(contact, /Submit Project Inquiry/);
});

test("standard Next project has required public assets", async () => {
  await access(new URL("../public/favicon.svg", import.meta.url));
  await access(new URL("../public/og.png", import.meta.url));
  await access(new URL("../public/projects/br-chat-ai.svg", import.meta.url));
  await access(new URL("../public/projects/medibook-ai.webp", import.meta.url));
  await access(new URL("../public/projects/tax-wiser.webp", import.meta.url));
});
