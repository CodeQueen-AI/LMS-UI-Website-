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
      className={`min-h-screen flex flex-col md:flex-row items-center justify-between bg-white overflow-hidden ${poppins.className}`}
    >
      {/* LEFT SIDE IMAGE */}
      <motion.div
        className="w-full md:w-1/2 relative rounded-r-[60px] overflow-hidden"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Image
          src="/Img11.avif"
          alt="Team working together"
          width={800}
          height={700}
          className="object-cover w-full h-[600px] hover:grayscale transition duration-300"
        />
      </motion.div>

      {/* RIGHT SIDE CONTENT */}
      <motion.div
        className="w-full md:w-1/2 px-8 md:px-20 py-16"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
      >
        {/* 02 Outline Number */}
        <motion.h1
          className="text-[110px] font-bold text-transparent leading-none select-none"
          style={{
            WebkitTextStroke: "2px #b3c7e6",
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          02
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-blue-600 text-sm font-semibold mt-2 tracking-wide"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Your next step
        </motion.p>

        {/* Main Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-[#002B5B] mt-3 leading-tight"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Solutions made <br /> for your needs
        </motion.h2>

        {/* Description 1 */}
        <motion.p
          className="text-gray-700 mt-6 leading-relaxed"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          We pride ourselves on offering personalized support that helps you
          reach your goals. Every project is approached with dedication and
          attention to detail, ensuring the best possible outcome. Our focus is
          always on quality, reliability, and client satisfaction.
        </motion.p>

        {/* Description 2 */}
        <motion.p
          className="text-gray-700 mt-4 leading-relaxed"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Providing exceptional service is at the core of everything we do. Our
          professionals bring knowledge and care to every task, working closely
          with you to deliver results that exceed expectations. We value
          transparency and collaboration in all our partnerships.
        </motion.p>
      </motion.div>
    </section>
  );
}
