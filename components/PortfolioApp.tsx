import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingProjectChat } from "@/components/FloatingProjectChat";
import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { SkillsSection } from "@/sections/SkillsSection";
import { ProcessSection } from "@/sections/ProcessSection";
import { ContactSection } from "@/sections/ContactSection";
export function PortfolioApp() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ServicesSection />
        <SkillsSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingProjectChat />
    </>
  );
}
