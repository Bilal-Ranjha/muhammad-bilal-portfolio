import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/Ui";

const strengths = ["Frontend development", "React JS", "Responsive design", "API integration", "AI chatbot development", "Business Automation"];

export function AboutSection() {
  return (
    <section id="about" className="bg-[#111111] px-5 py-14 sm:py-16 lg:px-8">
      <Reveal className="mx-auto max-w-[80rem]">
        <SectionHeader eyebrow="About" title="A practical developer for clean interfaces and useful automation" text="I focus on building business-ready web experiences that are easy to use, responsive on every screen, and structured for future growth." />
        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="rounded-xl border border-zinc-800 bg-[#181818] p-7 shadow-sm sm:p-8">
            <h3 className="text-[1.7rem] font-semibold text-white">About Me</h3>
            <p className="mt-4 text-[1.05rem] leading-8 text-zinc-400">
              Bilal Ranjha builds responsive web applications, business websites, API-powered solutions, and AI chatbot systems. His work focuses on clean user experiences, practical automation, and reliable digital products that help businesses improve customer communication and everyday workflows.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {strengths.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-[#181818] p-5 shadow-sm">
                <CheckCircle2 className="shrink-0 text-[#ff4d4f]" size={20} aria-hidden="true" />
                <span className="text-sm font-medium text-zinc-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
