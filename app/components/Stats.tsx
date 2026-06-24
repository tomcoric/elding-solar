"use client";

import { motion } from "framer-motion";
import { staggerContainer, viewportOptions } from "../lib/animations";

const stats = [
  { value: "30+", label: "Završenih projekata", icon: "🏗️" },
  { value: "250+", label: "kW instalirane snage", icon: "⚡" },
  { value: "100%", label: "Zadovoljnih klijenata", icon: "⭐" },
  { value: "10+", label: "Godina iskustva", icon: "📅" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-blue-500 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-2xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              <motion.div
                className="text-4xl mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={viewportOptions}
                transition={{ delay: 0.2 + i * 0.12, duration: 0.4, type: "spring", stiffness: 200 }}
              >
                {stat.icon}
              </motion.div>
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-blue-900 font-medium text-sm sm:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
