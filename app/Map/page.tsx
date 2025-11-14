// "use client";

// import { useState } from "react";
// import {
//   FaGraduationCap,
//   FaBook,
//   FaLightbulb,
//   FaPencilAlt,
//   FaSearch,
// } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { Poppins } from "next/font/google";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
// });

// export default function SearchPage() {
//   const [subject, setSubject] = useState("");
//   const [level, setLevel] = useState("");

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Searching for:", subject, "at level:", level);
//   };

//   return (
//     <div
//       className={`min-h-screen flex flex-col items-center ${poppins.className}`}
//     >
//       {/* ===== Banner Section ===== */}
//       <div className="w-[95%] mt-10 bg-blue-300 py-20 px-8 text-center relative overflow-hidden">
//         {/* Floating Decorative Icons */}
//         <motion.div
//           animate={{ y: [0, -10, 0] }}
//           transition={{ duration: 4, repeat: Infinity }}
//           className="absolute top-8 left-12 text-blue-800 text-3xl opacity-70"
//         >
//           <FaGraduationCap />
//         </motion.div>

//         <motion.div
//           animate={{ y: [0, 12, 0] }}
//           transition={{ duration: 5, repeat: Infinity, delay: 1 }}
//           className="absolute top-16 right-16 text-yellow-500 text-3xl opacity-70"
//         >
//           <FaLightbulb />
//         </motion.div>

//         <motion.div
//           animate={{ y: [0, -12, 0] }}
//           transition={{ duration: 6, repeat: Infinity, delay: 0.8 }}
//           className="absolute bottom-12 left-24 text-red-500 text-3xl opacity-70"
//         >
//           <FaBook />
//         </motion.div>

//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 4.5, repeat: Infinity, delay: 0.5 }}
//           className="absolute bottom-16 right-20 text-green-600 text-3xl opacity-70"
//         >
//           <FaPencilAlt />
//         </motion.div>

//         {/* Heading */}
//         <h1 className="text-6xl font-medium font-serif text-blue-950 drop-shadow-lg">
//           Discover the Right Tutor for You
//         </h1>
//       </div>

//       {/* ===== Search Bar ===== */}
//       <form
//         onSubmit={handleSearch}
//         className="mt-10 w-[90%] md:w-[70%] p-8 border border-gray-500 flex flex-col md:flex-row items-center justify-between gap-6"
//       >
//         {/* Subject Input */}
//         <div className="flex-1 flex flex-col">
//           <label className="text-xs font-semibold  tracking-wider uppercase mb-1">
//             Subject
//           </label>
//           <input
//             type="text"
//             value={subject}
//             onChange={(e) => setSubject(e.target.value)}
//             className="border-b-2 border-gray-300 focus:border-sky-900 outline-none py-2"
//           />
//         </div>

//         {/* Level Input */}
//         <div className="flex-1 flex flex-col">
//           <label className="text-xs font-semibold tracking-wider uppercase mb-1">
//             Level
//           </label>
//           <input
//             type="text"
//             value={level}
//             onChange={(e) => setLevel(e.target.value)}
//             className="border-b-2 border-gray-300 focus:border-sky-900 outline-none py-2 "
//           />
//         </div>

//         {/* Search Button */}
//     <button
//   type="submit"
//   className="bg-white border-2 border-blue-900 text-blue-900 p-4 rounded-full shadow-md flex items-center justify-center 
//              hover:bg-blue-900 hover:text-white hover:border-white transition-all duration-300 cursor-pointer">
//   <FaSearch className="text-xl" />
//     </button>

//       </form>

//       {/* ===== Map Section ===== */}
//       <div className="w-[90%] mt-12 border-2 border-gray-300 overflow-hidden shadow-lg">
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0199293738615!2d-122.41941568468135!3d37.774929779759845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5b9df2f1%3A0xb0e5d43f74bb16e1!2sSan%20Francisco!5e0!3m2!1sen!2sus!4v1607633420123!5m2!1sen!2sus"
//           width="100%"
//           height="500"
//           style={{ border: 0 }}
//           allowFullScreen={true}
//           loading="lazy"
//         ></iframe>
//       </div>

//       <div className="h-10"></div>
//     </div>
//   );
// }





































"use client";

import { useState } from "react";
import {
  FaGraduationCap,
  FaBook,
  FaLightbulb,
  FaPencilAlt,
  FaSearch,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function SearchPage() {
  const [subject, setSubject] = useState("");
  const [level, setLevel] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", subject, "at level:", level);
  };

  // ==== Animations Config ====
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className={`min-h-screen flex flex-col items-center bg-white ${poppins.className}`}
    >
      {/* ===== Banner Section ===== */}
      <motion.div
        variants={fadeIn}
        className="w-[95%] mt-10 bg-blue-300 py-20 px-8 text-center relative overflow-hidden rounded-md shadow-md"
      >
        {/* Floating Decorative Icons */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-8 left-12 text-blue-800 text-3xl opacity-70"
        >
          <FaGraduationCap />
        </motion.div>

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute top-16 right-16 text-yellow-500 text-3xl opacity-70"
        >
          <FaLightbulb />
        </motion.div>

        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: 0.8 }}
          className="absolute bottom-12 left-24 text-red-500 text-3xl opacity-70"
        >
          <FaBook />
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, delay: 0.5 }}
          className="absolute bottom-16 right-20 text-green-600 text-3xl opacity-70"
        >
          <FaPencilAlt />
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          className="text-6xl font-medium font-serif text-blue-950 drop-shadow-lg"
        >
          Discover the Right Tutor for You
        </motion.h1>
      </motion.div>

      {/* ===== Search Bar ===== */}
      <motion.form
        variants={fadeUp}
        onSubmit={handleSearch}
        className="mt-10 w-[90%] md:w-[70%] p-8 border border-gray-300 flex flex-col md:flex-row items-center justify-between gap-6 bg-white rounded-md shadow-sm"
      >
        {/* Subject Input */}
        <motion.div variants={fadeUp} className="flex-1 flex flex-col">
          <label className="text-xs font-semibold tracking-wider uppercase mb-1 text-gray-700">
            Subject
          </label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="border-b-2 border-gray-300 focus:border-sky-900 outline-none py-2 transition-all duration-300"
          />
        </motion.div>

        {/* Level Input */}
        <motion.div variants={fadeUp} className="flex-1 flex flex-col">
          <label className="text-xs font-semibold tracking-wider uppercase mb-1 text-gray-700">
            Level
          </label>
          <input
            type="text"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="border-b-2 border-gray-300 focus:border-sky-900 outline-none py-2 transition-all duration-300"
          />
        </motion.div>

        {/* Search Button */}
        <motion.button
          variants={fadeUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="bg-white border-2 border-blue-900 text-blue-900 p-4 rounded-full shadow-md flex items-center justify-center 
                     hover:bg-blue-900 hover:text-white hover:border-white transition-all duration-300 cursor-pointer"
        >
          <FaSearch className="text-xl" />
        </motion.button>
      </motion.form>

      {/* ===== Map Section ===== */}
      <motion.div
        variants={fadeUp}
        className="w-[90%] mt-12 border-2 border-gray-300 overflow-hidden "
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0199293738615!2d-122.41941568468135!3d37.774929779759845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5b9df2f1%3A0xb0e5d43f74bb16e1!2sSan%20Francisco!5e0!3m2!1sen!2sus!4v1607633420123!5m2!1sen!2sus"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </motion.div>

      <div className="h-10"></div>
    </motion.div>
  );
}
