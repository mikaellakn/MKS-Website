import { oswald } from "@/app/page";
import arrowRight from "../../public/icons/arrow-right-up.svg";
import Link from "next/link";
import React from "react";
import Image from "next/image";


export default function Footer() {
    return (
      <div className="footer">
        <div className="flex w-full justify-between border-b border-[#000957] py-[20px]">
          <p className={`${oswald.className} text-[72px] font-bold uppercase`}>contact us</p>
          <Image src={arrowRight} alt="arrow-right" width={60}/>
        </div>
        <div className="h-full w-full flex justify-between items-start gap-[120px] py-[40px]">
          <div>
            <p className="logo">Michael K.</p>
          </div>
          <div className="flex gap-[120px]">
            <div className="socials">
              <p className="title">Visit us on social media !</p>
              <ul className="">
              <li>
              <Link href='/'>Instagram</Link>
              </li>
              <li>
                <Link href='/'>Facebook</Link>
              </li>
              <li>
                <Link href='/'>YouTube</Link>
              </li>
              </ul>
            </div>
            <div className="quick-links">
              <p className="title">Quick Links</p>
              <ul className="">
              <li>
              <Link href='/'>About</Link>
              </li>
              <li>
                <Link href='/'>Services</Link>
              </li>
              <li>
                <Link href='/'>Products</Link>
              </li>
              </ul>
            </div>
          </div>
        </div>
        

      </div>
    );
  }
  