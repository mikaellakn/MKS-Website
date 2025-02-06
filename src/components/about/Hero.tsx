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
            <div className="flex flex-col items-center justify-center h-full w-full p-[60px] mb-[60px] gap-8">
                <p className={`${oswald.className} text-[82px] font-bold uppercase leading-[72px]`}>WHO WE ARE</p>
                <p className={`${montserrat.className} body-text`}>Our talented specialist are ready to share their secrets. Don’t loose this opportunity</p>
                <PrimaryButton href="#mission" text='Explore'/>
            </div>
        </div>
    )
}