import React from "react";
import PrimaryButton from "../general/PrimaryButton";
import { Montserrat } from "next/font/google";
import { oswald } from "@/app/page";

export const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
  });

export default function Hero(){
    return (
        <div className="hero-section">
            <div className="flex flex-col items-center justify-center h-full w-full md:p-[60px] md:mb-[60px] md:gap-8 gap-4">
                <p className={`${oswald.className} text-[42px] md:text-[82px] font-bold uppercase leading-tight`}>WHO WE ARE</p>
                <p className={`${montserrat.className} body-text`}>Our talented specialist are ready to share their secrets. Don’t loose this opportunity</p>
                <PrimaryButton href="#mission" text='Explore'/>
            </div>
        </div>
    )
}