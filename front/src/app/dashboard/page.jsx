import React from "react";
import { Header } from "@/components/Header";
import { DashboardCard } from "@/components/DashboardCard";
import { CustomerCard } from "@/components/CustomerCard";
import { IncomeExpenseChart } from "@/components/IncomeExpenseChart";
import { PieChart } from "@/components/PieChart";
import { TransactionList } from "@/components/TransactionList";



const Dashboard = () => {
  
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="p-6">
        <div className="flex justify-center items-center gap-6 mb-6">
          <CustomerCard
            subtitle="Cash"
            amount="10,000.00"
           
          />
          <DashboardCard
            title="Your Income"
            subtitle="Your Income Amount"
            amount="1,200,000₮"
            growth="32% from last month"
            style="bg-white text-black"
          />
          <DashboardCard
            title="Total Expenses"
            subtitle="Your Income Amount"
            amount="-1,200,000₮"
            growth="32% from last month" 
            style="bg-white text-black"
          />
        </div>

        <div className="flex justify-center items-center gap-6 mb-6">
          <IncomeExpenseChart />
          <PieChart />
        </div>
        <div className="flex justify-center items-center">
        <TransactionList />
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
