import React from "react";
import PrimaryButton from "../general/PrimaryButton";
import { oswald } from "@/app/page";

const CTA =()=> {
    return (
        <div className="hero-section">
        <div className="flex flex-col items-center justify-center h-full w-full p-[60px] mb-[60px] gap-8">
            <p className={`${oswald.className} text-[72px] font-bold uppercase leading-[72px]`}>hair experience like no other</p>
            <p className={` body-text`}>Book your appointment now !</p>
            <div className="flex gap-8">
                <div className="min-w-[230px]">
                    <PrimaryButton text='Book'/>
                </div>
            </div>
        </div>
    </div>
    )
}

export default CTA;