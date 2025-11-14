



"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const contentRefs = useRef<HTMLDivElement[]>([]);

  const faqs = [
    {
      question: "Why do students prefer online learning?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Where should I study abroad?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    },
    {
      question: "How can I contact a school directly?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "How do I find a school where I want to study?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  // Scroll Animation setup
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });

  useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0 });
    else controls.start({ opacity: 0, y: 50 });
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`${poppins.className} flex flex-col md:flex-row gap-8 py-12 px-6 md:px-20 items-start`}
    >
      {/* Left Image with smooth fade-in */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2"
      >
        <Image
          src="/Box15.jpg"
          alt="School welcome"
          className="object-cover w-full h-full"
          width={500}
          height={400}
        />
      </motion.div>

      {/* Right FAQ with accordion animation */}
      <div className="md:w-1/2 flex flex-col gap-4">
        <h2 className="text-5xl font-medium mb-6 text-center font-serif">
          Frequently Asked Some{" "}
          <span className="text-blue-800">Questions?</span>
        </h2>

        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="border overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <button
              className={`w-full text-left px-6 py-4 flex justify-between items-center cursor-pointer ${
                activeIndex === index
                  ? "bg-blue-900 text-white"
                  : "bg-white text-gray-800"
              } font-medium transition-colors duration-300`}
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            >
              {faq.question}
              <span
                className={`transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              >
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>

            <motion.div
              ref={(el) => {
                if (el) contentRefs.current[index] = el;
              }}
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: activeIndex === index ? 1 : 0,
                height:
                  activeIndex === index
                    ? contentRefs.current[index]?.scrollHeight
                    : 0,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="px-6 text-gray-700 overflow-hidden"
            >
              <p className="py-4">{faq.answer}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}






