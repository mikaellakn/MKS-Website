import React from "react";
import SecondaryButton from '../general/SecondaryButton';
import PrimaryButton from "../general/PrimaryButton";
import avatar from "../../../public/images/avatar.webp";
import arrowRight from "../../../public/icons/arrow-right.svg";
import arrowLeft from "../../../public/icons/arrow-left.svg";
import { oswald } from "@/app/layout";
import { montserrat } from "@/app/layout";
import Image from "next/image";

export default function Hero(){
    return (
        <div className="hero-section">
            <div className="flex flex-col items-start justify-start h-full w-[60%] p-[60px] mb-[60px] gap-8">
                <p className={`${oswald.className} text-[72px] font-bold uppercase leading-[72px]`}>hair experience like no other</p>
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
            <div className="w-[40%] hero-review">
                <p className={`${oswald.className} text-[28px] font-bold uppercase`}>reviews</p>
                <div className="flex justify-between items-center gap-[10px]">
                    <Image alt='customer-image' src={avatar} width={60} className="avatar"/>
                    <div>
                        <p className="text-[20px] font-bold">Kristen Stewart</p>
                        <p className="text-[16px] font-semibold">1 week ago</p>
                    </div>
                </div>
                <div>
                    <p className="text-[18px] font-semibold">“Thanks to the masters of MK salon for creating an incredible hairstyle! You made my hair extremely soft, I recommend!”</p>
                </div>
                <div className="flex justify-center gap-4 w-full mt-[20px]">
                    <Image alt='arrow-left' src={arrowLeft} width={30} className="cursor-pointer my-arrow"/>
                    <Image alt='arrow-right' src={arrowRight} width={30} className="cursor-pointer"/>
                </div>
            </div>
        </div>
    )
}