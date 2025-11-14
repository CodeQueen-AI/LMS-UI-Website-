"use client";
import { useEffect, useRef } from "react";

export default function StudyMarquee() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const el = marqueeRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("animate-marquee");
          el.nextElementSibling.classList.add("animate-marquee2");
        } else {
          el.classList.remove("animate-marquee");
          el.nextElementSibling.classList.remove("animate-marquee2");
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const tags = [
    "# StudySmart",
    "# LearnBetter",
    "# GrowWithTech",
    "# CodeFuture",
    "# EduNext",
    "# SkillBoost",
  ];

  return (
    <>
      <style jsx>{`
        /* ✅ Import Poppins Font */
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap");

        /* ✅ Marquee Animation */
        @keyframes marqueeMove {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* ✅ Fade-in + Scale animation */
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ✅ Main marquee scrolling */
        .animate-marquee {
          display: inline-flex;
          animation: marqueeMove 25s linear infinite;
        }
        .animate-marquee2 {
          display: inline-flex;
          animation: marqueeMove 25s linear infinite;
          animation-delay: 12.5s;
        }

        /* ✅ Pause on hover */
        .group:hover .animate-marquee,
        .group:hover .animate-marquee2 {
          animation-play-state: paused;
        }

        /* ✅ Font */
        .font-poppins {
          font-family: "Poppins", sans-serif;
        }

        /* ✅ Tag Animation */
        .tag {
          display: inline-block;
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards;
        }

        /* ✅ Sequential Delay */
        .tag:nth-child(1) {
          animation-delay: 0.1s;
        }
        .tag:nth-child(2) {
          animation-delay: 0.2s;
        }
        .tag:nth-child(3) {
          animation-delay: 0.3s;
        }
        .tag:nth-child(4) {
          animation-delay: 0.4s;
        }
        .tag:nth-child(5) {
          animation-delay: 0.5s;
        }
        .tag:nth-child(6) {
          animation-delay: 0.6s;
        }
      `}</style>

      {/* ✅ Marquee Section */}
      <div className="relative overflow-hidden border-t border-b border-gray-300 bg-white py-4 group font-poppins cursor-pointer">
        {/* Infinite scroll animation */}
        <div ref={marqueeRef} className="flex whitespace-nowrap">
          {tags.map((t, i) => (
            <span
              key={i}
              className="tag mx-8 text-3xl font-extrabold text-[#002B5B] transition-transform duration-300 group-hover:scale-110"
            >
              <span className="text-[#66B3FF]">{t.split(" ")[0]}</span>{" "}
              {t.split(" ")[1]}
            </span>
          ))}
          {tags.map((t, i) => (
            <span
              key={`dup-${i}`}
              className="tag mx-8 text-3xl font-extrabold text-[#002B5B] transition-transform duration-300 group-hover:scale-110"
            >
              <span className="text-[#66B3FF]">{t.split(" ")[0]}</span>{" "}
              {t.split(" ")[1]}
            </span>
          ))}
        </div>

        {/* Duplicate for seamless loop */}
        <div className="flex absolute top-4 whitespace-nowrap opacity-0">
          {tags.map((t, i) => (
            <span
              key={`copy-${i}`}
              className="mx-8 text-3xl font-extrabold text-[#002B5B]"
            >
              <span className="text-[#66B3FF]">{t.split(" ")[0]}</span>{" "}
              {t.split(" ")[1]}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
