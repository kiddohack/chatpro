'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"

export function Newsletter() {
  return (
    <div className="w-full max-w-6xl mx-auto bg-[#1C1C1E] rounded-3xl overflow-hidden">
      <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Hack your productivity</h2>
          <p className="text-gray-400 mb-8">Get a free guide on top AI prompts for work</p>
          
          <div className="space-y-4">
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Enter Your Email" 
                className="bg-black/20 border-white/10"
              />
              <Button className="bg-[#0066FF] hover:bg-[#0066FF]/90 whitespace-nowrap">
                Get Guide
              </Button>
            </div>
            <p className="text-xs text-gray-400">
              By tapping Get Guide, you accept our{' '}
              <Link href="#" className="underline hover:text-[#0066FF]">
                Terms of Use
              </Link>
              {' '}and{' '}
              <Link href="#" className="underline hover:text-[#0066FF]">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
        
        <div className="relative h-[300px]">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-15%20at%2010.45.29-0VbgbpYXB5d5YtQEwLQbxGGxQPFpVj.png"
            alt="Free Guide Preview"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  )
}

