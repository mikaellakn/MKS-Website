import React from "react";
import SecondaryButton from '../general/SecondaryButton';
import PrimaryButton from "../general/PrimaryButton";
import { Montserrat } from "next/font/google";
import { oswald } from "@/app/page";
import ReviewCarousel from "./ReviewCarousel";

export const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
  });

export default function Hero(){
    return (
        <div className="hero-section">
            <div className="flex flex-col items-start justify-start h-full md:w-[60%] md:p-[60px] w-full md:mb-[60px] md:gap-8">
                <p className={`${oswald.className} text-[42px] md:text-[72px] font-bold uppercase leading-tight`}>hair experience like no other</p>
                <p className={`${montserrat.className} body-text`}>Our talented specialist are ready to share their secrets. Don’t loose this opportunity</p>
                <div className="flex md:gap-8 gap-4 flex-col justify-center items-center w-full md:w-auto md:flex-row md:mt-0 mt-4">
                    <div className="min-w-[230px]">
                        <PrimaryButton href="#usp" text='Explore'/>
                    </div>
                    <div className="min-w-[230px]">
                        <SecondaryButton href="/services" text='Services'/>
                    </div>
                </div>
            </div>
            <div className="md:w-[40%] hero-review rounded-[12px] md:rounded-none">
                <ReviewCarousel/>
            </div>
        </div>
    )
}