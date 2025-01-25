import React from "react";
import SecondaryButton from '../general/SecondaryButton';
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
            <div className="flex flex-col items-start justify-start h-full w-[60%] p-[60px] mb-[60px] gap-8">
                <p className={`${oswald.className} text-[72px] font-bold uppercase leading-[72px]`}>WHO WE ARE</p>
                <p className={`${montserrat.className} body-text`}>Our talented specialist are ready to share their secrets. Don’t loose this opportunity</p>
                <div className="flex gap-8">
                    <div className="min-w-[230px]">
                        <PrimaryButton text='Explore'/>
                    </div>
                    <div className="min-w-[230px]">
                        <SecondaryButton text='Services'/>
                    </div>
                </div>
            </div>
        </div>
    )
}