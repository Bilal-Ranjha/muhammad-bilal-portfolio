import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/Ui";
import { services } from "@/data/portfolio";

export function ServicesSection() {
  return (
    <section id="services" className="bg-slate-950/60 px-5 py-16 sm:py-20 lg:px-8">
      <Reveal className="mx-auto max-w-[80rem]">
        <SectionHeader eyebrow="Services" title="Freelance services for web and AI projects" />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map(({ title, text, icon: Icon }) => (
            <article key={title} className="rounded-xl border border-white/10 bg-white/[0.07] p-6 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/30">
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-cyan-300/[0.12] text-cyan-200"><Icon size={23} aria-hidden="true" /></div>
              <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
