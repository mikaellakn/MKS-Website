import React from "react";
import sc from '../../../public/icons/scissors.svg';
import color from '../../../public/icons/color.svg';
import curly from '../../../public/icons/curly.svg';
import ServiceCard from "./ServiceCard";
import { oswald } from "@/app/page";

export default function FeaturedServices(){
    return(
        <>
        <div className="featured-services">
            <p className={`${oswald.className} text-[52px] md:text-[62px] font-bold uppercase text-center`}>featured services</p>
            <div className="flex flex-col md:flex-row w-full justify-center items-center gap-[30px] md:gap-[60px]">
                    <ServiceCard  title="hairstyles" text="Our talented specialist are ready to share their secrets. Don’t loose this opportunity" image={sc}/>
                    <ServiceCard  title="hairstyles" text="Our talented specialist are ready to share their secrets. Don’t loose this opportunity" image={color}/>
                    <ServiceCard  title="hairstyles" text="Our talented specialist are ready to share their secrets. Don’t loose this opportunity" image={curly}/>
            </div>
        </div>
        </>
    )
}