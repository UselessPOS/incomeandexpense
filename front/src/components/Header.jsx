import Link from "next/link";
import React from "react";



export const Header = () => {
    return (
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">

          <img src="Geldlogo.svg" alt="logo" />
          <img src="Geld.svg" alt="geld" />

          <nav>
            <Link href="/dashboard" className="mr-4 text-gray-700">Dashboard</Link>
            <Link href="/records" className="text-gray-700">Records</Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-blue-500 text-white px-4 py-1 rounded-full">+ Record</button>
          <img src="Avatar.svg" alt="Profile" className="rounded-full" />
        </div>
      </header>
    );
  };
