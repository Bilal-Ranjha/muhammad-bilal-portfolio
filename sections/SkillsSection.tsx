import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/Ui";
import { skillGroups } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <section id="skills" className="bg-slate-950/60 px-5 py-20 lg:px-8">
      <Reveal className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Skills" title="Focused skills for modern client work" />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map(({ title, skills, icon: Icon }) => (
            <article key={title} className="rounded-xl border border-white/10 bg-white/7 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/30">
              <Icon className="text-cyan-300" size={26} aria-hidden="true" />
              <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {skills.map((skill) => <span key={skill} className="rounded-md border border-white/10 bg-slate-950/70 px-2.5 py-1.5 text-sm text-slate-200">{skill}</span>)}
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
