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
  title: "Bruno Pal | Full Stack MERN Developer",
  description: "Portfolio de Bruno Pal - Desenvolvedor Full Stack MERN. Criando aplicações web eficientes, escaláveis e focadas na experiência do usuário.",
  keywords: ["Bruno Pal", "Full Stack", "MERN", "MongoDB", "Express", "React", "Node.js", "Developer", "Portfolio"],
  authors: [{ name: "Bruno Pal" }],
  icons: {
    icon: "/avatar.png",
  },
  openGraph: {
    title: "Bruno Pal | Full Stack MERN Developer",
    description: "Criando aplicações web eficientes, escaláveis e focadas na experiência do usuário.",
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
