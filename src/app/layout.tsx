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
  title: "Bruno Paulon | Full Stack MERN Developer",
  description: "Portfolio de Bruno Paulon — Full Stack Developer especializado em Node.js, React, Fastify e MongoDB. Construindo aplicações web de alta performance em Portugal.",
  keywords: ["Bruno Paulon", "Full Stack", "MERN", "MongoDB", "Express", "React", "Node.js", "Fastify", "GraphQL", "Developer", "Portugal"],
  authors: [{ name: "Bruno Paulon" }],
  icons: {
    icon: "/avatar.png",
  },
  openGraph: {
    title: "Bruno Paulon | Full Stack MERN Developer",
    description: "Building high-performance web applications with Node.js, React, Fastify & MongoDB.",
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
