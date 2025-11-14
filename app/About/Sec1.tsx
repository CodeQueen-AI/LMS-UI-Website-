
"use client";

import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaSchool } from "react-icons/fa";
import { GiCube } from "react-icons/gi";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function FeaturesSection() {
  const features = [
    {
      icon: <GiCube className="text-4xl text-blue-950" />,
      title: "ACTIVE LEARNING",
      desc: "Lorem ipsum dolor amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore.",
    },
    {
      icon: <FaChalkboardTeacher className="text-4xl text-blue-950" />,
      title: "EXPERT TEACHERS",
      desc: "Lorem ipsum dolor amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore.",
    },
    {
      icon: <FaSchool className="text-4xl text-blue-950" />,
      title: "STRATEGIC LOCATION",
      desc: "Lorem ipsum dolor amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore.",
    },
  ];

  return (
    <section
      className={`relative flex flex-col md:flex-row justify-center items-center gap-6 py-20 overflow-hidden bg-white ${poppins.className}`}
    >
      {/* 🔵 Glowing Circles */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-300/40 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-200/40 rounded-full blur-3xl animate-pulse" />

      {/* 🟦 Animated Floating Squares */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-blue-200/40 rounded-md"
            style={{
              width: Math.random() * 20 + 10,
              height: Math.random() * 20 + 10,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, 30, 0],
              opacity: [0.5, 1, 0.5],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: Math.random() * 10 + 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* 🪄 Feature Boxes with Scroll Animation */}
      {features.map((f, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: i * 0.2 }}
          viewport={{ once: false, amount: 0.4 }} // 👈 allows repeat animation
          className="w-80 px-6 py-10 border border-gray-300 bg-white/70 backdrop-blur-sm cursor-pointer shadow-md transition-transform duration-300 hover:-translate-y-3"
        >
          <div className="flex justify-center mb-6">
            <div className="flex items-center justify-center bg-blue-100 rounded-full p-4 shadow-inner">
              {f.icon}
            </div>
          </div>
          <h3 className="text-center text-lg font-bold mb-3 text-blue-950">
            {f.title}
          </h3>
          <p className="text-center text-sm text-gray-700 mb-6">{f.desc}</p>
          <div className="flex justify-center">
            <button className="cursor-pointer px-6 py-2 border border-blue-900 text-blue-900 text-sm font-medium transition hover:bg-blue-900 hover:text-white">
              Learn More
            </button>
          </div>
        </motion.div>
      ))}
    </section>
  );
}

