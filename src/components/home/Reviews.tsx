import { oswald } from "@/app/page";
import quoteRight from "../../../public/icons/quote-right.svg";
import React from "react";
import Image from "next/image";
import QuoteReviewCarousel from "./QuoteReviewCarousel";

export default function Reviews(){
    return(
        <div className="reviews">
            <div className="review-card">
                <QuoteReviewCarousel/>
            </div>
            <div>
                <p className={`${oswald.className} text-[64px] leading-[60px] font-bold uppercase mb-[20px]`}>HEAR FROM OUR CLIENTS</p>
                <p className="text-[20px] font-medium">Our talented specialist are ready to share their secrets. Don’t loose this opportunity</p>
                <div className="flex w-full justify-end">
                    <Image src={quoteRight} alt="quote-right" width={50}/>
                </div>
            </div>
        </div>
    )
}