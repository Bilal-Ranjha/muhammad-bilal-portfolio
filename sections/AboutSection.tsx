import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/Ui";

const strengths = ["Frontend development", "React JS", "Responsive design", "API integration", "AI chatbot development", "Business Automation"];

export function AboutSection() {
  return (
    <section id="about" className="px-5 py-16 sm:py-20 lg:px-8">
      <Reveal className="mx-auto max-w-[80rem]">
        <SectionHeader eyebrow="About" title="A practical developer for clean interfaces and useful automation" text="I focus on building business-ready web experiences that are easy to use, responsive on every screen, and structured for future growth." />
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-xl border border-white/10 bg-white/[0.07] p-7 backdrop-blur">
            <h3 className="text-2xl font-semibold text-white">About Me</h3>
            <p className="mt-4 leading-8 text-slate-300">
              Bilal Ranjha builds responsive web applications, business websites, API-powered solutions, and AI chatbot systems. His work focuses on clean user experiences, practical automation, and reliable digital products that help businesses improve customer communication and everyday workflows.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {strengths.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-lg border border-white/10 bg-slate-900/70 p-4">
                <CheckCircle2 className="shrink-0 text-cyan-300" size={20} aria-hidden="true" />
                <span className="text-sm font-medium text-slate-100">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
