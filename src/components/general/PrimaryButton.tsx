import React from "react";

interface PrimaryButtonProps {
  text: string;
  onClick?: () => void;
}

export default function PrimaryButton(props: PrimaryButtonProps) {
    const { text, onClick } = props;

    return(
        <div 
        onClick={onClick ? onClick : undefined}
        className="flex justify-center items-center h-[48px] min-w-[130px] bg-[#000957] text-[18px] font-semibold text-[#F8FAFC] hover:bg-transparent border-transparent hover:text-[#000957] hover:bg-[#F8FAFC] border-2 hover:border-[#000957] rounded-full text-center transition-all duration-300 ease-in-out cursor-pointer">
            {text}
        </div>
    )
}