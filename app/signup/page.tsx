"use client";
import { useState } from "react";
import { Poppins } from "next/font/google";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Image from "next/image";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function SignUpPage() {
  const [userType, setUserType] = useState<"student" | "tutor">("tutor");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dob, setDob] = useState(""); // Date of Birth
  const [phone, setPhone] = useState(""); // Phone number (Tutor only)
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword ||
      !dob ||
      (userType === "tutor" && !phone)
    ) {
      setErrorMessage("Please fill all required fields");
      setSuccessMessage("");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      setSuccessMessage("");
      return;
    }

    // Clear form fields
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setDob("");
    setPhone("");
    setErrorMessage("");

    setSuccessMessage("Account Created Successfully!");
    setTimeout(() => setSuccessMessage(""), 10000);
  };

  return (
    <div className={`min-h-screen flex bg-white ${poppins.className}`}>
      {/* Left Form Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="bg-white w-full max-w-md">
          <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-950">
            Create Your Account
          </h1>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* First Name & Last Name side-by-side */}
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-xs font-medium text-gray-500 tracking-wide uppercase mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full border-b border-gray-300 p-1 focus:outline-none focus:border-blue-950"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-xs font-medium text-gray-500 tracking-wide uppercase mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full border-b border-gray-300 p-1 focus:outline-none focus:border-blue-950"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-medium text-gray-500 tracking-wide uppercase mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-b border-gray-300 p-1 focus:outline-none focus:border-blue-950"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label className="block text-xs font-medium text-gray-500 tracking-wide uppercase mb-1">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-b border-gray-300 p-1 focus:outline-none focus:border-blue-950"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-6 cursor-pointer text-gray-500"
              >
                {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
              </span>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <label className="block text-xs font-medium text-gray-500 tracking-wide uppercase mb-1">
                Confirm Password
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full border-b border-gray-300 p-1 focus:outline-none focus:border-blue-950"
              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-2 top-6 cursor-pointer text-gray-500"
              >
                {showConfirmPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
              </span>
            </div>

            {/* Phone Number - only for Tutor */}
            {userType === "tutor" && (
              <div>
                <label className="block text-xs font-medium text-gray-500 tracking-wide uppercase mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border-b border-gray-300 p-1 focus:outline-none focus:border-blue-950"
                />
              </div>
            )}

            {/* Date of Birth */}
            <div>
              <label className="block text-xs font-medium text-gray-500 tracking-wide uppercase mb-1">
                Date of Birth
              </label>
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="w-full border-b border-gray-300 p-1 focus:outline-none focus:border-blue-950"
              />
            </div>

            {/* Error Message */}
            {errorMessage && <p className="text-red-500 text-sm mt-1">{errorMessage}</p>}

            {/* Toggle Buttons */}
            <div className="flex justify-center my-6">
              <div className="flex border border-blue-950 rounded-full overflow-hidden w-fit">
                <button
                  type="button"
                  onClick={() => setUserType("tutor")}
                  className={`px-6 py-2 font-medium transition-all rounded-full ${
                    userType === "tutor"
                      ? "bg-gradient-to-r from-blue-950 to-blue-700 text-white shadow-md"
                      : "bg-white text-blue-950 cursor-pointer transition-all"
                  }`}
                >
                  Tutor
                </button>

                <button
                  type="button"
                  onClick={() => setUserType("student")}
                  className={`px-6 py-2 font-medium transition-all rounded-full ${
                    userType === "student"
                      ? "bg-gradient-to-r from-blue-950 to-blue-700 text-white shadow-md"
                      : "bg-white text-blue-950 cursor-pointer transition-all"
                  }`}
                >
                  Student
                </button>
              </div>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-950 to-blue-700 text-white font-semibold py-3 rounded-full shadow-md hover:shadow-lg hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 ease-in-out cursor-pointer"
            >
              Sign Up
            </button>

            {/* Success Message */}
            {successMessage && (
              <p className="text-blue-950 font-serif text-center text-lg mt-4">{successMessage}</p>
            )}

            {/* Already have an account */}
            <p className="text-center text-sm text-gray-600 mt-0">
              Already have an account?{" "}
              <a href="/login" className="text-blue-950 font-medium">
                Login
              </a>
            </p>
          </form>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="w-1/2 hidden md:flex justify-center items-center">
        <Image
          src="/Signup.png"
          alt="Sign up illustration"
          className="object-contain h-full"
        />
      </div>
    </div>
  );
}
