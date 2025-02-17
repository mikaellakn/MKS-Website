import React from "react";
import { oswald } from "@/app/page";
import PrimaryButton from "../general/PrimaryButton";
import Link from "next/link";

export default function PriceList(){
    return (
        <div className="pricelist-container">
            <div className="flex flex-col md:flex-row w-full justify-between items-center">
                <p className={`${oswald.className} text-[52px] md:text-[72px] font-bold uppercase text-[#000957]`}>price list</p>
                <Link href={'/services'} className="price-list-link">
                    <PrimaryButton text="FULL PRICELIST" />
                </Link>
            </div>
            <div className="pricelist">
                <div className="item">
                    <p>hair cut and color</p>
                    <p>$60</p>
                </div>
                <div className="item">
                    <p>hair cut and color</p>
                    <p>$60</p>
                </div>
                <div className="item">
                    <p>hair cut and color</p>
                    <p>$60</p>
                </div>
                <div className="item">
                    <p>hair cut and color</p>
                    <p>$60</p>
                </div>
                <div className="item">
                    <p>hair cut and color</p>
                    <p>$60</p>
                </div>
                <div className="item">
                    <p>hair cut and color</p>
                    <p>$60</p>
                </div>
                <div className="item">
                    <p>hair cut and color</p>
                    <p>$60</p>
                </div>
                <div className="item">
                    <p>hair cut and color</p>
                    <p>$60</p>
                </div>
            </div>

        </div>
    )
}