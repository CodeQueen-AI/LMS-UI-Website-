"use client";

import { motion, easeInOut } from "framer-motion";
import { Poppins } from "next/font/google";
import { FaEnvelope, FaPhoneAlt, FaPaperPlane, FaUserAlt } from "react-icons/fa";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function ContactPage() {
  const floatAnimation = {
    y: ["0%", "-12%", "0%"],
    transition: { duration: 3.5, repeat: Infinity, ease: easeInOut },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeInOut } },
  };

  return (
    <div className={`flex flex-col items-center ${poppins.className}`}>
      {/* ==== Banner Section ==== */}
      <section className="relative bg-blue-200 py-24 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-32 w-full overflow-hidden shadow-sm border border-gray-200">
        {/* Floating Icons */}
        <motion.div
          animate={floatAnimation}
          className="absolute top-10 left-10 text-blue-800 opacity-60 text-4xl"
        >
          <FaEnvelope />
        </motion.div>

        <motion.div
          animate={{ ...floatAnimation, transition: { duration: 4, repeat: Infinity, ease: easeInOut } }}
          className="absolute bottom-12 left-1/4 text-yellow-500 opacity-60 text-4xl"
        >
          <FaPhoneAlt />
        </motion.div>

        <motion.div
          animate={{ ...floatAnimation, transition: { duration: 5, repeat: Infinity, ease: easeInOut } }}
          className="absolute top-16 right-20 text-green-500 opacity-60 text-4xl"
        >
          <FaPaperPlane />
        </motion.div>

        <motion.div
          animate={{ ...floatAnimation, transition: { duration: 3.8, repeat: Infinity, ease: easeInOut } }}
          className="absolute bottom-8 right-1/4 text-pink-500 opacity-60 text-4xl"
        >
          <FaUserAlt />
        </motion.div>

        {/* Main Title */}
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-medium text-blue-900 font-serif drop-shadow-md">
            Contact Us
          </h1>
        </div>
      </section>

      {/* ==== Contact Section ==== */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row justify-between items-center gap-12 w-full max-w-[1400px] px-4 sm:px-8 md:px-16 mt-16 mb-20"
      >
        {/* Left: Form */}
        <div className="flex-1 w-full p-4 sm:p-8">
          <form className="flex flex-col gap-6">
            {/* Full Name */}
            <div className="flex flex-col">
              <label className="text-xs font-semibold tracking-wider uppercase mb-1 text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="border-b-2 border-gray-300 focus:border-sky-900 outline-none py-2 text-sm transition-all duration-300"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-xs font-semibold tracking-wider uppercase mb-1 text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="border-b-2 border-gray-300 focus:border-sky-900 outline-none py-2 text-sm transition-all duration-300"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label className="text-xs font-semibold tracking-wider uppercase mb-1 text-gray-700">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Write your message..."
                className="border-b-2 border-gray-300 focus:border-sky-900 outline-none py-2 text-sm resize-none transition-all duration-300"
              ></textarea>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="cursor-pointer mt-4 bg-blue-900 text-white py-3 rounded-full font-medium shadow-md hover:bg-blue-800 transition-all duration-300"
            >
              Send Message
            </motion.button>
          </form>
        </div>

        {/* Right: Image */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: easeInOut }}
          className="flex-1 w-full flex justify-center"
        >
          <Image
            src="/Contact.jpg"
            alt="Contact illustration"
            width={550}
            height={450}
            className="object-cover rounded-lg"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
