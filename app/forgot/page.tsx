"use client";
import { useState, useEffect } from "react";
import { Poppins } from "next/font/google";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Image from "next/image";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otpMessage, setOtpMessage] = useState("");
  const [timer, setTimer] = useState(60);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // <-- New

  // Toggle password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // OTP Timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (otpSent && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setOtpMessage("OTP Expired. Please resend OTP!");
    }
    return () => clearInterval(interval);
  }, [otpSent, timer]);

  const handleSendOTP = () => {
    if (!email) {
      setErrorMessage("Please enter your email");
      return;
    }
    setOtpSent(true);
    setTimer(60);
    setOtpMessage(`OTP sent to ${email}. Expires in 60 seconds`);
    setErrorMessage("");
  };

  const handleResendOTP = () => {
    setTimer(60);
    setOtpMessage(`OTP resent to ${email}. Expires in 60 seconds`);
    setErrorMessage("");
  };

  const handleResetPassword = () => {
    if (!otp || !newPassword || !confirmPassword) {
      setErrorMessage("Please fill all fields");
      return;
    }
    if (newPassword !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    setSuccessMessage("Password reset successfully!");
    setErrorMessage(""); // clear any previous errors

    // Clear form fields
    setOtpSent(false);
    setEmail("");
    setOtp("");
    setNewPassword("");
    setConfirmPassword("");
    setTimer(60);

    // Automatically hide success message after 3 seconds
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <div className={`min-h-screen flex bg-white ${poppins.className}`}>
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="bg-white w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-8 text-blue-950">
            Forgot Password
          </h1>

          <form className="space-y-6">
            {/* Email Input */}
            {!otpSent && (
              <>
                <div>
                  <label className="block text-xs font-medium text-gray-500 tracking-wide uppercase mb-1">
                    Enter your email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-blue-950"
                  />
                  {errorMessage === "Please enter your email" && (
                    <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
                  )}
                </div>

                <button
                  type="button"
                  onClick={handleSendOTP}
                  className="w-full bg-gradient-to-r from-blue-950 to-blue-700 text-white font-semibold py-3 rounded-full shadow-md hover:shadow-lg hover:scale-[1.03] transition-all mt-4 cursor-pointer"
                >
                  Send OTP
                </button>
              </>
            )}

            {/* OTP Section */}
            {otpSent && (
              <>
                <div>
                  <label className="block text-xs font-medium text-gray-500 tracking-wide uppercase mb-1">
                    Enter OTP
                  </label>
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-blue-950"
                  />
                </div>

                {/* New Password */}
                <div className="relative">
                  <label className="block text-xs font-medium text-gray-500 tracking-wide uppercase mb-1">
                    New Password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-blue-950"
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 top-9 cursor-pointer text-gray-500"
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
                    className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-blue-950"
                  />
                  <span
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-2 top-9 cursor-pointer text-gray-500"
                  >
                    {showConfirmPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                  </span>
                </div>

                {/* Inline Error Message */}
                {errorMessage &&
                  errorMessage !== "Please enter your email" &&
                  (
                    <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
                  )}

                {/* OTP message & Resend OTP */}
                <div className="flex justify-between items-center mt-2 mb-4">
                  {otpMessage && (
                    <p className="text-blue-950 font-medium text-sm">
                      {timer > 0 ? `Time left: ${timer}s` : otpMessage}
                    </p>
                  )}
                  <button
                    type="button"
                    onClick={handleResendOTP}
                    className="text-blue-950 font-medium hover:underline text-sm cursor-pointer"
                  >
                    Resend OTP
                  </button>
                </div>

                {/* Success Message */}
                {successMessage && (
                  <p className="text-green-600 font-semibold mt-2 text-center animate-pulse">
                    {successMessage}
                  </p>
                )}

                <button
                  type="button"
                  onClick={handleResetPassword}
                  className="w-full bg-gradient-to-r from-blue-950 to-blue-700 text-white font-semibold py-3 rounded-full shadow-md hover:shadow-lg hover:scale-[1.03] transition-all cursor-pointer"
                >
                  Reset Password
                </button>
              </>
            )}
          </form>

          <p className="text-center text-sm text-gray-600 mt-4">
            Back to{" "}
            <a href="/login" className="text-blue-950 font-medium">
              Login
            </a>
          </p>
        </div>
      </div>

         <div className="w-1/2 hidden md:block">
        <Image
          src="/forgot.avif"
          alt="Sign up illustration"
          className="h-full"
        />
      </div>
    </div>
  );
}
