import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";

export function SectionHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300 sm:text-sm">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      {text ? <p className="mt-4 text-base leading-7 text-slate-300">{text}</p> : null}
    </div>
  );
}

export function Pill({ children }: { children: ReactNode }) {
  return <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-sm text-cyan-100 shadow-sm shadow-cyan-950/20 transition hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-cyan-300/15">{children}</span>;
}

export function PrimaryLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a className="group relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-lg bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-cyan-400/30 focus:outline-none focus:ring-2 focus:ring-cyan-200" href={href}>
      <span className="absolute inset-y-0 -left-1/2 w-1/2 skew-x-[-18deg] bg-white/35 opacity-0 transition duration-500 group-hover:left-[120%] group-hover:opacity-100" />
      <span className="relative inline-flex items-center gap-2">
        {children}
        <ArrowUpRight aria-hidden="true" size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </a>
  );
}

export function SecondaryLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-white/10 hover:text-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-200" href={href}>
      {children}
    </a>
  );
}
