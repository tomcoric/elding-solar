export default function About() {
  return (
    <section id="o-nama" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image/Visual side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 aspect-[4/3]">
              {/* Visual representation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-amber-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-amber-500/30">
                    <svg className="w-12 h-12 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="4" />
                      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                    </svg>
                  </div>
                  <div className="text-white text-xl font-bold mb-2">ELDING projekt d.o.o.</div>
                  <div className="text-slate-400 text-sm">Đakovo, Hrvatska</div>
                </div>
              </div>

              {/* Corner decorations */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-amber-500/50 rounded-tl-lg" />
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-amber-500/50 rounded-tr-lg" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-amber-500/50 rounded-bl-lg" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-amber-500/50 rounded-br-lg" />
            </div>

            {/* Info card overlapping */}
            <div className="absolute -bottom-6 -right-6 bg-amber-500 rounded-2xl p-5 shadow-2xl max-w-[200px]">
              <div className="text-white font-bold text-2xl">OIB</div>
              <div className="text-amber-900 text-xs font-medium mt-1">57840288345</div>
              <div className="mt-3 text-white text-xs">Registrirano poduzeće u RH</div>
            </div>
          </div>

          {/* Content side */}
          <div className="space-y-6">
            <div>
              <span className="text-amber-500 font-semibold text-sm uppercase tracking-widest">
                O tvrtki
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
                Stručnost, pouzdanost i{" "}
                <span className="text-gradient">preciznost</span>
              </h2>
            </div>

            <p className="text-slate-300 leading-relaxed">
              ELDING projekt d.o.o. pruža sveobuhvatne i kvalitetne usluge u
              području elektrotehnike i energetske učinkovitosti. Sa sjedištem
              u Đakovu, pokrivamo čitavu Slavoniju i širu okolicu.
            </p>

            <p className="text-slate-300 leading-relaxed">
              Naš pristup temelji se na stručnosti, pouzdanosti i preciznosti,
              s prilagođenim rješenjima za svakog klijenta. Pratimo
              tehnološke i zakonodavne razvoje kako bismo uvijek nudili
              najsuvremenija i najefikasnija rješenja.
            </p>

            {/* Director info */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-center gap-4">
              <div className="w-14 h-14 bg-amber-500/20 rounded-full flex items-center justify-center border border-amber-500/30 flex-shrink-0">
                <svg className="w-7 h-7 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div>
                <div className="text-white font-semibold">Zvonimir Puljić</div>
                <div className="text-slate-400 text-sm">Direktor, ELDING projekt d.o.o.</div>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-3 text-slate-400">
              <svg className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Božidara Adžije 8, 31400 Đakovo, Hrvatska</span>
            </div>

            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 btn-primary text-white font-semibold px-7 py-3.5 rounded-full"
            >
              Kontaktirajte nas
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
