"use client";

import { ArrowDown, MessageSquare, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { techBadges, typingRoles } from "@/data/portfolio";
import { Pill, PrimaryLink, SecondaryLink } from "@/components/Ui";
import { useTypingText } from "@/hooks/useTypingText";

export function HeroSection() {
  const typedRole = useTypingText(typingRoles);

  return (
    <section id="home" className="relative isolate overflow-hidden px-5 pb-14 pt-28 sm:pt-32 lg:px-8 lg:pb-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_84%_12%,rgba(255,77,79,0.11),transparent_26%),linear-gradient(180deg,#090909_0%,#111111_100%)]" />

      <div className="mx-auto grid max-w-[80rem] items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14">
        <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="min-w-0">
          <div className="mb-6 flex max-w-full items-start gap-2 text-sm leading-6 text-zinc-300 sm:inline-flex">
            <Sparkles size={16} aria-hidden="true" className="shrink-0" />
            <span className="min-w-0 break-words">Frontend Developer | React JS Developer | AI Chatbot Developer</span>
          </div>
          <h1 className="max-w-4xl text-[clamp(2rem,7vw,3.85rem)] font-semibold leading-[1.08] text-white">
            Building Modern Web Experiences and AI Solutions
          </h1>
          <div className="mt-5 flex min-h-10 min-w-0 items-center text-lg font-semibold text-[#ff4d4f] sm:text-2xl" aria-label="Animated professional role">
            <span className="min-w-0 overflow-wrap-anywhere">{typedRole}</span>
            <span className="ml-1 h-7 w-0.5 animate-pulse bg-[#ff4d4f]" aria-hidden="true" />
          </div>
          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400 sm:text-[1.08rem] sm:leading-8">
            I create responsive React applications, business websites, dashboards, and AI chatbot systems that help businesses improve customer experience and automate workflows.
          </p>
          <div className="mt-8 flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap">
            <PrimaryLink href="#projects" className="w-full sm:w-auto">View Projects</PrimaryLink>
            <SecondaryLink href="#contact" className="w-full sm:w-auto">Contact Me</SecondaryLink>
            <SecondaryLink href="#contact" className="w-full sm:w-auto">Work With Me</SecondaryLink>
          </div>
          <div className="mt-8 flex min-w-0 flex-wrap gap-2.5" aria-label="Technology badges">
            {techBadges.map((badge) => <Pill key={badge}>{badge}</Pill>)}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1, duration: 0.7 }} className="relative min-w-0 w-full">
          <div className="rounded-2xl border border-zinc-800 bg-[#141414] p-3 shadow-lg shadow-black/20">
            <div className="rounded-xl border border-zinc-800 bg-[#111111] p-4">
              <div className="mb-4 flex min-w-0 flex-col gap-4 border-b border-zinc-800 pb-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex min-w-0 items-center gap-4">
                  <div className="relative grid h-20 w-20 shrink-0 place-items-center overflow-hidden rounded-2xl">
                    <Image
                      src="/profile.jpg"
                      alt="Bilal Ranjha - Web and AI Developer"
                      fill
                      sizes="80px"
                      className="object-cover object-center"
                      priority
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#ff4d4f]">Portfolio Console</p>
                    <h2 className="mt-1 text-lg font-semibold text-white">Bilal Ranjha</h2>
                    <p className="mt-1 break-words text-sm text-zinc-400">Full Stack & AI Developer</p>
                  </div>
                </div>
                <MessageSquare className="hidden text-[#ff4d4f] sm:block" size={24} aria-hidden="true" />
              </div>
              <div className="grid gap-2.5">
                {[
                  ["React UI", "Responsive interfaces and reusable components"],
                  ["AI Chatbots", "Lead capture, support flows, and automation"],
                  ["MERN Apps", "Authentication, dashboards, APIs, MongoDB"],
                ].map(([label, text]) => (
                  <div key={label} className="rounded-lg border border-zinc-800 bg-[#181818] p-3.5">
                    <p className="font-semibold text-white">{label}</p>
                    <p className="mt-1 text-sm leading-6 text-zinc-400">{text}</p>
                  </div>
                ))}
              </div>
              <a href="#about" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#ff4d4f] transition hover:text-white">
                Explore profile <ArrowDown size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
