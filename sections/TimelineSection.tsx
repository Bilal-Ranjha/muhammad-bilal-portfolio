import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/Ui";
import { timeline } from "@/data/portfolio";

export function TimelineSection() {
  return (
    <section id="experience" className="bg-[#090909] px-5 py-14 sm:py-16 lg:px-8">
      <Reveal className="mx-auto max-w-[80rem]">
        <SectionHeader eyebrow="Experience" title="Freelance experience focused on practical web development" />
        <div className="relative grid gap-6 before:absolute before:left-7 before:top-4 before:hidden before:h-[calc(100%-2rem)] before:w-px before:bg-gradient-to-b before:from-[#ff4d4f] before:via-zinc-600 before:to-transparent sm:before:block">
          {timeline.map(({ title, meta, points, icon: Icon }, index) => (
            <article key={title} className="relative grid gap-6 rounded-xl border border-zinc-800 bg-[#141414] p-6 shadow-sm sm:grid-cols-[auto_1fr] sm:p-8 sm:pl-0">
              <div className="z-10 grid h-14 w-14 place-items-center rounded-xl border border-[#ff4d4f]/45 bg-zinc-900 text-[#ff4d4f] shadow-sm sm:ml-0"><Icon size={26} aria-hidden="true" /></div>
              <div>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff4d4f]">Step {index + 1}</p>
                    <h3 className="mt-1 text-[1.5rem] font-semibold text-white">{title}</h3>
                  </div>
                  <p className="rounded-full border border-[#ff4d4f]/35 bg-zinc-900 px-3 py-1.5 text-sm font-medium text-zinc-300 sm:text-right">{meta}</p>
                </div>
                <ul className="mt-6 grid gap-3 text-[0.95rem] leading-7 text-zinc-400 sm:grid-cols-2">
                  {points.map((point) => <li key={point} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff4d4f]" />{point}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
