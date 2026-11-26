import {
  Mail,
  Code2,
  Server,
  Database,
  Bot,
  Shield,
  Terminal,
  BadgeDollarSign,
} from "lucide-react";
import { LinkedInIcon } from "@/components/SocialIcons";
export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];
export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammad-bilal-ranjha030",
    icon: LinkedInIcon,
    note: "Connect on LinkedIn",
  },
  {
    label: "Fiverr",
    href: "https://www.fiverr.com/s/WE9qWvB",
    icon: BadgeDollarSign,
    note: "Work with me on Fiverr",
  },
  {
    label: "Email",
    href: "mailto:m.bilalranjha030@gmail.com",
    icon: Mail,
    note: "m.bilalranjha030@gmail.com",
  },
];
export const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "REST APIs", "Next.js API Routes"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["PostgreSQL", "Prisma ORM", "Neon"],
  },
  { title: "Authentication", icon: Shield, skills: ["Auth.js"] },
  {
    title: "AI & integrations",
    icon: Bot,
    skills: ["AI integration", "API-based solutions"],
  },
  {
    title: "Development & deployment",
    icon: Terminal,
    skills: ["Git", "GitHub", "VS Code", "Vercel"],
  },
];
export type Project = {
  title: string;
  category: string;
  featured?: boolean;
  description: string;
  problem: string;
  approach: string;
  contribution: string;
  architecture: string;
  verification: string;
  technologies: string[];
  screenshot?: string;
  screenshotAlt?: string;
  screenshotWidth?: number;
  screenshotHeight?: number;
  imageLabel: string;
  liveLabel?: string;
  liveHref?: string;
  githubHref?: string;
};
export const projects: Project[] = [
  {
    title: "TaskFlow AI",
    featured: true,
    category: "Project & Task Workspace",
    description:
      "A project and task workspace with a dashboard for active projects, task status, completion progress and project overviews.",
    problem:
      "Getting started with a project workspace requires a clear path from creating an account to setting up a place for work.",
    approach:
      "The public onboarding combines account details and a workspace name, with optional sample projects and tasks. Separate sign-in and password-reset pages support returning users.",
    contribution:
      "My TaskFlow AI application, shown through my workspace dashboard screenshot.",
    architecture:
      "The supplied project stack is Next.js, TypeScript, Auth.js, Prisma ORM and Neon PostgreSQL, hosted on Vercel. Backend implementation has not been independently inspected as part of this portfolio review.",
    verification:
      "Owner-provided dashboard screenshot shows project and task summaries, a completion chart and project previews. Public sign-in, workspace registration and password-reset screens were also reviewed. Authenticated project management, AI behavior, account creation and email delivery were not exercised.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Auth.js",
      "Prisma ORM",
      "Neon PostgreSQL",
      "Vercel",
    ],
    screenshot: "/projects/taskflow-dashboard-public.png",
    screenshotWidth: 1920,
    screenshotHeight: 916,
    screenshotAlt: "TaskFlow AI dashboard showing project totals, task progress, a completion chart and project overview",
    imageLabel: "Application dashboard · owner-provided screenshot",
    liveLabel: "Visit Live Website",
    liveHref: "https://taskflowai-bilal.vercel.app/",
  },
  {
    title: "Tax Wiser",
    category: "Business Website · Tax & Accounting",
    description:
      "A service-focused website that gives a tax and accounting business a clear, professional online presence.",
    problem:
      "Visitors need to understand the available services and find a straightforward way to make an enquiry.",
    approach:
      "Clear service presentation, prominent contact options and a responsive layout for smaller screens.",
    contribution: "Business website interface and responsive presentation.",
    architecture:
      "React and TypeScript frontend built with Vite and CSS, deployed on Vercel.",
    verification:
      "Existing homepage screenshot and project links retained. Contact delivery on the project website has not been tested.",
    technologies: ["React", "TypeScript", "Vite", "CSS", "Vercel"],
    screenshot: "/projects/tax-wiser.webp",
    screenshotWidth: 2560,
    screenshotHeight: 1459,
    screenshotAlt:
      "Tax Wiser homepage with accounting services and contact calls to action",
    imageLabel: "Website screenshot",
    liveHref: "https://tax-wiser-website.vercel.app",
    githubHref: "https://github.com/Bilal-Ranjha/tax-wiser-website",
  },
  {
    title: "MediBook AI",
    category: "Healthcare Appointment Platform",
    description:
      "A healthcare application foundation exploring service discovery, appointment interfaces and patient-focused navigation.",
    problem:
      "Healthcare services need a clear path from exploring care options to understanding the appointment process.",
    approach:
      "A readable service interface and appointment-oriented structure with room for connected backend workflows.",
    contribution: "Healthcare interface and full-stack application foundation.",
    architecture:
      "React frontend with a Node.js and Express backend foundation; MongoDB and JWT are included in the supplied project information.",
    verification:
      "The supplied screenshot describes booking and authentication as foundations for later integration. Completed end-to-end booking and authentication are not claimed.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    screenshot: "/projects/medibook-ai.webp",
    screenshotWidth: 1920,
    screenshotHeight: 1080,
    screenshotAlt:
      "MediBook AI public healthcare homepage and appointment interface preview",
    imageLabel: "Application homepage screenshot",
    githubHref: "https://github.com/Bilal-Ranjha/Medibook-ai",
  },
  {
    title: "BR Chat AI",
    category: "AI Customer Support · Project Preview",
    description:
      "A business chatbot project focused on customer questions, lead enquiries and conversation management.",
    problem:
      "Repeated customer questions and scattered enquiries can create extra work for a small business.",
    approach:
      "A proposed support workspace combining a conversational interface, business knowledge and lead information.",
    contribution:
      "Chatbot platform concept and application interface direction.",
    architecture:
      "The supplied project stack includes React, Node.js, Express, MongoDB, JWT and the OpenAI API.",
    verification:
      "Illustrated interface preview only. No public application or source link is available to verify live integrations.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "OpenAI API"],
    screenshot: "/projects/br-chat-ai.svg",
    screenshotWidth: 960,
    screenshotHeight: 600,
    screenshotAlt:
      "Illustrated BR Chat AI support inbox concept, not a live application screenshot",
    imageLabel: "Interface illustration · not an application screenshot",
  },
];
export const services = [
  {
    title: "Full-Stack Web Development",
    text: "Connected interfaces, backend logic and data models built around the way your business works.",
  },
  {
    title: "SaaS Application Development",
    text: "Turn a product idea into a structured web application with a clear foundation for users, workflows and future features.",
  },
  {
    title: "AI Integration & Automation",
    text: "Connect AI services to practical workflows, with clear boundaries, useful outputs and thoughtful error handling.",
  },
  {
    title: "Backend & API Development",
    text: "Build the application logic, API endpoints and database structure that keep your product connected.",
  },
  {
    title: "Business Website Development",
    text: "Present your services through a responsive website that makes the next step easy for potential clients.",
  },
  {
    title: "Application Deployment & Optimization",
    text: "Prepare applications for release, configure hosting and improve performance, accessibility and maintainability.",
  },
];
export const processSteps = [
  {
    title: "Discovery & Requirements",
    text: "Define the users, business problem and essential features. Deliverable: an agreed scope and clear acceptance criteria.",
  },
  {
    title: "Planning & Architecture",
    text: "Map user journeys, data relationships and integrations. Deliverable: a practical technical plan and delivery milestones.",
  },
  {
    title: "Design & Development",
    text: "Build responsive interfaces and connected features in reviewable stages. Deliverable: working increments you can explore.",
  },
  {
    title: "Testing & Optimization",
    text: "Check core workflows, edge cases, accessibility and performance. Deliverable: a tested release candidate and documented limitations.",
  },
  {
    title: "Deployment & Handover",
    text: "Prepare the release and explain how to operate and maintain it. Deliverable: the application, source and setup documentation.",
  },
];
export const projectTypes = [
  "Full-Stack Application",
  "SaaS Application",
  "AI Integration",
  "Backend & API",
  "Business Website",
  "Deployment & Optimization",
  "React Website",
  "AI Chatbot",
  "Dashboard",
  "API Integration",
  "Website Redesign",
];
