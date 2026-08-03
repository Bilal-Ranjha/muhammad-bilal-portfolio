import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/Ui";
import { timeline } from "@/data/portfolio";

export function TimelineSection() {
  return (
    <section id="experience" className="px-5 py-20 lg:px-8">
      <Reveal className="mx-auto max-w-5xl">
        <SectionHeader eyebrow="Experience & Education" title="Practical freelance experience with continued education" />
        <div className="grid gap-5">
          {timeline.map(({ title, meta, points, icon: Icon }) => (
            <article key={title} className="grid gap-5 rounded-xl border border-white/10 bg-white/7 p-6 backdrop-blur sm:grid-cols-[auto_1fr]">
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-cyan-300/12 text-cyan-200"><Icon size={22} aria-hidden="true" /></div>
              <div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-1 text-sm font-medium text-cyan-200">{meta}</p>
                <ul className="mt-4 grid gap-2 text-sm leading-6 text-slate-300 sm:grid-cols-2">
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
