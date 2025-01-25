import React from "react";
import { oswald } from "@/app/page";
import PrimaryButton from "../general/PrimaryButton";
import image from '../../../public/images/usp-2.webp';
import image2 from '../../../public/images/usp-3.jpg';
import Image from "next/image";

const Mission =()=>{
    return(
        <div>
            <div className="relative mission">
                <p className={`${oswald} text-[20px] uppercase font-semibold`}>our mission</p>
                <p className={`${oswald} text-[60px] leading-[60px] uppercase font-bold mb-[20px]`}>Luxury salon where you will feel unique and special</p>
                <p className="text-[18px] max-w-[60%]">Welcome to the Hairy salon. A modern beauty salon helps realize a person&apos;s natural desire to look good, to remain beautiful and desirable. We are happy to offer you a wide range of hair care services. We know the secret of how to emphasize your natural attractiveness and slow down the passage of time.</p>
                <PrimaryButton text="Book"/>
                <Image src={image} alt="image" width={1000} className="absolute left-[50%] top-[600px] translate-x-[-50%]"/>
            </div>
            <div className="mission-2">
            <div className="flex-1 flex flex-col justify-start items-center px-[60px] h-full gap-[30px]">
                <p className={`${oswald} text-[20px] uppercase font-semibold`}>our story</p>
                <p className={`${oswald} text-[52px] leading-[52px] uppercase font-bold`}>Luxury salon story</p>
                <p className="flex flex-col justify-end text-[18px] font-thin leading-loose text-left mt-[10px]">
                In the heart of the bustling city, nestled on a charming cobblestone street, stands Luxe Locks Salon—a haven where beauty meets artistry. What started as a dream in a tiny apartment transformed into a celebrated destination for self-expression, confidence, and timeless style.

                Years ago, founder Sophia Rivera, a passionate hairstylist with a pair of scissors and a big dream, saw an opportunity to redefine the salon experience. She envisioned a space where clients weren’t just customers but individuals whose stories could be told through their hair. Every snip, curl, and color would represent empowerment and authenticity.
                </p>
            </div>
            <div className="flex-1 flex flex-col items-center h-full">
                <Image 
                    src={image2} 
                    alt="image" 
                    width={400} 
                    className="w-full justify-start"
                />
                <p className="mt-[40px] justify-between text-[18px] font-thin leading-loose text-left">
                    In the heart of the bustling city, nestled on a charming cobblestone street, stands Luxe Locks Salon—a haven where beauty meets artistry. What started as a dream in a tiny apartment transformed into a celebrated destination for self-expression, confidence, and timeless style.

                    Years ago, founder Sophia Rivera, a passionate hairstylist with a pair of scissors and a big dream, saw an opportunity to redefine the salon experience.
                </p>
            </div>
            </div>
        </div>
    )
}

export default Mission;