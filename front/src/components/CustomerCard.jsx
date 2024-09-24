
import React from "react";
 

export const CustomerCard = ({ subtitle, amount, }) => {
    return (
      <div className={`p-6 rounded-lg bg-[#0166FF] w-[384px] h-[216px]`}>
        <img src="Whitegeld.svg" alt="white" />
       
        <p className="text-sm text-gray-400">{subtitle}</p>
        <p className="text-2xl font-bold my-4">{amount}</p>


        <img src="Squigglylogo.svg" alt="Squiggly" />
        
      </div>
    );
  };
