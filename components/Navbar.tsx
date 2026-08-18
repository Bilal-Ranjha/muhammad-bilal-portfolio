"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems, socialLinks } from "@/data/portfolio";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const menuItems = navItems.filter((item) => item.href !== "#contact");

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled ? "border-b border-zinc-800 bg-[#090909]/95 shadow-sm backdrop-blur-xl" : "border-b border-zinc-900 bg-[#090909]/85 backdrop-blur-md"}`}>
        <nav className="mx-auto flex max-w-[80rem] items-center justify-between px-5 py-4 lg:px-8" aria-label="Main navigation">
        <a href="#home" className="flex items-center gap-3" aria-label="Bilal Ranjha home">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#ff4d4f] text-sm font-bold text-white shadow-sm">BR</span>
          <span className="hidden text-sm font-semibold text-white sm:block">Bilal Ranjha</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {menuItems.map((item) => (
            <a key={item.href} className="text-sm font-medium text-zinc-400 transition hover:text-[#ff4d4f]" href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a key={label} aria-label={label === "Email" ? "Email Bilal Ranjha" : label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="grid h-10 w-10 place-items-center rounded-full border border-zinc-700 bg-zinc-900 text-white transition duration-200 hover:-translate-y-0.5 hover:border-[#ff4d4f] hover:bg-[#ff4d4f] hover:shadow-md"><Icon size={17} aria-hidden="true" /></a>
          ))}
        </div>
        <button className="grid h-11 w-11 place-items-center rounded-lg border border-zinc-700 bg-zinc-900 text-white shadow-sm lg:hidden" type="button" aria-label="Open navigation menu" aria-controls="mobile-navigation-drawer" aria-expanded={open} onClick={() => setOpen(true)}>
          <Menu size={20} aria-hidden="true" />
        </button>
        </nav>
      </header>

      <button className={`fixed inset-0 z-[90] bg-black/65 transition-opacity duration-300 lg:hidden ${open ? "opacity-100" : "pointer-events-none invisible opacity-0"}`} type="button" aria-label="Close navigation menu" tabIndex={open ? 0 : -1} onClick={() => setOpen(false)} />
      <aside id="mobile-navigation-drawer" className={`fixed left-0 top-0 z-[100] flex h-dvh w-[min(82vw,320px)] flex-col border-r border-zinc-800 bg-[#111111] px-5 py-5 shadow-2xl transition-transform duration-300 ease-out lg:hidden ${open ? "translate-x-0" : "pointer-events-none -translate-x-full"}`} role="dialog" aria-modal={open} aria-hidden={!open} aria-label="Mobile navigation">
        <div className="flex min-h-11 items-center justify-between gap-4 border-b border-zinc-800 pb-5">
          <span className="min-w-0 truncate text-base font-semibold text-white">Bilal Ranjha</span>
          <button className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-zinc-700 bg-zinc-900 text-white transition duration-200 hover:bg-[#ff4d4f] focus:outline-none focus:ring-2 focus:ring-[#ff4d4f]" type="button" aria-label="Close navigation menu" tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
            <X size={19} aria-hidden="true" />
          </button>
        </div>
        <nav className="mt-4 flex flex-col" aria-label="Mobile navigation links">
          {menuItems.map((item) => (
            <a key={item.href} className="flex min-h-12 w-full items-center border-b border-zinc-800 py-3 text-sm font-medium text-zinc-200 transition hover:bg-zinc-900 hover:text-[#ff4d4f]" href={item.href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="mt-8 border-t border-zinc-800 pt-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Find with me</p>
          <div className="mt-4 flex items-center gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a key={label} aria-label={label === "Email" ? "Email Bilal Ranjha" : label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} tabIndex={open ? 0 : -1} className="grid h-11 w-11 place-items-center rounded-full border border-zinc-700 bg-zinc-900 text-white transition duration-200 hover:-translate-y-0.5 hover:border-[#ff4d4f] hover:bg-[#ff4d4f] hover:shadow-md"><Icon size={18} aria-hidden="true" /></a>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
