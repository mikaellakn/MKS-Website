import React from "react";
import { Montserrat } from "next/font/google";
import { oswald } from "@/app/page";

export const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
  });

export default function Hero(){
    return (
        <div className="hero-careers">
            <div className="flex flex-col items-center justify-center h-full w-full p-[60px] mb-[60px] gap-8 text-[#F8FAFC]">
                <p className={`${oswald.className} text-[52px] md:text-[72px] font-bold uppercase leading-[72px] text-center`}>Open Positions</p>
            </div>
        </div>
    )
}