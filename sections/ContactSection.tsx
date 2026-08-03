"use client";

import { Send } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/Ui";
import { projectTypes, socialLinks } from "@/data/portfolio";
import { useContactForm } from "@/hooks/useContactForm";

export function ContactSection() {
  const { values, errors, submitted, updateField, handleSubmit } = useContactForm();

  return (
    <section id="contact" className="bg-slate-950/60 px-5 py-20 lg:px-8">
      <Reveal className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Contact" title="Start a focused project conversation" text="Share the basics of your project. Placeholder contact links are clearly marked where final profile details are still needed." />
        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <form className="rounded-xl border border-white/10 bg-white/7 p-6 backdrop-blur sm:p-8" onSubmit={handleSubmit} noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-slate-200">
                Name
                <input className="field" value={values.name} onChange={(event) => updateField("name", event.target.value)} placeholder="Your name" />
                {errors.name ? <span className="text-xs text-rose-300">{errors.name}</span> : null}
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-200">
                Email
                <input className="field" type="email" value={values.email} onChange={(event) => updateField("email", event.target.value)} placeholder="your@email.com" />
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
                <input className="field" value={values.budget} onChange={(event) => updateField("budget", event.target.value)} placeholder="Example: $300 - $700 or not sure" />
                {errors.budget ? <span className="text-xs text-rose-300">{errors.budget}</span> : null}
              </label>
            </div>
            <label className="mt-5 grid gap-2 text-sm font-medium text-slate-200">
              Message
              <textarea className="field min-h-36 resize-y" value={values.message} onChange={(event) => updateField("message", event.target.value)} placeholder="Tell me about the website, chatbot, dashboard, or integration you need." />
              {errors.message ? <span className="text-xs text-rose-300">{errors.message}</span> : null}
            </label>
            <button className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-200" type="submit">
              <Send size={17} aria-hidden="true" />
              Submit Project Inquiry
            </button>
            {submitted ? <p className="mt-4 rounded-lg border border-emerald-300/20 bg-emerald-300/10 p-3 text-sm text-emerald-100">Thanks. The form is validated locally. Connect it to your email, CRM, or backend before accepting live submissions.</p> : null}
          </form>

          <aside className="rounded-xl border border-white/10 bg-white/7 p-6 backdrop-blur sm:p-8">
            <h3 className="text-2xl font-semibold text-white">Contact Links</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">No fake contact information is included. Replace the placeholders when final profiles and email are ready.</p>
            <div className="mt-6 grid gap-3">
              {socialLinks.map(({ label, href, note, icon: Icon }) => (
                <a key={label} href={href} className="flex items-center justify-between gap-4 rounded-lg border border-white/10 bg-slate-950/60 p-4 transition hover:border-cyan-300/30">
                  <span className="flex items-center gap-3 text-sm font-semibold text-white"><Icon size={18} className="text-cyan-300" aria-hidden="true" />{label}</span>
                  <span className="text-right text-xs text-slate-400">{note}</span>
                </a>
              ))}
            </div>
          </aside>
        </div>
      </Reveal>
    </section>
  );
}
