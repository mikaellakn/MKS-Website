"use client";
import { X } from "lucide-react";
import { oswald } from "@/app/page";
import Link from "next/link";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const SecondaryButton = dynamic(() => import("./general/SecondaryButton"), { ssr: false });

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Save current scroll position
      const scrollPosition = window.scrollY;
      // Add styles to prevent scrolling
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPosition}px`;
      document.body.style.width = '100%';
    } else {
      // Restore scrolling and position
      const scrollPosition = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (scrollPosition) {
        window.scrollTo(0, parseInt(scrollPosition.replace('px', '')) * -1);
      }
    }

    // Cleanup function
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isOpen]);

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
    <div className={`nav ${oswald.className}`}>
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
        className={`justify-center fixed top-0 right-0 w-full h-full bg-[#000957] transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-lg`}
      >
        {/* Close Button */}
        <button onClick={toggleMenu} className="absolute top-4 right-4 text-3xl">
        <X size={40} />
        </button>

        {/* Mobile Menu Items */}
        <ul className="mobile-menu flex flex-col items-center w-full">
      <li className="w-full text-center transform -translate-x-4 transition-all hover:translate-x-0">
        <Link 
          href="/" 
          onClick={toggleMenu}
          className="block w-full py-2 transition-colors"
        >
          Home
        </Link>
      </li>
      
      <li className="w-full text-center transform translate-x-4 transition-all hover:translate-x-0">
        <Link 
          href="/about" 
          onClick={toggleMenu}
          className="block w-full py-2 transition-colors"
        >
          About
        </Link>
      </li>
      
      <li className="w-full text-center transform -translate-x-4 transition-all hover:translate-x-0">
        <Link 
          href="/services" 
          onClick={toggleMenu}
          className="block w-full py-2 transition-colors"
        >
          Services
        </Link>
      </li>
      
      <li className="w-full text-center transform translate-x-4 transition-all hover:translate-x-0">
        <Link 
          href="/products" 
          onClick={toggleMenu}
          className="block w-full py-2 transition-colors"
        >
          Products
        </Link>
      </li>
      
      <li className="w-full text-center transform -translate-x-4 transition-all hover:translate-x-0">
        <Link 
          href="/careers" 
          onClick={toggleMenu}
          className="block w-full py-2 transition-colors"
        >
          Careers
        </Link>
      </li>
      
      <li className="w-full text-center transform translate-x-4 transition-all hover:translate-x-0">
        <Link 
          href="/contact" 
          onClick={toggleMenu}
          className="block w-full py-2 transition-colors"
        >
          Contact
        </Link>
      </li>

    </ul>
      </div>
    </div>
  );
}