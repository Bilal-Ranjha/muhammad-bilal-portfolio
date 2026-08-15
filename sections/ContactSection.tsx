"use client";

import { Send } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/Ui";
import { contactHighlights, projectTypes, socialLinks } from "@/data/portfolio";
import { useContactForm } from "@/hooks/useContactForm";

export function ContactSection() {
  const { values, errors, emailDraftReady, updateField, handleSubmit } = useContactForm();

  return (
    <section id="contact" className="bg-slate-950/60 px-5 py-16 sm:py-20 lg:px-8">
      <Reveal className="mx-auto max-w-[80rem]">
        <SectionHeader eyebrow="Contact" title="Let's Build Something Useful" text="Share the basics of your project or contact me directly through Fiverr, GitHub, or email." />
        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <form className="relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.07] p-5 shadow-2xl shadow-black/20 backdrop-blur sm:p-8" onSubmit={handleSubmit} noValidate>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-slate-200">
                Name
                <input className="field" value={values.name} onChange={(event) => updateField("name", event.target.value)} placeholder="Your name" autoComplete="name" />
                {errors.name ? <span className="text-xs text-rose-300">{errors.name}</span> : null}
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-200">
                Email
                <input className="field" type="email" value={values.email} onChange={(event) => updateField("email", event.target.value)} placeholder="your@email.com" autoComplete="email" />
                {errors.email ? <span className="text-xs text-rose-300">{errors.email}</span> : null}
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-200">
                Project type
                <select className="field" value={values.projectType} onChange={(event) => updateField("projectType", event.target.value)}>
                  <option value="">Select a project type</option>
                  {projectTypes.map((type) => <option key={type} value={type}>{type}</option>)}
                </select>
                {errors.projectType ? <span className="text-xs text-rose-300">{errors.projectType}</span> : null}
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-200">
                Budget
                <input className="field" value={values.budget} onChange={(event) => updateField("budget", event.target.value)} placeholder="Example: $300 - $700 or not sure" inputMode="text" />
                {errors.budget ? <span className="text-xs text-rose-300">{errors.budget}</span> : null}
              </label>
            </div>
            <label className="mt-5 grid gap-2 text-sm font-medium text-slate-200">
              Message
              <textarea className="field min-h-40 resize-y" value={values.message} onChange={(event) => updateField("message", event.target.value)} placeholder="Tell me about the website, chatbot, dashboard, or integration you need." />
              {errors.message ? <span className="text-xs text-rose-300">{errors.message}</span> : null}
            </label>
            <button className="group mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-200 sm:w-auto" type="submit">
              <Send size={17} aria-hidden="true" className="transition group-hover:translate-x-0.5" />
              Submit Project Inquiry
            </button>
            {emailDraftReady ? <p className="mt-4 rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-3 text-sm text-cyan-100" role="status">Your email client should open with the enquiry details prepared. If it does not, please use the direct email link.</p> : null}
          </form>

          <aside className="rounded-xl border border-white/10 bg-white/[0.07] p-5 shadow-2xl shadow-black/20 backdrop-blur sm:p-8">
            <h3 className="text-2xl font-semibold text-white">Contact Links</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">Choose the channel that works best for you. I will reply with the next steps for your project.</p>
            <div className="mt-6 grid gap-3">
              {contactHighlights.map(({ label, value, icon: Icon }) => (
                <div key={label} className="min-w-0 rounded-lg border border-cyan-300/15 bg-cyan-300/[0.08] p-4">
                  <div className="flex min-w-0 items-center gap-3 text-sm font-semibold text-cyan-100"><Icon size={18} aria-hidden="true" />{label}</div>
                  <p className="mt-2 text-sm text-slate-300">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-3">
              {socialLinks.map(({ label, href, note, icon: Icon }) => (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="flex min-w-0 items-center justify-between gap-4 rounded-lg border border-white/10 bg-slate-950/60 p-4 transition hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-slate-900/80">
                  <span className="flex min-w-0 shrink items-center gap-3 text-sm font-semibold text-white"><Icon size={18} className="shrink-0 text-cyan-300" aria-hidden="true" />{label}</span>
                  <span className="min-w-0 break-all text-right text-xs text-slate-400">{note}</span>
                </a>
              ))}
            </div>
          </aside>
        </div>
      </Reveal>
    </section>
  );
}
