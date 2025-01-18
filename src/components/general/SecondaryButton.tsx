import React from "react";

interface SecondaryButtonProps {
  text: string;
  onClick?: () => void;
}

export default function SecondaryButton(props: SecondaryButtonProps) {
    const { text, onClick } = props;

    return(
        <div 
        onClick={onClick ? onClick : undefined}
        className="flex justify-center items-center h-[48px] min-w-[130px] bg-[#F8FAFC] text-[18px] font-semibold text-[#000957] hover:text-[#F8FAFC] hover:bg-transparent hover:border-2 hover:border-[#F8FAFC] border-2 border-transparent rounded-full text-center transition-all duration-300 ease-in-out cursor-pointer">
            {text}
        </div>
    )
}