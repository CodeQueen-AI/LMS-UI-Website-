'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function ConsultingSection() {
  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
    }),
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <section className={`w-full bg-white py-20 px-6 md:px-16 ${poppins.className}`}>
      {/* ---------- Header Row (3 Columns) ---------- */}
      <motion.div
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }} // 👈 scroll par dobara trigger
      >
        {/* Left Column */}
        <motion.div className="text-left" variants={fadeUp} custom={0.2}>
          <p className="text-blue-500 font-medium font-serif text-xl mb-2">
            Explore our world
          </p>
          <h1 className="text-7xl font-medium font-serif text-[#003366]">
            Consulting
          </h1>
        </motion.div>

        {/* Center Column */}
        <motion.div
          className="max-w-2xl text-left"
          variants={fadeUp}
          custom={0.4}
        >
          <p className="text-base leading-relaxed text-gray-700">
            Every service we offer is designed with your needs in mind. <br />
            With a strong focus on quality, consistency, and trust, we aim <br /> to
            build lasting relationships and deliver results.
          </p>
        </motion.div>

        {/* Right Column */}
        <motion.div
          className="text-center md:text-right"
          variants={fadeUp}
          custom={0.6}
        >
          <motion.button
            className="bg-[#003366] text-white px-8 py-3 rounded-full font-semibold whitespace-nowrap transition-all duration-300 transform hover:scale-105 hover:bg-[#4da6ff] shadow-md hover:shadow-xl cursor-pointer"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 20px rgba(77,166,255,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            View Details
          </motion.button>
        </motion.div>
      </motion.div>

      {/* ---------- Image Grid ---------- */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {[
          {
            img: "/Img5.jpg",
            title: "Support",
            desc: "Commitment To Excellence",
            delay: 0.1,
            offset: 0,
          },
          {
            img: "/Img6.jpg",
            title: "Maintenance",
            desc: "Commitment To Innovation",
            delay: 0.2,
            offset: 10,
          },
          {
            img: "/Img7.jpg",
            title: "Marketing",
            desc: "Carefully Crafted Results",
            delay: 0.3,
            offset: 0,
          },
          {
            img: "/Img8.jpg",
            title: "Planning",
            desc: "Future-Ready Strategies",
            delay: 0.4,
            offset: 10,
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className={`text-center ${item.offset ? "mt-10" : ""}`}
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }} // 👈 scroll par dobara trigger
            custom={i}
          >
            <motion.div
              className="overflow-hidden mb-4 cursor-pointer shadow-sm"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0, 51, 102, 0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={item.img}
                alt={item.title}
                width={400}
                height={300}
                className="object-cover w-full h-80 transition-all duration-500 hover:grayscale"
              />
            </motion.div>
            <motion.h3
              className="text-lg font-bold font-serif text-[#003366]"
              variants={fadeUp}
              custom={i + 0.4}
            >
              {item.title}
            </motion.h3>
            <motion.p
              className="text-xs mt-1 text-gray-600"
              variants={fadeUp}
              custom={i + 0.5}
            >
              {item.desc}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
