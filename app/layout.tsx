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

const title = "Muhammad Bilal | React JS Developer & AI Chatbot Developer";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");
const description =
  "Hire Muhammad Bilal, a frontend developer building responsive React websites, dashboards, API integrations, and AI chatbot automation for businesses.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Muhammad Bilal",
    "Frontend Developer",
    "React JS Developer",
    "AI Chatbot Developer",
    "MERN Developer",
    "Freelance Web Developer",
    "Tailwind CSS Developer",
  ],
  authors: [{ name: "Muhammad Bilal" }],
  creator: "Muhammad Bilal",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "Muhammad Bilal Portfolio",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Muhammad Bilal developer portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
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
