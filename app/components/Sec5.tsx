"use client";

import { motion } from "framer-motion";
import {
  Poppins,
  Playfair_Display,
  Roboto_Slab,
  Dancing_Script,
  Lora,
  Montserrat,
  Merriweather,
  Oswald,
  Josefin_Sans,
  Nunito,
  Indie_Flower,
} from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700"] });
const robotoSlab = Roboto_Slab({ subsets: ["latin"], weight: ["700"] });
const dancing = Dancing_Script({ subsets: ["latin"], weight: ["700"] });
const lora = Lora({ subsets: ["latin"], weight: ["600"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["600"] });
const merriweather = Merriweather({ subsets: ["latin"], weight: ["700"] });
const oswald = Oswald({ subsets: ["latin"], weight: ["600"] });
const josefin = Josefin_Sans({ subsets: ["latin"], weight: ["700"] });
const nunito = Nunito({ subsets: ["latin"], weight: ["700"] });
const indie = Indie_Flower({ subsets: ["latin"], weight: ["400"] });

export default function EducationFontsSection() {
  const fonts = [
    { name: "Education", className: playfair.className },
    { name: "Education", className: robotoSlab.className },
    { name: "Education", className: dancing.className },
    { name: "Education", className: lora.className },
    { name: "Education", className: montserrat.className },
    { name: "Education", className: merriweather.className },
    { name: "Education", className: oswald.className },
    { name: "Education", className: josefin.className },
    { name: "Education", className: nunito.className },
    { name: "Education", className: indie.className },
  ];

  // ✨ Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      className={`min-h-screen w-full bg-white py-20 px-8 md:px-20 ${poppins.className}`}
    >
      {/* ---------- Header Section ---------- */}
      <motion.div
        className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* Left Side Text */}
        <motion.div variants={fadeUp} custom={0.2}>
          <h1 className="text-6xl font-medium font-serif text-[#002B5B] leading-tight">
            Start Building Your <br /> Future Today
          </h1>
          <p className="text-blue-600 font-serif text-xl font-medium mt-2">
            Your Next Step
          </p>
        </motion.div>
      </motion.div>

      {/* ---------- Fonts Grid ---------- */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-5 border border-gray-300"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {fonts.map((font, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            custom={index * 0.3}
            className={`border border-gray-300 flex items-center justify-center text-3xl py-10 hover:bg-[#f2f8ff] transition-all duration-300 cursor-pointer ${font.className}`}
            whileHover={{
              scale: 1.08,
              rotate: 1,
              boxShadow: "0 6px 25px rgba(0,0,0,0.15)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            {font.name}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
