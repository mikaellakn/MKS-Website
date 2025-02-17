import { oswald } from "@/app/page";
import Image from "next/image";
import React from "react";

interface ServiceCardProps {
    title : string,
    text : string,
    image: string
}

export default function ServiceCard(props: ServiceCardProps){
    const {title, text, image} = props;

    return(
    <div className="h-auto w-full md:h-[280px] md:w-[300px] shadow-2xl flex flex-col gap-4 justify-center items-center p-[30px] border border-transparent hover:border-2 hover:border-[#F8FAFC] transition-all duration-200 transform hover:scale-110 cursor-pointer">
        <Image alt="sc" src={image} width={60}/>
        <p className={`${oswald.className} text-[32px] uppercase font-bold`}>{title}</p>
        <p className="text-[16px] text-center">{text}</p>
    </div>
    )
}