"use client";

import { motion } from "framer-motion";
import { fadeUp, scaleIn, staggerContainer, viewportOptions } from "../lib/animations";

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    title: "Solarne elektrane",
    desc: "Projektiranje i ugradnja fotonaponskih elektrana za kućanstva, tvrtke i industriju. Kompletna usluga od ideje do spajanja na mrežu.",
    tag: "Najpopularnije",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    title: "Elektroprojektiranje",
    desc: "Izrada elektrotehničke projektne dokumentacije za sve vrste objekata u skladu s važećim propisima i normama.",
    tag: null,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "EU fondovi",
    desc: "Stručna pomoć pri prijavama na EU natječaje za sufinanciranje obnovljivih izvora energije i energetske učinkovitosti.",
    tag: "Do 45% povrata",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: "Energetski auditi",
    desc: "Analiza energetske potrošnje i izrada preporuka za smanjenje troškova i povećanje energetske učinkovitosti vašeg objekta.",
    tag: null,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
        <line x1="12" y1="2" x2="12" y2="5" /><line x1="12" y1="19" x2="12" y2="22" />
      </svg>
    ),
    title: "Javna rasvjeta",
    desc: "Planiranje i projektiranje sustava javne rasvjete s naglaskom na LED tehnologiju i energetsku učinkovitost.",
    tag: null,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    title: "Nadzor i certificiranje",
    desc: "Stručni nadzor izvođenja elektroinstalacijskih radova te ispitivanje i certifikacija elektroinstalacija.",
    tag: null,
  },
];

export default function Services() {
  return (
    <section id="usluge" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <motion.span variants={fadeUp} className="text-blue-500 font-semibold text-sm uppercase tracking-widest">
            Što radimo
          </motion.span>
          <motion.h2 variants={fadeUp} className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
            Sveobuhvatne usluge{" "}
            <span className="text-gradient">elektroenergetike</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-slate-600 text-lg leading-relaxed">
            Od projektiranja do ugradnje i certificiranja — sve na jednom mjestu.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={scaleIn}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="service-card group bg-white border border-slate-100 rounded-2xl p-6 hover:border-blue-200 shadow-sm cursor-default"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 bg-blue-50 group-hover:bg-blue-100 rounded-xl flex items-center justify-center text-blue-500 transition-colors">
                  {service.icon}
                </div>
                {service.tag && (
                  <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                    {service.tag}
                  </span>
                )}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOptions}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a href="#kontakt" className="btn-primary inline-block text-white font-semibold px-8 py-4 rounded-full">
            Zatražite ponudu za vašu uslugu
          </a>
        </motion.div>
      </div>
    </section>
  );
}
