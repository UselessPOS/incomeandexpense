

export const Success = () => {
    return (
    
       <div>

<div className="flex items-center space-x-2 mb-4">
           <img src="Geldlogo.svg" alt="logo" />
           <img src="Geld.svg" alt="geld" />
          </div>

        <ul className="steps">
        <li className="step step-primary">Currency</li>
        <li className="step step-primary">Balance</li>
        <li className="step">Finish</li>
        </ul>


        <img src="Check.svg" alt="" />


        <h2 className="text-center text-2xl font-bold mb-4">Good Job!</h2>

  <p className="text-xs text-gray-500 mb-4">
  Your very first account has been created. Now continue to dashboard and start tracking
  </p>

  <button className="w-full bg-blue-600 text-white font-bold py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
   Go to Dashboard
  </button>

  <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Responsive</button>

        </div>
    );
  }
  