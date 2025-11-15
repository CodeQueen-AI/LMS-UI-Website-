'use client';

import Image from "next/image";
import { motion, easeOut } from "framer-motion"; // ✅ import easing
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function FutureSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: easeOut }, // ✅ updated
    }),
  };

  const cardFade = {
    hidden: { opacity: 0, x: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: easeOut }, // ✅ updated
    }),
  };

  return (
    <section
      className={`min-h-screen w-full bg-white flex flex-col items-center justify-center px-6 md:px-20 py-16 overflow-hidden ${poppins.className}`}
    >
      <motion.div
        className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-start gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* LEFT SIDE */}
        <div className="md:w-1/2">
          <motion.div variants={fadeUp} custom={1} className="mb-10">
            <h1 className="text-6xl font-serif font-medium text-blue-950 leading-tight">
              Start Building Your <br /> Future Today
            </h1>
            <p className="text-xl text-blue-600 font-medium font-serif mt-2">
              YOUR NEXT STEP
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={2}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden mb-6 cursor-pointer"
          >
            <Image
              src="/Box10.jpg"
              alt="Students learning together"
              width={600}
              height={400}
              className="object-cover w-full h-auto transition-all duration-300 hover:grayscale"
            />
          </motion.div>

          <motion.div variants={fadeUp} custom={3}>
            <h3 className="font-semibold text-xl text-[#002B5B]">
              Power of Consistency
            </h3>
            <p className="text-xs mb-2 text-gray-600">
              Customized training programs to enhance skills and improve team
              performance.
            </p>
          </motion.div>
        </div>

        {/* RIGHT SIDE - CARDS */}
        <motion.div
          className="md:w-1/2 grid grid-cols-1 gap-6 mt-55"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {[
            {
              img: "/Box11.jpg",
              title: "Make the Most of It",
              desc: "Professional consulting tailored to meet your unique business challenges and goals.",
            },
            {
              img: "/Box12.jpg",
              title: "Tips You Should Know",
              desc: "Reliable customer support designed to provide fast and effective solutions.",
            },
            {
              img: "/Box13.jpg",
              title: "Quality Always Wins",
              desc: "Innovative design services that bring your creative visions to life.",
            },
            {
              img: "/Box14.jpg",
              title: "Common Mistakes",
              desc: "Comprehensive marketing strategies focused on increasing brand awareness and sales.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              variants={cardFade}
              custom={i}
              transition={{ duration: 0.3 }} // ✅ updated
              className="flex gap-4 items-start p-4 border border-gray-300 bg-white backdrop-blur-sm cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="overflow-hidden"
              >
                <Image
                  src={card.img}
                  alt={card.title}
                  width={100}
                  height={80}
                  className="object-cover hover:grayscale transition-all duration-300"
                />
              </motion.div>
              <div>
                <h4 className="font-semibold text-blue-950">{card.title}</h4>
                <p className="text-sm text-gray-700">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
