import Hero from "@/components/home/Hero";
import FeaturedServices from "@/components/home/FeaturedServices";
import USP from "@/components/home/USP";
import PriceList from "@/components/home/PriceList";
import Reviews from "@/components/home/Reviews";
import { Oswald } from "next/font/google";
import ScrollAnimation from "../components/ScrollAnimation";

export const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Home() {
  return ( 
  <>
    <Hero/>
    <ScrollAnimation><USP/></ScrollAnimation>
    <ScrollAnimation><FeaturedServices/></ScrollAnimation>
    <ScrollAnimation><PriceList/></ScrollAnimation>
    <ScrollAnimation><Reviews/></ScrollAnimation>
  </>
  );
}
