'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, CheckCircle2, FileText, ImageIcon, Laptop, MessageSquare, Search, Smartphone, Star, Zap } from 'lucide-react'
import Image from "next/image"
import { useState } from "react"
import { UseCases } from './components/use-cases'
import Features from './components/features'
import { FAQ } from './components/faq'
import { Newsletter } from './components/newsletter'
import { Footer } from './components/footer'

export default function LandingPage() {
  const [activeCategory, setActiveCategory] = useState('social')

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative px-4 pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0066FF]/10 to-transparent" />
        <div className="container relative mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Take your <span className="text-[#0066FF]">writing</span>
              <br />
              to the next level with ChatPro
            </h1>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Experience the power of AI-assisted writing. Generate, edit, and enhance your content with just a few clicks.
            </p>
            <Button size="lg" className="bg-[#0066FF] hover:bg-[#0066FF]/90">
              Try Now <ArrowRight className="ml-2" />
            </Button>
          </div>

          {/* Product Screenshot */}
          <div className="relative mx-auto max-w-4xl mt-16">
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 h-[20%] bottom-0" />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatOn%20%E2%80%94%20Your%20Personal%20AI%20Assistant-MXUctrKs48rWtfhEFLiEt9THhJXCFA.png"
              alt="ChatPro Interface"
              width={1200}
              height={800}
              className="rounded-lg border border-white/10"
            />
          </div>
        </div>
      </section>

      {/* Infinite Logo Scroll */}
      <section className="py-16 border-t border-white/10 overflow-hidden">
        <h3 className="text-center text-xl font-semibold text-white mb-8">
          See Who's Talking About Us
        </h3>
        <div className="relative">
          <div className="flex space-x-12 animate-scroll">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex space-x-12 min-w-full">
                <LogoItem src="/placeholder.svg?height=40&width=150" name="TechCrunch" />
                <LogoItem src="/placeholder.svg?height=40&width=150" name="Forbes" />
                <LogoItem src="/placeholder.svg?height=40&width=150" name="Wired" />
                <LogoItem src="/placeholder.svg?height=40&width=150" name="VentureBeat" />
                <LogoItem src="/placeholder.svg?height=40&width=150" name="The Verge" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto max-w-6xl px-4">
          <Features />
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 border-t border-white/10">
        <div className="container mx-auto max-w-6xl px-4">
          <UseCases />
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-t border-white/10">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard number="1.5M+" label="Active Users" />
            <StatCard number="12" label="Languages" />
            <StatCard number="100+" label="Integrations" />
            <StatCard number="15" label="Awards" />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-black/50">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Unlock ChatPro's Full Potential</h2>
          <Tabs defaultValue="monthly" className="max-w-3xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="yearly">Yearly</TabsTrigger>
            </TabsList>
            <TabsContent value="monthly">
              <div className="grid md:grid-cols-2 gap-8">
                <PricingCard
                  title="Free"
                  price="$0"
                  description="Perfect for getting started"
                  features={[
                    "Basic writing assistance",
                    "5 images per month",
                    "Standard support",
                  ]}
                />
                <PricingCard
                  title="Premium"
                  price="$29"
                  description="For professional creators"
                  features={[
                    "Advanced writing tools",
                    "Unlimited images",
                    "Priority support",
                    "API access",
                  ]}
                  highlighted
                />
              </div>
            </TabsContent>
            <TabsContent value="yearly">
              <div className="grid md:grid-cols-2 gap-8">
                <PricingCard
                  title="Free"
                  price="$0"
                  description="Perfect for getting started"
                  features={[
                    "Basic writing assistance",
                    "5 images per month",
                    "Standard support",
                  ]}
                />
                <PricingCard
                  title="Premium"
                  price="$290"
                  description="For professional creators"
                  features={[
                    "Advanced writing tools",
                    "Unlimited images",
                    "Priority support",
                    "API access",
                  ]}
                  highlighted
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 border-t border-white/10">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Reviews</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ReviewCard
              text="ChatOn has completely transformed how I write content. It's an indispensable tool for any writer."
              author="Sarah J."
              role="Content Creator"
            />
            <ReviewCard
              text="The image generation feature is incredible. It's saved me countless hours searching for the right visuals."
              author="Michael R."
              role="Designer"
            />
            <ReviewCard
              text="As a non-native English speaker, ChatOn helps me write with confidence. The suggestions are always spot-on."
              author="Elena M."
              role="Marketing Manager"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 border-t border-white/10">
        <div className="container mx-auto max-w-6xl px-4">
          <FAQ />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 border-t border-white/10">
        <div className="container mx-auto px-4">
          <Newsletter />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0066FF]/10">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to elevate your writing?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Join thousands of satisfied users who have transformed their writing with ChatPro.
          </p>
          <Button size="lg" className="bg-[#0066FF] hover:bg-[#0066FF]/90">
            Get Started Now <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  )
}

function LogoItem({ src, name }: { src: string; name: string }) {
  return (
    <div className="flex items-center justify-center w-[150px] opacity-50 hover:opacity-100 transition-opacity">
      <Image src={src || "/placeholder.svg"} alt={name} width={150} height={40} />
    </div>
  )
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-[#0066FF] mb-2">{number}</div>
      <div className="text-gray-400">{label}</div>
    </div>
  )
}

function PricingCard({ 
  title, 
  price, 
  description, 
  features, 
  highlighted = false 
}: { 
  title: string
  price: string
  description: string
  features: string[]
  highlighted?: boolean
}) {
  return (
    <Card className={`p-6 ${highlighted ? 'border-[#0066FF]' : 'border-white/10'} bg-white/5`}>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="text-3xl font-bold mb-2">{price}<span className="text-sm text-gray-400">/mo</span></div>
      <p className="text-gray-400 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#0066FF]" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button className={`w-full mt-6 ${highlighted ? 'bg-[#0066FF] hover:bg-[#0066FF]/90' : 'bg-white/10 hover:bg-white/20'}`}>
        Get Started
      </Button>
    </Card>
  )
}

function ReviewCard({ text, author, role }: { text: string; author: string; role: string }) {
  return (
    <Card className="p-6 bg-white/5 border-white/10">
      <div className="flex gap-1 mb-4">
        {[1,2,3,4,5].map(i => (
          <Star key={i} className="w-4 h-4 fill-[#0066FF] text-[#0066FF]" />
        ))}
      </div>
      <p className="mb-4 text-gray-300">{text}</p>
      <div>
        <div className="font-semibold">{author}</div>
        <div className="text-sm text-gray-400">{role}</div>
      </div>
    </Card>
  )
}

