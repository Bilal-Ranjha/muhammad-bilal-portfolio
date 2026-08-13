"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/Ui";
import { skillGroups } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <section id="skills" className="bg-slate-950/60 px-5 py-16 sm:py-20 lg:px-8">
      <Reveal className="mx-auto max-w-[80rem]">
        <SectionHeader eyebrow="Skills" title="Focused skills for modern client work" />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map(({ title, skills, progress, icon: Icon }) => (
            <article key={title} className="group rounded-xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/[0.09] sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-lg border border-cyan-300/20 bg-cyan-300/10 text-cyan-200 shadow-lg shadow-cyan-950/20 transition group-hover:scale-105 group-hover:bg-cyan-300/15">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <span className="rounded-full bg-slate-950/70 px-3 py-1 text-xs font-semibold text-cyan-100">{progress}%</span>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
              <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-slate-800" aria-label={`${title} progress ${progress}%`}>
                <motion.div className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-blue-500" initial={{ width: 0 }} whileInView={{ width: `${progress}%` }} viewport={{ once: true }} transition={{ duration: 0.9, ease: "easeOut" }} />
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {skills.map((skill) => <span key={skill} className="rounded-md border border-white/10 bg-slate-950/70 px-2.5 py-1.5 text-sm text-slate-200 transition hover:border-cyan-300/30 hover:text-cyan-100">{skill}</span>)}
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
