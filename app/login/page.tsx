// "use client";
// import { useState } from "react";
// import Link from "next/link"; // ✅ Import Link for navigation
// import { Instrument_Serif, Poppins } from "next/font/google";

// const instrumentSerif = Instrument_Serif({ subsets: ["latin"], weight: ["400"] });
// const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

// export default function LoginPage() {
//   const [showOTP, setShowOTP] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [otp, setOtp] = useState("");

//   return (
//     <div className={`min-h-screen flex bg-white ${poppins.className}`}>
//       {/* Left Form Section */}
//       <div className="w-full md:w-1/2 flex items-center justify-center p-8">
//         <div className="bg-white w-full max-w-md">
//           {/* Heading */}
//           <h1 className={`text-4xl font-extrabold text-center mb-8 text-blue-950`}>
//             User Login
//           </h1>

//           <form className="space-y-6">
//             {/* Email */}
//             <div>
//               <label className="block text-xs font-medium text-gray-500 tracking-wide uppercase mb-1">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-blue-950"
//               />
//             </div>

//             {/* Password */}
//             {!showOTP && (
//               <div>
//                 <label className="block text-xs font-medium text-gray-500 tracking-wide uppercase mb-1">
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-blue-950"
//                 />
//               </div>
//             )}

//             {/* OTP Verification */}
//             {showOTP && (
//               <div>
//                 <label className="block text-xs font-medium text-gray-500 tracking-wide uppercase mb-1">
//                   OTP
//                 </label>
//                 <input
//                   type="text"
//                   value={otp}
//                   onChange={(e) => setOtp(e.target.value)}
//                   className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-blue-950"
//                   placeholder="Enter OTP"
//                 />
//               </div>
//             )}

//             {/* Forgot Password / OTP Toggle */}
//             <div className="flex justify-between items-center text-sm mt-1">
//               {!showOTP ? (
//                 <Link
//                   href="/forgot" 
//                   className="text-blue-950 font-medium hover:underline"
//                 >
//                   Forgot Password?
//                 </Link>
//               ) : (
//                 <button
//                   type="button"
//                   className="text-blue-950 font-medium hover:underline"
//                   onClick={() => setShowOTP(false)}
//                 >
//                   Back to Password
//                 </button>
//               )}

//               {/* {!showOTP && (
//                 <button
//                   type="button"
//                   className="text-[#FF0066] font-medium hover:underline"
//                   onClick={() => setShowOTP(true)}
//                 >
//                   OTP Login
//                 </button>
//               )} */}
//             </div>

//             {/* Login Button */}
//             <button
//               type="submit"
//               className="w-full bg-gradient-to-r from-blue-950 to-blue-700 text-white font-semibold py-3 rounded-full shadow-md hover:shadow-lg hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 ease-in-out mt-4 cursor-pointer"
//             >
//               {showOTP ? "Verify OTP" : "Login"}
//             </button>
//           </form>

//           {/* Signup Link */}
//           <p className="text-center text-sm text-gray-600 mt-4">
//             Don't have an account?{" "}
//             <Link href="/signup" className="text-blue-950 font-medium">
//               Sign Up
//             </Link>
//           </p>
//         </div>
//       </div>

//       {/* Right Image Section */}
//           <div className="w-1/2 hidden md:block">
//         <img
//           src="/login.avif"
//           alt="Sign up illustration"
//           className="h-full object-cover"
//         />
//       </div>
//     </div>
//   );
// }










"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // ✅ Next.js Image
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function LoginPage() {
  const [showOTP, setShowOTP] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");

  return (
    <div className={`min-h-screen flex bg-white ${poppins.className}`}>
      {/* Left Form Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="bg-white w-full max-w-md">
          {/* Heading */}
          <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-950">
            User Login
          </h1>

          <form className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-xs font-medium text-gray-500 tracking-wide uppercase mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-blue-950"
              />
            </div>

            {/* Password */}
            {!showOTP && (
              <div>
                <label className="block text-xs font-medium text-gray-500 tracking-wide uppercase mb-1">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-blue-950"
                />
              </div>
            )}

            {/* OTP Verification */}
            {showOTP && (
              <div>
                <label className="block text-xs font-medium text-gray-500 tracking-wide uppercase mb-1">
                  OTP
                </label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-blue-950"
                  placeholder="Enter OTP"
                />
              </div>
            )}

            {/* Forgot Password / OTP Toggle */}
            <div className="flex justify-between items-center text-sm mt-1">
              {!showOTP ? (
                <Link
                  href="/forgot"
                  className="text-blue-950 font-medium hover:underline"
                >
                  Forgot Password?
                </Link>
              ) : (
                <button
                  type="button"
                  className="text-blue-950 font-medium hover:underline"
                  onClick={() => setShowOTP(false)}
                >
                  Back to Password
                </button>
              )}
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-950 to-blue-700 text-white font-semibold py-3 rounded-full shadow-md hover:shadow-lg hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 ease-in-out mt-4 cursor-pointer"
            >
              {showOTP ? "Verify OTP" : "Login"}
            </button>
          </form>

          {/* Signup Link */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-blue-950 font-medium">
              Sign Up
            </Link>
          </p>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="w-1/2 hidden md:block">
        <Image
          src="/login.avif"
          alt="Sign up illustration"
          className="h-full object-cover"
          width={800}
          height={800}
        />
      </div>
    </div>
  );
}
