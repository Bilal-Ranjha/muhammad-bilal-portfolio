import { ArrowUp, BadgeDollarSign, GitBranch, Mail } from "lucide-react";
import { navItems } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 lg:px-8">
      <div className="mx-auto grid max-w-[80rem] gap-8 md:grid-cols-[1fr_auto_auto]">
        <div>
          <p className="text-lg font-semibold text-white">Bilal Ranjha</p>
          <p className="mt-2 inline-flex rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-sm font-semibold text-emerald-100">Available for Freelance</p>
          <p className="mt-3 text-sm text-slate-400">Built with React and Tailwind CSS.</p>
          <p className="mt-2 text-sm text-slate-500">Copyright {new Date().getFullYear()} Bilal Ranjha. All rights reserved.</p>
        </div>
        <div className="flex flex-wrap gap-4 md:justify-center">
          {navItems.map((item) => <a key={item.href} className="text-sm text-slate-400 transition hover:text-cyan-200" href={item.href}>{item.label}</a>)}
        </div>
        <div className="flex flex-wrap gap-3 md:justify-end">
          <a aria-label="Fiverr" href="https://www.fiverr.com/s/WE9qWvB" target="_blank" rel="noopener noreferrer" className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-slate-300 transition hover:-translate-y-0.5 hover:border-cyan-300/30 hover:text-cyan-200"><BadgeDollarSign size={18} /></a>
          <a aria-label="GitHub" href="https://github.com/Bilal-Ranjha" target="_blank" rel="noopener noreferrer" className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-slate-300 transition hover:-translate-y-0.5 hover:border-cyan-300/30 hover:text-cyan-200"><GitBranch size={18} /></a>
          <a aria-label="Email Bilal Ranjha" href="mailto:m.bilalranjha030@gmail.com" className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-slate-300 transition hover:-translate-y-0.5 hover:border-cyan-300/30 hover:text-cyan-200"><Mail size={18} /></a>
          <a aria-label="Back to top" href="#home" className="inline-flex h-10 items-center gap-2 rounded-lg border border-cyan-300/25 bg-cyan-300/10 px-3 text-sm font-semibold text-cyan-100 transition hover:-translate-y-0.5 hover:bg-cyan-300/15"><ArrowUp size={16} />Top</a>
        </div>
      </div>
    </footer>
  );
}
