import type { ReactNode } from "react";
export function SectionHeader({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p className="section-intro">{text}</p>}
    </div>
  );
}
type LinkProps = {
  href: string;
  children: ReactNode;
  target?: "_blank";
  className?: string;
};
export function PrimaryLink({
  href,
  children,
  target,
  className = "",
}: LinkProps) {
  return (
    <a
      className={`button button-primary ${className}`}
      href={href}
      target={target}
      rel={target ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
}
export function SecondaryLink({
  href,
  children,
  target,
  className = "",
}: LinkProps) {
  return (
    <a
      className={`button button-secondary ${className}`}
      href={href}
      target={target}
      rel={target ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
}
