import Image from "next/image";
import { projects } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { PrimaryLink, SecondaryLink, SectionHeader } from "@/components/Ui";
export function ProjectsSection() {
  return (
    <section id="projects" className="section work-section">
      <div className="container">
        <SectionHeader
          eyebrow="Selected Work"
          title="Designed with purpose. Built to solve real problems."
        />
        <div className="project-list">
          {projects.map((project, index) => (
            <Reveal key={project.title}>
              <article
                className={`project-showcase ${index % 2 ? "project-reversed" : ""}`}
              >
                <figure className="project-figure">
                  {project.screenshot ? (
                    <div className="project-image">
                      <Image
                        src={project.screenshot}
                        alt={project.screenshotAlt ?? project.title}
                        width={project.screenshotWidth ?? 1600}
                        height={project.screenshotHeight ?? 1000}
                        sizes="(max-width: 900px) 92vw, 58vw"
                      />
                    </div>
                  ) : (
                    <div className="project-placeholder">
                      <span className="eyebrow">Flagship project</span>
                      <strong>
                        TaskFlow<span> AI</span>
                      </strong>
                      <p>Projects. Tasks. A clearer workflow.</p>
                      <div className="placeholder-rule" />
                      <span>Application screenshot pending</span>
                      <small>
                        Visit the public website to explore the product
                        presentation.
                      </small>
                    </div>
                  )}
                  <figcaption>{project.imageLabel}</figcaption>
                </figure>
                <div className="project-copy">
                  {project.featured && <span className="featured-label">Featured Project</span>}
                  <p className="eyebrow">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="technology-list">
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  <div className="button-group">
                    {project.liveHref && (
                      <PrimaryLink href={project.liveHref} target="_blank">
                        {project.liveLabel ?? "Visit Website"}
                      </PrimaryLink>
                    )}
                    {project.githubHref ? (
                      <SecondaryLink href={project.githubHref} target="_blank">
                        View Source
                      </SecondaryLink>
                    ) : (
                      <SecondaryLink href="#contact">
                        Discuss This Project
                      </SecondaryLink>
                    )}
                  </div>
                  <details className="case-details">
                    <summary>
                      Explore the case study <span aria-hidden="true">+</span>
                    </summary>
                    <div>
                      <h4>The problem</h4>
                      <p>{project.problem}</p>
                      <h4>The approach</h4>
                      <p>{project.approach}</p>
                      <h4>My contribution</h4>
                      <p>{project.contribution}</p>
                      <h4>Technical architecture</h4>
                      <p>{project.architecture}</p>
                      <h4>Project status & verification</h4>
                      <p>{project.verification}</p>
                    </div>
                  </details>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
