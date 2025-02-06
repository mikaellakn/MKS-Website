import Image from "next/image";
import image1 from '../../../public/images/usp-1.webp';
import image2 from '../../../public/images/usp-2.webp';
import image3 from '../../../public/images/usp-3.jpg';
import image4 from '../../../public/images/usp-4.webp';
import image5 from '../../../public/images/usp-5.jpg';
import ImageGallery from "./ImageGallery";
import { oswald } from "@/app/page";
import React from "react";

export default function USP(){
    const images1 = [
        { src: image1, alt: "USP 1" },
        { src: image2, alt: "USP 2" }
      ];
    const images2 =[
        { src: image3, alt: "USP 3" },
        { src: image4, alt: "USP 4" },
        { src: image5, alt: "USP 5" }
    ]

    return(
        <div className="usp-section" id="usp">
            <div className="usp-section1">
                <div className="flex w-[60%] justify-center items-center h-full">
                    <Image alt="image-1" src={image3} width={600} height={600}/>
                </div>
                <div className="flex flex-col w-[80%]">
                    <div className="flex flex-col gap-[20px]">
                        <p className="text-[18px] font-semibold">THE BEST STUDIO SINCE 1998</p>
                        <p className={`${oswald.className} text-[62px] uppercase font-bold leading-[62px]`}>We will change your out looks</p>
                        <p className="text-[20px]">Our talented specialist are ready to share their secrets. Don’t lose this opportunity</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col justify-center items-center">
                            <p className={`${oswald.className} text-[80px] font-bold`}>35</p>
                            <p className="text-[18px] font-semibold uppercase">years experience</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <p className={`${oswald.className} text-[80px] font-bold`}>10</p>
                            <p className="text-[18px] font-semibold uppercase">amazing experts</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="usp-section2">
            <ImageGallery images={images1} columns={2} gap="30px" />
            <ImageGallery images={images2} columns={3} gap="15px" />

            </div>
        </div>
    )
}