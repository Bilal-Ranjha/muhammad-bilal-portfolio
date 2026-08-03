import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Bilal | Frontend Developer & AI Chatbot Developer",
  description:
    "Professional developer portfolio for Muhammad Bilal, a React JS frontend developer and AI chatbot developer building responsive websites, dashboards, and automation solutions.",
  keywords: [
    "Muhammad Bilal",
    "Frontend Developer",
    "React JS Developer",
    "AI Chatbot Developer",
    "MERN Developer",
    "Freelance Web Developer",
  ],
  authors: [{ name: "Muhammad Bilal" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Muhammad Bilal | React JS & AI Chatbot Developer",
    description: "Modern portfolio for responsive React websites, dashboards, API integrations, and AI chatbot systems.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Muhammad Bilal developer portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Bilal | React JS & AI Chatbot Developer",
    description: "Responsive React applications and AI-powered chatbot solutions for businesses.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
