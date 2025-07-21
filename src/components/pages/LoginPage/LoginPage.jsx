import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white">
      {/* Main Content */}
      <main className="flex flex-1 justify-center items-center px-4 py-8">
        <div className="w-full max-w-5xl flex flex-col md:flex-row items-center gap-8">
          {/* Left Image */}
          <div className="w-full md:w-[600px] flex justify-center">
            <img
              src="./src/assets/LoginImage.png" 
              alt="Delivery Truck"
              className="rounded-2xl w-full  h-80 md:h-[380px] rounded-t-2xl object-cover"
            />
          </div>

          {/* Right Form */}
          <div className="w-full md:w-[600px] rounded-xl shadow-xl ml-20 p-6 md:p-10 bg-gray-50 border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Welcome back
            </h2>

            <form className="space-y-4">
              {/* Business ID */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Business ID
                </label>
                <input
                  type="text"
                  placeholder="Enter your Business ID"
                  className="w-full px-4 py-2 rounded-md border bg-gray-100 text-gray-700 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-md border bg-gray-100 text-gray-700 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 rounded-md border bg-gray-100 text-gray-700 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              {/* Forgot Password */}
              <div className="text-center">
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-blue-600"
                >
                  Forgot Password?
                </a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition duration-200"
              >
                Log In
              </button>
              <p className="text-center text-sm mt-2 text-[#1e1e1e]">
              New to DispatchPro?{' '}
              <a href="/register" className="text-blue-600 font-medium hover:underline">
                Create an account
              </a>
            </p>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
