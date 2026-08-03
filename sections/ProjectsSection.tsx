import { GitBranch, Monitor, Rocket } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/Ui";
import { projects } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <section id="projects" className="px-5 py-20 lg:px-8">
      <Reveal className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Projects" title="Selected work built around business outcomes" text="Each project card is structured to show the problem area, core features, and technologies clearly for clients and hiring teams." />
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map(({ title, type, description, features, technologies, liveLabel, codeHref, icon: Icon }) => (
            <article key={title} className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-white/7 shadow-xl shadow-black/20 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35">
              <div className="relative min-h-56 overflow-hidden border-b border-white/10 bg-gradient-to-br from-slate-900 via-blue-950 to-cyan-950 p-5">
                <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08)_0,transparent_38%),radial-gradient(circle_at_70%_20%,rgba(34,211,238,0.22),transparent_28%)]" />
                <div className="relative rounded-lg border border-white/12 bg-slate-950/75 p-4 shadow-2xl shadow-black/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                    </div>
                    <Icon className="text-cyan-300" size={22} aria-hidden="true" />
                  </div>
                  <div className="mt-8 grid gap-3">
                    <div className="h-3 w-28 rounded-full bg-cyan-300/40" />
                    <div className="h-16 rounded-lg border border-white/10 bg-white/8" />
                    <div className="grid grid-cols-2 gap-3">
                      <div className="h-12 rounded-lg bg-white/7" />
                      <div className="h-12 rounded-lg bg-white/7" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm font-semibold text-cyan-300">{type}</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
                <ul className="mt-5 grid gap-2 text-sm text-slate-300">
                  {features.slice(0, 5).map((feature) => <li key={feature} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />{feature}</li>)}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {technologies.map((tech) => <span key={tech} className="rounded-md bg-cyan-300/10 px-2.5 py-1 text-xs font-medium text-cyan-100">{tech}</span>)}
                </div>
                <div className="mt-6 flex flex-wrap gap-3 pt-2">
                  <a className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-4 py-2.5 text-sm font-bold text-slate-950" href="#contact"><Monitor size={16} aria-hidden="true" />{liveLabel}</a>
                  <a className="inline-flex items-center gap-2 rounded-lg border border-white/12 px-4 py-2.5 text-sm font-semibold text-white hover:border-cyan-300/40" href={codeHref}><GitBranch size={16} aria-hidden="true" />View Code</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
