import { oswald } from "@/app/page";
import Image from "next/image";
import React from "react";

interface Props {
    image : string,
    name : string,
    provider : string,
    price : number
}

const Product:React.FC<Props> =({image, name, provider, price})=> {
    return (
        <div className="flex flex-col max-w-[350px]">
        <Image src={image} alt="hair product" className="w-full rounded-[8px]" width={300} height={300}/>
        <div className="flex justify-between w-full items-center p-2">
            <div className="flex flex-col gap-y-[20px] w-full">
                <div className="flex  w-full items-center justify-between">
                    <p className={`${oswald.className} text-[24px] font-bold uppercase`}>{name}</p>
                    <p className={`text-[20px] font-bold`}>${price}</p>
                </div>
                <p className={`text-[18px]`}>{provider}</p>
            </div>
        </div>
    </div>
    )
} 

export default Product;