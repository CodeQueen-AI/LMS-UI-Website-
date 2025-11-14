"use client";

import { Mail, Send, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Lobster, Poppins } from "next/font/google";
import { motion } from "framer-motion";

const lobster = Lobster({
  subsets: ["latin"],
  weight: ["400"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Footer() {
  return (
    <footer className={`${poppins.className} bg-white text-gray-800 border-t border-gray-200 pt-12 pb-6 relative`}>
      <motion.div
        className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Logo + About */}
        <motion.div variants={fadeUp}>
          <h1 className={`${lobster.className} text-4xl font-bold text-blue-900`}>
            Learn Sphere
          </h1>
          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            Empowering learners around the world with creative education,
            inspiration, and collaboration. Join us to share knowledge and grow
            together.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={fadeUp} transition={{ delay: 0.1 }}>
          <h2 className="font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-blue-700 transition">Home</a></li>
            <li><a href="#" className="hover:text-blue-700 transition">About</a></li>
            <li><a href="#" className="hover:text-blue-700 transition">Courses</a></li>
            <li><a href="#" className="hover:text-blue-700 transition">Contact</a></li>
          </ul>
        </motion.div>

        {/* Resources */}
        <motion.div variants={fadeUp} transition={{ delay: 0.2 }}>
          <h2 className="font-semibold mb-3">Resources</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-blue-700 transition">Blog</a></li>
            <li><a href="#" className="hover:text-blue-700 transition">Community</a></li>
            <li><a href="#" className="hover:text-blue-700 transition">Support</a></li>
            <li><a href="#" className="hover:text-blue-700 transition">Privacy Policy</a></li>
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div variants={fadeUp} transition={{ delay: 0.3 }}>
          <h2 className="font-semibold text-gray-900 mb-3">Newsletter</h2>
          <p className="text-sm text-gray-600 mb-3">
            Subscribe to get the latest updates and insights directly in your inbox.
          </p>
          <div className="flex items-center bg-gray-100 rounded-full p-2">
            <Mail className="text-gray-500 ml-2" size={20} />
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent flex-1 px-3 py-2 text-sm focus:outline-none"
            />
            <button className="bg-indigo-600 text-white rounded-full p-2 hover:bg-indigo-700 transition cursor-pointer">
              <Send size={18} />
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        className="flex justify-center space-x-6 mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
          <a
            key={i}
            href="#"
            className="hover:text-blue-800 transition transform hover:scale-110"
          >
            <Icon size={22} />
          </a>
        ))}
      </motion.div>

      {/* Divider Line */}
      <motion.div
        className="mt-8 mb-4 border-t border-gray-200 w-[90%] mx-auto"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      ></motion.div>

      {/* Bottom Text */}
      <motion.p
        className="text-center text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        © 2025 Learn Sphere All rights reserved
      </motion.p>
    </footer>
  );
}
