import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bruno Paulon | Full Stack Developer",
  description: "Portfolio de Bruno Paulon — Full Stack Developer com 5+ anos de experiência. Node.js, React, Fastify, MongoDB, PostgreSQL, Angular, ERP/CRM (PHC, SAP, Salesforce). Soluções escaláveis para enterprise e clientes internacionais.",
  keywords: ["Bruno Paulon", "Full Stack Developer", "Node.js", "React", "Fastify", "MongoDB", "PostgreSQL", "Angular", "TypeScript", "ERP", "CRM", "PHC", "SAP", "Salesforce", "GraphQL", "C#", "ChatGPT API", "Docker", "Portugal"],
  authors: [{ name: "Bruno Paulon" }],
  icons: {
    icon: "/avatar.png",
  },
  openGraph: {
    title: "Bruno Paulon | Full Stack Developer",
    description: "Full Stack Developer with 5+ years of experience. Expert in Node.js, React, Fastify, MongoDB, PostgreSQL, Angular, and ERP/CRM integrations (PHC, SAP, Salesforce). Building scalable, high-impact solutions for enterprise systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
