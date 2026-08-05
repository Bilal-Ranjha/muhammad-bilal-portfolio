"use client";

import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "@/data/portfolio";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled ? "border-b border-white/10 bg-slate-950/[0.82] shadow-2xl shadow-black/20 backdrop-blur-xl" : "bg-transparent"}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Main navigation">
        <a href="#home" className="flex items-center gap-3" aria-label="Muhammad Bilal home">
          <span className="grid h-11 w-11 place-items-center rounded-xl border border-cyan-300/30 bg-cyan-300/[0.12] text-sm font-bold text-cyan-100 shadow-lg shadow-cyan-500/10">MB</span>
          <span className="hidden text-sm font-semibold text-white sm:block">Muhammad Bilal</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} className="text-sm font-medium text-slate-300 transition hover:text-cyan-200" href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="/resume-placeholder.pdf" className="inline-flex items-center gap-2 rounded-lg border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/18" aria-label="Download resume placeholder">
            <Download size={16} aria-hidden="true" />
            Resume
          </a>
        </div>

        <button className="grid h-11 w-11 place-items-center rounded-lg border border-white/[0.12] bg-white/[0.08] text-white lg:hidden" type="button" aria-label="Toggle mobile menu" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-slate-950/95 px-5 pb-5 pt-2 backdrop-blur-xl lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <a key={item.href} className="rounded-lg px-3 py-3 text-sm font-medium text-slate-200 hover:bg-white/[0.08]" href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="/resume-placeholder.pdf" className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-400 px-4 py-3 text-sm font-bold text-slate-950" onClick={() => setOpen(false)}>
              <Download size={16} aria-hidden="true" />
              Download Resume
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
