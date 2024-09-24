
// pages/index.js
import React from 'react'
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { RecordsList } from '@/components/RecordsList';



const Home = () => {

    const recordsData = [
        { id: 1, category: "Lending & Renting", amount: 1000, type: "income", date: "14:00", icon: "🏠", color: "text-green-500" },
        { id: 2, category: "Food & Drinks", amount: 1000, type: "expense", date: "14:00", icon: "🍔", color: "text-red-500" },
        // Add more records as needed
      ];

  return (
    <div >
         <Header />
   
      <main className="flex-1 p-6 bg-gray-50">

      <Sidebar />
       
        <div className="mt-6">
          <RecordsList records={recordsData} />
        </div>
      </main>
    </div>
  )
}

export default Home



 