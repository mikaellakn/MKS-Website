import { oswald } from "@/app/page";
import michel from '../../../public/images/michel.webp';
import karim from '../../../public/images/karim.webp';
import ziad from '../../../public/images/ziad.webp';
import React from "react";
import TeamCard from "./TeamCard";

const Team =()=>{
    return (
        <div className="team">
                <p className={`${oswald} text-[42px] md:text-[60px] leading-tight uppercase font-bold mb-[50px] md:mb-[100px]`}>meet the team</p>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-[30px] place-items-center">
                    <TeamCard image={ziad} name="ziad abboud" position="Top Stylist" description="Years ago, founder Sophia Rivera, a passionate hairstylist with a pair of scissors and a big dream, saw an opportunity to redefine the salon experience. She envisioned a space where clients weren’t just customers but individuals."/>
                    <TeamCard image={michel} name="Michel Kanaan" position="Owner & Artistic Director" description="Years ago, founder Sophia Rivera, a passionate hairstylist with a pair of scissors and a big dream, saw an opportunity to redefine the salon experience. She envisioned a space where clients weren’t just customers but individuals."/>
                    <TeamCard image={karim} name="Karim Dona" position="Top Stylist" description="Years ago, founder Sophia Rivera, a passionate hairstylist with a pair of scissors and a big dream. She envisioned a space where clients weren’t just customers but individuals."/>
                </div>
        </div>
    )
}

export default Team;