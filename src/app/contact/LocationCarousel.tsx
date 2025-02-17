"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Phone, Mail } from 'lucide-react';
import { oswald } from '../page';

const LocationCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const locations = [
    {
      city: "New York",
      address: "5 Washington Square, New York, USA",
      phone: "+1 212 425 8617",
      email: "hello_hairy@office.com"
    },
    {
      city: "Los Angeles",
      address: "8570 Sunset Boulevard, Los Angeles, USA",
      phone: "+1 310 657 9099",
      email: "la_hairy@office.com"
    },
    {
      city: "Chicago",
      address: "401 North Michigan Avenue, Chicago, USA",
      phone: "+1 312 464 1636",
      email: "chi_hairy@office.com"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === locations.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? locations.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === locations.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full max-w-md">
      <div className="transition-all duration-500 ease-in-out">
        <p className={`${oswald.className} text-[24px] uppercase font-bold mt-[40px] mb-[10px]`}>
          {locations[currentIndex].city}
        </p>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5" />
            <p>{locations[currentIndex].address}</p>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5" />
            <p>{locations[currentIndex].phone}</p>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5" />
            <p>{locations[currentIndex].email}</p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-6">
          <div className="flex gap-2">
            {locations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-[#000957] w-4' : 'bg-gray-300'
                }`}
                aria-label={`Go to ${locations[index].city} information`}
              />
            ))}
          </div>

          <div className="flex gap-2">
            <button 
              onClick={handlePrevious}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Previous location"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={handleNext}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Next location"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationCarousel;