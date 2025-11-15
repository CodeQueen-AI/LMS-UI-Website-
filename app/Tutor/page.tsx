"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, easeOut } from "framer-motion";
import { Poppins } from "next/font/google";
import {
  FaGraduationCap,
  FaBook,
  FaLightbulb,
  FaPencilAlt,
  FaStar,
  FaUserGraduate,
} from "react-icons/fa";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const tutors = [
  {
    id: 1,
    name: "John Doe",
    subject: "Mathematics",
    rating: 4.8,
    image: "/Profile1.jpg",
    bio: "Experienced math tutor with 5+ years of teaching high school and college students.",
  },
  {
    id: 2,
    name: "Sophia Lee",
    subject: "English Literature",
    rating: 4.9,
    image: "/Profile2.jpg",
    bio: "Passionate about helping students master English language and creative writing.",
  },
  {
    id: 3,
    name: "Aarav Sharma",
    subject: "Physics",
    rating: 4.7,
    image: "/Profile3.jpg",
    bio: "Physics enthusiast focusing on conceptual clarity and real-world applications.",
  },
  {
    id: 4,
    name: "Emma Brown",
    subject: "Chemistry",
    rating: 4.6,
    image: "/Profile4.jpg",
    bio: "Helping students understand chemistry with fun experiments and easy explanations.",
  },
];

// Common scroll animation variant
const scrollFade = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: easeOut }, // ✅ updated
  viewport: { once: false, amount: 0.3 },
};

export default function TutorListingPage() {
  return (
    <div className={`min-h-screen flex flex-col items-center ${poppins.className}`}>
      {/* ===== Banner Section ===== */}
      <motion.div
        {...scrollFade}
        className="w-[95%] mt-10 bg-blue-300 py-20 px-8 text-center relative overflow-hidden rounded-md shadow-sm border border-blue-200"
      >
        {/* Floating Decorative Icons */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: easeOut }}
          className="absolute top-8 left-12 text-blue-800 text-3xl opacity-70"
        >
          <FaGraduationCap />
        </motion.div>

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1, ease: easeOut }}
          className="absolute top-16 right-16 text-yellow-500 text-3xl opacity-70"
        >
          <FaLightbulb />
        </motion.div>

        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: 0.8, ease: easeOut }}
          className="absolute bottom-12 left-24 text-red-500 text-3xl opacity-70"
        >
          <FaBook />
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, delay: 0.5, ease: easeOut }}
          className="absolute bottom-16 right-20 text-green-600 text-3xl opacity-70"
        >
          <FaPencilAlt />
        </motion.div>

        {/* Heading */}
        <h1 className="text-6xl font-medium font-serif text-blue-950 drop-shadow-lg">
          Tutor Listing
        </h1>
      </motion.div>

      {/* ===== Tutor Listing ===== */}
      <motion.div
        {...scrollFade}
        className="w-[90%] mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {tutors.map((tutor, index) => (
          <motion.div
            key={tutor.id}
            className="border border-gray-300 overflow-hidden cursor-pointer relative group transition-all duration-300 shadow-sm bg-white"
            whileHover={{ scale: 1.02 }}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: index * 0.1, duration: 0.6, ease: easeOut }} // ✅ updated
          >
            {/* Tutor Image */}
            <div className="relative overflow-hidden w-full h-60">
              <Image
                src={tutor.image}
                alt={tutor.name}
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-300 group-hover:scale-105"
                priority
              />

              {/* Hover Icon (Top Right Corner) */}
              <Link href={`/Tutor/${tutor.id}`}>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-3 group-hover:translate-x-0">
                  <div className="bg-white border border-sky-600 text-sky-600 rounded-full p-2 shadow-md hover:bg-sky-600 hover:text-white transition-all duration-300">
                    <FaUserGraduate className="text-lg" />
                  </div>
                </div>
              </Link>
            </div>

            {/* Tutor Info */}
            <div className="p-5 text-center">
              <h2 className="text-xl font-semibold text-blue-950 font-serif">{tutor.name}</h2>
              <p className="text-sky-600 font-medium mt-1">{tutor.subject}</p>

              {/* Rating */}
              <div className="flex justify-center items-center mt-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar
                    key={i}
                    className={`${
                      i < Math.round(tutor.rating) ? "text-yellow-400" : "text-gray-300"
                    } text-sm`}
                  />
                ))}
                <span className="text-gray-600 text-sm ml-1">{tutor.rating.toFixed(1)}</span>
              </div>

              {/* Bio */}
              <p className="text-gray-500 text-sm mt-3">{tutor.bio}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="h-16"></div>
    </div>
  );
}
