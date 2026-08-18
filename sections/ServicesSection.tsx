import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/Ui";
import { services } from "@/data/portfolio";

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#111111] px-5 py-14 sm:py-16 lg:px-8">
      <Reveal className="mx-auto max-w-[80rem]">
        <SectionHeader eyebrow="Services" title="Web Development & AI Automation Services" />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map(({ title, text, icon: Icon }) => (
            <article key={title} className="rounded-xl border border-zinc-800 bg-[#141414] p-7 shadow-sm">
              <div className="grid h-14 w-14 place-items-center rounded-lg border border-[#ff4d4f]/45 bg-zinc-900 text-[#ff4d4f]"><Icon size={26} aria-hidden="true" /></div>
              <h3 className="mt-6 text-[1.35rem] font-semibold text-white">{title}</h3>
              <p className="mt-3 text-base leading-7 text-zinc-400">{text}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
