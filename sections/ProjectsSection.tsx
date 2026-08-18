import { GitBranch, MessageCircle, Monitor } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/Ui";
import { projects } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-neutral-950 px-5 py-14 sm:py-16 lg:px-8">
      <Reveal className="mx-auto max-w-[80rem]">
        <SectionHeader eyebrow="Projects" title="Selected work built around business outcomes" text="Project cards show the product type, visual preview, core features, and technologies clients need to evaluate quickly." />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map(({ title, type, description, features, technologies, liveHref, githubHref, githubLabel, screenshot, screenshotAlt, icon: Icon }) => (
            <article key={title} className="flex h-full flex-col overflow-hidden rounded-xl border border-zinc-800 bg-[#141414] shadow-sm">
              <div className="relative overflow-hidden border-b border-zinc-800 bg-[#111111] p-3 sm:p-4">
                <Image
                  src={screenshot}
                  alt={screenshotAlt}
                  width={960}
                  height={600}
                  className="aspect-[16/9] w-full rounded-lg border border-zinc-700 object-cover shadow-sm"
                />
                <div className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-lg border border-[#ff4d4f]/45 bg-[#141414]/95 text-[#ff4d4f] shadow-sm backdrop-blur">
                  <Icon size={18} aria-hidden="true" />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <p className="text-xs font-semibold text-[#ff4d4f]">{type}</p>
                <h3 className="mt-1.5 text-[1.4rem] font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{description}</p>
                <ul className="mt-4 grid gap-1.5 text-sm leading-6 text-zinc-400">
                  {features.slice(0, 5).map((feature) => <li key={feature} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff4d4f]" />{feature}</li>)}
                </ul>
                <div className="mt-4 flex flex-wrap gap-1.5" aria-label={`${title} technologies`}>
                  {technologies.map((tech) => <span key={tech} className="rounded-md border border-zinc-700 bg-zinc-900 px-2.5 py-1 text-xs font-medium text-zinc-300">{tech}</span>)}
                </div>
                <div className="mt-auto flex flex-col gap-2 pt-5 sm:flex-row sm:flex-wrap">
                  {liveHref ? <a className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-[#ff4d4f] px-3 py-2 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#e43f41]" href={liveHref} target="_blank" rel="noopener noreferrer"><Monitor size={16} aria-hidden="true" />Live Demo</a> : null}
                  <a className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border border-zinc-600 px-3 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-[#ff4d4f] hover:bg-zinc-900" href={githubHref} target={githubHref.startsWith("http") ? "_blank" : undefined} rel={githubHref.startsWith("http") ? "noopener noreferrer" : undefined}>
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
