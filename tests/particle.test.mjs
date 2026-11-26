import assert from "node:assert/strict";
import test from "node:test";
import fs from "node:fs";
import vm from "node:vm";
import ts from "typescript";
test("particles stop offscreen, in hidden tabs, for reduced motion, and on cleanup", () => {
  let effect, intersection, visibility, preference, disconnected = 0, id = 0;
  const frames = new Set();
  const context = { clearRect() {}, beginPath() {}, arc() {}, fill() {}, setTransform() {} };
  const canvas = { getContext: () => context, getBoundingClientRect: () => ({ width: 390, height: 780 }) };
  const media = { matches: false, addEventListener: (_, fn) => { preference = fn; }, removeEventListener() {} };
  const document = { hidden: false, addEventListener: (_, fn) => { visibility = fn; }, removeEventListener() {} };
  const exports = {};
  const react = { useRef: () => ({ current: canvas }), useState: () => [false, () => {}], useEffect: fn => { effect = fn; } };
  const code = ts.transpileModule(fs.readFileSync(new URL("../components/ParticleWave.tsx", import.meta.url), "utf8"), { compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX } }).outputText;
  vm.runInNewContext(code, {
    exports, require: name => name === "react" ? react : { jsx() {}, jsxs() {} },
    window: { matchMedia: () => media, devicePixelRatio: 3 }, document,
    requestAnimationFrame: () => { frames.add(++id); return id; },
    cancelAnimationFrame: frame => frames.delete(frame),
    IntersectionObserver: class { constructor(fn) { intersection = fn; } observe() {} disconnect() { disconnected++; } },
    ResizeObserver: class { observe() {} disconnect() { disconnected++; } },
  });
  exports.ParticleWave(); const cleanup = effect();
  assert.equal(canvas.width, 585);
  assert.equal(frames.size, 1);
  intersection([{ isIntersecting: false }]); assert.equal(frames.size, 0);
  intersection([{ isIntersecting: true }]); assert.equal(frames.size, 1);
  document.hidden = true; visibility(); assert.equal(frames.size, 0);
  document.hidden = false; visibility(); assert.equal(frames.size, 1);
  media.matches = true; preference(); assert.equal(frames.size, 0);
  media.matches = false; preference(); assert.equal(frames.size, 1);
  cleanup(); assert.equal(frames.size, 0); assert.equal(disconnected, 2);
});
