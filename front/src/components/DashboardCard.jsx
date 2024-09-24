
import React from "react";
 

export const DashboardCard = ({ title, subtitle, amount, growth, style }) => {
    return (
      <div className={`p-6 rounded-lg w-[384px] h-[216px] ${style}`}>
        <h4 className="text-lg font-bold">{title}</h4>
        <p className="text-sm text-gray-400">{subtitle}</p>
        <p className="text-2xl font-bold my-4">{amount}</p>
        {growth && (
          <p className="text-green-500 text-sm">
            <span className="mr-1">⬆</span> {growth}
          </p>
        )}
      </div>
    );
  };
