import { oswald } from "@/app/page";
import Link from "next/link";
import SecondaryButton from "./general/SecondaryButton";

export default function Navbar() {
    return (
      <div className={`nav ${oswald.className} relative`}>
        <div className="flex justify-start items-center">
            <p className="logo">Michael K.</p>
        </div>
        <ul className="flex justify-center items-center menu1 relative">
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/'>About</Link>
          </li>
          <li>
            <Link href='/'>Services</Link>
          </li>
          <li>
            <Link href='/'>Products</Link>
          </li>
          <li>
            <Link href='/'>Careers</Link>
          </li>
        </ul>
        <div className="flex justify-end items-center min-w-[130px]">
            <SecondaryButton text="CONTACT"/>
        </div>
      </div>
    );
  }
  