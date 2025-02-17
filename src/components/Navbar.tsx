"use client";
import { oswald } from "@/app/page";
import Link from "next/link";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const SecondaryButton = dynamic(() => import("./general/SecondaryButton"), { ssr: false });

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  if (!isHydrated) {
    return null; // or a loading spinner
  }

  return (
    <div className={`nav ${oswald.className} relative`}>
      <div className="container mx-auto flex  justify-between items-center p-4">
        {/* LOGO */}
        <div className="flex justify-start items-center">
          <p className="logo">Michael K.</p>
        </div>

        {/* DESKTOP MENU */}
        <ul className="menu1">
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/services'>Services</Link>
          </li>
          <li>
            <Link href='/products'>Products</Link>
          </li>
          <li>
            <Link href='/careers'>Careers</Link>
          </li>
        </ul>

        {/* CONTACT BTN */}
        <div className="hidden md:flex justify-end items-center min-w-[130px]">
          <SecondaryButton href="/contact" text="CONTACT"/>
        </div>

        {/* DRAWER ICON */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-3xl focus:outline-none">
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU*/}
      <div
        className={`fixed top-0 right-0 w-full h-full bg-[#000957] text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-lg`}
      >
        {/* Close Button */}
        <button onClick={toggleMenu} className="absolute top-4 right-4 text-3xl">
          Close
        </button>

        {/* Mobile Menu Items */}
        <ul className="mobile-menu">
          <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link href="/about" onClick={toggleMenu}>About</Link></li>
          <li><Link href="/services" onClick={toggleMenu}>Services</Link></li>
          <li><Link href="/products" onClick={toggleMenu}>Products</Link></li>
          <li><Link href="/careers" onClick={toggleMenu}>Careers</Link></li>
          <li><SecondaryButton href="/contact" text="CONTACT" /></li>
        </ul>
      </div>
    </div>
  );
}