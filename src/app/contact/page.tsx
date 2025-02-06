import React from "react";
import ContactForm from "@/components/contact/ContactForm";
import phone from "../../../public/icons/phone.svg";
import location from "../../../public/icons/location.svg";
import mail from "../../../public/icons/mail.svg";
import { oswald } from "../page";
import Image from "next/image";

const Contact =()=>{
    return (
        <div className="flex justify-center items-start px-[140px] py-[80px] gap-x-[80px]">
                <div className="flex flex-1 flex-col justify-between h-full items-center">
                    <div className="flex flex-col border-b border-solid border-[#000957] pb-[40px]">
                        <p className="text-[18px] uppercase font-semibold">get in touch with us</p>
                        <p className={`${oswald.className} text-[46px] uppercase font-bold leading-[45px] my-[20px]`}>Contact our team to improve the condition of your hair</p>
                        <p className="text-[18px]">Welcome to the HAIRY salon. A modern beauty salon helps realize a persons natural desire to look good, to remain beautiful and desirable. We are happy to offer you a wide range of hair care services.</p>
                    </div>
                    <div className="flex flex-col w-full">
                        <p className={`${oswald.className} text-[24px] uppercase font-bold mt-[40px] mb-[10px]`}>New york</p>
                        <div className="flex w-full gap-x-[10px] my-[10px]">
                            <Image src={location} alt="location-icon" width={20}></Image>
                            <p>5 Washington Square, New York, USA</p>
                        </div>
                        <div className="flex w-full gap-x-[10px] my-[10px]">
                            <Image src={phone} alt="phone-icon" width={20}></Image>
                            <p>+1 212 425 8617</p>
                        </div>
                        <div className="flex w-full gap-x-[10px] my-[10px]">
                            <Image src={mail} alt="mail-icon" width={20}></Image>
                            <p>hello_hairy@office.com</p>
                        </div>
                    </div>
                    <div className="flex flex-col w-full">
                        <p className={`${oswald.className} text-[24px] uppercase font-bold mt-[40px] mb-[10px]`}>New york</p>
                        <div className="flex w-full gap-x-[10px] my-[10px]">
                            <Image src={location} alt="location-icon" width={20}></Image>
                            <p>5 Washington Square, New York, USA</p>
                        </div>
                        <div className="flex w-full gap-x-[10px] my-[10px]">
                            <Image src={phone} alt="phone-icon" width={20}></Image>
                            <p>+1 212 425 8617</p>
                        </div>
                        <div className="flex w-full gap-x-[10px] my-[10px]">
                            <Image src={mail} alt="mail-icon" width={20}></Image>
                            <p>hello_hairy@office.com</p>
                        </div>
                    </div>
                </div>
            <ContactForm/>
        </div>
    )
}

export default Contact;