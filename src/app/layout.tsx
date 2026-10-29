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
  title: "Saurabh Bhai Patel | Web Developer & CSE Student",
  description:
    "Portfolio of Saurabh Bhai Patel. Computer Science & Engineering student focused on building responsive web applications with React, Next.js, TypeScript, Tailwind CSS, Node.js, and Supabase.",
  keywords: [
    "Saurabh Bhai Patel",
    "Web Developer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Supabase",
    "Socket.IO",
    "Bikramganj",
    "Rungta College",
  ],
  authors: [{ name: "Saurabh Bhai Patel" }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Saurabh Bhai Patel | Web Developer & CSE Student",
    description:
      "Computer Science & Engineering student focused on building responsive web applications with React, Next.js, TypeScript, Node.js, and Supabase.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}>
      <body className="min-h-screen bg-[#07090e] text-slate-100 antialiased selection:bg-indigo-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
