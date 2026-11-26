import { ParticleWave } from "@/components/ParticleWave";
import { PrimaryLink, SecondaryLink } from "@/components/Ui";
export function HeroSection() {
  return (
    <section id="home" className="hero">
      <ParticleWave />
      <div className="container hero-content">
        <p className="eyebrow">Full-stack development & AI solutions</p>
        <h1>
          Building powerful software.
          <br />
          <span>Engineering digital solutions.</span>
        </h1>
        <p className="hero-description">
          I build modern web applications, scalable SaaS platforms and
          intelligent digital solutions that turn complex ideas into practical
          software.
        </p>
        <div className="button-group">
          <PrimaryLink href="#contact">Discuss Your Project</PrimaryLink>
          <SecondaryLink href="#projects">Explore My Work</SecondaryLink>
        </div>
        <div className="hero-bottom">
          <span>
            Bilal Ranjha <span className="muted">/ Independent developer</span>
          </span>
          <a href="#about">
            Discover the approach <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
