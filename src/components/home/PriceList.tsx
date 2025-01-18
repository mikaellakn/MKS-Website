import React from "react";
import { oswald } from "@/app/page";
import PrimaryButton from "../general/PrimaryButton";

export default function PriceList(){
    return (
        <div className="pricelist-container">
            <div className="flex w-full justify-between items-center">
                <p className={`${oswald.className} text-[72px] font-bold uppercase text-[#000957]`}>price list</p>
                <PrimaryButton text="FULL PRICELIST" />
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