"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence, easeOut, easeInOut } from "framer-motion";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function SolutionsSection() {
  const [open, setOpen] = useState<number | null>(1);

  const toggleAccordion = (index: number) => {
    setOpen(open === index ? null : index);
  };

  // ✨ Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (i: number = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: easeOut },
    }),
  };

  return (
    <section
      className={`min-h-screen w-full flex flex-col md:flex-row overflow-hidden ${poppins.className}`}
    >
      {/* LEFT IMAGE SECTION */}
      <motion.div
        className="relative md:w-1/2 h-[400px] md:h-auto overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeUp}
        custom={0.2}
      >
        <Image
          src="/Img9.avif"
          alt="Team working"
          fill
          className="object-cover hover:grayscale transition-all duration-300"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-8 md:p-12">
          <motion.h2
            className="text-white text-2xl md:text-3xl font-semibold"
            variants={fadeUp}
            custom={0.3}
          >
            Maintenance
          </motion.h2>
          <motion.p
            className="text-white/90 text-sm md:text-base max-w-md mt-2 leading-relaxed"
            variants={fadeUp}
            custom={0.4}
          >
            Focused on long-term success, we build partnerships based on trust.
            Every project reflects our dedication to excellence.
          </motion.p>
        </div>
      </motion.div>

      {/* RIGHT CONTENT SECTION */}
      <motion.div
        className="md:w-1/2 bg-white px-6 md:px-16 py-12 flex flex-col justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeUp}
        custom={0.3}
      >
        {/* Section Intro */}
        <motion.p
          className="text-blue-700 text-xl font-medium font-serif"
          variants={fadeUp}
          custom={0.4}
        >
          What we do
        </motion.p>

        <motion.h1
          className="text-5xl font-medium font-serif text-blue-950 mt-2 mb-6 leading-snug"
          variants={fadeUp}
          custom={0.5}
        >
          Solutions Made For <br /> Your Needs
        </motion.h1>

        <motion.p
          className="leading-relaxed mb-6"
          variants={fadeUp}
          custom={0.6}
        >
          Our team is committed to delivering high-quality services tailored to
          your needs. With years of experience and a passion for excellence, we
          focus on creating solutions that truly make a difference. We believe
          in building strong relationships based on trust and clear
          communication.
        </motion.p>

        <motion.p
          className="leading-relaxed mb-8"
          variants={fadeUp}
          custom={0.7}
        >
          We pride ourselves on offering personalized support that helps you
          reach your goals. Every project is approached with dedication and
          attention to detail, ensuring the best possible outcome. Our focus is
          always on quality, reliability, and client satisfaction.
        </motion.p>

        {/* ACCORDION SECTION */}
        <motion.div
          className="border-t border-gray-200"
          variants={fadeUp}
          custom={0.8}
        >
          {[
            {
              id: 1,
              title: "Make the Most of It",
              content:
                "We understand your unique needs and tailor our services accordingly. Professionalism and attention to detail define our work.",
            },
            {
              id: 2,
              title: "5 Tips You Should Know",
              content:
                "Our team delivers reliable solutions tailored to your specific needs. We prioritize quality and customer satisfaction in every project.",
            },
            {
              id: 3,
              title: "Quality Always Wins",
              content:
                "We offer innovative design and service excellence, ensuring your projects stand out in every detail.",
            },
          ].map((item) => (
            <div
              key={item.id}
              className="border-b border-gray-200 py-4 cursor-pointer"
              onClick={() => toggleAccordion(item.id)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-[#002B5B] text-lg">
                  {item.title}
                </h3>
                <motion.span
                  animate={{ rotate: open === item.id ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: easeInOut }}
                  className="text-[#002B5B] text-xl"
                >
                  ▾
                </motion.span>
              </div>

              <AnimatePresence>
                {open === item.id && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto", marginTop: 8 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.5, ease: easeInOut }}
                  >
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      {item.content}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
