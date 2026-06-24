"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { staggerContainer, viewportOptions } from "../lib/animations";

const stats = [
  { value: "30+", label: "Završenih projekata", icon: "🏗️" },
  { value: "250+", label: "kW instalirane snage", icon: "⚡" },
  { value: "100%", label: "Zadovoljnih klijenata", icon: "⭐" },
  { value: "10+", label: "Godina iskustva", icon: "📅" },
];

function parseStatValue(val: string): { num: number; suffix: string } {
  const match = val.match(/^(\d+)(.*)$/);
  if (!match) return { num: 0, suffix: "" };
  return { num: parseInt(match[1]), suffix: match[2] };
}

function AnimatedCounter({ value, delay = 0 }: { value: string; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);
  const { num, suffix } = parseStatValue(value);
  const duration = 1800;

  useEffect(() => {
    if (!isInView) return;
    const timer = setTimeout(() => {
      let startTime: number | null = null;
      const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(easeOut(progress) * num));
        if (progress < 1) requestAnimationFrame(animate);
        else setCount(num);
      };
      requestAnimationFrame(animate);
    }, delay);
    return () => clearTimeout(timer);
  }, [isInView, num, delay, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-20 bg-blue-500 relative overflow-hidden">
      {/* Soft radial glows */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-2xl" />
      </div>

      {/* Animated electric circuit line */}
      <div className="absolute inset-0 opacity-8 pointer-events-none overflow-hidden">
        <svg
          className="absolute top-1/2 -translate-y-1/2 w-full"
          height="60"
          viewBox="0 0 1400 60"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0 30 L200 30 L220 10 L250 50 L280 30 L450 30 L470 8 L510 52 L550 30 L700 30 L720 12 L755 48 L790 30 L950 30 L970 10 L1010 50 L1050 30 L1200 30 L1220 15 L1260 45 L1300 30 L1400 30"
            stroke="white"
            strokeWidth="1.5"
            strokeDasharray="12 6"
            strokeLinecap="round"
            className="electric-line-svg"
          />
        </svg>
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
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2 stat-number-glow">
                <AnimatedCounter value={stat.value} delay={i * 130} />
              </div>
              <div className="text-blue-100 font-medium text-sm sm:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
