
'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";

// ✅ Load Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function StudyTechSection() {
  const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay },
    },
  });

  return (
    <section
      className={`min-h-screen w-full flex flex-col md:flex-row bg-[#f2f8ff] ${poppins.className}`}
    >
      {/* Left Image */}
      <div className="md:w-1/2 flex items-center justify-center p-10">
        <div className="overflow-hidden">
          <Image
            src="/Img1.jpg"
            alt="Tech Learning Session"
            width={600}
            height={500}
            className="object-cover"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 bg-[#003366] text-white rounded-l-[80px] flex flex-col justify-center px-10 md:px-16 py-16">
        {/* Small Heading */}
        <motion.p
          className="text-xl font-medium font-serif mb-2"
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          Empowering Education
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          className="text-5xl font-medium font-serif mb-10 leading-snug"
          variants={fadeUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          We Help Students And Educators Grow With Technology
        </motion.h1>

        {/* Content Blocks */}
        <div className="space-y-10">
          {[
            {
              img: "/Img2.jpg",
              title: "Innovative Learning",
              desc: "High-quality study content designed for diverse learners and modern educational platforms",
              label: "Assistance",
              link: "Read More",
            },
            {
              img: "/Img3.jpg",
              title: "Smart Tech Integration",
              desc: "Using AI-driven insights and digital tools to enhance classroom engagement and personalized learning",
              label: "Innovation",
              link: "See More",
            },
            {
              img: "/Img4.jpg",
              title: "Building Future Skills",
              desc: "Empowering students with critical thinking, coding, and digital collaboration skills for tomorrow’s world",
              label: "Growth",
              link: "Join Now",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="flex items-start justify-between"
              variants={fadeUp(0.4 + i * 0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            >
              <div className="flex items-start space-x-4">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={80}
                  height={80}
                />
                <div>
                  <h3 className="font-semibold text-lg font-serif">{item.title}</h3>
                  <p className="text-sm max-w-md text-gray-200">{item.desc}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold font-serif">{item.label}</p>
                <p className="text-xs cursor-pointer underline hover:text-blue-300 transition">
                  {item.link}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-10">
          <button className="bg-blue-400 text-white px-8 py-3 rounded-full font-semibold border border-transparent hover:bg-white hover:text-[#003366] hover:border-[#003366] transition cursor-pointer">
            Explore Now
          </button>
        </div>
      </div>
    </section>
  );
}
