"use client";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { FaCar, FaCloud } from "react-icons/fa";
import { GiSpatter, GiWaves } from "react-icons/gi";
import { motion } from "framer-motion";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function FunSection() {
  return (
    <section
      className={`${poppins.className} relative flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 overflow-hidden`}>
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 text-blue-900 text-6xl opacity-50"
      >
        <FaCar />
      </motion.div>

      <motion.div
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-16 text-yellow-500 text-6xl opacity-40"
      >
        <GiSpatter />
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-5 right-20 text-blue-500 text-6xl opacity-50"
      >
        <FaCloud />
      </motion.div>

      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-5 right-10 text-pink-500 text-6xl opacity-40"
      >
        <GiWaves />
      </motion.div>
      <motion.div
        className="md:w-1/2 flex flex-col gap-6 items-center md:items-start text-center md:text-left z-10"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h5 className="text-xl text-blue-800 font-medium font-serif">
          WHY CHOOSE US
        </h5>
        <h2 className="text-5xl font-medium font-serif text-gray-900">
          New Approach To <br /> Fun
        </h2>
        <p className="text-gray-700 max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud.
        </p>
        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          transition={{ type: "spring", stiffness: 200 }}
          className="px-8 py-4 bg-blue-900 text-white border-2 border-white font-semibold cursor-pointer transition-all duration-300  hover:bg-white hover:text-blue-900 hover:border-blue-900"
        >
          Start Now
        </motion.button>
      </motion.div>
      <motion.div
        className="md:w-1/2 mt-10 md:mt-0 relative z-10"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.div
          whileHover={{ scale: 1.05, rotate: 1 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden"
        >
          <Image
            src="/Box9.jpg"
            alt="Kids playing"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

