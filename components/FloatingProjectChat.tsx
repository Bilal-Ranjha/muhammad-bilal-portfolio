"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { useContactForm } from "@/hooks/useContactForm";

export function FloatingProjectChat() {
  const [open, setOpen] = useState(false);
  const { values, errors, status, isSubmitting, successMessage, errorMessage, updateField, handleSubmit } = useContactForm({ requireProjectDetails: false });

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-[70] sm:bottom-6 sm:right-6">
      <section className={`fixed bottom-20 left-4 right-4 max-h-[calc(100dvh-6rem)] overflow-y-auto rounded-2xl border border-zinc-700 bg-[#141414] shadow-2xl shadow-black/50 transition-all duration-300 sm:bottom-24 sm:left-auto sm:right-6 sm:w-96 ${open ? "visible translate-y-0 opacity-100" : "pointer-events-none invisible translate-y-3 opacity-0"}`} aria-hidden={!open} aria-label="Project inquiry chat">
        <div className="flex items-start justify-between gap-4 border-b border-zinc-700 bg-[#ff4d4f] px-5 py-4 text-white">
          <div>
            <h2 className="text-base font-semibold">Let&apos;s chat about your project?</h2>
            <p className="mt-1 text-xs text-white/85">Online</p>
          </div>
          <button className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/30 bg-black/10 text-white transition hover:bg-black/20 focus:outline-none focus:ring-2 focus:ring-white" type="button" aria-label="Close project inquiry chat" tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
            <X size={18} aria-hidden="true" />
          </button>
        </div>
        <form className="p-5" onSubmit={handleSubmit} noValidate>
          <p className="text-sm leading-6 text-zinc-300">Please fill out the form below to discuss your project.</p>
          <div className="mt-5 grid gap-4">
            <label className="grid gap-2 text-sm font-medium text-zinc-200">
              Name
              <input className="field" value={values.name} onChange={(event) => updateField("name", event.target.value)} placeholder="Your name" autoComplete="name" tabIndex={open ? 0 : -1} />
              {errors.name ? <span className="text-xs text-[#ff8a8b]" role="alert">{errors.name}</span> : null}
            </label>
            <label className="grid gap-2 text-sm font-medium text-zinc-200">
              Email
              <input className="field" type="email" value={values.email} onChange={(event) => updateField("email", event.target.value)} placeholder="your@email.com" autoComplete="email" tabIndex={open ? 0 : -1} />
              {errors.email ? <span className="text-xs text-[#ff8a8b]" role="alert">{errors.email}</span> : null}
            </label>
            <label className="grid gap-2 text-sm font-medium text-zinc-200">
              Project Requirements
              <textarea className="field min-h-28 resize-y" value={values.message} onChange={(event) => updateField("message", event.target.value)} placeholder="Tell me what you need." tabIndex={open ? 0 : -1} />
              {errors.message ? <span className="text-xs text-[#ff8a8b]" role="alert">{errors.message}</span> : null}
            </label>
          </div>
          <button className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#ff4d4f] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#e43f41] focus:outline-none focus:ring-2 focus:ring-[#ff4d4f] focus:ring-offset-2 focus:ring-offset-[#141414] disabled:cursor-not-allowed disabled:opacity-70" type="submit" tabIndex={open ? 0 : -1} disabled={isSubmitting}>
            <Send size={16} aria-hidden="true" />
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          {status === "success" ? <p className="mt-4 rounded-lg border border-[#ff4d4f]/40 bg-[#181818] p-3 text-sm text-zinc-300" role="status">{successMessage}</p> : null}
          {status === "error" ? <p className="mt-4 rounded-lg border border-[#ff8a8b]/40 bg-[#181818] p-3 text-sm text-zinc-300" role="alert">{errorMessage}</p> : null}
        </form>
      </section>
      <button className="grid h-14 w-14 place-items-center rounded-full bg-[#ff4d4f] text-white shadow-lg shadow-black/40 transition duration-200 hover:-translate-y-0.5 hover:bg-[#e43f41] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#ff4d4f] focus:ring-offset-2 focus:ring-offset-[#090909]" type="button" aria-label="Open project inquiry chat" aria-expanded={open} onClick={() => setOpen(true)}>
        <MessageCircle size={23} aria-hidden="true" />
      </button>
    </div>
  );
}
