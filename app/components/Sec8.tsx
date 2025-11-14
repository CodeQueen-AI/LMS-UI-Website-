"use client";

import Image from "next/image";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function SolutionsPage() {
  return (
    <section
      className={`min-h-screen flex flex-col md:flex-row items-center justify-between bg-white ${poppins.className}`}
    >
      {/* LEFT SIDE (Animated Text Section) */}
      <motion.div
        className="w-full md:w-1/2 px-8 md:px-20 py-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* 01 Outline Number */}
        <motion.h1
          className="text-[110px] font-bold text-transparent leading-none select-none"
          style={{
            WebkitTextStroke: "2px #b3c7e6",
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          01
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-blue-600 text-xl font-serif font-semibold mt-2 tracking-wide"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          Your Next Step
        </motion.p>

        {/* Main Heading */}
        <motion.h2
          className="text-6xl font-medium font-serif text-blue-900 mt-3 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          Solutions Made <br /> For Your Needs
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-gray-700 mt-6 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          We pride ourselves on offering personalized support that helps you
          reach your goals. Every project is approached with dedication and
          attention to detail, ensuring the best possible outcome. Our focus is
          always on quality, reliability, and client satisfaction.
        </motion.p>

        <motion.p
          className="text-gray-700 mt-4 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          Providing exceptional service is at the core of everything we do. Our
          professionals bring knowledge and care to every task, working closely
          with you to deliver results that exceed expectations. We value
          transparency and collaboration in all our partnerships.
        </motion.p>
      </motion.div>

      {/* RIGHT SIDE IMAGE (No Animation) */}
      <div className="w-full md:w-1/2 relative overflow-hidden">
        <Image
          src="/Img10.avif"
          alt="Students learning together"
          width={800}
          height={700}
          className="object-cover w-[600px] h-[650px] hover:grayscale transition duration-300"
        />
      </div>
    </section>
  );
}
