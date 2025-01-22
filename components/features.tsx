'use client'

import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function Features() {
  return (
    <div className="rounded-3xl bg-[#1C1C1E] p-8 md:p-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">Explore ChatPro's Features</h2>
        <p className="text-gray-400">Your go-to for AI solutions</p>
      </div>

      <div className="grid gap-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Image Generation */}
          <Card className="bg-[#2C2C2E] border-none rounded-xl overflow-hidden">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-white">Image Generation</h3>
              <p className="text-gray-400 mb-4">
                ChatPro will help you turn your ideas into captivating images that will leave everyone in awe.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-2 p-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-15%20at%2010.38.38-h6EJBAMqiRRa3CrMscHZrRyDSKjYny.png"
                alt="AI Generated Butterfly"
                width={200}
                height={200}
                className="rounded-lg col-span-1 w-full h-auto"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-15%20at%2010.38.38-h6EJBAMqiRRa3CrMscHZrRyDSKjYny.png"
                alt="AI Generated Scene"
                width={200}
                height={200}
                className="rounded-lg col-span-1 w-full h-auto"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-15%20at%2010.38.38-h6EJBAMqiRRa3CrMscHZrRyDSKjYny.png"
                alt="AI Generated Art"
                width={200}
                height={200}
                className="rounded-lg col-span-1 w-full h-auto"
              />
            </div>
          </Card>

          {/* Web-Mobile Sync */}
          <Card className="bg-[#2C2C2E] border-none rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-2 text-white">Web-Mobile Sync</h3>
            <p className="text-gray-400 mb-4">
              Buy once, use anywhere! Access subscriptions and chat history across all devices.
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
            <h3 className="text-2xl font-bold mb-2 text-white">Internet Search</h3>
            <p className="text-gray-400 mb-4">
              Share any question you have and get the most up-to-date info right from the internet.
            </p>
            <div className="bg-[#1C1C1E] rounded-lg p-4">
              <div className="flex items-center gap-2 text-gray-400">
                <span className="text-2xl">🔍</span>
                <span className="text-sm">Searching for "The most anticipated 2024 TV shows."</span>
              </div>
            </div>
          </Card>

          {/* Document Master */}
          <Card className="bg-[#2C2C2E] border-none rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-2 text-white">Document Master</h3>
            <p className="text-gray-400 mb-4">
              Summarize, rewrite, and translate PDF, DOC, TXT, and EPUB files! Plus, you can get answers to all your content-related questions.
            </p>
            <div className="relative h-32">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-32 h-32">
                  {['PDF', 'DOC', 'TXT', 'EPUB'].map((format, i) => (
                    <div
                      key={format}
                      className="absolute w-16 h-16 rounded-lg flex items-center justify-center text-sm font-bold text-white"
                      style={{
                        backgroundColor: ['#FF6B6B', '#4DABF7', '#82C91E', '#FCC419'][i],
                        transform: `rotate(${i * 90}deg) translateX(20px)`,
                      }}
                    >
                      {format}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Writing Tone */}
          <Card className="bg-[#2C2C2E] border-none rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-2 text-white">Writing Tone</h3>
            <p className="text-gray-400 mb-4">
              From friendly and empathetic to critical and assertive, choose the tone of the bot's responses.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                { emoji: '🤖', text: 'Default' },
                { emoji: '👔', text: 'Professional' },
                { emoji: '🤔', text: 'Curious' },
                { emoji: '💡', text: 'Persuasive' },
                { emoji: '😊', text: 'Friendly' },
                { emoji: '✍️', text: 'Worried' },
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
  )
}

