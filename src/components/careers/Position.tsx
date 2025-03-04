import { oswald } from "@/app/page";
import React from "react";
import PrimaryButton from "../general/PrimaryButton";

interface PositionProps{
    title : string;
    description : string;
    location : string;
}

const Position =({title, description, location} : PositionProps)=> {
    return (
        <div className="flex flex-col justify-between items-center w-full bg-[#D9EAFD] bg-opacity-50 rounded-[24px] md:min-h-[90px] md:px-[40px] md:py-[20px] px-[40px] py-[20px] gap-y-[20px]">
            <div className="flex flex-col md:flex-row justify-between md:items-center w-full border-b border-white border-solid pb-[20px]">
                <p className={`${oswald.className} text-[28px] font-bold uppercase`}>{title}</p>
                <p className="font-bold uppercase">{location}</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center w-full">
                <p className="text-[18px] font-light md:max-w-[80%] text-center md:text-left mb-[20px] md:mb-0">{description}</p>
                <PrimaryButton text="I'm interested" href="/contact"/>
            </div>
        </div>
    )
}

export default Position;