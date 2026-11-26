import type { Metadata } from "next";
import "./globals.css";
const title = "Bilal Ranjha — Full-Stack Developer & AI Solutions Developer";
const description =
  "Full-stack web development, SaaS applications, backend APIs and AI integrations. Explore selected projects and discuss your next digital product with Bilal Ranjha.";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://bilalranjha.vercel.app";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  authors: [{ name: "Bilal Ranjha" }],
  creator: "Bilal Ranjha",
  keywords: [
    "Bilal Ranjha",
    "Full-Stack Developer",
    "AI Solutions Developer",
    "SaaS Development",
    "Backend APIs",
    "Web Development",
  ],
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title,
    description,
    url: "/",
    type: "website",
    siteName: "Bilal Ranjha",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Bilal Ranjha — Full-Stack Development & AI Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
