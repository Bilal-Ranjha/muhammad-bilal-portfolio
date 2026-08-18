import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";

export function SectionHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mx-auto mb-8 max-w-4xl text-center sm:mb-10">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#ff4d4f] sm:text-sm">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold text-white sm:text-[2.5rem]">{title}</h2>
      {text ? <p className="mt-4 text-[1.05rem] leading-8 text-zinc-400">{text}</p> : null}
    </div>
  );
}

export function Pill({ children }: { children: ReactNode }) {
  return <span className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-sm text-zinc-300">{children}</span>;
}

type LinkProps = { href: string; children: ReactNode; target?: "_blank"; className?: string };

export function PrimaryLink({ href, children, target, className }: LinkProps) {
  return (
    <a className={`group relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-lg bg-[#ff4d4f] px-5 py-3 text-sm font-bold text-white shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-[#e43f41] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#ff4d4f] focus:ring-offset-2 focus:ring-offset-[#090909] ${className ?? ""}`} href={href} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined}>
      <span className="relative inline-flex items-center gap-2">
        {children}
        <ArrowUpRight aria-hidden="true" size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </a>
  );
}

export function SecondaryLink({ href, children, target, className }: LinkProps) {
  return (
    <a className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-zinc-600 bg-transparent px-5 py-3 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#ff4d4f] hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-[#ff4d4f] focus:ring-offset-2 focus:ring-offset-[#090909] ${className ?? ""}`} href={href} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined}>
      {children}
    </a>
  );
}
