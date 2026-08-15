import type { Metadata } from "next";
import "./globals.css";

const title = "Bilal Ranjha | React Developer & AI Chatbot Developer";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");
const description =
  "Portfolio of Bilal Ranjha, a React developer and AI chatbot developer building responsive websites, business applications, API integrations, and automation solutions.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Bilal Ranjha",
    "React Developer",
    "Frontend Developer",
    "AI Chatbot Developer",
    "Website Development",
    "Business Automation",
  ],
  authors: [{ name: "Bilal Ranjha" }],
  creator: "Bilal Ranjha",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "Bilal Ranjha Portfolio",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Bilal Ranjha developer portfolio" }],
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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
