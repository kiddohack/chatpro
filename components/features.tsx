"use client";
import React from "react";

import { Card } from "@/components/ui/card";
import Image from "next/image";

const images = [
  { src: "/water-lily.webp", alt: "AI Generated Water Lily" },
  { src: "/air-balloon.webp", alt: "AI Generated Air Baloon" },
  { src: "/butterfly.webp", alt: "AI Generated Butterfly" },
  { src: "/pink-flower.webp", alt: "AI Generated Flower" },
];

export default function Features() {
  return (
    <div className="rounded-3xl bg-[#1C1C1E] p-8 md:p-12 cursor-default">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
          Explore ChatPro's Features
        </h2>
        <p className="text-gray-400">Your go-to for AI solutions</p>
      </div>

      <div className="grid gap-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Image Generation */}
          <Card className="bg-[#2C2C2E] border-none rounded-xl overflow-hidden flex h-96">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-white">
                Image Generation
              </h3>
              <p className="text-gray-400 mb-4">
                ChatPro will help you turn your ideas into captivating images
                that will leave everyone in awe.
              </p>
            </div>

            <div className="h-96 overflow-hidden relative mr-2">
              <div className="animate-infinite-scroll-image flex flex-col space-y-4">
                {images.map((image, index) => (
                  <Image
                    key={`image-${index}`}
                    src={image.src}
                    width={350}
                    height={350}
                    alt={image.alt}
                    className="rounded-lg opacity-50 hover:opacity-100 transition-opacity duration-300"
                  />
                ))}
                {images.map((image, index) => (
                  <Image
                    key={`image-duplicate-${index}`}
                    src={image.src}
                    width={450}
                    height={450}
                    alt={image.alt}
                    className="rounded-lg opacity-50 hover:opacity-100 transition-opacity duration-300"
                  />
                ))}
              </div>
            </div>
          </Card>

          {/* Web-Mobile Sync */}
          <Card className="bg-[#2C2C2E] border-none rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-2 text-white">
              Web-Mobile Sync
            </h3>
            <p className="text-gray-400 mb-4">
              Buy once, use anywhere! Access subscriptions and chat history
              across all devices.
            </p>
            <div className="relative h-[200px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-15%20at%2010.38.38-h6EJBAMqiRRa3CrMscHZrRyDSKjYny.png"
                alt="Web Interface"
                width={300}
                height={200}
                className="absolute top-0 left-0 rounded-lg"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-15%20at%2010.38.38-h6EJBAMqiRRa3CrMscHZrRyDSKjYny.png"
                alt="Mobile Interface"
                width={100}
                height={200}
                className="absolute top-4 right-4 rounded-lg"
              />
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Internet Search */}
          <Card className="bg-[#2C2C2E] border-none rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-2 text-white">
              Internet Search
            </h3>
            <p className="text-gray-400 mb-8">
              Share any question you have and get the most up-to-date info right
              from the internet.
            </p>
            <div className="flex items-center flex-col">
              <div className="bg-[#1C1C1E] rounded-lg p-4 z-20 border border-neutral-600 hover:scale-110 transition-transform duration-700 cursor-default">
                <div className="flex items-center gap-4 text-gray-400">
                  <Image
                    src={"/search-normal.svg"}
                    width={0}
                    height={0}
                    alt="Search icon"
                    className="h-6 w-auto"
                  />
                  <span className="text-sm">
                    Searching for "The most anticipated 2025 TV shows."
                  </span>
                </div>
              </div>
              {/* <div className="bg-[#2f2f32] rounded-lg p-4 w-[calc(100%-10px)] relative -top-5  z-10 border-b border-neutral-600"></div>
              <div className="bg-[#38383c]/60 rounded-lg p-4 w-[calc(100%-20px)] relative -top-10  z-0 border-b border-neutral-600"></div> */}
            </div>
          </Card>

          {/* Document Master */}
          <Card className="bg-[#2C2C2E] border-none rounded-xl p-6 relative overflow-hidden">
            {/* Header & Description */}
            <h3 className="text-2xl font-bold mb-2 text-white">
              Document Master
            </h3>
            <p className="text-gray-400 mb-6">
              Summarize, rewrite, and translate PDF, DOC, TXT, and EPUB files!
              Plus, you can get answers to all your content-related questions.
            </p>

            {/* Image Container */}
            <div className="hover:scale-110 transition-transform">
              <FileOptions />
            </div>
          </Card>

          {/* <div className="absolute -left-6  w-16 h-16 rounded-lg flex items-center justify-center bg-[#FF6B6B] hover:scale-110 transition-transform duration-500">
                    PDF
                  </div>
                  <div className="absolute top-20 -left-6 w-16 h-16 rounded-lg flex items-center justify-center bg-[#4DABF7] hover:scale-110 transition-transform duration-500">
                    DOC
                  </div>
                  <div className="absolute -right-6 w-16 h-16 rounded-lg flex items-center justify-center bg-[#82C91E] hover:scale-110 transition-transform duration-500">
                    TXT
                  </div>
                  <div className="absolute -right-6 top-20 w-16 h-16 rounded-lg flex items-center justify-center bg-[#FCC419] hover:scale-110 transition-transform duration-500">
                    EPUB
                  </div> */}

          {/* Writing Tone */}
          <Card className="bg-[#2C2C2E] border-none rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-2 text-white">Writing Tone</h3>
            <p className="text-gray-400 mb-4">
              From friendly and empathetic to critical and assertive, choose the
              tone of the bot's responses.
            </p>
            <div className="flex flex-wrap gap-2 text-md font-semibold">
              {[
                { emoji: "🤖", text: "Default" },
                { emoji: "👔", text: "Professional" },
                { emoji: "🤔", text: "Curious" },
                { emoji: "💡", text: "Persuasive" },
                { emoji: "😊", text: "Friendly" },
                { emoji: "✍️", text: "Worried" },
              ].map((tone) => (
                <div
                  key={tone.text}
                  className="flex items-center gap-2 bg-[#1C1C1E] rounded-full px-4 py-2"
                >
                  <span>{tone.emoji}</span>
                  <span className="text-sm text-white">{tone.text}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

const FileOptions = () => {
  return (
    <div className="relative w-full h-40 flex justify-center items-center ">
      {/* Background Arc (Dashed Lines) */}
      <div className="absolute w-3/4 h-32 border-dashed border-2 border-gray-500 rounded-full top-0"></div>

      {/* File Icons */}
      <div className="absolute top-0 left-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg">
        PDF
      </div>
      <div className="absolute top-1/2 left-14 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg">
        DOC
      </div>
      <div className="absolute top-0 right-4 bg-orange-500 text-white px-4 py-2 rounded-lg shadow-lg">
        EPUB
      </div>
      <div className="absolute top-1/2 right-14 transform translate-x-1/2 bg-gray-500 text-white px-4 py-2 rounded-lg shadow-lg">
        TXT
      </div>
    </div>
  );
};
