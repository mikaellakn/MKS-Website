import { oswald } from "@/app/page";
import quoteRight from "../../../public/icons/quote-right.svg";
import React from "react";
import Image from "next/image";
import QuoteReviewCarousel from "./QuoteReviewCarousel";

export default function Reviews(){
    return(
        <div className="reviews">
            <div className="review-card border-b border-[#F8FAFC] border-opacity-30 md:border-none pb-6">
                <QuoteReviewCarousel/>
            </div>
            <div>
                <p className={`${oswald.className} text-[64px] leading-[60px] font-bold uppercase mb-[20px] text-right md:text-left`}>HEAR FROM OUR CLIENTS</p>
                <p className="text-[20px] font-medium text-right md:text-left">Our talented specialist are ready to share their secrets. Don’t loose this opportunity</p>
                <div className="flex w-full justify-end mt-4 md:mt-0">
                    <Image src={quoteRight} alt="quote-right" width={50}/>
                </div>
            </div>
        </div>
    )
}