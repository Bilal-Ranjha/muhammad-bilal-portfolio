import { ArrowUp } from "lucide-react";
import { navItems, socialLinks } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 px-5 py-10 lg:px-8">
      <div className="mx-auto grid max-w-[80rem] gap-8 md:grid-cols-[1fr_auto_auto]">
        <div>
          <p className="text-lg font-semibold text-white">Bilal Ranjha</p>
          <p className="mt-2 inline-flex rounded-full border border-neutral-700 bg-neutral-900 px-3 py-1 text-sm font-semibold text-neutral-200">Available for Freelance</p>
          <p className="mt-3 text-sm text-neutral-400">Built with React and Tailwind CSS.</p>
          <p className="mt-2 text-sm text-neutral-500">Copyright {new Date().getFullYear()} Bilal Ranjha. All rights reserved.</p>
        </div>
        <div className="flex flex-wrap gap-4 md:justify-center">
          {navItems.filter((item) => item.href !== "#contact").map((item) => <a key={item.href} className="text-sm text-neutral-400 transition hover:text-white" href={item.href}>{item.label}</a>)}
        </div>
        <div className="flex flex-wrap gap-3 md:justify-end">
          {socialLinks.map(({ label, href, icon: Icon }) => <a key={label} aria-label={label === "Email" ? "Email Bilal Ranjha" : label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="grid h-10 w-10 place-items-center rounded-full border border-neutral-700 text-neutral-300 transition hover:-translate-y-0.5 hover:border-[#ff4d4f] hover:bg-[#ff4d4f] hover:text-white"><Icon size={18} aria-hidden="true" /></a>)}
          <a aria-label="Back to top" href="#home" className="inline-flex h-10 items-center gap-2 rounded-lg border border-neutral-700 bg-white px-3 text-sm font-semibold text-neutral-950 transition hover:-translate-y-0.5 hover:bg-neutral-200"><ArrowUp size={16} />Top</a>
        </div>
      </div>
    </footer>
  );
}
