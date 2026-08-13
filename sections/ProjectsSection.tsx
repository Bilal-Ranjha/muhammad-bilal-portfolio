import { GitBranch, MessageCircle, Monitor } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/Ui";
import { projects } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <section id="projects" className="px-5 py-16 sm:py-20 lg:px-8">
      <Reveal className="mx-auto max-w-[80rem]">
        <SectionHeader eyebrow="Projects" title="Selected work built around business outcomes" text="Project cards show the product type, visual preview, core features, and technologies clients need to evaluate quickly." />
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map(({ title, type, description, features, technologies, liveHref, liveLabel, githubHref, githubLabel, screenshot, screenshotAlt, icon: Icon }) => (
            <article key={title} className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.07] shadow-xl shadow-black/20 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:shadow-cyan-950/30">
              <div className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-slate-900 via-blue-950 to-cyan-950 p-3 sm:p-4">
                <Image
                  src={screenshot}
                  alt={screenshotAlt}
                  width={960}
                  height={600}
                  className="aspect-[16/10] w-full rounded-lg border border-white/[0.12] object-cover shadow-2xl shadow-black/20 transition duration-500 group-hover:scale-[1.025]"
                />
                <div className="absolute right-6 top-6 grid h-10 w-10 place-items-center rounded-lg border border-cyan-300/25 bg-slate-950/75 text-cyan-200 backdrop-blur">
                  <Icon size={20} aria-hidden="true" />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="text-sm font-semibold text-cyan-300">{type}</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
                <ul className="mt-5 grid gap-2 text-sm text-slate-300">
                  {features.slice(0, 5).map((feature) => <li key={feature} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />{feature}</li>)}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2" aria-label={`${title} technologies`}>
                  {technologies.map((tech) => <span key={tech} className="rounded-md border border-cyan-300/10 bg-cyan-300/10 px-2.5 py-1 text-xs font-medium text-cyan-100 transition group-hover:border-cyan-300/25">{tech}</span>)}
                </div>
                <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row sm:flex-wrap">
                  {liveHref ? (
                    <a className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-cyan-400 px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300" href={liveHref} target="_blank" rel="noopener noreferrer"><Monitor size={16} aria-hidden="true" />Live Demo</a>
                  ) : (
                    <button className="inline-flex min-h-11 cursor-not-allowed items-center justify-center gap-2 rounded-lg bg-slate-700/70 px-4 py-2.5 text-sm font-bold text-slate-300" type="button" disabled aria-disabled="true"><Monitor size={16} aria-hidden="true" />{liveLabel}</button>
                  )}
                  <a className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/[0.12] px-4 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-white/[0.08]" href={githubHref} target={githubHref.startsWith("http") ? "_blank" : undefined} rel={githubHref.startsWith("http") ? "noopener noreferrer" : undefined}>
                    {githubLabel === "GitHub" ? <GitBranch size={16} aria-hidden="true" /> : <MessageCircle size={16} aria-hidden="true" />}
                    {githubLabel}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
