'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const articles = [
  {
    type: 'Blog',
    title: 'Quick Exercises to Boost Focus and Memory in Kids',
    desc: 'These activities are designed to be engaging, easy to do, and perfect for kids of all ages.',
    img: '/Box6.jpg',
  },
  {
    type: 'News',
    title: 'Crafts That Teach and Entertain at the Same Time',
    desc: 'These projects teach essential skills like problem-solving, math, and geography.',
    img: '/Box7.jpg',
  },
  {
    type: 'Blog',
    title: 'Why Kids Learn Best When They’re Having a Blast',
    desc: 'Discover how play, laughter, and engaging activities activate young minds.',
    img: '/Box8.jpg',
  },
];

export default function ArticlesSection() {
  return (
    <section className={`${poppins.className} py-16 px-6 md:px-20 bg-white overflow-hidden`}>
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 0.8, ease: 'easeOut', staggerChildren: 0.3 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Heading */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-medium font-serif text-black">
            Stay <span className="text-blue-900">Update</span> With Our <br /> News and Article
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Featured Article */}
          <motion.div
            className="md:col-span-2 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            variants={fadeUp}
            transition={{ duration: 0.9 }}
          >
            <div className="relative w-full h-64 md:h-full overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full"
              >
                <Image
                  src="/Box5.jpg"
                  alt="Featured Article"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
            <div className="p-6 bg-white">
              <span className="inline-block bg-yellow-200 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-md mb-2">Tips</span>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                The Importance of Reading: How to Encourage Kids to Love Books
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Simple tips to inspire a love for books in kids, from creating a cozy reading nook to choosing stories that match their interests.
              </p>
              <a href="#" className="text-purple-600 mt-2 inline-block font-semibold text-sm hover:underline">Read More →</a>
            </div>
          </motion.div>

          {/* Smaller Articles */}
          <motion.div
            className="flex flex-col gap-4"
            variants={fadeUp}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            {articles.map((art, idx) => (
              <motion.div
                key={idx}
                className="flex gap-4 items-start hover:translate-x-2 transition-transform duration-300"
                variants={fadeUp}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
              >
                <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden cursor-pointer">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full"
                  >
                    <Image src={art.img} alt={art.title} fill className="object-cover" />
                  </motion.div>
                </div>
                <div>
                  <h4 className="font-semibold font-serif text-gray-900 text-lg md:text-base">{art.title}</h4>
                  <p className="text-gray-500 text-xs md:text-sm">{art.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
