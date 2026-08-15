import {
  BadgeDollarSign,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  GitBranch,
  LayoutDashboard,
  Mail,
  MessageCircle,
  Rocket,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const typingRoles = ["React Developer", "AI Chatbot Developer", "Full-Stack Developer", "Business Automation Developer"];

export const techBadges = ["React", "JavaScript", "Tailwind CSS", "Node.js", "MongoDB", "AI Integration"];

export const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["HTML", "CSS", "JavaScript", "React JS", "Next.js", "Tailwind CSS", "Bootstrap", "TypeScript"],
  },
  {
    title: "Backend & APIs",
    icon: ServerCog,
    skills: ["Node.js", "Express.js", "REST APIs", "MongoDB", "JWT Authentication"],
  },
  {
    title: "AI & Automation",
    icon: BrainCircuit,
    skills: ["OpenAI API", "AI Chatbots", "ManyChat", "Lead Capture Automation", "Business Workflow Automation"],
  },
  {
    title: "Tools",
    icon: LayoutDashboard,
    skills: ["Git", "GitHub", "VS Code", "Postman", "Vercel"],
  },
];

export const projects = [
  {
    title: "Tax Wiser",
    type: "Tax & Accounting Business Website",
    description:
      "A responsive tax and accounting website with a professional service-focused interface, clear calls to action, and a contact enquiry experience.",
    features: ["Responsive business website", "Tax and accounting service presentation", "Contact enquiry interface", "Mobile navigation", "SEO metadata"],
    technologies: ["React", "TypeScript", "Vite", "CSS", "Vercel"],
    screenshot: "/projects/tax-wiser.webp",
    screenshotAlt: "Tax Wiser tax and accounting website homepage preview",
    liveHref: "https://tax-wiser-website.vercel.app",
    githubHref: "https://github.com/Bilal-Ranjha/tax-wiser-website",
    githubLabel: "GitHub",
    icon: BriefcaseBusiness,
  },
  {
    title: "BR Chat AI",
    type: "Full-Stack AI Chatbot Platform",
    description:
      "A custom AI chatbot platform for businesses that provides intelligent customer support, captures leads, manages conversations, and includes a secure admin dashboard.",
    features: ["AI-powered responses", "Lead capture", "Admin dashboard", "Conversation management", "Knowledge base", "Secure authentication", "Responsive design"],
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "OpenAI API", "Tailwind CSS"],
    screenshot: "/projects/br-chat-ai.svg",
    screenshotAlt: "BR Chat AI dashboard preview screenshot",
    githubHref: "#contact",
    githubLabel: "Ask About Project",
    icon: Bot,
  },
  {
    title: "MediBook AI",
    type: "MERN Healthcare Appointment Platform",
    description:
      "A full-stack healthcare appointment platform with user registration, authentication, doctor listings, appointment booking, protected routes, backend APIs, and database integration.",
    features: ["User authentication", "Doctor listings", "Appointment booking", "Protected routes", "MongoDB Atlas", "Responsive healthcare UI"],
    technologies: ["React", "Node.js", "Express", "MongoDB Atlas", "JWT", "Tailwind CSS"],
    screenshot: "/projects/medibook-ai.webp",
    screenshotAlt: "MediBook AI healthcare appointment booking platform",
    githubHref: "https://github.com/Bilal-Ranjha/Medibook-ai",
    githubLabel: "GitHub",
    icon: ShieldCheck,
  },
];

export const services = [
  { title: "React JS Website Development", text: "Modern React websites with reusable components, polished UI, and performance-minded structure.", icon: Code2 },
  { title: "AI Chatbot Development", text: "Business chatbot solutions for websites, customer support, lead capture, FAQs, and practical workflow automation.", icon: Bot },
  { title: "Business Website Development", text: "Responsive websites for service businesses, startups, personal brands, and local companies.", icon: BriefcaseBusiness },
  { title: "API Integration", text: "Connect frontends with REST APIs, dashboards, authentication, and third-party services.", icon: Workflow },
  { title: "Responsive UI Development", text: "Accessible interfaces that look sharp on desktop, tablet, and mobile screens.", icon: Sparkles },
  { title: "Website Redesign", text: "Improve outdated pages with cleaner layouts, stronger messaging, and modern React patterns.", icon: Rocket },
];

export const socialLinks = [
  { label: "Fiverr", href: "https://www.fiverr.com/s/WE9qWvB", icon: BadgeDollarSign, note: "Hire Me on Fiverr" },
  { label: "GitHub", href: "https://github.com/Bilal-Ranjha", icon: GitBranch, note: "Bilal-Ranjha" },
  { label: "Email", href: "mailto:m.bilalranjha030@gmail.com", icon: Mail, note: "m.bilalranjha030@gmail.com" },
];

export const timeline = [
  {
    title: "Freelance Frontend Developer",
    meta: "October 2022 - Present",
    icon: BriefcaseBusiness,
    points: ["Build responsive interfaces", "Develop React applications", "Integrate APIs", "Create reusable components", "Fix frontend issues", "Deliver client-focused solutions"],
  },
];

export const contactHighlights = [
  { label: "Freelance work", value: "Available for serious projects", icon: MessageCircle },
  { label: "Project fit", value: "React websites, dashboards, AI chatbots", icon: Workflow },
];

export const projectTypes = ["React Website", "AI Chatbot", "Business Website", "Dashboard", "API Integration", "Website Redesign"];
