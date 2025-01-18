import Image from "next/image";
import { oswald } from './layout';
import Hero from "@/components/home/Hero";
import FeaturedServices from "@/components/home/FeaturedServices";
import USP from "@/components/home/USP";

export default function Home() {
  return ( 
  <>
    <Hero/>
    <USP/>
    <FeaturedServices/>
  </>
  );
}
