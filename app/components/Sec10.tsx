"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function FeaturesSection() {
  const features = [
    { img: "/Box1.png", title: "Marketing", subtitle: "Premium Experience" },
    { img: "/Box2.png", title: "Planning", subtitle: "Trusted Expert Support" },
    { img: "/Box3.png", title: "Assistance", subtitle: "Exceptional Customer Care" },
    { img: "/Box4.png", title: "Management", subtitle: "Reliable Service" },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <section
      className={`${poppins.className} py-16 px-6 md:px-20 text-center`}
    >
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            custom={index}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center text-center space-y-4 border border-gray-400 cursor-pointer py-10 px-6 min-h-[250px] "
          >
            {/* Feature Image */}
            <motion.div
              className="w-20 h-20 relative"
              whileHover={{ rotate: 8, scale: 1.15 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Image
                src={feature.img}
                alt={feature.title}
                fill
                className="object-contain"
              />
            </motion.div>

            {/* Text */}
            <h3 className="text-2xl font-semibold text-blue-900">
              {feature.title}
            </h3>
            <p className="text-gray-700 text-sm">{feature.subtitle}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
