'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQ() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">FAQ</h2>
        <p className="text-gray-400">Get answers to your burning questions</p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="border-white/10">
          <AccordionTrigger className="text-left hover:text-[#0066FF]">
            How can I get started on ChatPro?
          </AccordionTrigger>
          <AccordionContent className="text-gray-400">
            To begin chatting on ChatPro, simply complete our quick registration process. Once done, you're all set to dive into the world of chatting. It's as simple as that-one easy step, and you're good to go!
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="border-white/10">
          <AccordionTrigger className="text-left hover:text-[#0066FF]">
            What are the key features of ChatPro?
          </AccordionTrigger>
          <AccordionContent className="text-gray-400">
            <ul className="list-disc pl-4 space-y-2">
              <li><strong>GPT-4o mini, GPT-4o, Claude 3 Haiku, Claude 3.5 Haiku:</strong> Have natural and dynamic conversations powered by advanced AI models.</li>
              <li><strong>Image Generation:</strong> Turn your ideas into captivating images that will leave everyone in awe.</li>
              <li><strong>Vast Prompt Collection:</strong> Explore over 120 ready-made prompts and unleash your creativity with ChatPro.</li>
              <li><strong>Follow-Up Questions:</strong> Keep your chats going and delve deeper into any topic.</li>
              <li><strong>Working with uploaded files:</strong> Deal with PDF, DOC, TXT, and more.</li>
              <li><strong>Working with uploaded images:</strong> Deal with JPEG, JPG, PNG, and WEBP.</li>
              <li>and many more!</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="border-white/10">
          <AccordionTrigger className="text-left hover:text-[#0066FF]">
            Tell me more about the pricing plans.
          </AccordionTrigger>
          <AccordionContent className="text-gray-400">
            We offer a free plan with basic features, including access to GPT-4o mini and assistance with everyday tasks. Our Premium plan provides additional benefits and enhanced features, such as access to GPT-4o for faster and more detailed answers, unlimited responses, image generation, and more.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="border-white/10">
          <AccordionTrigger className="text-left hover:text-[#0066FF]">
            How should I proceed if I face any service difficulties?
          </AccordionTrigger>
          <AccordionContent className="text-gray-400">
            If you encounter any service difficulties, the best course of action is to contact our Support Team. Visit our website, click on "Contact Us" at the bottom part of the main screen, fill out the form, and submit your request. Our Support Team will promptly assist you.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5" className="border-white/10">
          <AccordionTrigger className="text-left hover:text-[#0066FF]">
            How do I contact your Support Team?
          </AccordionTrigger>
          <AccordionContent className="text-gray-400">
            To reach our Support Team, visit our website and click on the "Contact Us" button at the bottom part of the main screen. Fill out the provided form and submit your request.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

