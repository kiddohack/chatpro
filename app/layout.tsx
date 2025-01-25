import { Header } from "@/components/header";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChatPro - Your AI Writing Assistant",
  description:
    "Experience the power of AI-assisted writing with ChatPro. Generate, edit, and enhance your content with just a few clicks.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(inter.className, "min-h-screen bg-black antialiased text-white")}
      >
        <Header />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
