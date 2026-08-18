"use client";

import { Footer } from "@/components/Footer";
import { FloatingProjectChat } from "@/components/FloatingProjectChat";
import { Navbar } from "@/components/Navbar";
import { AboutSection } from "@/sections/AboutSection";
import { ContactSection } from "@/sections/ContactSection";
import { HeroSection } from "@/sections/HeroSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { SkillsSection } from "@/sections/SkillsSection";
import { TimelineSection } from "@/sections/TimelineSection";

export function PortfolioApp() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ServicesSection />
        <TimelineSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingProjectChat />
    </>
  );
}
