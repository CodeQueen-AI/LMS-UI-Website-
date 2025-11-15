'use client';

import React from "react";
import { motion, easeInOut, easeOut } from "framer-motion"; // ✅ import easing
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function BrilliantHeroClone() {
  // Animation Variants
  const fadeSlideLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeSlideRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const floatAnim = {
    animate: {
      y: [0, -10, 0],
      transition: { duration: 3, repeat: Infinity, ease: easeInOut }, // ✅ updated
    },
  };

  return (
    <section
      className={`min-h-screen flex items-center justify-center bg-[#f3fff7] overflow-hidden ${poppins.className}`}
    >
      <motion.div
        className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-8 md:px-16 py-20 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ staggerChildren: 0.3 }}
      >
        {/* ---------------- Left SVG Illustration ---------------- */}
        <motion.div
          variants={fadeSlideLeft}
          transition={{ duration: 1 }}
          className="relative flex items-center justify-center"
        >
          {/* Floating Dotted Grid */}
          <motion.div
            className="absolute -z-10 grid grid-cols-3 gap-16 opacity-40"
            {...floatAnim}
          >
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-[#d5dcd8] rounded-full shadow-sm"
              />
            ))}
          </motion.div>

          {/* Main SVG */}
          <motion.div
            className="relative w-[520px] h-[420px]"
            animate={{ rotate: [0, 1.2, -1.2, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: easeInOut }} // ✅ updated
          >
            <svg viewBox="0 0 520 420" className="w-full h-full">
              {/* Planet */}
              <g transform="translate(80,300)">
                <circle r="36" fill="#e7a326" />
                <ellipse cx="0" cy="-8" rx="32" ry="8" fill="#c68b20" />
                <ellipse cx="2" cy="10" rx="28" ry="6" fill="#c68b20" />
              </g>

              {/* Planet to UFO Vector */}
              <motion.line
                x1="116"
                y1="296"
                x2="240"
                y2="82"
                stroke="#111827"
                strokeWidth="7"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: easeInOut }} // ✅ updated
              />
              <polygon points="236,92 246,82 232,84" fill="#111827" />

              {/* Planet to Target Vector */}
              <motion.line
                x1="116"
                y1="296"
                x2="362"
                y2="212"
                stroke="#111827"
                strokeWidth="7"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.3, ease: easeInOut, delay: 0.4 }} // ✅ updated
              />
              <polygon points="354,206 366,214 354,222" fill="#111827" />

              {/* Green Vector (r - s) */}
              <defs>
                <linearGradient id="arrowGrad" x1="0" x2="1">
                  <stop offset="0%" stopColor="#7ee08a" />
                  <stop offset="100%" stopColor="#34d06b" />
                </linearGradient>
              </defs>
              <motion.line
                x1="244"
                y1="92"
                x2="330"
                y2="198"
                stroke="url(#arrowGrad)"
                strokeWidth="9"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: easeOut, delay: 0.8 }} // ✅ updated
              />
              <polygon points="320,190 336,202 318,206" fill="#34d06b" />

              {/* UFO Floating */}
              <motion.g
                transform="translate(220,68)"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: easeInOut }} // ✅ updated
              >
                <ellipse cx="0" cy="0" rx="44" ry="16" fill="#cfd7db" />
                <ellipse cx="0" cy="-6" rx="30" ry="10" fill="#0f1624" />
                <rect x="-42" y="-4" width="84" height="8" rx="4" fill="#d8dee3" />
                <ellipse cx="0" cy="-12" rx="20" ry="10" fill="#0c1321" />
              </motion.g>

              {/* Target */}
              <g transform="translate(362,212)">
                <circle r="40" fill="#baf0ce" opacity="0.3" />
                <circle r="32" fill="none" stroke="#ffffff" strokeWidth="6" />
                <circle r="18" fill="#baf0ce" />
                <path d="M6 -10 l8 6 l-6 10 l-10 -6 z" fill="#cfd4d0" />
                <path d="M-2 -6 l-6 4 l2 8 l8 -6 z" fill="#d6d6d6" />
                <rect x="18" y="-10" width="6" height="6" rx="1" fill="#d2f59f" />
                <rect x="-14" y="-18" width="5" height="5" rx="1" fill="#d2f59f" />
                <line
                  x1="-12"
                  y1="-6"
                  x2="10"
                  y2="10"
                  stroke="#111827"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
                <polygon points="8,8 18,14 6,18" fill="#111827" />
              </g>

              {/* Math labels */}
              <g fontFamily="Poppins, sans-serif" fontSize="22" fill="#111827" fontWeight="600">
                <motion.text x="320" y="158" whileHover={{ scale: 1.2, color: "#34d06b" }}>→ r − s</motion.text>
                <motion.text x="62" y="240" whileHover={{ scale: 1.2, color: "#34d06b" }}>→ s</motion.text>
                <motion.text x="180" y="316" whileHover={{ scale: 1.2, color: "#34d06b" }}>→ r</motion.text>
              </g>
            </svg>
          </motion.div>
        </motion.div>

        {/* ---------------- Right Text Section ---------------- */}
        <motion.div
          variants={fadeSlideRight}
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >
          <motion.h1
            className="text-[72px] leading-[1.1] text-[#111827] font-serif"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            More Effective<br />More Fun
          </motion.h1>
          <motion.p
            className="mt-8 text-lg text-[#1e293b] font-medium max-w-md"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Brilliant’s interactive approach teaches you to think, not memorize
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}
