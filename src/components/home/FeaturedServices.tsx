import React from "react";
import sc from '../../../public/icons/scissors.svg';
import color from '../../../public/icons/color.svg';
import curly from '../../../public/icons/curly.svg';
import { oswald } from "@/app/layout";
import ServiceCard from "./ServiceCard";


export default function FeaturedServices(){
    return(
        <>
        <div className="featured-services">
            <p className={`${oswald.className} text-[62px] font-bold uppercase`}>featured services</p>
            <div className="flex w-full justify-center gap-[60px]">
                    <ServiceCard  title="hairstyles" text="Our talented specialist are ready to share their secrets. Don’t loose this opportunity" image={sc}/>
                    <ServiceCard  title="hairstyles" text="Our talented specialist are ready to share their secrets. Don’t loose this opportunity" image={color}/>
                    <ServiceCard  title="hairstyles" text="Our talented specialist are ready to share their secrets. Don’t loose this opportunity" image={curly}/>
            </div>
        </div>
        </>
    )
}