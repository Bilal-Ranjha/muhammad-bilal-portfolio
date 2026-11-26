import { services } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/Ui";
export function ServicesSection() {
  return (
    <section id="services" className="section services-section">
      <Reveal className="container">
        <SectionHeader
          eyebrow="Development Services"
          title="The right expertise. From idea to application."
          text="Focused development support for the product you want to build and the problems you need to solve."
        />
        <div className="service-list">
          {services.map((service, i) => (
            <article className="service-row" key={service.title}>
              <span className="row-number">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
