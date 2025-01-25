import { oswald } from "@/app/page";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props {
    image : StaticImageData,
    name : string,
    position : string,
    description : string
}

const TeamCard: React.FC<Props> =({image, name, position, description})=>{
    return (
        <>
        <div className="flex flex-col w-[380px] rounded-[24px] bg-[#000957] text-[#F8FAFC]">
            <div className="relative">
                <Image src={image} alt="image" className="w-full rounded-t-[24px]"/>
                <div className="absolute bottom-0 left-0 w-full h-[30px] bg-gradient-to-t from-[#000957] to-transparent"></div>
            </div>
            <div className="flex flex-col py-8 px-4 h-full">
                {/* Name and Position Section */}
                <div className="flex flex-col justify-start">
                    <p className={`${oswald} text-[24px] uppercase font-bold`}>{name}</p>
                    <p className={`${oswald} text-[16px] uppercase font-bold text-[#D9EAFD] my-[10px]`}>{position}</p>
                </div>
                {/* Description Section */}
                <p className={`text-[18px] font-thin leading-relaxed px-4 mt-auto`}>{description}</p>
            </div>
        </div>
        </>
    )
}

export default TeamCard;