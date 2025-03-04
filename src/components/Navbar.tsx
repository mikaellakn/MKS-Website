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
  className={`
    fixed top-0 right-0 w-full h-full bg-[#000957] 
    transform transition-all duration-500 ease-in-out 
    ${isOpen 
      ? "translate-x-0 opacity-100 backdrop-blur-sm" 
      : "translate-x-full opacity-0 backdrop-blur-none"
    } 
    flex flex-col justify-center items-center 
    z-50 overflow-hidden
  `}
>
  {/* Close Button with Enhanced Transition */}
  <button 
    onClick={toggleMenu} 
    className={`
      absolute top-6 right-6 text-white 
      transform transition-all duration-300 
      hover:rotate-90 hover:scale-110
    `}
  >
    <X size={40} className="text-white" />
  </button>

  {/* Mobile Menu Items with Alternating Translations */}
  <ul className="mobile-menu space-y-6 text-center">
    {[
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/services", label: "Services" },
      { href: "/products", label: "Products" },
      { href: "/careers", label: "Careers" },
      { href: "/contact", label: "Contact" }
    ].map((item, index) => (
      <li 
        key={item.href}
        className={`
          py-[12px]
          transform transition-all duration-500 
          ${isOpen 
            ? `opacity-100 translate-y-0 delay-${index * 100}` 
            : "opacity-0 translate-y-10"
          }
        `}
      >
        <Link 
          href={item.href} 
          onClick={toggleMenu}
          className={`
            text-2xl text-white font-bold 
            block w-full
            transform transition-all duration-300 
            ${index % 2 === 0 
              ? "-translate-x-4 hover:translate-x-2" 
              : "translate-x-4 hover:translate-x-0"
            }
            hover:text-gray-300
          `}
        >
          {item.label}
        </Link>
      </li>
    ))}
  </ul>
</div>
    </div>
  );
}