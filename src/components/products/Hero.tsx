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
        <div className="hero-products">
            <div className="flex flex-col items-center justify-center h-full w-full p-[60px] mb-[60px] gap-8 text-[#000957]">
                <p className={`${oswald.className} text-[72px] font-bold uppercase leading-[72px]`}>SHOP OUR PRODUCTS</p>
                <p className={`${montserrat.className} text-[20px]`}>We provide a wide range of Hair and Nail care products, available for purchase at the salon.</p>
                <div className="flex gap-8 mt-[40px]">
                    <div className="min-w-[230px]">
                        <PrimaryButton text='Contact Us'/>
                    </div>
                </div>
            </div>
        </div>
    )
}