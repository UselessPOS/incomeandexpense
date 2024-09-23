
export const Signin=()=>{
    return (
      <div className="flex min-h-screen">
        
        <div className="w-1/2 bg-white flex flex-col justify-center items-center p-8">
          
          <div className="flex items-center justify-center gap-[9.46px] mb-6">
            <img src="Geldlogo.svg" alt="logo" />
            <img src="Geld.svg" alt="Geld" />
          </div>
         
          <h1 className="text-2xl text-[#0F172A] font-light mb-2">Welcome Back</h1>
          <p className="text-[#334155] mb-6">Welcome back, Please enter your details</p>
          
          <input
            type="email"
            placeholder="Email"
            className="w-[384px] p-3 mb-4 border border-gray-300 text-[#334155] rounded-lg focus:outline-none focus:border-blue-500"
          />
          
          <input
            type="password"
            placeholder="Password"
            className="w-[384px] p-3 mb-4 border border-gray-300 text-[#334155] rounded-lg focus:outline-none focus:border-blue-500"
          />
        
          <button className="w-[384px] bg-blue-600 text-white p-3 rounded-[20px] hover:bg-blue-700 transition">
            Log in
          </button>
          
          <p className="mt-4 text-gray-500">
            Don’t have an account?{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
       
        <div className="w-1/2 bg-blue-600"></div>
      </div>
    );
  }
  