
import React from "react";


export const TransactionList = () => {
  const transactions = [
    { id: 1, title: "Lending & Renting", time: "3 hours ago", amount: "- 1,000₮" },
    { id: 2, title: "Lending & Renting", time: "3 hours ago", amount: "- 1,000₮" },
    { id: 3, title: "Lending & Renting", time: "3 hours ago", amount: "- 1,000₮" },
    { id: 4, title: "Lending & Renting", time: "3 hours ago", amount: "- 1,000₮" },
    { id: 5, title: "Lending & Renting", time: "3 hours ago", amount: "- 1,000₮" },
  ];
  return (
    <div className="bg-white p-6 rounded-lg w-[1200px]">
      <h4 className="text-lg font-bold mb-4">Last Records</h4>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id} className="flex justify-between py-2 border-b">
            <div className="flex items-center">
              <span className="mr-2">🏠</span> {transaction.title}
            </div>
            <span className="text-green-500">{transaction.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
