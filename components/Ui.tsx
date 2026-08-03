import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";

export function SectionHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      {text ? <p className="mt-4 text-base leading-7 text-slate-300">{text}</p> : null}
    </div>
  );
}

export function Pill({ children }: { children: ReactNode }) {
  return <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-sm text-cyan-100">{children}</span>;
}

export function PrimaryLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-200" href={href}>
      {children}
      <ArrowUpRight aria-hidden="true" size={17} />
    </a>
  );
}

export function SecondaryLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/6 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-cyan-300/50 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-200" href={href}>
      {children}
    </a>
  );
}
