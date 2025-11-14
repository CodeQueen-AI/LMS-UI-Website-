"use client";
import Image from "next/image";
import { FaUserPlus, FaGraduationCap, FaArrowUp } from "react-icons/fa";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function ExpertisePage() {
  const steps = [
    {
      icon: <FaUserPlus className="text-green-500 text-2xl" />,
      title: "Sign up and get started",
      desc: "Create your account and start learning instantly",
      bgColor: "bg-green-100",
    },
    {
      icon: <FaGraduationCap className="text-pink-500 text-2xl" />,
      title: "Explore courses tailored to you",
      desc: "Browse a range of courses designed to fit your goals",
      bgColor: "bg-pink-100",
    },
    {
      icon: <FaArrowUp className="text-purple-500 text-2xl" />,
      title: "Keep learning and growing",
      desc: "Continue exploring and advance your skills with every step",
      bgColor: "bg-purple-100",
    },
  ];

  return (
    <section
      className={`${poppins.className} relative flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-20 overflow-hidden bg-white`}>
      <div className="absolute -top-12 -left-12 w-72 h-72 border-4 border-yellow-300 rounded-full"></div>
      <div className="absolute top-1/4 right-10 w-56 h-56 border-4 border-blue-100 rounded-full"></div>
      <div className="absolute bottom-10 left-1/3 w-48 h-48 border-4 border-pink-300 rounded-full"></div>
      <motion.div
        className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0 relative z-10"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}>
        <Image
          src="/Sec1.png"
          alt="Girl with laptop"
          width={400}
          height={400}
          className="rounded-lg relative z-10 hover:scale-105 transition-transform duration-500"/>
      </motion.div>
      <motion.div
        className="w-full md:w-1/2 relative z-10 space-y-8"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}>
        <h2 className="text-5xl font-medium font-serif text-blue-950 leading-snug">
          Take Your Expertise <br /> To The Next Level
        </h2>
        <div className="space-y-4">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-4 border border-gray-300 p-4 hover:shadow-md transition cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ scale: 1.03 }}>
              <div className={`rounded-full p-3 ${step.bgColor}`}>
                {step.icon}
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">{step.title}</h4>
                <p className="text-gray-500 text-sm">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
