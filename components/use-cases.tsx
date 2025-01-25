"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Code2,
  Heart,
  LayoutGrid,
  MessageSquare,
  Plane,
  ShoppingBag,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const categories = [
  {
    id: "social",
    label: "Social Media",
    icon: <MessageSquare className="w-4 h-4" />,
    description:
      "No more racking your brain for catchy content—just chat it out! With ChatPro, you can create engaging posts in seconds, complete with cool images, memes, or whatever grabs attention. Plus, stay in the loop with trends, all without leaving the chat. It's time to forget about the grind and welcome the effortless awesomeness with ChatPro.",
    useCases: [
      {
        icon: "/placeholder.svg?height=48&width=48",
        title: "Content",
        description: "Create Instagram posts on any topic",
      },
      {
        icon: "/placeholder.svg?height=48&width=48",
        title: "Captions",
        description: "Come up with engaging captions for your Instagram posts",
      },
      {
        icon: "/placeholder.svg?height=48&width=48",
        title: "Facebook",
        description: "Stand out on Facebook with unique posts",
      },
    ],
  },
  {
    id: "traveling",
    label: "Traveling",
    icon: <Plane className="w-4 h-4" />,
    description:
      "Plan your perfect trip with AI assistance. Get personalized itineraries, local recommendations, and travel tips tailored to your preferences.",
    useCases: [
      {
        icon: "/placeholder.svg?height=48&width=48",
        title: "Itineraries",
        description: "Create detailed travel plans",
      },
      {
        icon: "/placeholder.svg?height=48&width=48",
        title: "Local Tips",
        description: "Discover hidden gems and local favorites",
      },
      {
        icon: "/placeholder.svg?height=48&width=48",
        title: "Packing",
        description: "Get customized packing lists",
      },
    ],
  },
  {
    id: "work",
    label: "Work",
    icon: <LayoutGrid className="w-4 h-4" />,
    description:
      "Boost your productivity with AI-powered work assistance. From email drafting to presentation creation, we've got you covered.",
    useCases: [
      {
        icon: "/placeholder.svg?height=48&width=48",
        title: "Emails",
        description: "Draft professional emails quickly",
      },
      {
        icon: "/placeholder.svg?height=48&width=48",
        title: "Documents",
        description: "Create and edit business documents",
      },
      {
        icon: "/placeholder.svg?height=48&width=48",
        title: "Presentations",
        description: "Design engaging presentations",
      },
    ],
  },
  {
    id: "marketing",
    label: "Marketing",
    icon: <ShoppingBag className="w-4 h-4" />,
    description:
      "Transform your marketing efforts with AI-generated content and strategies that convert.",
    useCases: [
      {
        icon: "/placeholder.svg?height=48&width=48",
        title: "Ad Copy",
        description: "Write compelling ad copy",
      },
      {
        icon: "/placeholder.svg?height=48&width=48",
        title: "Campaigns",
        description: "Plan marketing campaigns",
      },
      {
        icon: "/placeholder.svg?height=48&width=48",
        title: "Analytics",
        description: "Analyze marketing performance",
      },
    ],
  },
  {
    id: "coding",
    label: "Coding",
    icon: <Code2 className="w-4 h-4" />,
    description:
      "Get help with coding challenges, debug issues, and learn programming concepts with AI assistance.",
    useCases: [
      {
        icon: "/placeholder.svg?height=48&width=48",
        title: "Debug",
        description: "Find and fix code issues",
      },
      {
        icon: "/placeholder.svg?height=48&width=48",
        title: "Learn",
        description: "Understanding coding concepts",
      },
      {
        icon: "/placeholder.svg?height=48&width=48",
        title: "Optimize",
        description: "Improve code performance",
      },
    ],
  },
  {
    id: "health",
    label: "Health & Fitness",
    icon: <Heart className="w-4 h-4" />,
    description:
      "Achieve your health and fitness goals with personalized workout plans and nutrition advice.",
    useCases: [
      {
        icon: "/placeholder.svg?height=48&width=48",
        title: "Workouts",
        description: "Get personalized exercise plans",
      },
      {
        icon: "/placeholder.svg?height=48&width=48",
        title: "Nutrition",
        description: "Plan healthy meals and track diet",
      },
      {
        icon: "/placeholder.svg?height=48&width=48",
        title: "Progress",
        description: "Track your fitness journey",
      },
    ],
  },
];

export function UseCases() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  const selectedCategory = categories.find((cat) => cat.id === activeCategory);

  return (
    <div className="rounded-3xl bg-[#1C1C1E] p-8 md:p-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Use Cases of ChatPro
        </h2>
        <p className="text-gray-400">Discover what our app can help with</p>
      </div>

      {/* Category Buttons */}
      <div className="flex gap-2 mb-12 overflow-x-auto pb-4 scrollbar-hide">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant="ghost"
            className={`flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-sm transition-colors
              ${
                activeCategory === category.id
                  ? "bg-[#0066FF] text-white hover:bg-[#0066FF]/90"
                  : "bg-[#2C2C2E] text-gray-400 hover:bg-[#2C2C2E]/80"
              }`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.icon}
            {category.label}
          </Button>
        ))}
      </div>

      {/* Content Area */}
      {selectedCategory && (
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Column - Description */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              {selectedCategory.label}
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              {selectedCategory.description}
            </p>
            <Button
              variant="ghost"
              className="bg-[#2C2C2E] hover:bg-[#2C2C2E]/80"
            >
              Try It Now! <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Right Column - Use Cases */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {selectedCategory.useCases.map((useCase, index) => (
              <Card key={index} className="bg-[#2C2C2E] border-none p-4">
                <Image
                  src={useCase.icon || "/placeholder.svg"}
                  alt={useCase.title}
                  width={48}
                  height={48}
                  className="rounded-xl mb-3"
                />
                <h4 className="font-semibold mb-2">{useCase.title}</h4>
                <p className="text-sm text-gray-400">{useCase.description}</p>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
