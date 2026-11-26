import { processSteps } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
export function ProcessSection() {
  return (
    <section id="process" className="section process-section">
      <Reveal className="container editorial-split">
        <div className="process-heading">
          <p className="eyebrow">Development Process</p>
          <h2>
            Clear thinking.
            <br />
            Careful execution.
          </h2>
          <p className="section-intro">
            A visible path from the first conversation to a product you can use,
            understand and maintain.
          </p>
          <a href="#contact" className="text-link">
            Let’s talk about your project
          </a>
        </div>
        <ol className="process-list">
          {processSteps.map((step, i) => (
            <li key={step.title}>
              <span className="row-number">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
