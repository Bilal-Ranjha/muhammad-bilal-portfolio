import {
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Database,
  ExternalLink,
  GitBranch,
  Globe2,
  GraduationCap,
  LayoutDashboard,
  Mail,
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

export const techBadges = [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "MongoDB",
  "AI Integration",
];

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
    title: "BR Chat AI",
    type: "Full-Stack AI Chatbot Platform",
    description:
      "A custom AI chatbot platform for businesses that provides intelligent customer support, captures leads, manages conversations, and includes a secure admin dashboard.",
    features: [
      "AI-powered responses",
      "Lead capture",
      "Admin dashboard",
      "Conversation management",
      "Knowledge base",
      "Secure authentication",
      "Responsive design",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "OpenAI API", "Tailwind CSS"],
    liveLabel: "Live Demo Soon",
    codeHref: "#contact",
    icon: Bot,
  },
  {
    title: "MediBook AI",
    type: "MERN Healthcare Appointment Platform",
    description:
      "A full-stack healthcare appointment platform with secure registration, login, doctor listings, appointment booking, protected routes, and MongoDB Atlas integration.",
    features: [
      "User authentication",
      "Doctor listings",
      "Appointment booking",
      "Protected routes",
      "MongoDB Atlas",
      "Responsive healthcare UI",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB Atlas", "JWT", "Tailwind CSS"],
    liveLabel: "Live Demo Soon",
    codeHref: "https://github.com/Bilal-Ranjha/Medibook-ai",
    icon: ShieldCheck,
  },
  {
    title: "React Business Website",
    type: "Responsive Business Website",
    description:
      "A modern React business website with responsive design, reusable components, contact forms, and clean UI for service-focused businesses.",
    features: ["Reusable sections", "Contact forms", "Responsive layout", "Clean UI", "Fast loading"],
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    liveLabel: "Live Demo Soon",
    codeHref: "#contact",
    icon: Globe2,
  },
];

export const services = [
  { title: "React JS Website Development", text: "Modern React websites with reusable components, polished UI, and performance-minded structure.", icon: Code2 },
  { title: "AI Chatbot Development", text: "Business chatbot systems for support, lead capture, FAQs, and workflow automation.", icon: Bot },
  { title: "Business Website Development", text: "Responsive websites for service businesses, startups, personal brands, and local companies.", icon: BriefcaseBusiness },
  { title: "API Integration", text: "Connect frontends with REST APIs, dashboards, authentication, and third-party services.", icon: Workflow },
  { title: "Responsive UI Development", text: "Accessible interfaces that look sharp on desktop, tablet, and mobile screens.", icon: Sparkles },
  { title: "Website Redesign", text: "Improve outdated pages with cleaner layouts, stronger messaging, and modern React patterns.", icon: Rocket },
];

export const socialLinks = [
  { label: "Fiverr", href: "#contact", icon: ExternalLink, note: "Add Fiverr profile URL" },
  { label: "GitHub", href: "https://github.com/Bilal-Ranjha", icon: GitBranch, note: "Bilal-Ranjha" },
  { label: "LinkedIn", href: "#contact", icon: ExternalLink, note: "Add LinkedIn profile URL" },
  { label: "Email", href: "mailto:your-email@example.com", icon: Mail, note: "Replace with your email" },
];

export const timeline = [
  {
    title: "Freelance Frontend Developer",
    meta: "October 2022 - Present",
    icon: BriefcaseBusiness,
    points: [
      "Build responsive interfaces",
      "Develop React applications",
      "Integrate APIs",
      "Create reusable components",
      "Fix frontend issues",
      "Deliver client-focused solutions",
    ],
  },
  {
    title: "Matric - Science Group",
    meta: "Gov't Model High School Jhawarian | March 2021 - April 2023",
    icon: GraduationCap,
    points: ["Science group foundation with disciplined academic training."],
  },
  {
    title: "FA",
    meta: "Allama Iqbal Open University | May 2023 - July 2025",
    icon: GraduationCap,
    points: ["Continued education alongside practical web development and freelancing growth."],
  },
];

export const projectTypes = ["React Website", "AI Chatbot", "Business Website", "Dashboard", "API Integration", "Website Redesign"];
