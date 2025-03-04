"use client";
import React from "react";
import Hero from "@/components/about/Hero";
import Mission from "@/components/about/Mission";
import Team from "@/components/about/Team";
import FAQ from "@/components/about/FAQ";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function homepage(){
    return(
        <>
            <Hero/>
            <ScrollAnimation><Mission/></ScrollAnimation>
            <ScrollAnimation><Team/></ScrollAnimation>
            <ScrollAnimation><FAQ/></ScrollAnimation>
        </>
    )
}