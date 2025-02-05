import React from "react";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

interface Review {
  text: string;
  author: string;
  role: string;
}

const reviews: Review[] = [
  {
    text: "ChatPro has completely transformed how I write content.",
    author: "Sarah J.",
    role: "Content Creator",
  },
  {
    text: "The image generation feature is incredible.",
    author: "Michael R.",
    role: "Designer",
  },
  {
    text: "As a non-native English speaker, ChatPro helps me write with confidence.",
    author: "Elena M.",
    role: "Marketing Manager",
  },
  {
    text: "ChatPro's AI-powered tools have revolutionized my workflow.",
    author: "David L.",
    role: "Blogger",
  },
  {
    text: "The AI chatbot is incredibly intuitive and helpful.",
    author: "Sophia W.",
    role: "Entrepreneur",
  },
  {
    text: "I love how easy it is to generate ideas and refine my writing.",
    author: "James K.",
    role: "Copywriter",
  },
  {
    text: "As a developer, I use ChatPro to generate documentation and explain concepts.",
    author: "Liam P.",
    role: "Software Engineer",
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-16 border-t w-full border-white/10 overflow-hidden">
      <div className="flex flex-col overflow-hidden px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Reviews</h2>
        <div className="flex gap-8 animate-infinite-scroll w-[4650px] ">
          {reviews.concat(reviews).map((review, index) => (
            <ReviewCard
              key={index}
              text={review.text}
              author={review.author}
              role={review.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

function ReviewCard({
  text,
  author,
  role,
}: {
  text: string;
  author: string;
  role: string;
}) {
  return (
    <Card className="p-6 bg-white/5 border-white/10 w-[300px] flex-shrink-0">
      <div className="flex gap-1 mb-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star key={i} className="w-4 h-4 fill-[#0066FF] text-[#0066FF]" />
        ))}
      </div>
      <p className="mb-4 text-gray-300">{text}</p>
      <div>
        <div className="font-semibold">{author}</div>
        <div className="text-sm text-gray-400">{role}</div>
      </div>
    </Card>
  );
}

export default ReviewsSection;
