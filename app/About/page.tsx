"use client";
import Sec1 from "./Sec1";
import Sec2 from "./Sec2";
import { motion, easeOut, easeInOut } from "framer-motion";
import { BookOpen, Pencil, GraduationCap, FileText } from "lucide-react";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function AboutPage() {
  // Floating icons config
  const floatAnimation = {
    y: ["0%", "-15%", "0%"],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: easeInOut, // ✅ Updated
    },
  };

  // Common scroll animation variants
  const scrollFade = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: easeOut }, // ✅ Updated
    viewport: { once: false, amount: 0.3 },
  };

  return (
    <div className={`bg-white ${poppins.className}`}>
      {/* ==================== BANNER ==================== */}
      <motion.section
        {...scrollFade}
        className="relative bg-blue-200 py-24 px-8 mx-auto mt-10 mb-10 max-w-6xl overflow-hidden shadow-sm border border-gray-300"
      >
        {/* Background subtle icon */}
        <motion.div
          className="absolute inset-0 flex justify-center items-center opacity-10 pointer-events-none"
          initial={{ scale: 0.9 }}
          animate={{ scale: [0.9, 1.05, 0.9] }}
          transition={{ duration: 8, repeat: Infinity, ease: easeInOut }}
        >
          <GraduationCap size={200} className="text-blue-900" />
        </motion.div>

        {/* Floating colorful icons */}
        <motion.div className="absolute top-10 left-10 text-pink-500" animate={floatAnimation}>
          <Pencil size={40} />
        </motion.div>

        <motion.div
          className="absolute bottom-12 left-1/4 text-green-500"
          animate={{ ...floatAnimation, transition: { duration: 4, repeat: Infinity, ease: easeInOut } }}
        >
          <BookOpen size={45} />
        </motion.div>

        <motion.div
          className="absolute top-16 right-20 text-yellow-500"
          animate={{ ...floatAnimation, transition: { duration: 3.5, repeat: Infinity, ease: easeInOut } }}
        >
          <FileText size={40} />
        </motion.div>

        <motion.div
          className="absolute bottom-8 right-1/4 text-blue-400"
          animate={{ ...floatAnimation, transition: { duration: 5, repeat: Infinity, ease: easeInOut } }}
        >
          <GraduationCap size={45} />
        </motion.div>

        {/* Main Text */}
        <div className="relative z-10 text-center">
          <h1 className="text-7xl font-serif font-medium text-blue-900 mb-4">About Us</h1>
        </div>
      </motion.section>

      {/* ==================== TEXT + IMAGE SECTION ==================== */}
      <motion.section
        {...scrollFade}
        className="max-w-6xl mx-auto py-20 px-8 grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Left Content */}
        <div>
          <h2 className="text-5xl font-semibold font-serif text-blue-900 mb-6">Who We Are</h2>
          <p className="leading-relaxed mb-6">
            At <span className="font-semibold text-blue-900">Ductauon</span>, we
            believe education is more than just learning — it’s transformation.
            Our mission is to bridge the gap between curiosity and clarity,
            connecting learners with expert tutors who ignite understanding,
            confidence, and lifelong growth.
          </p>
          <p className="leading-relaxed mb-6">
            We’re redefining what it means to learn in the digital age —
            bringing together technology, personalized guidance, and human
            connection to make knowledge truly accessible for everyone.
          </p>

          <h3 className="text-2xl font-medium font-serif text-blue-900 mb-4">What Defines Us</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-blue-700 font-serif">1.</span>
              <span>
                <span className="font-semibold text-gray-900 font-serif">
                  Global Learning Community —
                </span>
                We unite students and educators from every corner of the world,
                building a vibrant space where knowledge knows no borders.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-700 font-serif">2.</span>
              <span>
                <span className="font-semibold text-gray-900 font-serif">
                  Personalized Mentorship —
                </span>
                Our tutors don’t just teach — they mentor, inspire, and adapt to
                every learner’s unique goals and pace.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-700 font-serif">3.</span>
              <span>
                <span className="font-semibold text-gray-900 font-serif">
                  Accessible Excellence —
                </span>
                With innovative tools and flexible learning models, we make
                high-quality education available to all, anytime, anywhere.
              </span>
            </li>
          </ul>
        </div>

        {/* Right Image */}
        <motion.div {...scrollFade} className="flex justify-center">
          <div className="relative w-[90%] max-w-md">
            <Image
              src="/About.jpg"
              alt="About Ductauon"
              width={500}
              height={400}
              className="object-cover shadow-lg"
            />
            <div className="absolute inset-0 -z-10 bg-blue-200 blur-3xl opacity-40 rounded-2xl"></div>
          </div>
        </motion.div>
      </motion.section>

      {/* ==================== SEC1 & SEC2 WITH ANIMATION ==================== */}
      <motion.div {...scrollFade}>
        <Sec1 />
      </motion.div>

      <motion.div {...scrollFade}>
        <Sec2 />
      </motion.div>
    </div>
  );
}
