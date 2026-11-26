import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { writeFile } from "node:fs/promises";
const root = new URL("../", import.meta.url);
const icon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180"><rect width="180" height="180" fill="#000000"/><path d="M0 178h180" stroke="#10b981" stroke-width="4"/><text x="25" y="114" fill="#ffffff" font-family="Arial" font-size="82" font-weight="700" letter-spacing="-7">BR</text><rect x="142" y="103" width="12" height="12" fill="#12e6a0"/></svg>';
for (const name of [
  "app/icon.svg",
  "public/favicon.svg",
  "public/apple-icon.svg",
])
  await writeFile(new URL(name, root), icon);
await sharp(Buffer.from(icon))
  .png()
  .toFile(fileURLToPath(new URL("public/apple-touch-icon.png", root)));
let points = "";
for (let y = 0; y < 16; y++)
  for (let x = 0; x < 35; x++)
    points +=
      '<circle cx="' +
      (600 + x * 20) +
      '" cy="' +
      (370 + y * 13 + Math.sin(x * 0.2 + y * 0.1) * 32) +
      '" r="1.5" fill="#10b981" opacity=".45"/>';
const og =
  '<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#000000"/>' +
  points +
  '<text x="72" y="100" fill="#ffffff" font-family="Arial" font-size="30" font-weight="700">BR<tspan fill="#12e6a0">.</tspan></text><text x="72" y="210" fill="#12e6a0" font-family="Arial" font-size="16" letter-spacing="3">FULL-STACK DEVELOPMENT &amp; AI SOLUTIONS</text><text x="72" y="304" fill="#ffffff" font-family="Arial" font-size="61" letter-spacing="-2">Building powerful software.</text><text x="72" y="384" fill="#12e6a0" font-family="Arial" font-size="61" letter-spacing="-2">Engineering digital solutions.</text><path d="M72 480H1128" stroke="#1d2923"/><text x="72" y="544" fill="#ffffff" font-family="Arial" font-size="22">Bilal Ranjha</text><text x="1128" y="544" text-anchor="end" fill="#a1a1aa" font-family="Arial" font-size="18">bilalranjha.vercel.app</text></svg>';
await sharp(Buffer.from(og))
  .png()
  .toFile(fileURLToPath(new URL("public/og.png", root)));
console.log("Generated emerald brand icons and 1200×630 sharing image.");
