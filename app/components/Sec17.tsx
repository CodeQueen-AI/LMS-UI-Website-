"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CoursesSection() {
  const courses = [
    { title: "Creative Thinking", img: "/C1.jpg" },
    { title: "Language Basics", img: "/C2.jpg" },
    { title: "Future Leaders", img: "/C3.jpg" },
    { title: "Smart Learning", img: "/C4.jpg" },
    { title: "Business Start", img: "/C5.jpg" },
    { title: "Learn Growth", img: "/C6.jpg" },
  ];

  return (
    <>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap");

        .font-poppins {
          font-family: "Poppins", sans-serif;
        }

        .card {
          position: relative;
          overflow: hidden;
          border-radius: 1rem;
          transition: transform 0.4s ease;
        }

        .card:hover {
          transform: translateY(-6px);
        }
      `}</style>

      <section className="font-poppins px-6 py-20 text-center">
        <p className="text-blue-500 font-semibold font-serif  mb-2">Your Next Step</p>

        {/* ✅ Animated Heading */}
        <motion.h2
          className="text-6xl font-medium font-serif text-[#002B5B] mb-4"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Start Building Your <br /> Future Today
        </motion.h2>

        {/* ✅ Animated Paragraph */}
        <motion.p
          className="text-[#002B5B] max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Every service we offer is designed with your needs in mind. With a
          strong focus on quality, consistency, and trust, we aim to build
          lasting relationships and deliver results.
        </motion.p>

        <div className="flex justify-center space-x-6 mb-10">
          <button className="text-[#66B3FF] font-semibold border-b-2 border-[#66B3FF] pb-1">
            All
          </button>
          <button className="text-[#002B5B] font-semibold hover:text-[#66B3FF] transition-colors">
            Courses
          </button>
        </div>

        {/* ✅ Animated Cards (No text) */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {courses.map((course, i) => (
            <motion.div
              key={i}
              className="card w-full h-[350px]"
              variants={{
                hidden: { opacity: 0, y: 60, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Image
                src={course.img}
                alt={course.title}
                width={400}
                height={350}
                className="object-cover w-full h-full cursor-pointer"
              />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}

































