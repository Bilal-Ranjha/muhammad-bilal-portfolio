"use client";
import { Menu, X } from "lucide-react";
import { containDialogFocus } from "@/lib/dialogFocus";
import { useEffect, useRef, useState } from "react";
import { navItems } from "@/data/portfolio";
export function Navbar() {
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const menu = dialog.current;
    if (!open || !menu) return;
    const previous = document.body.style.overflow,
      opener = trigger.current;
    menu.showModal();
    document.body.style.overflow = "hidden";
    const wide = window.matchMedia("(min-width: 900px)");
    const closeOnDesktop = () => {
      if (wide.matches) setOpen(false);
    };
    wide.addEventListener("change", closeOnDesktop);
    return () => {
      menu.close();
      document.body.style.overflow = previous;
      wide.removeEventListener("change", closeOnDesktop);
      opener?.focus();
    };
  }, [open]);
  return (
    <header className="site-header">
      <nav className="container nav-inner" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="Bilal Ranjha home">
          <span className="brand-mark">
            BR<span>.</span>
          </span>
          <span className="brand-name">Bilal Ranjha</span>
        </a>
        <div className="desktop-nav">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <a className="button button-primary header-cta" href="#contact">
          Get in Touch
        </a>
        <button
          ref={trigger}
          type="button"
          className="icon-button menu-toggle"
          aria-label="Open navigation menu"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(true)}
        >
          <Menu size={23} />
        </button>
      </nav>
      <dialog
        ref={dialog}
        id="mobile-navigation"
        className="mobile-menu"
        aria-labelledby="menu-title"
        onKeyDown={containDialogFocus}
        onCancel={() => setOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setOpen(false);
        }}
      >
        <div className="mobile-menu-content">
          <div className="mobile-menu-top">
            <span id="menu-title" className="brand-mark">
              BR<span>.</span>
            </span>
            <button
              type="button"
              autoFocus
              className="icon-button"
              aria-label="Close navigation menu"
              onClick={() => setOpen(false)}
            >
              <X />
            </button>
          </div>
          <nav aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <p>
            Full-Stack Developer
            <br />& AI Solutions Developer
          </p>
          <a
            className="button button-primary"
            href="#contact"
            onClick={() => setOpen(false)}
          >
            Get in Touch
          </a>
        </div>
      </dialog>
    </header>
  );
}
