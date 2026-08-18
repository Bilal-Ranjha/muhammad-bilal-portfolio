"use client";

import { Send } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/Ui";
import { contactHighlights, projectTypes, socialLinks } from "@/data/portfolio";
import { useContactForm } from "@/hooks/useContactForm";

export function ContactSection() {
  const { values, errors, status, isSubmitting, successMessage, errorMessage, updateField, handleSubmit } = useContactForm();

  return (
    <section id="contact" className="bg-neutral-950 px-5 py-14 sm:py-16 lg:px-8">
      <Reveal className="mx-auto max-w-[80rem]">
        <SectionHeader eyebrow="Contact" title="Let's Build Something Useful" text="Share the basics of your project or contact me directly through LinkedIn, Fiverr, or email." />
        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <form className="relative overflow-hidden rounded-xl border border-zinc-800 bg-[#141414] p-5 shadow-sm sm:p-8" onSubmit={handleSubmit} noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-zinc-200">
                Name
                <input className="field" value={values.name} onChange={(event) => updateField("name", event.target.value)} placeholder="Your name" autoComplete="name" />
                {errors.name ? <span className="text-xs text-[#ff8a8b]">{errors.name}</span> : null}
              </label>
              <label className="grid gap-2 text-sm font-medium text-zinc-200">
                Email
                <input className="field" type="email" value={values.email} onChange={(event) => updateField("email", event.target.value)} placeholder="your@email.com" autoComplete="email" />
                {errors.email ? <span className="text-xs text-[#ff8a8b]">{errors.email}</span> : null}
              </label>
              <label className="grid gap-2 text-sm font-medium text-zinc-200">
                Project type
                <select className="field" value={values.projectType} onChange={(event) => updateField("projectType", event.target.value)}>
                  <option value="">Select a project type</option>
                  {projectTypes.map((type) => <option key={type} value={type}>{type}</option>)}
                </select>
                {errors.projectType ? <span className="text-xs text-[#ff8a8b]">{errors.projectType}</span> : null}
              </label>
              <label className="grid gap-2 text-sm font-medium text-zinc-200">
                Budget
                <input className="field" value={values.budget} onChange={(event) => updateField("budget", event.target.value)} placeholder="Example: $300 - $700 or not sure" inputMode="text" />
                {errors.budget ? <span className="text-xs text-[#ff8a8b]">{errors.budget}</span> : null}
              </label>
            </div>
            <label className="mt-5 grid gap-2 text-sm font-medium text-zinc-200">
              Message
              <textarea className="field min-h-40 resize-y" value={values.message} onChange={(event) => updateField("message", event.target.value)} placeholder="Tell me about the website, chatbot, dashboard, or integration you need." />
              {errors.message ? <span className="text-xs text-[#ff8a8b]">{errors.message}</span> : null}
            </label>
            <button className="group mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#ff4d4f] px-5 py-3 text-sm font-bold text-white shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-[#e43f41] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#ff4d4f] focus:ring-offset-2 focus:ring-offset-[#090909] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto" type="submit" disabled={isSubmitting}>
              <Send size={17} aria-hidden="true" className="transition group-hover:translate-x-0.5" />
              {isSubmitting ? "Sending..." : "Submit Project Inquiry"}
            </button>
            {status === "success" ? <p className="mt-4 rounded-lg border border-[#ff4d4f]/40 bg-[#181818] p-3 text-sm text-zinc-300" role="status">{successMessage}</p> : null}
            {status === "error" ? <p className="mt-4 rounded-lg border border-[#ff8a8b]/40 bg-[#181818] p-3 text-sm text-zinc-300" role="alert">{errorMessage}</p> : null}
          </form>

          <aside className="rounded-xl border border-zinc-800 bg-[#141414] p-5 shadow-sm sm:p-8">
            <h3 className="text-2xl font-semibold text-white">Contact Links</h3>
            <p className="mt-3 text-sm leading-7 text-zinc-400">Choose the channel that works best for you. I will reply with the next steps for your project.</p>
            <div className="mt-6 grid gap-3">
              {contactHighlights.map(({ label, value, icon: Icon }) => (
                <div key={label} className="min-w-0 rounded-lg border border-zinc-800 bg-[#181818] p-4">
                  <div className="flex min-w-0 items-center gap-3 text-sm font-semibold text-white"><Icon size={18} className="text-[#ff4d4f]" aria-hidden="true" />{label}</div>
                  <p className="mt-2 text-sm text-zinc-400">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-3">
              {socialLinks.map(({ label, href, note, icon: Icon }) => (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="flex min-w-0 items-center justify-between gap-4 rounded-lg border border-zinc-800 bg-[#181818] p-4 transition hover:-translate-y-0.5 hover:border-[#ff4d4f] hover:bg-zinc-900">
                  <span className="flex min-w-0 shrink items-center gap-3 text-sm font-semibold text-white"><Icon size={18} className="shrink-0 text-[#ff4d4f]" aria-hidden="true" />{label}</span>
                  <span className="min-w-0 break-all text-right text-xs text-zinc-400">{note}</span>
                </a>
              ))}
            </div>
          </aside>
        </div>
      </Reveal>
    </section>
  );
}
