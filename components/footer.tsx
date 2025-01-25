import React from "react";
import { Button } from "@/components/ui/button";
import {
  Instagram,
  Linkedin,
  Mail,
  InstagramIcon as TiktokIcon,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <Link href="/" className="text-2xl font-bold">
            ChatPro
          </Link>

          <div className="flex items-center gap-6">
            <Link href="#" className="text-gray-400 hover:text-[#0066FF]">
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-[#0066FF]">
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-[#0066FF]">
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-[#0066FF]">
              <Youtube className="w-5 h-5" />
              <span className="sr-only">YouTube</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-[#0066FF]">
              <TiktokIcon className="w-5 h-5" />
              <span className="sr-only">TikTok</span>
            </Link>
          </div>

          <Button
            variant="ghost"
            className="text-gray-400 hover:text-[#0066FF] gap-2"
          >
            <Mail className="w-5 h-5" />
            Contact Us
          </Button>
        </div>
      </div>
    </footer>
  );
}
