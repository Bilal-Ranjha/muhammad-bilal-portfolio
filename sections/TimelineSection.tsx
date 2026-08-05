import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/Ui";
import { timeline } from "@/data/portfolio";

export function TimelineSection() {
  return (
    <section id="experience" className="px-5 py-16 sm:py-20 lg:px-8">
      <Reveal className="mx-auto max-w-5xl">
        <SectionHeader eyebrow="Experience & Education" title="Practical freelance experience with continued education" />
        <div className="relative grid gap-5 before:absolute before:left-6 before:top-4 before:hidden before:h-[calc(100%-2rem)] before:w-px before:bg-gradient-to-b before:from-cyan-300 before:via-blue-500 before:to-transparent sm:before:block">
          {timeline.map(({ title, meta, points, icon: Icon }, index) => (
            <article key={title} className="relative grid gap-5 rounded-xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/30 sm:grid-cols-[auto_1fr] sm:p-6 sm:pl-0">
              <div className="z-10 grid h-12 w-12 place-items-center rounded-xl border border-cyan-300/25 bg-slate-950 text-cyan-200 shadow-lg shadow-cyan-950/30 sm:ml-0"><Icon size={22} aria-hidden="true" /></div>
              <div>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Step {index + 1}</p>
                    <h3 className="mt-1 text-xl font-semibold text-white">{title}</h3>
                  </div>
                  <p className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-xs font-medium text-cyan-100 sm:text-right">{meta}</p>
                </div>
                <ul className="mt-5 grid gap-2 text-sm leading-6 text-slate-300 sm:grid-cols-2">
                  {points.map((point) => <li key={point} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />{point}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
