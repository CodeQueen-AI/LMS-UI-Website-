




"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import {
  BookOpen,
  Pencil,
  FileText,
  Sparkles,
  Car,
  Globe,
  GraduationCap,
  Lightbulb,
  Atom,
  Ruler,
} from "lucide-react";

const letters = "EDUCATION".split("");
const colors = [
  "#FF6B6B",
  "#FFD93D",
  "#6BCB77",
  "#4D96FF",
  "#BC6FF1",
  "#FF8C00",
  "#00C2CB",
  "#FF4B91",
  "#7C3AED",
];

// 🔟 Now 10 scattered icons
const icons = [
  { Icon: BookOpen, color: "#4F46E5", top: "10%", left: "15%" },
  { Icon: Pencil, color: "#F59E0B", top: "20%", left: "75%" },
  { Icon: FileText, color: "#10B981", top: "60%", left: "10%" },
  { Icon: Sparkles, color: "#EC4899", top: "70%", left: "65%" },
  { Icon: Car, color: "#3B82F6", top: "30%", left: "50%" },
  { Icon: Globe, color: "#22C55E", top: "80%", left: "80%" },
  { Icon: GraduationCap, color: "#8B5CF6", top: "70%", left: "25%" },
  { Icon: Lightbulb, color: "#FACC15", top: "80%", left: "55%" },
  { Icon: Atom, color: "#06B6D4", top: "25%", left: "85%" },
  { Icon: Ruler, color: "#EF4444", top: "15%", left: "40%" },
];

export default function EducationPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
    else controls.start("hidden");
  }, [isInView, controls]);

  return (
    <div className="relative h-screen bg-white overflow-hidden">
      {/* 🔸 Floating scattered icons */}
      {icons.map(({ Icon, color, top, left }, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ top, left, color }}
          animate={{
            y: [0, -20, 0],
            x: [0, 5, -5, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 6 + i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon size={56} opacity={0.6} />
        </motion.div>
      ))}

      {/* 🔸 Main Title Section */}
      <div
        ref={ref}
        className="flex flex-col items-center justify-center h-full text-center"
      >
        <div className="flex text-[9rem] font-extrabold tracking-widest">
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: {
                  y: i % 2 === 0 ? -150 : 150,
                  opacity: 0,
                },
                visible: {
                  y: 0,
                  opacity: 1,
                },
              }}
              initial="hidden"
              animate={controls}
              transition={{
                delay: i * 0.2,
                duration: 0.6,
                type: "spring",
                stiffness: 120,
              }}
              className="relative mx-1"
              style={{
                color: "transparent",
                WebkitTextStroke: `3px ${colors[i % colors.length]}`,
                textShadow: `0 0 10px ${colors[i % colors.length]}44`,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>

      </div>
    </div>
  );
}
