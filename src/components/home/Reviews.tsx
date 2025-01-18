import { oswald } from "@/app/page";
import avatar from "../../../public/images/avatar.webp";
import quoteLeft from "../../../public/icons/quote-left.svg";
import quoteRight from "../../../public/icons/quote-right.svg";
import React from "react";
import Image from "next/image";

export default function Reviews(){
    return(
        <div className="reviews">
            <div className="review-card">
                <div>
                    <Image src={quoteLeft} alt="quote-left" width={50}/>
                </div>
                <div>
                    <p className={`${oswald.className} text-[28px] leading-[32px] font-bold uppercase`}>“Thanks to the masters of the Hairy salon for creating an incredible hairstyle! I recommend this salon! You are real professionals!”</p>
                </div>
                <div className="flex justify-between items-center gap-[10px]">
                    <Image alt='customer-image' src={avatar} width={60} className="rounded-full"/>
                    <div>
                        <p className="text-[20px] font-bold">Kristen Stewart</p>
                        <p className="text-[16px] font-semibold">1 week ago</p>
                    </div>
                </div>
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