import Link from "next/link";
import React from "react";

interface SecondaryButtonProps {
  text: string;
  href?: string; // For navigation or section scrolling
  onClick?: () => void; // For button actions
}

export default function SecondaryButton({ text, href, onClick }: SecondaryButtonProps) {
  const buttonClasses =
    "flex justify-center items-center h-[48px] min-w-[130px] bg-[#F8FAFC] text-[18px] font-semibold text-[#000957] hover:text-[#F8FAFC] hover:bg-transparent hover:border-2 hover:border-[#F8FAFC] border-2 border-transparent rounded-full text-center transition-all duration-300 ease-in-out cursor-pointer px-[20px] py-[10px]";

  // If href is provided, use Link for navigation or scrolling
  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {text}
      </Link>
    );
  }

  // Otherwise, render a button with onClick functionality
  return (
    <button onClick={onClick} className={buttonClasses}>
      {text}
    </button>
  );
}
