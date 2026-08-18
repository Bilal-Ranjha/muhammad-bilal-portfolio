import { NextResponse } from "next/server";

const submissions = new Map<string, number>();
const cooldownMs = 30_000;

type Inquiry = { name?: unknown; email?: unknown; message?: unknown; projectType?: unknown; budget?: unknown; pageUrl?: unknown; website?: unknown };

function text(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character] ?? character);
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_EMAIL;
  const from = process.env.EMAIL_FROM;
  const genericError = "Sorry, your message could not be sent. Please try again or contact me by email.";

  if (!apiKey || !recipient || !from) return NextResponse.json({ ok: false, message: genericError }, { status: 503 });

  let payload: Inquiry;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: genericError }, { status: 400 });
  }

  if (text(payload.website, 200)) return NextResponse.json({ ok: true });

  const name = text(payload.name, 120);
  const email = text(payload.email, 254);
  const message = text(payload.message, 5_000);
  const projectType = text(payload.projectType, 120);
  const budget = text(payload.budget, 120);
  const pageUrl = text(payload.pageUrl, 2_000);

  if (!name || !/^\S+@\S+\.\S+$/.test(email) || !message) return NextResponse.json({ ok: false, message: genericError }, { status: 400 });

  const clientIp = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const now = Date.now();
  const previousSubmission = submissions.get(clientIp);
  if (previousSubmission && now - previousSubmission < cooldownMs) return NextResponse.json({ ok: false, message: genericError }, { status: 429 });
  submissions.set(clientIp, now);

  const submittedAt = new Date().toISOString();
  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Message / Project Requirements: ${message}`,
    `Submitted At: ${submittedAt}`,
    pageUrl ? `Page URL: ${pageUrl}` : "",
    projectType ? `Project Type: ${projectType}` : "",
    budget ? `Budget: ${budget}` : "",
  ].filter(Boolean);

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [recipient],
        reply_to: email,
        subject: `New Portfolio Inquiry from ${name}`,
        text: lines.join("\n\n"),
        html: `<h2>New Portfolio Inquiry</h2>${lines.map((line) => `<p>${escapeHtml(line)}</p>`).join("")}`,
      }),
    });
    if (!response.ok) throw new Error("Email provider rejected the request");
  } catch {
    submissions.delete(clientIp);
    return NextResponse.json({ ok: false, message: genericError }, { status: 502 });
  }

  return NextResponse.json({ ok: true, message: "Thanks! Your message has been sent successfully. I’ll get back to you soon." });
}
