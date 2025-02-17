"use client";
import { oswald } from "@/app/page";
import Link from "next/link";
import SecondaryButton from "./general/SecondaryButton";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`nav ${oswald.className} fixed top-0 w-full bg-gray-900 text-white z-50`}>
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">Michael K.</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/products">Products</Link></li>
          <li><Link href="/careers">Careers</Link></li>
        </ul>

        {/* Contact Button (visible on larger screens) */}
        <div className="hidden md:block">
          <SecondaryButton href="/contact" text="CONTACT" />
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-3xl focus:outline-none">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-gray-800 text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-lg z-50`}
      >
        {/* Close Button */}
        <button onClick={toggleMenu} className="absolute top-4 right-4 text-3xl">
          ×
        </button>

        {/* Mobile Menu Items */}
        <ul className="flex flex-col mt-16 space-y-6 text-center">
          <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link href="/about" onClick={toggleMenu}>About</Link></li>
          <li><Link href="/services" onClick={toggleMenu}>Services</Link></li>
          <li><Link href="/products" onClick={toggleMenu}>Products</Link></li>
          <li><Link href="/careers" onClick={toggleMenu}>Careers</Link></li>
          <li><SecondaryButton href="/contact" text="CONTACT" /></li>
        </ul>
      </div>

      {/* Overlay (Backdrop) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
}
