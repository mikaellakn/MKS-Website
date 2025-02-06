import Link from "next/link";
import React from "react";

interface PrimaryButtonProps {
  text: string;
  href?: string; // For navigation
  onClick?: () => void; // Function for button clicks
}

export default function PrimaryButton({ text, href, onClick }: PrimaryButtonProps) {
  const buttonClasses =
    "flex justify-center items-center h-[48px] w-auto min-w-[130px] bg-[#000957] text-[18px] font-semibold text-[#F8FAFC] hover:bg-transparent border-transparent hover:text-[#000957] hover:bg-[#F8FAFC] border-2 hover:border-[#000957] rounded-full text-center transition-all duration-300 ease-in-out cursor-pointer px-[20px] py-[10px]";

  // If href is provided, use Link for navigation
  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {text}
      </Link>
    );
  }

  // Otherwise, render a button with onClick
  return (
    <button onClick={onClick} className={buttonClasses}>
      {text}
    </button>
  );
}
