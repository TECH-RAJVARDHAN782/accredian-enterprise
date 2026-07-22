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
  title: "Accredian Enterprise | Workforce Upskilling in AI, Data Science & Leadership",
  description: "Recreate Accredian Enterprise landing page. Transform enterprise capabilities with custom GenAI, MLOps, and Executive Education programs co-designed with premier institutes like IITs, IIMs, and XLRI.",
  keywords: ["Accredian Enterprise", "GenAI Upskilling", "Enterprise AI Training", "Data Science Corporate Training", "IIT Executive Education", "CAT Framework"],
  openGraph: {
    title: "Accredian Enterprise | AI & Workforce Upskilling",
    description: "Recreate Accredian Enterprise landing page with Next.js App Router, custom CAT framework, lead capture API, and interactive ROI calculator.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100">{children}</body>
    </html>
  );
}
