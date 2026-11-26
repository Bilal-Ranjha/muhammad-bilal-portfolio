import { navItems, socialLinks } from "@/data/portfolio";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <a href="#home" className="brand" aria-label="Bilal Ranjha home">
            <span className="brand-mark">
              BR<span>.</span>
            </span>
            <span className="brand-name">Bilal Ranjha</span>
          </a>
          <p>Full-Stack Developer & AI Solutions Developer</p>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Bilal Ranjha. All rights reserved.</p>
          <nav aria-label="Footer navigation">
            {navItems.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="footer-socials">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                href={href}
                key={label}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
              >
                <Icon size={19} />
              </a>
            ))}
            <a href="#home" aria-label="Back to top">
              Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
