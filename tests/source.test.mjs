import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";
test("portfolio preserves identity, projects, contacts and anchor destinations", async () => {
  const read = (path) =>
    readFile(new URL("../" + path, import.meta.url), "utf8");
  const [layout, data, app, hero, about, work, skills, contact] =
    await Promise.all(
      [
        "app/layout.tsx",
        "data/portfolio.ts",
        "components/PortfolioApp.tsx",
        "sections/HeroSection.tsx",
        "sections/AboutSection.tsx",
        "sections/ProjectsSection.tsx",
        "sections/SkillsSection.tsx",
        "sections/ContactSection.tsx",
      ].map(read),
    );
  assert.match(layout, /Full-Stack Developer & AI Solutions Developer/);
  for (const content of [
    "TaskFlow AI",
    "Tax Wiser",
    "MediBook AI",
    "BR Chat AI",
    "m.bilalranjha030@gmail.com",
    "https://www.fiverr.com/s/WE9qWvB",
  ])
    assert.ok(data.includes(content));
  assert.match(app, /ProcessSection/);
  for (const [source, id] of [
    [hero, "home"],
    [about, "about"],
    [about, "experience"],
    [work, "projects"],
    [skills, "skills"],
    [contact, "contact"],
  ])
    assert.ok(source.includes('id="' + id + '"'));
});
test("required branding and genuine project assets exist", async () => {
  for (const asset of [
    "favicon.svg",
    "apple-touch-icon.png",
    "og.png",
    "bilal.jpg",
    "projects/br-chat-ai.svg",
    "projects/medibook-ai.webp",
    "projects/tax-wiser.webp",
  ])
    await access(new URL("../public/" + asset, import.meta.url));
});

test("TaskFlow points only to the owner's application and genuine captures", async () => {
  const data = await readFile(new URL("../data/portfolio.ts", import.meta.url), "utf8");
  const entry = data.slice(data.indexOf('title: "TaskFlow AI"'), data.indexOf('title: "Tax Wiser"'));
  const liveLinks = [...entry.matchAll(/liveHref: "([^"]+)"/g)].map(match => match[1]);
  assert.deepEqual(liveLinks, ["https://taskflowai-bilal.vercel.app/"]);
  assert.ok(entry.includes('liveLabel: "Visit Live Website"'));
  for (const asset of ["taskflow-dashboard-public.png"]) {
    assert.ok(entry.includes(asset));
    await access(new URL("../public/projects/" + asset, import.meta.url));
  }
  assert.ok(entry.includes("Authenticated project management, AI behavior"));
});
