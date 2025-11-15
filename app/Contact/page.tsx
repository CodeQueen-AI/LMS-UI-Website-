"use client";
import { motion, easeInOut, easeOut } from "framer-motion";
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

  const scrollFade = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: easeOut },
    viewport: { once: true, amount: 0.3 },
  };

  return (
    <div className={`bg-white ${poppins.className}`}>
      {/* ==================== BANNER ==================== */}
      <motion.section
        {...scrollFade}
        className="relative bg-blue-200 py-24 px-4 sm:px-8 md:px-12 lg:px-16 max-w-6xl mx-auto mt-10 mb-10 overflow-hidden shadow-sm border border-gray-300 rounded-xl"
      >
        {/* Floating Icons */}
        <motion.div className="absolute top-10 left-10 text-blue-800" animate={floatAnimation}>
          <FaEnvelope size={40} />
        </motion.div>

        <motion.div
          className="absolute bottom-12 left-1/4 text-yellow-500"
          animate={{ ...floatAnimation, transition: { duration: 4, repeat: Infinity, ease: easeInOut } }}
        >
          <FaPhoneAlt size={45} />
        </motion.div>

        <motion.div
          className="absolute top-16 right-20 text-green-500"
          animate={{ ...floatAnimation, transition: { duration: 3.5, repeat: Infinity, ease: easeInOut } }}
        >
          <FaPaperPlane size={40} />
        </motion.div>

        <motion.div
          className="absolute bottom-8 right-1/4 text-pink-500"
          animate={{ ...floatAnimation, transition: { duration: 5, repeat: Infinity, ease: easeInOut } }}
        >
          <FaUserAlt size={45} />
        </motion.div>

        {/* Main Text */}
        <div className="relative z-10 text-center">
          <h1 className="text-6xl md:text-7xl font-serif font-medium text-blue-900 mb-4">Contact Us</h1>
          <p className="text-xl md:text-2xl text-blue-800 mt-2">
            Get in touch with us for any questions or support
          </p>
        </div>
      </motion.section>

      {/* ==================== CONTACT FORM + IMAGE ==================== */}
      <motion.div {...scrollFade} className="flex flex-col md:flex-row justify-between items-center gap-12 w-full max-w-6xl px-4 sm:px-8 md:px-12 lg:px-16 mx-auto mb-20">
        {/* Left: Form */}
        <div className="flex-1 w-full p-4 sm:p-6">
          <form className="flex flex-col gap-6">
            <div className="flex flex-col">
              <label className="text-xs font-semibold tracking-wider uppercase mb-1 text-gray-700">Full Name</label>
              <input type="text" placeholder="Enter your name" className="border-b-2 border-gray-300 focus:border-sky-900 outline-none py-2 text-sm transition-all duration-300" />
            </div>

            <div className="flex flex-col">
              <label className="text-xs font-semibold tracking-wider uppercase mb-1 text-gray-700">Email</label>
              <input type="email" placeholder="Enter your email" className="border-b-2 border-gray-300 focus:border-sky-900 outline-none py-2 text-sm transition-all duration-300" />
            </div>

            <div className="flex flex-col">
              <label className="text-xs font-semibold tracking-wider uppercase mb-1 text-gray-700">Message</label>
              <textarea rows={5} placeholder="Write your message..." className="border-b-2 border-gray-300 focus:border-sky-900 outline-none py-2 text-sm resize-none transition-all duration-300"></textarea>
            </div>

            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit" className="cursor-pointer mt-4 bg-blue-900 text-white py-3 rounded-full font-medium shadow-md hover:bg-blue-800 transition-all duration-300">
              Send Message
            </motion.button>
          </form>
        </div>

        {/* Right: Image */}
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: easeInOut }} className="flex-1 w-full flex justify-center">
          <Image src="/Contact.jpg" alt="Contact illustration" width={500} height={400} className="object-cover rounded-xl shadow-lg" />
        </motion.div>
      </motion.div>
    </div>
  );
}
