'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

// Animation variants for reusability
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

export default function Testimonials() {
  return (
    <section className="bg-[url('/Bg.png')] bg-cover bg-center py-16 px-6 md:px-20 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-blue-900"
            variants={fadeUp}
            transition={{ duration: 0.8 }}
          >
            Hear from Our Students
          </motion.h2>

          <motion.p
            className="text-black mt-4 text-lg sm:text-xl md:text-2xl"
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Innovative learning, expert instructors, and happy students. See what our learners have to say!
          </motion.p>

          <motion.button
            className="text-lg sm:text-xl md:text-2xl mt-6 bg-blue-700 text-white py-3 px-6 h-16 sm:h-20 w-40 sm:w-48 shadow-md transition hover:bg-white hover:text-blue-700 border border-blue-700 cursor-pointer"
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Enroll now
          </motion.button>
        </motion.div>

        {/* Right Testimonials */}
        <motion.div
          className="grid gap-6"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ duration: 1, ease: 'easeOut', staggerChildren: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* Testimonial 1 */}
          <motion.div
            className="bg-white p-6 sm:p-8 rounded-xl shadow-xl border-l-4 border-blue-600 transform rotate-1 sm:rotate-2 hover:rotate-0 hover:shadow-2xl transition-transform duration-500"
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-yellow-400 text-lg sm:text-xl">★★★★★</span>
            </div>
            <p className="text-gray-700 italic text-sm sm:text-base">
              “The courses here helped me land my first tech job! The instructors are amazing and the content is very practical.”
            </p>
            <div className="flex items-center mt-4">
              <Image
                src="/P1.png"
                alt="Emily Carter"
                width={40}
                height={40}
                className="rounded-full border-2 border-blue-600"
              />
              <div className="ml-3">
                <p className="font-bold text-gray-900 text-sm sm:text-base">Emily Carter</p>
                <p className="text-gray-500 text-xs sm:text-sm">Computer Science Student, USA</p>
              </div>
            </div>
          </motion.div>

          {/* Testimonial 2 */}
          <motion.div
            className="bg-white p-6 sm:p-8 rounded-xl shadow-xl border-r-4 border-blue-600 transform -rotate-1 sm:-rotate-2 hover:rotate-0 hover:shadow-2xl transition-transform duration-500"
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-yellow-400 text-lg sm:text-xl">★★★★★</span>
            </div>
            <p className="text-gray-700 italic text-sm sm:text-base">
              “Thanks to these study programs, I could strengthen my skills in AI and programming. Highly recommended for tech enthusiasts!”
            </p>
            <div className="flex items-center mt-4">
              <Image
                src="/P2.png"
                alt="Michael Lee"
                width={40}
                height={40}
                className="rounded-full border-2 border-blue-600"
              />
              <div className="ml-3">
                <p className="font-bold text-gray-900 text-sm sm:text-base">Michael Lee</p>
                <p className="text-gray-500 text-xs sm:text-sm">Software Engineer, UK</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
