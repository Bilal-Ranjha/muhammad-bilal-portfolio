import assert from "node:assert/strict";
import test from "node:test";
import fs from "node:fs";
import vm from "node:vm";
import ts from "typescript";


function harness(send, options, accessKey = "mock-public-key") {
  const states = []; let cursor = 0; let focused;
  const react = { useRef(initial) { const index = cursor++; if (!(index in states)) states[index] = { current: initial }; return states[index]; }, useState(initial) {
    const index = cursor++;
    if (!(index in states)) states[index] = initial;
    return [states[index], value => { states[index] = typeof value === "function" ? value(states[index]) : value; }];
  }};
  const exports = {};
  const code = ts.transpileModule(fs.readFileSync(new URL("../hooks/useContactForm.ts", import.meta.url), "utf8"), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  vm.runInNewContext(code, { exports, process: { env: { NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY: accessKey } }, require: () => react, fetch: send, AbortSignal, window: { location: { origin: "https://example.com", pathname: "/", search: "?private=true" } } });
  const render = () => { cursor = 0; return exports.useContactForm(options); };
  const event = { preventDefault() {}, currentTarget: { querySelector: selector => ({ focus: () => { focused = selector; } }) } };
  const fill = () => { for (const [key, value] of Object.entries({ name: "Tester", email: "test@example.com", message: "A project", projectType: "SaaS", budget: "Not sure" })) render().updateField(key, value); render().setCaptchaToken("mock-captcha-token"); };
  return { render, event, fill, focused: () => focused };
}
test("full and compact validation focus first error without sending", async () => {
  let calls = 0;
  for (const compact of [false, true]) {
    const f = harness(() => { calls++; }, { requireProjectDetails: !compact });
    await f.render().handleSubmit(f.event);
    assert.equal(Object.keys(f.render().errors).length, compact ? 4 : 6);
    assert.equal(f.focused(), '[name="name"]');
  }
  assert.equal(calls, 0);
});
test("pending submission disables repeat sends and success clears fields", async () => {
  let resolve; let calls = 0; let body;
  const f = harness((url, options) => { calls++; body = JSON.parse(options.body); return new Promise(done => { resolve = done; }); });
  f.fill();
  const sameRender = f.render();
  const pending = sameRender.handleSubmit(f.event);
  await sameRender.handleSubmit(f.event);
  assert.equal(f.render().isSubmitting, true);
  await f.render().handleSubmit(f.event);
  assert.equal(calls, 1);
  assert.equal(body.pageUrl, "https://example.com/");
  resolve({ ok: true, json: async () => ({ success: true }) });
  await pending;
  assert.equal(f.render().status, "success");
  assert.equal(f.render().values.name, "");
  assert.equal(f.render().isSubmitting, false);
});
test("provider, malformed response and network failures preserve retry values", async () => {
  for (const send of [
    async () => ({ ok: false, json: async () => ({ ok: false }) }),
    async () => ({ ok: true, json: async () => ({}) }),
    async () => { throw new Error("Offline"); },
  ]) {
    const f = harness(send); f.fill();
    await f.render().handleSubmit(f.event);
    assert.equal(f.render().status, "error");
    assert.equal(f.render().values.message, "A project");
    assert.equal(f.render().isSubmitting, false);
  }
});


test("both forms submit directly with all fields, public key and captcha", async () => {
  for (const compact of [false, true]) {
    let calls = 0;
    const f = harness(async (url, options) => {
      calls++;
      assert.equal(url, "https://api.web3forms.com/submit");
      const body = JSON.parse(options.body);
      assert.equal(body.access_key, "mock-public-key");
      assert.equal(body["h-captcha-response"], "mock-captcha-token");
      assert.equal(body.name, "Tester");
      assert.equal(body.email, "test@example.com");
      assert.equal(body.message, "A project");
      assert.equal(body.projectType, compact ? "" : "SaaS");
      assert.equal(body.budget, compact ? "" : "Not sure");
      assert.equal(body.botcheck, false);
      assert.equal(body.pageUrl, "https://example.com/");
      assert.equal(options.credentials, "omit");
      assert.equal(options.redirect, "error");
      assert.ok(options.signal instanceof AbortSignal);
      return Response.json({ success: true });
    }, { requireProjectDetails: !compact });
    f.fill();
    if (compact) { f.render().updateField("budget", ""); f.render().updateField("projectType", ""); }
    await f.render().handleSubmit(f.event);
    assert.equal(calls, 1);
    assert.equal(f.render().status, "success");
    assert.equal(f.render().captchaVersion, 1);
  }
});
test("both forms reject HTTP failures, false confirmations, malformed JSON and timeouts", async () => {
  const responses = [
    () => Response.json({ success: true }, { status: 429 }),
    () => Response.json({ success: true }, { status: 500 }),
    ...[null, [], {}, { success: false }, { success: "true" }].map(body => () => Response.json(body)),
    () => new Response("invalid-json"),
    () => { throw new DOMException("Timeout", "TimeoutError"); },
  ];
  for (const compact of [true, false]) for (const response of responses) {
    let calls = 0;
    const f = harness(async () => { calls++; return response(); }, { requireProjectDetails: !compact });
    f.fill(); await f.render().handleSubmit(f.event);
    assert.equal(f.render().status, "error");
    assert.equal(f.render().values.message, "A project");
    assert.equal(f.render().isSubmitting, false);
    await f.render().handleSubmit(f.event);
    assert.equal(calls, 1, "spent captcha must not be reused");
    f.render().setCaptchaToken("fresh-token");
    await f.render().handleSubmit(f.event);
    assert.equal(calls, 2, "manual retry with fresh captcha is allowed");
  }
});
test("missing key, honeypots, expired captcha and oversized values never send", async () => {
  for (const scenario of ["key", "website", "botcheck", "captcha", "length", "newline"]) {
    let calls = 0;
    const f = harness(async () => { calls++; }, undefined, scenario === "key" ? " " : "mock-public-key");
    f.fill();
    if (scenario === "website") f.render().updateField("website", "spam");
    if (scenario === "captcha") f.render().setCaptchaToken("");
    if (scenario === "length") f.render().updateField("message", "x".repeat(5001));
    if (scenario === "newline") f.render().updateField("name", "A\nB");
    if (scenario === "botcheck") f.event.currentTarget.querySelector = () => ({ checked: true });
    await f.render().handleSubmit(f.event);
    assert.equal(calls, 0);
    assert.notEqual(f.render().status, "success");
  }
});
test("only the public form key is referenced and no server delivery remains", () => {
  const hook = fs.readFileSync(new URL("../hooks/useContactForm.ts", import.meta.url), "utf8");
  assert.deepEqual([...hook.matchAll(/process\.env\.(\w+)/g)].map(match => match[1]), ["NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY"]);
  assert.equal(fs.existsSync(new URL("../app/api/contact/route.ts", import.meta.url)), false);
  const form = fs.readFileSync(new URL("../components/InquiryForm.tsx", import.meta.url), "utf8");
  assert.ok(form.includes('sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"'));
  assert.ok(form.includes('reCaptchaCompat={false}'));
});
