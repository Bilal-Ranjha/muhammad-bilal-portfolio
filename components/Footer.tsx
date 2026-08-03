import { GitBranch, Link, Mail } from "lucide-react";
import { navItems } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto_auto]">
        <div>
          <p className="text-lg font-semibold text-white">Muhammad Bilal</p>
          <p className="mt-2 text-sm text-slate-400">Built with React and Tailwind CSS.</p>
          <p className="mt-2 text-sm text-slate-500">Copyright {new Date().getFullYear()} Muhammad Bilal. All rights reserved.</p>
        </div>
        <div className="flex flex-wrap gap-4 md:justify-center">
          {navItems.map((item) => <a key={item.href} className="text-sm text-slate-400 hover:text-cyan-200" href={item.href}>{item.label}</a>)}
        </div>
        <div className="flex gap-3 md:justify-end">
          <a aria-label="GitHub" href="https://github.com/Bilal-Ranjha" className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-slate-300 hover:text-cyan-200"><GitBranch size={18} /></a>
          <a aria-label="LinkedIn placeholder" href="#contact" className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-slate-300 hover:text-cyan-200"><Link size={18} /></a>
          <a aria-label="Email placeholder" href="mailto:your-email@example.com" className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-slate-300 hover:text-cyan-200"><Mail size={18} /></a>
        </div>
      </div>
    </footer>
  );
}
