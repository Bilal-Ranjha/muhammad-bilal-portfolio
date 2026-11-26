import { skillGroups } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
export function SkillsSection() {
  return (
    <section id="skills" className="section">
      <Reveal className="container editorial-split">
        <div>
          <p className="eyebrow">Technology Stack</p>
          <h2>
            Chosen for
            <br />
            the work ahead.
          </h2>
          <p className="section-intro">
            A practical toolkit for connected interfaces, dependable application
            logic and structured data.
          </p>
        </div>
        <div className="stack-list">
          {skillGroups.map(({ title, skills, icon: Icon }) => (
            <div className="stack-row" key={title}>
              <h3>
                <Icon size={19} aria-hidden="true" />
                {title}
              </h3>
              <p>{skills.join(" · ")}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
