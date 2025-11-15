"use client";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function ConceptSection() {
  return (
    <section
      className={`min-h-screen flex items-center justify-center px-8 overflow-hidden bg-white ${poppins.className}`}
    >
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-8 items-center">
        
        {/* ================= Graph Section ================= */}
        <motion.div
          className="relative w-full flex justify-center items-end scale-[1.5] md:scale-[1.5]"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <svg viewBox="0 0 500 250" className="w-full h-auto">
            {/* Half circular grid — animated path draw */}
            <motion.g
              stroke="#E5E5E5"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <path d="M0,250 A250,250 0 0,1 500,250" />  
              <path d="M50,250 A200,200 0 0,1 450,250" />
              <path d="M100,250 A150,150 0 0,1 400,250" />
              <path d="M150,250 A100,100 0 0,1 350,250" />
              <path d="M200,250 A50,50 0 0,1 300,250" />
              <line x1="250" y1="250" x2="250" y2="0" />
              <line x1="250" y1="250" x2="400" y2="70" />
              <line x1="250" y1="250" x2="100" y2="70" />
              <line x1="250" y1="250" x2="450" y2="180" />
              <line x1="250" y1="250" x2="50" y2="180" />
            </motion.g>

            {/* Yellow arc — fade-in */}
            <motion.path
              d="M250,250 L250,150 A100,100 0 0,1 320,220 Z"
              fill="#F9C623"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            />

            {/* Main black radius line */}
            <motion.line
              x1="250"
              y1="250"
              x2="350"
              y2="130"
              stroke="black"
              strokeWidth="4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
            />

            {/* Dashed line */}
            <motion.line
              x1="350"
              y1="130"
              x2="350"
              y2="250"
              stroke="black"
              strokeWidth="3"
              strokeDasharray="10 8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.3 }}
            />

            {/* Blue glowing dot — bounce animation */}
            <motion.circle
              cx="350"
              cy="130"
              r="14"
              fill="#4F6FFF"
              stroke="white"
              strokeWidth="6"
              initial={{ scale: 0 }}
              whileInView={{ scale: [0, 1.2, 1] }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 1.5,
              }}
              style={{
                filter: "drop-shadow(0 0 20px rgba(79,111,255,0.6))",
              }}
            />

            {/* Text labels (fade-in) */}
            <motion.text
              x="280"
              y="200"
              fontSize="20"
              fontStyle="italic"
              fill="black"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              r
            </motion.text>
            <motion.text
              x="355"
              y="200"
              fontSize="20"
              fontStyle="italic"
              fill="black"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
            >
              y
            </motion.text>
            <motion.text
              x="230"
              y="240"
              fontSize="16"
              fill="black"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.6 }}
            >
              45°
            </motion.text>
          </svg>
        </motion.div>

        {/* ================= Text Section ================= */}
        <motion.div
          className="text-left md:pl-28 lg:pl-36"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-6xl font-bold text-blue-950 font-serif mb-4 leading-[1.1]">
            Concepts <br /> that click
          </h2>
          <p className="text-lg text-black leading-relaxed">
            Interactive lessons make even complex ideas easy to grasp. <br />
            Instant custom feedback accelerates your understanding.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
