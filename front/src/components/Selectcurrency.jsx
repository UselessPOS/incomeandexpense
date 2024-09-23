

export const Selectcurrency=()=> {
    return (
      <div className="flex flex-col items-center justify-center max-h-screen bg-white">
        {/* Header and Progress Indicator */}
        <div className="flex flex-col items-center mb-[150px] mt-[150px]">
          <div className="flex items-center space-x-2 mb-4">
           <img src="Geldlogo.svg" alt="logo" />
           <img src="Geld.svg" alt="geld" />
          </div>
  
          {/* Stepper for Currency -> Balance -> Finish */}
          <div className="flex space-x-4">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
                1
              </div>
              <p className="text-sm mt-1">Currency</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-gray-300 text-black flex items-center justify-center">
                2
              </div>
              <p className="text-sm mt-1">Balance</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-gray-300 text-black flex items-center justify-center">
                3
              </div>
              <p className="text-sm mt-1">Finish</p>
            </div>
          </div>
        </div>
  
        {/* Currency Selection Form */}
        <div className="w-96  p-8 ">
            <div className="flex justify-center items-center">
            <img src="Moneyicon.svg" alt="icon" />
            </div>
  
          {/* Title */}
          <h2 className="text-center text-2xl font-bold mb-4">Select base currency</h2>
  
          {/* Currency Dropdown */}
          <div className="mb-4">
            
            <select
              id="currency"
              className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500"
            >
              <option>MNT - Mongolian Tugrik</option>
              <option>USD - US Dollar</option>
              <option>EUR - Euro</option>
              {/* Add other currencies as needed */}
            </select>
          </div>
  
          {/* Description */}
          <p className="text-xs text-gray-500 mb-4">
            Your base currency should be the one you use most often. All transactions in other currencies will be calculated based on this one.
          </p>
  
          {/* Confirm Button */}
          <button className="w-full bg-blue-600 text-white font-bold py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Confirm
          </button>
        </div>
      </div>
    );
  }
  