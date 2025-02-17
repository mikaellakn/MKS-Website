"use client";

import React, { useState, useEffect } from 'react';
import quoteLeft from "../../../public/icons/quote-left.svg";
import avatar from "../../../public/images/avatar.webp";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { oswald } from '@/app/page';

const QuoteReviewCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      name: "Kristen Stewart",
      timeAgo: "1 week ago",
      review: "Thanks to the masters of the Hairy salon for creating an incredible hairstyle! I recommend this salon! You are real professionals!",
    },
    {
      name: "Emma Watson",
      timeAgo: "2 days ago",
      review: "Absolutely phenomenal experience at the Hairy salon! The attention to detail and expertise of the staff is unmatched. My hair has never looked better!",
    },
    {
      name: "Jennifer Lawrence",
      timeAgo: "3 weeks ago",
      review: "Found my new go-to salon! The team at Hairy salon is incredibly skilled and made me feel so comfortable. The results exceeded my expectations!",
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <div className="transition-all duration-500 ease-in-out">
        <div className="mb-4">
        <Image src={quoteLeft} alt="quote-left" width={50}/>
        </div>
        
        <div className="mb-8">
          <p className={`${oswald.className} text-[28px] leading-[32px] font-bold uppercase`}>
          &quot;{reviews[currentIndex].review}&quot;
          </p>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 overflow-hidden rounded-full">
                <Image alt='customer-image' src={avatar} width={60} className="rounded-full"/>
            </div>
            <div>
              <p className="text-[20px] font-bold">{reviews[currentIndex].name}</p>
              <p className="text-[16px] font-semibold">
                {reviews[currentIndex].timeAgo}
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <button 
              onClick={handlePrevious}
              className="p-2 rounded-full transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={handleNext}
              className="p-2 rounded-full transition-colors"
              aria-label="Next review"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-[#F8FAFC] w-4' : 'bg-gray-300'
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuoteReviewCarousel;