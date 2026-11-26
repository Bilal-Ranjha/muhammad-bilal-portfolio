import Image from "next/image";
import { Reveal } from "@/components/Reveal";
export function AboutSection() {
  return (
    <section id="about" className="section about-section">
      <Reveal className="container editorial-split">
        <div>
          <p className="eyebrow">The person behind the code</p>
          <h2>About Me</h2>
          <div className="about-person">
            <Image
              src="/bilal.jpg"
              alt="Bilal Ranjha"
              width={96}
              height={96}
            />
            <div>
              <strong>Bilal Ranjha</strong>
              <span>
                Full-Stack Developer
                <br />& AI Solutions Developer
              </span>
            </div>
          </div>
        </div>
        <div className="about-copy">
          <h3>I turn ambitious ideas into functional digital products.</h3>
          <p>
            I work across the interface, application logic and database to build
            software that makes sense for the people using it. My focus spans
            full-stack web development, SaaS applications, AI integrations and
            business websites.
          </p>
          <p>
            I approach each project by understanding the problem first, then
            choosing a practical architecture. Clear user journeys, maintainable
            code and reliable integrations guide the decisions from the first
            screen to deployment.
          </p>
          <p id="experience" className="experience-note">
            Freelance development since October 2022, with a focus on responsive
            interfaces, API integrations and practical client requirements.
          </p>
          <div className="about-principles">
            <span>Practical problem-solving</span>
            <span>Maintainable architecture</span>
            <span>Thoughtful user experience</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
