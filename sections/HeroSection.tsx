"use client";

import { ArrowDown, MessageSquare, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { techBadges } from "@/data/portfolio";
import { Pill, PrimaryLink, SecondaryLink } from "@/components/Ui";

export function HeroSection() {
  return (
    <section id="home" className="relative isolate overflow-hidden px-5 pb-20 pt-32 sm:pt-36 lg:px-8 lg:pb-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.16),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.16),transparent_32%),linear-gradient(135deg,#020617_0%,#07111f_48%,#03131f_100%)]" />
      <div className="absolute left-1/2 top-24 -z-10 h-72 w-[42rem] -translate-x-1/2 rounded-full border border-cyan-300/10 bg-cyan-300/5 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/6 px-4 py-2 text-sm text-cyan-100 backdrop-blur">
            <Sparkles size={16} aria-hidden="true" />
            Frontend Developer | React JS Developer | AI Chatbot Developer
          </div>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Building Modern Web Experiences and AI Solutions
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            I create responsive React applications, business websites, dashboards, and AI chatbot systems that help businesses improve customer experience and automate workflows.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryLink href="#projects">View Projects</PrimaryLink>
            <SecondaryLink href="#contact">Contact Me</SecondaryLink>
          </div>
          <div className="mt-8 flex flex-wrap gap-2.5" aria-label="Technology badges">
            {techBadges.map((badge) => <Pill key={badge}>{badge}</Pill>)}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1, duration: 0.7 }} className="relative">
          <div className="rounded-2xl border border-white/12 bg-white/8 p-4 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl">
            <div className="rounded-xl border border-white/10 bg-slate-950/80 p-5">
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Portfolio Console</p>
                  <h2 className="mt-1 text-lg font-semibold text-white">Muhammad Bilal</h2>
                </div>
                <MessageSquare className="text-cyan-300" size={24} aria-hidden="true" />
              </div>
              <div className="grid gap-3">
                {[
                  ["React UI", "Responsive interfaces and reusable components"],
                  ["AI Chatbots", "Lead capture, support flows, and automation"],
                  ["MERN Apps", "Authentication, dashboards, APIs, MongoDB"],
                ].map(([label, text]) => (
                  <div key={label} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                    <p className="font-semibold text-white">{label}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-400">{text}</p>
                  </div>
                ))}
              </div>
              <a href="#about" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200">
                Explore profile <ArrowDown size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
