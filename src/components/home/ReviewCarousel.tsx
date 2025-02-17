"use client";

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { oswald } from '@/app/page';
import avatar from "../../../public/images/avatar.webp";
import Image from 'next/image';

const ReviewCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      name: "Kristen Stewart",
      timeAgo: "1 week ago",
      review: "Thanks to the masters of MK salon for creating an incredible hairstyle! You made my hair extremely soft, I recommend!",
    },
    {
      name: "Emma Watson",
      timeAgo: "2 days ago",
      review: "Absolutely love my new look! The team was professional and friendly. Will definitely be coming back!",
    },
    {
      name: "Jennifer Lawrence",
      timeAgo: "3 weeks ago",
      review: "Best salon experience I've ever had. The attention to detail is remarkable. My hair has never looked better!",
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

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
    <div className="w-full max-w-md">
      <h2 className={`${oswald.className} text-[28px] font-bold uppercase mb-4`}>Reviews</h2>
      
      <div className="transition-all duration-500 ease-in-out">
        <div className="flex items-start gap-4 mb-4 min-h-[80px]">
            <Image alt='customer-image' src={avatar} width={60} className="avatar"/>
          <div>
            <p className="text-xl font-bold">{reviews[currentIndex].name}</p>
            <p className="text-sm text-gray-600 font-semibold">
              {reviews[currentIndex].timeAgo}
            </p>
          </div>
        </div>

        <div className="mb-6 max-h">
          <p className="text-lg font-semibold">
          &quot;{reviews[currentIndex].review}&quot;
          </p>
        </div>

        <div className="flex justify-center gap-4">
          <button 
            onClick={handlePrevious}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={handleNext}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Next review"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-[#000957] w-4' : 'bg-gray-300'
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewCarousel;