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
        <div className="flex flex-col justify-between items-center w-full bg-[#D9EAFD] bg-opacity-50 rounded-[24px] min-h-[90px] px-[40px] py-[20px] gap-y-[20px]">
            <div className="flex justify-between items-center w-full border-b border-white border-solid pb-[20px]">
                <p className={`${oswald.className} text-[28px] font-bold uppercase`}>{title}</p>
                <p className="font-bold uppercase">{location}</p>
            </div>
            <div className="flex justify-between items-center w-full">
                <p className="text-[18px] font-light max-w-[80%]">{description}</p>
                <PrimaryButton text="I'm interested"/>
            </div>
        </div>
    )
}

export default Position;