"use client";
import Image from "next/image";
import { FaGraduationCap } from "react-icons/fa";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function HomePage() {
  return (
    <section
      className={`${poppins.className} relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20 overflow-hidden`}
    >
      {/* Decorative Squares */}
      {[
        { top: "5%", left: "10%", size: "w-16 h-16" },
        { top: "15%", left: "70%", size: "w-20 h-20" },
        { top: "30%", left: "25%", size: "w-14 h-14" },
        { top: "50%", left: "60%", size: "w-24 h-24" },
        { top: "65%", left: "15%", size: "w-16 h-16" },
        { top: "75%", left: "75%", size: "w-20 h-20" },
        { top: "85%", left: "40%", size: "w-16 h-16" },
      ].map((square, idx) => (
        <div
          key={idx}
          className={`${square.size} border border-gray-600 opacity-20 rounded-md absolute`}
          style={{ top: square.top, left: square.left }}
        ></div>
      ))}

      {/* Blurry Circle */}
      <div
        className="absolute w-72 h-72 rounded-full bg-blue-300 opacity-30 blur-3xl animate-pulse"
        style={{ top: "70%", left: "20%" }}
      ></div>

      {/* Left Content */}
      <motion.div
        className="md:w-1/2 space-y-6 z-10 relative"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.div
          className="absolute -top-8 left-4 transform -rotate-12 text-4xl text-blue-800"
          animate={{ rotate: [0, -15, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        >
          <FaGraduationCap />
        </motion.div>

        <h1 className="text-6xl font-medium text-blue-950 font-serif leading-tight relative">
          Empowering Minds <br /> Shaping The Future
        </h1>

        <p className="text-gray-600 text-base md:text-lg max-w-md">
          We believe that education isn&apos;t just about facts — it&apos;s about{" "}
          <span className="font-semibold text-gray-900">
            Awakening The Mind
          </span>
          .
        </p>

        <motion.button
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 8px 20px rgba(30, 64, 175, 0.4)",
          }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-blue-900 border border-transparent text-white font-medium px-10 py-3 rounded-full transition-all duration-300 hover:bg-white hover:text-blue-900 hover:border-blue-900 cursor-pointer relative z-10"
        >
          Get Started
        </motion.button>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="md:w-1/2 relative z-10"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <Image
          src="/Home Img.png"
          alt="Students Group"
          width={700}
          height={700}
          className="object-cover"
        />
      </motion.div>
    </section>
  );
}
