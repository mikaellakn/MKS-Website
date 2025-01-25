"use client";
import React from "react";
import Hero from "@/components/about/Hero";
import Mission from "@/components/about/Mission";
import Team from "@/components/about/Team";
import FAQ from "@/components/about/FAQ";

export default function homepage(){
    return(
        <>
            <Hero/>
            <Mission/>
            <Team/>
            <FAQ/>
        </>
    )
}