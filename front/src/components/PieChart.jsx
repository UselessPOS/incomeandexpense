
import React from "react";
import ExpenseChart from "./ExpenseChart";


export const PieChart = () => {
    return (
      <div className="bg-white p-6 w-[588px] h-[284px] rounded-lg">
        <h4 className="text-lg font-bold mb-4">Income - Expense</h4>
        <div>
          <div className="h-48 bg-gray-200"><ExpenseChart/></div>
        </div>
      </div>
    );
  };
  
