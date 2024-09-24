
import React from "react";
import MyChart from "./MyChart";


export const IncomeExpenseChart = () => {
  return (
    <div className="bg-white p-6 rounded-lg w-[588px] h-[284px]">
      <h4 className="text-lg font-bold mb-4">Income - Expense</h4>
      <div>
        <div className="h-48 bg-gray-200"><MyChart/></div>
      </div>
    </div>
  );
};
