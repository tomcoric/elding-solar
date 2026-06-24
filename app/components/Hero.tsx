"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../lib/animations";

export default function Hero() {
  return (
    <section id="hero" className="hero-bg min-h-screen flex items-center relative">

      {/* ── Lightning bolt decorations ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden>
        {/* Large bolt — top right */}
        <svg className="absolute top-16 right-12 lightning-bolt opacity-[0.06]" width="90" height="140" viewBox="0 0 90 140" fill="none">
          <path d="M55 0 L20 75 L45 75 L10 140 L75 55 L45 55 Z" fill="#38bdf8" />
        </svg>
        {/* Medium bolt — mid left */}
        <svg className="absolute top-1/3 left-8 lightning-bolt-2 opacity-[0.05]" width="55" height="88" viewBox="0 0 55 88" fill="none">
          <path d="M34 0 L12 47 L28 47 L6 88 L46 34 L28 34 Z" fill="#7dd3fc" />
        </svg>
        {/* Small bolt — bottom right */}
        <svg className="absolute bottom-28 right-1/4 lightning-bolt-3 opacity-[0.05]" width="38" height="60" viewBox="0 0 38 60" fill="none">
          <path d="M23 0 L8 32 L19 32 L4 60 L32 23 L19 23 Z" fill="#38bdf8" />
        </svg>
        {/* Spark dots */}
        <div className="absolute top-24 left-1/3 w-1.5 h-1.5 rounded-full bg-blue-400/30 lightning-bolt" />
        <div className="absolute top-1/2 right-1/3 w-1 h-1 rounded-full bg-sky-300/30 lightning-bolt-2" />
        <div className="absolute bottom-1/3 left-1/4 w-1 h-1 rounded-full bg-blue-300/25 lightning-bolt-3" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Text content */}
          <motion.div
            className="space-y-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 text-blue-400 text-sm font-medium"
            >
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              Đakovo i šira okolica
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Energija sunca{" "}
              <span className="text-gradient block">za vašu kuću</span>
              i tvrtku
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-slate-300 text-lg leading-relaxed max-w-lg"
            >
              ELDING projekt d.o.o. projektira i instalira solarne elektrane,
              nudi energetske audite i pruža stručnu podršku za EU fondove.
              Pouzdanost i preciznost u svakom projektu.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <a
                href="#kontakt"
                className="btn-primary btn-primary-electric text-white font-semibold px-8 py-4 rounded-full text-center text-base"
              >
                Zatražite besplatnu ponudu
              </a>
              <a
                href="#usluge"
                className="border border-white/20 hover:border-blue-400/50 text-white hover:text-blue-400 font-semibold px-8 py-4 rounded-full text-center text-base transition-all duration-300 hover:bg-blue-400/5"
              >
                Naše usluge →
              </a>
            </motion.div>

            <motion.div variants={staggerContainer} className="flex flex-wrap gap-6 pt-4">
              {[
                { label: "Certificirani stručnjaci", icon: "✓" },
                { label: "EU fondovi", icon: "✓" },
                { label: "Garancija kvalitete", icon: "✓" },
              ].map((badge) => (
                <motion.div
                  key={badge.label}
                  variants={fadeUp}
                  className="flex items-center gap-2 text-slate-400 text-sm"
                >
                  <span className="text-blue-400 font-bold">{badge.icon}</span>
                  {badge.label}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual element */}
          <motion.div
            className="hidden lg:flex justify-center items-center px-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-full max-w-lg mx-auto animate-float">
              <div className="absolute inset-0 rounded-2xl bg-blue-500/10 animate-pulse-ring scale-105" />
              <div className="logo-frame relative rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 shadow-2xl overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/elding_projekti.jpeg"
                  alt="ELDING projekt d.o.o. logo"
                  className="w-full h-auto block"
                />
                <div className="logo-flicker absolute inset-0" />
              </div>

              <motion.div
                className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 bg-slate-900/90 backdrop-blur border border-white/10 rounded-xl p-3 shadow-xl text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="text-blue-400 font-bold text-xl">30+</div>
                <div className="text-slate-400 text-xs">Projekata</div>
              </motion.div>

              <motion.div
                className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-slate-900/90 backdrop-blur border border-white/10 rounded-xl p-3 shadow-xl text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.85, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="text-blue-400 font-bold text-xl">100%</div>
                <div className="text-slate-400 text-xs">Zadovoljstvo</div>
              </motion.div>

              <motion.div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-slate-900/90 backdrop-blur border border-blue-400/30 rounded-xl p-3 shadow-xl text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="text-blue-400 font-bold text-lg">⚡ 8.5 kW</div>
                <div className="text-slate-400 text-xs">Prosj. instalacija</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <span className="text-xs tracking-widest uppercase">Skrolaj</span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-blue-500/50 to-transparent" />
      </motion.div>
    </section>
  );
}
