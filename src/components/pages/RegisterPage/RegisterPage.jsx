import React from "react";

const Register = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center p-6 md:p-12 lg:px-24 xl:px-32 gap-8">
        {/* Left Side Image */}
        <div className="w-full md:w-96 pr-0 md:pr-8 mb-4 md:mb-0">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
            alt="Team"
            className="rounded-md shadow-md object-cover h-[400px] lg:h-[600px] w-full"
          />
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 max-w-md bg-white p-6 md:p-8 rounded-xl shadow-md">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
            Business Registration
          </h2>

          <form className="space-y-4">
            {/* Business Name */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Business Name
              </label>
              <input
                type="text"
                placeholder="Enter your business name"
                className="w-full px-4 py-3 text-sm rounded-md bg-blue-50 text-gray-700 placeholder-gray-400 focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 text-sm rounded-md bg-blue-50 text-gray-700 placeholder-gray-400 focus:outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 text-sm rounded-md bg-blue-50 text-gray-700 placeholder-gray-400 focus:outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Phone
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full px-4 py-3 text-sm rounded-md bg-blue-50 text-gray-700 placeholder-gray-400 focus:outline-none"
              />
            </div>

            {/* Address */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Address
              </label>
              <input
                type="text"
                placeholder="Enter your business address"
                className="w-full px-4 py-3 text-sm rounded-md bg-blue-50 text-gray-700 placeholder-gray-400 focus:outline-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white text-sm font-medium py-3 rounded-full hover:bg-blue-700 transition"
            >
              Register
            </button>

            {/* Login Link */}
            <p className="text-center text-sm text-gray-500 mt-2">
              Already have an account?{" "}
              <a href="/login" className="text-blue-600 font-medium hover:underline">
                Log in
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
