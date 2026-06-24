"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeLeft, staggerContainer, viewportOptions } from "../lib/animations";

export default function About() {
  return (
    <section id="o-nama" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image/Visual side */}
          <motion.div
            className="relative"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 aspect-[4/3]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <motion.div
                    className="w-24 h-24 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-blue-500/30"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <svg className="w-12 h-12 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="4" />
                      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                    </svg>
                  </motion.div>
                  <div className="text-white text-xl font-bold mb-2">ELDING projekt d.o.o.</div>
                  <div className="text-slate-400 text-sm">Đakovo, Hrvatska</div>
                </div>
              </div>
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-blue-500/50 rounded-tl-lg" />
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-blue-500/50 rounded-tr-lg" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-blue-500/50 rounded-bl-lg" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-blue-500/50 rounded-br-lg" />
            </div>

            <motion.div
              className="absolute -bottom-6 -right-6 bg-blue-500 rounded-2xl p-5 shadow-2xl max-w-[200px]"
              initial={{ opacity: 0, scale: 0.7, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={viewportOptions}
              transition={{ delay: 0.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="text-white font-bold text-2xl">OIB</div>
              <div className="text-blue-900 text-xs font-medium mt-1">57840288345</div>
              <div className="mt-3 text-white text-xs">Registrirano poduzeće u RH</div>
            </motion.div>
          </motion.div>

          {/* Content side */}
          <motion.div
            className="space-y-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <motion.div variants={fadeUp}>
              <span className="text-blue-500 font-semibold text-sm uppercase tracking-widest">
                O tvrtki
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
                Stručnost, pouzdanost i{" "}
                <span className="text-gradient">preciznost</span>
              </h2>
            </motion.div>

            <motion.p variants={fadeUp} className="text-slate-300 leading-relaxed">
              ELDING projekt d.o.o. pruža sveobuhvatne i kvalitetne usluge u
              području elektrotehnike i energetske učinkovitosti. Sa sjedištem
              u Đakovu, pokrivamo čitavu Slavoniju i širu okolicu.
            </motion.p>

            <motion.p variants={fadeUp} className="text-slate-300 leading-relaxed">
              Naš pristup temelji se na stručnosti, pouzdanosti i preciznosti,
              s prilagođenim rješenjima za svakog klijenta. Pratimo
              tehnološke i zakonodavne razvoje kako bismo uvijek nudili
              najsuvremenija i najefikasnija rješenja.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-center gap-4"
            >
              <div className="w-14 h-14 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-500/30 flex-shrink-0">
                <svg className="w-7 h-7 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div>
                <div className="text-white font-semibold">Zvonimir Puljić</div>
                <div className="text-slate-400 text-sm">Direktor, ELDING projekt d.o.o.</div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-start gap-3 text-slate-400">
              <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Božidara Adžije 8, 31400 Đakovo, Hrvatska</span>
            </motion.div>

            <motion.a
              variants={fadeUp}
              href="#kontakt"
              className="inline-flex items-center gap-2 btn-primary text-white font-semibold px-7 py-3.5 rounded-full"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Kontaktirajte nas
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
