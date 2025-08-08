import Image from 'next/image';
import React from 'react';

export default function TestimonialsSection({ direction = "left" }: { direction?: "left" | "right" }) {
  const testimonials = [
    {
      quote: "Love how you can take raw footage and turn it into a professional video with AI.",
      name: "Kipp Bodnar",
      title: "CMO at HubSpot",
      avatar: "https://docuu-vission.vercel.app/_next/image?url=%2Fimages%2Ftestimonial-01.jpg&w=128&q=75"
    },
    {
      quote: "It makes video editing much, much easier.",
      name: "Kieran Flanagan",
      title: "CMO at Zapier",
      avatar: "https://docuu-vission.vercel.app/_next/image?url=%2Fimages%2Ftestimonial-01.jpg&w=128&q=75"
    },
    {
      quote: "Having spent years editing video, Capsule is absolutely mindblowing. 🤯",
      name: "Cameron Baughn",
      title: "Founder at DesignFriend",
      avatar: "https://docuu-vission.vercel.app/_next/image?url=%2Fimages%2Ftestimonial-01.jpg&w=128&q=75"
    },
    {
      quote: "Would recommend to anyone looking to save time and effort on video creation.",
      name: "Sarah Johnson",
      title: "Marketing Director at TechCorp",
      avatar: "https://docuu-vission.vercel.app/_next/image?url=%2Fimages%2Ftestimonial-01.jpg&w=128&q=75"
    },
    {
      quote: "Capsule significantly improves the time it takes to create video.",
      name: "Chris Gehring",
      title: "Digital and Social Strategist at RedPeg",
      avatar: "https://docuu-vission.vercel.app/_next/image?url=%2Fimages%2Ftestimonial-01.jpg&w=128&q=75"
    },
    {
      quote: "There is Apple & then there's Capsule's UX & UI. This is world-class execution.",
      name: "Karthik Puvvada",
      title: "Founder and CEO at Build in Public",
      avatar: "https://docuu-vission.vercel.app/_next/image?url=%2Fimages%2Ftestimonial-01.jpg&w=128&q=75"
    },
    {
      quote: "Great job making this tech accessible!",
      name: "Emad Mostaque",
      title: "Founder and CEO at Stability AI",
      avatar: "https://docuu-vission.vercel.app/_next/image?url=%2Fimages%2Ftestimonial-01.jpg&w=128&q=75"
    },
    {
      quote: "The checks all the boxes for creating engaging videos at scale.",
      name: "Stephanie Poots",
      title: "Comms Manager at University of Nebraska",
      avatar: "https://docuu-vission.vercel.app/_next/image?url=%2Fimages%2Ftestimonial-01.jpg&w=128&q=75"
    }
  ];

  const animationClass =
    direction === "left"
      ? "animate-[scroll-left_20s_linear_infinite]"
      : "animate-[scroll-right_20s_linear_infinite]";

  return (
    <div className="scrollbar-hide w-full">
      <div className={`flex gap-6 ${animationClass}`}>
        {/* Duplicate testimonials to create looping effect */}
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-900 w-[470px] h-[250px] flex-shrink-0 flex flex-col justify-between rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-transform duration-300 hover:scale-105"
          >
            <div className="mb-6">
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {testimonial.quote}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gray-700 overflow-hidden flex-shrink-0">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0 text-start">
                <h4 className="text-green-400 font-semibold text-sm sm:text-base truncate">
                  {testimonial.name}
                </h4>
                <p className="text-gray-500 text-xs sm:text-sm truncate">
                  {testimonial.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
