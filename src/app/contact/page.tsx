import React from "react";
import ContactForm from "@/components/contact/ContactForm";
import { oswald } from "../page";
import LocationCarousel from "./LocationCarousel";
import ScrollAnimation from "@/components/ScrollAnimation";

const Contact =()=>{
    return (
        <div className="flex flex-col md:flex-row justify-center items-start px-[40px] py-[40px] md:px-[140px] md:py-[80px] gap-x-[80px]">
                <div className="flex flex-1 flex-col justify-between h-full items-center md:mb-0 mb-[80px]">
                    <div className="flex flex-col border-b border-solid border-[#000957] pb-[40px]">
                        <p className="text-[18px] uppercase font-semibold">get in touch with us</p>
                        <p className={`${oswald.className} text-[46px] uppercase font-bold leading-[45px] my-[20px]`}>Contact our team to improve the condition of your hair</p>
                        <p className="text-[18px]">Welcome to the HAIRY salon. A modern beauty salon helps realize a persons natural desire to look good, to remain beautiful and desirable. We are happy to offer you a wide range of hair care services.</p>
                    </div>
                    <LocationCarousel/>
                </div>
            <ScrollAnimation><ContactForm/></ScrollAnimation>
        </div>
    )
}

export default Contact;