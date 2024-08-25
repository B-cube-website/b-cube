import React from "react";
import RoundedRectangleButtonProps from "@/type/RoundedRectangleButtonProps";

const RoundedRectangleButton = (content: RoundedRectangleButtonProps) => {
    return (
      <button className="w-[120px] h-[50px] border-4 border-blue-600 rounded-full transition-all duration-300 cursor-pointer bg-white text-lg font-semibold hover:bg-blue-600 hover:text-white hover:text-xl">
        {content.title}
      </button>
    );
  };
  

export default RoundedRectangleButton;