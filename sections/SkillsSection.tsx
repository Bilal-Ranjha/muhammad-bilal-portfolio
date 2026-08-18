"use client";

import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/Ui";
import { skillGroups } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <section id="skills" className="bg-[#090909] px-5 py-14 sm:py-16 lg:px-8">
      <Reveal className="mx-auto max-w-[80rem]">
        <SectionHeader eyebrow="Skills" title="Focused skills for modern client work" />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map(({ title, skills, icon: Icon }) => (
            <article key={title} className="rounded-xl border border-zinc-800 bg-[#141414] p-6 shadow-sm sm:p-7">
              <div className="grid h-14 w-14 place-items-center rounded-lg border border-[#ff4d4f]/45 bg-zinc-900 text-[#ff4d4f]">
                <Icon size={27} aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-[1.35rem] font-semibold text-white">{title}</h3>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {skills.map((skill) => <span key={skill} className="rounded-md border border-zinc-700 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-300">{skill}</span>)}
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
