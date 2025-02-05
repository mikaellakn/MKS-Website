'use client';

import { oswald } from "@/app/page";
import React, { useState, useEffect } from "react";
import Product from "./Product";
import Link from "next/link";

interface ProductSectionProps {
  title: string;
  products: {
    id: string;
    name: string;
    subtitle: string,
    provider: string;
    image : string,
    description: string,
    price: number;
    ingredients: string[],
    features: string[],
  }[];
}

const ProductSection: React.FC<ProductSectionProps> = ({ title, products }) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [cursorPosition, setCursorPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Update cursor position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
  
    window.addEventListener("mousemove", handleMouseMove);
  
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);  

  return (
    <div className="relative flex flex-col justify-center items-start px-[120px] py-[60px]">
      {/* Custom cursor */}
{ isHydrated &&     <div
        className={`pointer-events-none fixed w-[80px] h-[80px] p-[10px] border border-1 flex justify-center items-center bg-white bg-opacity-20 border-white rounded-full transition-transform duration-150 ${
          isHovering ? "opacity-100 scale-100" : "opacity-0 scale-50"
        }`}
        style={{
          top: cursorPosition.y - 60,
          left: cursorPosition.x - 60,
          zIndex: 9999,
        }}
      >
        <p className="font-bold text-[16px] uppercase text-white">view</p>
      </div>}

      {/* Title */}
      <p
        className={`${oswald.className} text-[72px] font-bold uppercase leading-[72px]`}
      >
        {title}
      </p>

      {/* Products Grid */}
      <div className="grid grid-cols-3 justify-center items-center gap-x-[40px] gap-y-[60px] w-full mt-[60px]">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <Link href={`/products/${product.id}`}>
              <Product
                name={product.name}
                provider={product.provider}
                price={product.price}
                image={product.image}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
