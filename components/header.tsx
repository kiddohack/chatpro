'use client'

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#1C1C1E]/95 backdrop-blur-md">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            ChatPro
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-[#2C2C2E]">Features</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      <li className="row-span-3">
                        <Link
                          href="/features"
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
                      <ListItem href="/features/chat" title="AI Chat">
                        Advanced conversation capabilities
                      </ListItem>
                      <ListItem href="/features/images" title="Image Generation">
                        Create stunning visuals instantly
                      </ListItem>
                      <ListItem href="/features/documents" title="Document Analysis">
                        Process and analyze any document
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/use-cases" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-[#2C2C2E] hover:text-white focus:bg-[#2C2C2E] focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-[#2C2C2E]/50 data-[state=open]:bg-[#2C2C2E]/50">
                      Use Cases
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/pricing" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-[#2C2C2E] hover:text-white focus:bg-[#2C2C2E] focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-[#2C2C2E]/50 data-[state=open]:bg-[#2C2C2E]/50">
                      Compare Plans
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/login">Log In</Link>
            </Button>
            <Button className="bg-[#0066FF] hover:bg-[#0066FF]/90" asChild>
              <Link href="/signup">Start for Free</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-[#1C1C1E]/95 backdrop-blur-md border-l border-white/10">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/features"
                  className="text-lg font-medium hover:text-[#0066FF]"
                  onClick={() => setIsOpen(false)}
                >
                  Features
                </Link>
                <Link
                  href="/use-cases"
                  className="text-lg font-medium hover:text-[#0066FF]"
                  onClick={() => setIsOpen(false)}
                >
                  Use Cases
                </Link>
                <Link
                  href="/pricing"
                  className="text-lg font-medium hover:text-[#0066FF]"
                  onClick={() => setIsOpen(false)}
                >
                  Compare Plans
                </Link>
                <div className="pt-4 flex flex-col space-y-4">
                  <Button variant="ghost" asChild onClick={() => setIsOpen(false)}>
                    <Link href="/login">Log In</Link>
                  </Button>
                  <Button
                    className="bg-[#0066FF] hover:bg-[#0066FF]/90"
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
  )
}

const ListItem = ({ className, title, children, ...props }: any) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#2C2C2E] hover:text-white focus:bg-[#2C2C2E] focus:text-white ${className}`}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

