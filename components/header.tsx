"use client";
import React from "react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string, offset: number = 30) => {
    const element = document.querySelector(id);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1C1C1E]/95 backdrop-blur-md text-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" legacyBehavior passHref>
            <a className="text-2xl font-bold flex items-center space-x-2">
              <Image
                src="/AppIcon.svg"
                width={40} // Explicit width
                height={40} // Explicit height
                alt="App Logo"
                className=""
              />
              <div>ChatPro</div>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center w-full -ml-24 justify-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="#features" scroll={false} legacyBehavior passHref>
                    <NavigationMenuLink
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-[#2C2C2E] hover:text-white focus:bg-[#2C2C2E] focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-[#2C2C2E]/50 data-[state=open]:bg-[#2C2C2E]/50"
                      onClick={() => scrollToSection("#features")}
                    >
                      Features
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link
                    href="#use-cases"
                    scroll={false}
                    legacyBehavior
                    passHref
                  >
                    <NavigationMenuLink
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-[#2C2C2E] hover:text-white focus:bg-[#2C2C2E] focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-[#2C2C2E]/50 data-[state=open]:bg-[#2C2C2E]/50"
                      onClick={() => scrollToSection("#use-cases")}
                    >
                      Use Cases
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contacts" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-[#2C2C2E] hover:text-white focus:bg-[#2C2C2E] focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-[#2C2C2E]/50 data-[state=open]:bg-[#2C2C2E]/50">
                      Contact Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/privacy" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-[#2C2C2E] hover:text-white focus:bg-[#2C2C2E] focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-[#2C2C2E]/50 data-[state=open]:bg-[#2C2C2E]/50">
                      Privacy Policy
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/terms" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-[#2C2C2E] hover:text-white focus:bg-[#2C2C2E] focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-[#2C2C2E]/50 data-[state=open]:bg-[#2C2C2E]/50">
                      Terms of Use
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Desktop Actions Log In/Start for Free buttons */}
          {/* <div className="hidden md:flex items-center">
            <Button
              className="pl-0 hover:bg-transparent"
              variant="ghost"
              asChild
            >
              <Link href="/login">Log In</Link>
            </Button>
            <div className="card-wrapper h-10 w-32">
              <div className="card-content flex items-center justify-center">
                <Button
                  className="bg-transparent hover:bg-transparent text-white"
                  asChild
                >
                  <Link href="/signup">Start for Free</Link>
                </Button>
              </div>
            </div>
          </div> */}

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] bg-[#1C1C1E]/95 backdrop-blur-md border-l border-white/10"
            >
              <nav className="flex flex-col space-y-4">
                <Link
                  href="#features"
                  className="text-lg font-medium hover:text-[#0066FF]"
                  onClick={() => setIsOpen(false)}
                >
                  Features
                </Link>
                <Link
                  href="#use-cases"
                  className="text-lg font-medium hover:text-[#0066FF]"
                  onClick={() => setIsOpen(false)}
                >
                  Use Cases
                </Link>
                <Link
                  href="/contacts"
                  className="text-lg font-medium hover:text-[#0066FF]"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </Link>
                <Link
                  href="/privacy"
                  className="text-lg font-medium hover:text-[#0066FF]"
                  onClick={() => setIsOpen(false)}
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-lg font-medium hover:text-[#0066FF]"
                  onClick={() => setIsOpen(false)}
                >
                  Terms of Use
                </Link>
                <div className="pt-4 flex flex-col space-y-4">
                  <Button
                    variant="ghost"
                    asChild
                    onClick={() => setIsOpen(false)}
                  >
                    <Link href="/login">Log In</Link>
                  </Button>
                  <Button
                    className="bg-[#0066FF] hover:bg-[#0066FF]/90 text-white"
                    asChild
                    onClick={() => setIsOpen(false)}
                  >
                    <Link href="/signup">Start for Free</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// const ListItem = ({ className, title, children, ...props }: any) => {
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <Link
//           className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#2C2C2E] hover:text-white focus:bg-[#2C2C2E] focus:text-white ${className}`}
//           {...props}
//         >
//           <div className="text-sm font-medium leading-none">{title}</div>
//           <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//             {children}
//           </p>
//         </Link>
//       </NavigationMenuLink>
//     </li>
//   );
// };

{
  /* <NavigationMenuItem>
  <NavigationMenuTrigger className="bg-transparent hover:bg-[#2C2C2E]">
    <Link
      href="#features"
      scroll={false}
      onClick={() => scrollToSection("#features")}
    >
      Features
    </Link>
  </NavigationMenuTrigger>
  <NavigationMenuContent>
    <ul className="grid gap-3 p-4 w-[500px] grid-cols-2">
      <li className="row-span-3">
        <Link
          href="#features"
          scroll={false}
          onClick={() => scrollToSection("#features")}
          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-[#0066FF]/20 to-[#0066FF]/10 p-6 no-underline outline-none focus:shadow-md"
        >
          <div className="mb-2 mt-4 text-lg font-medium">
            Explore All Features
          </div>
          <p className="text-sm leading-tight text-muted-foreground">
            Discover everything ChatPro has to offer
          </p>
        </Link>
      </li>
      <ListItem
        href="#features"
        title="Internet Search"
        scroll={false}
        onClick={() => scrollToSection("#features")}
      >
        Get instant response of your question
      </ListItem>
      <ListItem
        href="#features"
        title="Image Generation"
        scroll={false}
        onClick={() => scrollToSection("#features")}
      >
        Create stunning visuals instantly
      </ListItem>
      <ListItem
        href="#features"
        title="Document Analysis"
        scroll={false}
        onClick={() => scrollToSection("#features")}
      >
        Process and analyze any document
      </ListItem>
      <ListItem
        href="#features"
        title="Writing Tone"
        scroll={false}
        onClick={() => scrollToSection("#features")}
      >
        You can choose the tone of your text
      </ListItem>
      <ListItem
        href="#features"
        title="Web-Mobile Sync"
        scroll={false}
        onClick={() => scrollToSection("#features")}
      >
        Buy once and use everywhere
      </ListItem>
    </ul>
  </NavigationMenuContent>
</NavigationMenuItem>; */
}
