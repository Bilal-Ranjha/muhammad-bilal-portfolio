"use client";

import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { AboutSection } from "@/sections/AboutSection";
import { ContactSection } from "@/sections/ContactSection";
import { HeroSection } from "@/sections/HeroSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { SkillsSection } from "@/sections/SkillsSection";
import { TimelineSection } from "@/sections/TimelineSection";

function PortfolioHome() {
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
    </>
  );
}

export function PortfolioApp() {
  const Router = typeof document === "undefined" ? MemoryRouter : BrowserRouter;

  return (
    <Router>
      <Routes>
        <Route path="*" element={<PortfolioHome />} />
      </Routes>
    </Router>
  );
}
