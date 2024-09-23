

export const Loading= ()=> {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <div className="flex flex-col items-center">
       
          <div className="flex items-center space-x-2 mb-6">
            <img src="Geldlogo.svg" alt="logo" />
            <img src="Geld.svg" alt="geld" />
          </div>
  
          
          <div className="loader mb-4">
            <div className="w-8 h-8 border-4 border-blue-500 border-solid rounded-full border-t-transparent animate-spin"></div>
          </div>
  
          
          <p className="text-gray-500 text-sm">Түр хүлээнэ үү...</p>
        </div>
      </div>
    );
  }
  