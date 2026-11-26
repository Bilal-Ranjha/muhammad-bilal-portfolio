import { InquiryForm } from "@/components/InquiryForm";
import { socialLinks } from "@/data/portfolio";
export function ContactSection() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <p className="eyebrow">Let’s work together</p>
        <div className="contact-layout">
          <div className="contact-copy">
            <h2>
              Let&apos;s build something <span>meaningful.</span>
            </h2>
            <p>
              Have a project in mind? Let&apos;s discuss how I can help turn
              your idea into a functional digital product.
            </p>
            <div className="contact-links">
              {socialLinks.map(({ label, href, note, icon: Icon }) => (
                <a
                  href={href}
                  key={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                >
                  <Icon size={20} aria-hidden="true" />
                  <span>
                    <strong>{label}</strong>
                    <span>{note}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
          <InquiryForm />
        </div>
      </div>
    </section>
  );
}
